"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["469592"], {
268079(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_utils_containers_nonlinear_container_nonlinear_container_md_57c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-utils-containers-nonlinear-container-nonlinear-container-md-57c.json
var site_docs_arkts_arkts_utils_containers_nonlinear_container_nonlinear_container_md_57c_namespaceObject = JSON.parse('{"id":"arkts/arkts-utils/containers/nonlinear-container/nonlinear-container","title":"非线性容器","description":"非线性容器实现能快速查找的数据结构，其底层通过hash或者红黑树实现，包括HashMap、HashSet、TreeMap、TreeSet、LightWeightMap、LightWeightSet、PlainArray七种。非线性容器中的key及value的类型均满足ECMA标准。","source":"@site/docs/arkts/arkts-utils/containers/nonlinear-container/nonlinear-container.md","sourceDirName":"arkts/arkts-utils/containers/nonlinear-container","slug":"/arkts/arkts-utils/containers/nonlinear-container/","permalink":"/harmonyos-docs-site/arkts/arkts-utils/containers/nonlinear-container/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"非线性容器","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nonlinear-container","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"线性容器","permalink":"/harmonyos-docs-site/arkts/arkts-utils/containers/linear-container/"},"next":{"title":"基础库常见问题","permalink":"/harmonyos-docs-site/arkts/arkts-utils/commonlibrary-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-utils/containers/nonlinear-container/nonlinear-container.md


const frontMatter = {
	title: '非线性容器',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nonlinear-container',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '非线性容器';

const assets = {

};



const toc = [{
  "value": "各非线性容器类型特征对比",
  "id": "各非线性容器类型特征对比",
  "level": 2
}, {
  "value": "HashMap",
  "id": "hashmap",
  "level": 2
}, {
  "value": "HashSet",
  "id": "hashset",
  "level": 2
}, {
  "value": "TreeMap",
  "id": "treemap",
  "level": 2
}, {
  "value": "TreeSet",
  "id": "treeset",
  "level": 2
}, {
  "value": "LightWeightMap",
  "id": "lightweightmap",
  "level": 2
}, {
  "value": "LightWeightSet",
  "id": "lightweightset",
  "level": 2
}, {
  "value": "PlainArray",
  "id": "plainarray",
  "level": 2
}, {
  "value": "非线性容器的使用",
  "id": "非线性容器的使用",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "非线性容器",
        children: "非线性容器"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "非线性容器实现能快速查找的数据结构，其底层通过hash或者红黑树实现，包括HashMap、HashSet、TreeMap、TreeSet、LightWeightMap、LightWeightSet、PlainArray七种。非线性容器中的key及value的类型均满足ECMA标准。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "各非线性容器类型特征对比",
      children: "各非线性容器类型特征对比"
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
            children: "HashMap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存储具有关联关系的键值对集合。键唯一，依据键的hash值确定存储位置。访问速度快，但不能自定义排序。推荐用于需要快速存取、插入删除键值对数据时使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HashSet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存储一系列值的集合。值唯一，依据值的hash确定存储位置。允许放入null值，但不能自定义排序。适用于不重复的集合或去重某个集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TreeMap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存储具有关联关系的键值对集合。键唯一，允许用户自定义排序方法。适用于按序存储键值对的场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TreeSet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存储一系列值的集合。值唯一，允许用户自定义排序方法，但不建议放入null值。适用于按序存储集合的场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LightWeightMap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存储具有关联关系的键值对集合。键唯一，底层采用轻量级结构，空间占用小。推荐用于存取键值对数据且内存不充足时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LightWeightSet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存储一系列值的集合。值唯一，底层采用轻量级结构，空间占用小。适用于不重复的集合或去重某个集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PlainArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存储具有关联关系的键值对集合。键唯一，底层与LightWeightMap一样采用轻量级结构，键固定为number类型。适用于存储键为number类型键值对的场景。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hashmap",
      children: "HashMap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-hashmap/js-apis-hashmap",
        children: "HashMap"
      }), "可用来存储具有关联关系的key-value键值对集合，存储元素中key是唯一的，每个key会对应一个value值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HashMap通过泛型定义，利用键的哈希值确定存储位置，实现快速查找。初始容量为16，支持动态扩容，每次扩容为原容量的两倍。底层基于哈希表实现，冲突处理采用链地址法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HashMap和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-treemap/js-apis-treemap",
        children: "TreeMap"
      }), "相比，HashMap依据键的hashCode存取数据，访问速度较快。TreeMap则按顺序存取，效率较低。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-hashset/js-apis-hashset",
        children: "HashSet"
      }), "基于HashMap实现。HashMap的输入参数由key、value两个值组成。在HashSet中，只处理value对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要快速存取、删除以及插入键值对数据时，推荐使用HashMap。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HashMap支持增、删、改、查操作，常用API如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "set(key: K, value: V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加一个键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "get(key: K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取key对应的value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "keys()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个迭代器对象，包含map中的所有key值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "values()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个迭代器对象，包含map中的所有value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "entries()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个迭代器对象，包含map中的所有键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value?: V, key?: K, map?: HashMap<K, V>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历访问整个map的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "",
              children: "Symbol.iterator"
            }), ":IterableIterator<[K,V]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建迭代器以访问数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "replace(key: K, newValue: V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改指定key对应的value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value?: V, key?: K, map?: HashMap<K, V>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历并修改整个map的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "remove(key: K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除map中匹配到的键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clear()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清空整个map。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hashset",
      children: "HashSet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-hashset/js-apis-hashset",
        children: "HashSet"
      }), "可用来存储一系列值的集合，存储元素中value是唯一的。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HashSet基于泛型定义，集合中通过value的hash值确定存储位置，从而快速找到该值。初始容量为16，支持动态扩容，每次扩容为原始容量的2倍。value的类型需满足ECMA标准。HashSet基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-hashmap/js-apis-hashmap",
        children: "HashMap"
      }), "实现，只处理value对象，底层数据结构与HashMap一致。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HashSet和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-treeset/js-apis-treeset",
        children: "TreeSet"
      }), "相比，HashSet中的数据无序存放，不支持用户指定排序方式，而TreeSet中的数据有序存放，支持用户通过排序函数对元素进行排序。它们集合中的元素都不允许重复，HashSet允许放入null值，但TreeSet不建议存放null值，可能会对排序结果产生影响。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以利用HashSet的不重复特性，在需要去重或确保集合元素唯一性时使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HashSet支持增、删、改、查操作，常用API如下："
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
            children: "add(value: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加一个值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "values()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个迭代器对象，包含set中的所有value。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "entries()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个迭代器对象，包含类似键值对的数组，键值都是value。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value?: T, key?: T, set?: HashSet<T>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历访问整个set的元素。"
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
            children: "forEach(callbackFn: (value?: T, key?: T, set?: HashSet<T>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过遍历对set中的元素进行操作，可能包括但不限于修改元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "remove(value: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除指定的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clear()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清空整个set。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "treemap",
      children: "TreeMap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-treemap/js-apis-treemap",
        children: "TreeMap"
      }), "用于存储具有关联关系的key-value键值对集合，存储元素中key是唯一的，每个key对应一个value值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TreeMap的key按照泛型定义有序存储，基于红黑树实现，支持快速插入和删除，key的类型需满足ECMA标准。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TreeMap和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-hashmap/js-apis-hashmap",
        children: "HashMap"
      }), "相比，HashMap依据键的hashCode存取数据，访问速度较快。而TreeMap是有序存取，效率较低。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一般需要存储有序键值对的场景，可以使用TreeMap。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TreeMap支持增、删、改、查操作，常用 API 如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "set(key: K, value: V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加一个键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "get(key: K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取key对应的value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getFirstKey()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取map中排在首位的key值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getLastKey()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取map中排在末位的key值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "keys()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个迭代器对象，包含map中的所有key值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "values()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个迭代器对象，包含map中的所有value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "entries()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个迭代器对象，包含map中的所有键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value?: V, key?: K, map?: TreeMap<K, V>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历访问整个map的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "",
              children: "Symbol.iterator"
            }), ":IterableIterator<[K,V]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建迭代器以进行数据访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "replace(key: K, newValue: V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改指定key对应的value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value?: V, key?: K, map?: TreeMap<K, V>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过遍历对map中的元素进行操作，可能包括但不限于修改元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "remove(key: K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除map中匹配到的键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clear()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清空整个map。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "treeset",
      children: "TreeSet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-treeset/js-apis-treeset",
        children: "TreeSet"
      }), "可用来存储一系列值的集合，存储元素中value是唯一的。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TreeSet根据泛型定义有序存储值，底层实现基于红黑树，支持快速插入和删除。value的类型符合ECMA标准。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TreeSet基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-treemap/js-apis-treemap",
        children: "TreeMap"
      }), "实现，仅处理value对象，用于存储值的集合，元素中value唯一，并支持按用户定义的排序函数排序。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TreeSet和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-hashset/js-apis-hashset",
        children: "HashSet"
      }), "相比，HashSet无序存放数据，TreeSet有序存放数据。两者元素均不允许重复，HashSet允许null值，但TreeSet不建议存放null值，可能影响排序。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在需要存储有序集合的场景中，可以使用TreeSet。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TreeSet支持增、删、改、查操作，常用API如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "add(value: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加一个值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "values()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个迭代器对象，包含set中的所有value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "entries()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个迭代器对象，包含类似键值对的数组，键值都是value。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getFirstValue()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取set中排在首位的value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getLastValue()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取set中排在末位的value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value?: T, key?: T, set?: TreeSet<T>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历访问整个set的元素。"
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
            children: "forEach(callbackFn: (value?: T, key?: T, set?: TreeSet<T>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过遍历对set中的元素进行操作，可能包括但不限于修改元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "remove(value: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除指定的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clear()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清空整个set。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lightweightmap",
      children: "LightWeightMap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-lightweightmap/js-apis-lightweightmap",
        children: "LightWeightMap"
      }), "用于存储具有唯一键的键值对集合，存储元素中key是唯一的，每个key会对应一个value值。LightWeightMap依据泛型定义，采用轻量级结构，底层通过hash实现唯一key，冲突策略为线性探测。集合中的key值的查找依赖于hash值以及二分查找算法，通过一个数组存储hash值，然后映射到其他数组中的key值以及value值，key的类型满足ECMA标准。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始默认容量为8，每次扩容为原容量的2倍。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LightWeightMap和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-hashmap/js-apis-hashmap",
        children: "HashMap"
      }), "都是用来存储具有关联关系的key-value键值对集合，但LightWeightMap占用内存更小。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当需要存储具有关联关系的key-value键值对集合时，推荐使用占用内存更小的LightWeightMap。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LightWeightMap支持增、删、改、查操作，常用API如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "set(key: K, value: V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加一个键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "get(key: K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取key对应的value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getIndexOfKey(key: K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取map中指定key的index。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getIndexOfValue(value: V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取map中指定value出现的第一个的index。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "keys()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个迭代器对象，包含map中的所有key值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "values()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个迭代器对象，包含map中的所有value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "entries()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个迭代器对象，包含map中的所有键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getKeyAt(index: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定index对应的key值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getValueAt(index: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定index对应的value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value?: V, key?: K, map?: LightWeightMap<K, V>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历访问整个map的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "",
              children: "Symbol.iterator"
            }), ":IterableIterator<[K,V]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建迭代器以进行数据访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setValueAt(index: number, newValue: V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改指定index对应的value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value?: V, key?: K, map?: LightWeightMap<K, V>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过遍历对map中的元素进行操作，可能包括但不限于修改元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "remove(key: K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除map中指定key匹配到的键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "removeAt(index: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除map中指定index对应的键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clear()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清空整个map。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lightweightset",
      children: "LightWeightSet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-lightweightset/js-apis-lightweightset",
        children: "LightWeightSet"
      }), "可用来存储一系列值的集合，存储元素中value是唯一的。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LightWeightSet依据泛型定义，采用更加轻量级的结构，初始默认容量为8，每次扩容为原始容量的2倍。集合中的value值的查找依赖于hash值以及二分查找算法，通过一个数组存储hash值，然后映射到其他数组中的value值，value的类型满足ECMA标准。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LightWeightSet底层通过hash表结构实现value的唯一性，冲突策略采用线性探测法，查找策略基于二分查找法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LightWeightSet和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-hashset/js-apis-hashset",
        children: "HashSet"
      }), "都是用来存储键值的集合，但LightWeightSet的占用内存更小。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当需要存取某个集合或是对某个集合去重时，推荐使用占用内存更小的LightWeightSet。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LightWeightSet支持增、删、改、查操作。常用API如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "add(obj: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加一个值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getIndexOf(key: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取对应的index值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getValueAt(index: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定index对应的value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "values()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个迭代器对象，包含set中的所有value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "entries()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个迭代器对象，包含类似键值对的数组，键值都是value。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value?: T, key?: T, set?: LightWeightSet<T>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历访问整个set的元素。"
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
            children: "forEach(callbackFn: (value?: T, key?: T, set?: LightWeightSet<T>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过遍历对set中的元素进行操作，可能包括但不限于修改元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "remove(key: K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除指定的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "removeAt(index: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除set中指定index对应的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clear()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清空整个set。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "plainarray",
      children: "PlainArray"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-plainarray/js-apis-plainarray",
        children: "PlainArray"
      }), "可用来存储具有关联关系的键值对集合，存储元素中key是唯一的，并且对于PlainArray来说，其key的类型为number类型。每个key会对应一个value值，类型依据泛型的定义，PlainArray采用轻量级的结构，集合中的key值的查找依赖于二分查找算法，然后映射到其他数组中的value值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始默认容量为16，每次扩容为原始容量的2倍。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PlainArray和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-lightweightmap/js-apis-lightweightmap",
        children: "LightWeightMap"
      }), "都用于存储键值对，且采用轻量级结构。不过，PlainArray的键值类型仅限于number。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当需要存储键为number类型的键值对时，可以使用PlainArray。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PlainArray支持增、删、改、查操作。常用API如下："
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
            children: "add(key: number,value: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加一个键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "get(key: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取key对应的value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getIndexOfKey(key: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取PlainArray中指定key的index。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getIndexOfValue(value: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取PlainArray中指定value出现的第一个的index。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getKeyAt(index: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定index对应的key值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getValueAt(index: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定index对应的value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value: T, index?: number, PlainArray?: PlainArray<T>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历访问整个PlainArray的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "访问元素"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "",
              children: "Symbol.iterator"
            }), ":IterableIterator<[number, T]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建迭代器以进行数据访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setValueAt(index:number, value: T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改指定index对应的value值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "修改元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forEach(callbackFn: (value: T, index?: number, PlainArray?: PlainArray<T>) => void, thisArg?: Object)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过遍历对PlainArray中的元素进行操作，可能包括但不限于修改元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "remove(key: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除PlainArray中指定key匹配到的键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "removeAt(index: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除PlainArray中指定index对应的键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "removeRangeFrom(index: number, size: number)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除PlainArray中指定范围内的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除元素"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clear()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清空整个PlainArray。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "非线性容器的使用",
      children: "非线性容器的使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处列举常用的非线性容器HashMap、TreeMap、LightWeightMap、PlainArray的使用示例，包括导入模块、增加元素、访问元素及修改等操作，示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 导入HashMap，TreeMap，LightWeightMap，PlainArray模块\nimport { HashMap, TreeMap, LightWeightMap, PlainArray } from '@kit.ArkTS';\n\n  // ...\n  // HashMap\n  let hashMap1: HashMap<string, number> = new HashMap();\n  hashMap1.set('a', 123); // 增加一个键为'a'，值为123的元素\n  let hashMap2: HashMap<number, number> = new HashMap();\n  hashMap2.set(4, 123); // 增加一个键为4，值为123的元素\n  console.info(`result: ${hashMap2.hasKey(4)}`); // 判断是否含有键为4的元素。输出：result: true\n  // ...\n  console.info(`result: ${hashMap1.get('a')}`); // 访问键为'a'的元素。输出：result: 123\n  // ...\n  // TreeMap\n  let treeMap: TreeMap<string, number> = new TreeMap();\n  treeMap.set('a', 123); // 增加一个键为'a'，值为123的元素\n  treeMap.set('6', 356); // 增加一个键为'6'，值为356的元素\n  console.info(`result: ${treeMap.get('a')}`); // 访问键为'a'的元素。输出：result: 123\n  // ...\n  console.info(`result: ${treeMap.getFirstKey()}`); // 访问首元素。输出：result: 6\n  // ...\n  console.info(`result: ${treeMap.getLastKey()}`); // 访问尾元素。输出：result: a\n  // ...\n  // LightWeightMap\n  let lightWeightMap: LightWeightMap<string, number> = new LightWeightMap();\n  lightWeightMap.set('x', 123); // 增加一个键为'x'，值为123的元素\n  lightWeightMap.set('8', 356); // 增加一个键为'8'，值为356的元素\n  console.info(`result: ${lightWeightMap.get('a')}`); // 访问键为'a'的元素。输出：result: undefined\n  // ...\n  console.info(`result: ${lightWeightMap.get('x')}`); // 访问键为'x'的元素，获取其值。输出：result: 123\n  // ...\n  console.info(`result: ${lightWeightMap.getIndexOfKey('8')}`); // 访问键为'8'的元素，获取其索引。输出：result: 0\n  // ...\n  // PlainArray\n  let plainArray: PlainArray<string> = new PlainArray();\n  plainArray.add(1, 'sdd'); // 增加一个键为1，值为'sdd'的元素\n  plainArray.add(2, 'sff'); // 增加一个键为2，值为'sff'的元素\n  console.info(`result: ${plainArray.get(1)}`); // 访问键为1的元素，获取值。输出：result: sdd\n  // ...\n  console.info(`result: ${plainArray.getKeyAt(1)}`); // 访问索引为1的元素，获取键。输出：result: 2\n"
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