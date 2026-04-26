"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["500207"], {
142455(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_runtime_gc_introduction_gc_introduction_md_29d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-runtime-gc-introduction-gc-introduction-md-29d.json
var site_docs_arkts_arkts_runtime_gc_introduction_gc_introduction_md_29d_namespaceObject = JSON.parse('{"id":"arkts/arkts-runtime/gc-introduction/gc-introduction","title":"GC垃圾回收","description":"GC（全称 Garbage Collection），即垃圾回收。在计算机领域，GC是指识别并释放内存中的不再使用的对象，以回收内存空间。目前广泛使用的编程语言实现的GC算法主要分为两大类：引用计数和对象追踪（即Tracing GC）。","source":"@site/docs/arkts/arkts-runtime/gc-introduction/gc-introduction.md","sourceDirName":"arkts/arkts-runtime/gc-introduction","slug":"/arkts/arkts-runtime/gc-introduction/","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/gc-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"GC垃圾回收","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gc-introduction","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS运行时概述","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-overview/"},"next":{"title":"模块化运行简介","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-module/module-principle/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-runtime/gc-introduction/gc-introduction.md


const frontMatter = {
	title: 'GC垃圾回收',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gc-introduction',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'GC垃圾回收';

const assets = {

};



const toc = [{
  "value": "GC算法简述",
  "id": "gc算法简述",
  "level": 2
}, {
  "value": "GC的类型",
  "id": "gc的类型",
  "level": 3
}, {
  "value": "对象追踪的三种类型",
  "id": "对象追踪的三种类型",
  "level": 3
}, {
  "value": "HPP GC",
  "id": "hpp-gc",
  "level": 3
}, {
  "value": "GC流程",
  "id": "gc流程",
  "level": 2
}, {
  "value": "HPP GC的类型",
  "id": "hpp-gc的类型",
  "level": 3
}, {
  "value": "触发策略",
  "id": "触发策略",
  "level": 3
}, {
  "value": "执行策略",
  "id": "执行策略",
  "level": 3
}, {
  "value": "Heap",
  "id": "heap",
  "level": 2
}, {
  "value": "LocalHeap结构",
  "id": "localheap结构",
  "level": 3
}, {
  "value": "LocalHeap相关参数",
  "id": "localheap相关参数",
  "level": 3
}, {
  "value": "SharedHeap结构",
  "id": "sharedheap结构",
  "level": 3
}, {
  "value": "SharedHeap相关参数",
  "id": "sharedheap相关参数",
  "level": 3
}, {
  "value": "特性",
  "id": "特性",
  "level": 2
}, {
  "value": "Smart GC",
  "id": "smart-gc",
  "level": 3
}, {
  "value": "日志解释",
  "id": "日志解释",
  "level": 2
}, {
  "value": "开启全量日志",
  "id": "开启全量日志",
  "level": 3
}, {
  "value": "典型日志",
  "id": "典型日志",
  "level": 3
}, {
  "value": "GC开发者调试接口",
  "id": "gc开发者调试接口",
  "level": 2
}, {
  "value": "ArkTools.hintGC()",
  "id": "arktoolshintgc",
  "level": 3
}, {
  "value": "GC常见问题",
  "id": "gc常见问题",
  "level": 2
}, {
  "value": "GC稳定性问题排查指导",
  "id": "gc稳定性问题排查指导",
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
        id: "gc垃圾回收",
        children: "GC垃圾回收"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GC（全称 Garbage Collection），即垃圾回收。在计算机领域，GC是指识别并释放内存中的不再使用的对象，以回收内存空间。目前广泛使用的编程语言实现的GC算法主要分为两大类：引用计数和对象追踪（即Tracing GC）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gc算法简述",
      children: "GC算法简述"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gc的类型",
      children: "GC的类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用计数"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当对象B指向对象A时，A的引用计数加1；当该指向断开时，A的引用计数减1。如果A的引用计数为0，则回收对象A。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优点：引用计数算法设计简单，而且会在对象成为垃圾时及时回收该部分内存，因此无需引入单独的暂停业务代码（Stop The World，STW）阶段。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "缺点：在对象操作时插入了计数环节，增加了内存分配和赋值的开销，影响性能。存在因循环引用而导致的内存泄漏问题。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Parent {\n  constructor() {\n    this.child = null;\n  }\n  child: Child | null = null;\n}\n\nclass Child {\n  constructor() {\n    this.parent = null;\n  }\n  parent: Parent | null = null;\n}\n\nfunction main() {\n  let parent: Parent = new Parent();\n  let child: Child = new Child();\n  parent.child = child;\n  child.parent = parent;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上述代码中，对象parent被对象child持有，parent的引用计数加1。同时，child也被parent持有，child的引用计数也会加1。这形成了循环引用，导致直到main函数结束，parent和child都无法释放，从而引发内存泄漏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "对象追踪"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(952063)/* ["default"] */.A) + "",
        width: "690",
        height: "203"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根对象包括程序运行中的栈内对象和全局对象等当前时刻一定存活的对象。从根对象开始，通过引用链可以访问到的所有对象（可达对象）也是存活的。通过遍历可以找到所有存活对象。如图所示，从根对象开始遍历，所有可达对象标记为蓝色，即为活对象。剩下的不可达对象标记为黄色，即为垃圾。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优点：对象追踪算法可以解决循环引用问题，并且对内存的分配和赋值没有额外开销。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "缺点：和引用计数算法相比，对象追踪算法较为复杂，有短暂的STW阶段。而且回收有延迟，会导致较多的浮动垃圾。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引用计数和对象追踪算法各有优劣。由于引用计数存在内存泄漏问题，ArkTS运行时选择基于对象追踪（即Tracing GC）算法设计GC。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对象追踪的三种类型",
      children: "对象追踪的三种类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对象追踪算法通过遍历对象标记出垃圾，而根据垃圾回收方式的不同，对象追踪可以分为三种基本类型：标记-清扫回收、标记-复制回收、标记-整理回收。下图中蓝色标记为可达对象，黄色标记为不可达对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "标记-清扫回收"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(90705)/* ["default"] */.A) + "",
        width: "759",
        height: "233"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完成对象图遍历后，删除不可达对象内容，并将其放入空闲队列，以便下次对象分配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该回收方式不搬移对象，效率高。但回收对象内存地址不连续，导致内存碎片化，降低分配效率。极端情况下，即使有大量空闲内存，也可能无法放入较大对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "标记-复制回收"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(179389)/* ["default"] */.A) + "",
        width: "756",
        height: "221"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "遍历对象图时，将可达对象复制到新内存空间。遍历完成后，回收旧内存空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这种方式可以解决内存碎片问题，通过一次遍历完成整个GC过程，效率较高。但在极端情况下，需要预留一半内存空间以确保所有可达对象都可以被拷贝，这会导致空间利用率较低。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "标记-整理回收"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(639734)/* ["default"] */.A) + "",
        width: "764",
        height: "260"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完成对象图遍历后，将可达对象（蓝色）复制到本区域或指定区域的头部空闲位置，然后将已复制的对象回收整理到空闲队列中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优点：解决了“标记-清扫回收”导致的大量内存碎片问题，避免了“标记-复制回收”浪费一半内存空间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "缺点：和“标记-复制回收”相比，性能开销较高。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hpp-gc",
      children: "HPP GC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HPP GC（High Performance Partial Garbage Collection），即高性能部分垃圾回收，其中“High Performance”主要体现在分代模型、混合算法和GC流程优化这三个方面。HPP GC根据不同对象区域采取不同的回收方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "分代模型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS运行时采用传统的分代模型，将对象进行分类。大多数新分配的对象会在一次GC后被回收，而大多数经过多次GC后依然存活的对象会继续存活。ArkTS运行时将对象划分为年轻代和老年代对象，并分配到不同空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(16549)/* ["default"] */.A) + "",
        width: "815",
        height: "377"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS运行时将新分配的对象直接分配到年轻代（YoungSpace，又称SemiSpace）的From空间。经过一次GC后依然存活的对象，会移动到To空间。经过再次GC后依然存活的对象，会被移动到老年代（OldSpace）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "混合算法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HPP GC是部分复制、部分整理和部分清扫的混合算法。根据年轻代和老年代对象特点，采取不同的回收方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "部分复制"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "考虑到年轻代对象生命周期短、回收频繁且大小有限，ArkTS运行时对年轻代对象采用“标记-复制回收”算法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "部分整理+部分清扫"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据老年代对象的特点，引入启发式Collection Set（简称CSet）选择算法。该算法在标记阶段统计每个区域的存活对象大小，然后在回收阶段优先选择存活对象少、回收代价小的区域进行对象整理回收，再对剩余区域进行清扫回收。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回收策略如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据设定的区域存活对象大小阈值，将满足条件的区域纳入初步的CSet队列，并根据存活率进行从低到高的排序（注：存活率=存活对象大小/区域大小）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据设定的释放区域个数阈值，选出最终的CSet队列，进行整理回收。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对未被选入CSet队列的区域进行清扫回收。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启发式CSet选择算法结合了“标记-整理回收”和“标记-清扫回收”算法的优点，避免了内存碎片问题，同时提升了性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "流程优化"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HPP GC流程中引入了大量的并发和并行优化，以减少对应用性能的影响。采用了并发+并行标记（Marking）、并发+并行清扫（Sweep）、并行复制/整理（Evacuation）、并行回改（Update）和并发清理（Clear）执行GC任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gc流程",
      children: "GC流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(171969)/* ["default"] */.A) + "",
        width: "983",
        height: "974"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hpp-gc的类型",
      children: "HPP GC的类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Young GC"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "触发机制：年轻代GC触发阈值在2MB-16MB，根据分配速度和存活率变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "功能描述：主要回收YoungSpace新分配的年轻代对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景：前台场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日志关键词：[ HPP YoungGC ]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Old GC"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "触发机制：老年代GC触发阈值在20MB到300MB之间变化。通常，第一次Old GC的阈值约为20MB，之后会根据对象存活率和内存占用情况进行调整。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "功能描述：对年轻代和部分老年代空间做整理压缩，其他空间做清理。触发频率比年轻代GC低很多，由于会做全量标记，因此GC时间会比年轻代GC长，单次耗时约5ms~10ms。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景：前台场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日志关键词：[ HPP OldGC ]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Full GC"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "触发机制：不会由内存阈值触发。应用切换到后台场景之后，若预测可回收对象大小超过2MB，则会触发一次Full GC。DumpHeapSnapshot和AllocationTracker工具默认会触发Full GC。Native接口和ArkTS接口也可触发。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "功能描述：对年轻代和老年代做全量压缩，主要用于性能不敏感场景，最大限度回收内存。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "场景：后台场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日志关键词：[ CompressGC ]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此后，Smart GC或Idle GC会从上述三种GC中选择。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触发策略",
      children: "触发策略"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "空间阈值触发GC"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "限制参数：对应的空间阈值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "策略描述：对象申请空间到达阈值时触发GC。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "典型日志：日志可区分GCReason::ALLOCATION_LIMIT。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Native绑定大小达到阈值触发GC"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "限制参数：globalSpaceNativeLimit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "策略描述：按条件进行全量标记和开启并发标记。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "切换后台触发GC"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "策略描述：切换到后台场景后主动触发一次Full GC。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "典型日志：app is inBackground和app is not inBackground。GC日志中可区分GCReason::SWITCH_BACKGROUND。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "空闲时触发GC"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["触发条件：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Young GC：年轻代对象分配量超过预期，且空间使用率达到阈值。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Old GC：老年代对象增长超过预期，满足以下任一条件：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Native绑定内存增长超过阈值。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "老年代空间使用率达到空闲限制阈值。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "全局分配限制达到空闲限制阈值。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Full GC：满足以下任一条件：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "堆对象大小超过预期。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "碎片大小超过预期。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "策略描述：应用空闲时，根据内存使用情况选择合适的GC类型进行回收，避免在性能敏感场景触发GC影响用户体验。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "典型日志：IdleGCTrigger: trigger full gc、IdleGCTrigger: trigger young gc。GC日志中可区分GCReason::IDLE。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "执行策略",
      children: "执行策略"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ConcurrentMark"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "策略描述：尝试触发并发标记，将遍历对象进行标记的任务交由线程池中并发运行，减少UI主线程挂起时间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "典型日志：fullMarkRequested、trigger full mark、Trigger the first full mark、Trigger full mark、Trigger the first semi mark、Trigger semi mark。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "YoungSpace GC前后的阈值调整"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "策略描述：GC后调整YoungSpace的触发阈值，优化空间结构。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "典型日志：无直接日志。可以通过GC统计日志看出，GC前YoungSpace的阈值有动态调整。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "第一次Old GC后阈值的调整"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "策略描述：根据最小增长步长以及平均存活率调整OldSpace阈值限制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日志关键词：AdjustOldSpaceLimit"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "第二次及以后的Old GC对OldSpace和GlobalSpace阈值调整，以及增长因子的调整"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "策略描述：根据当前GC统计数据的变化，重新计算并调整newOldSpaceLimit、newGlobalSpaceLimit、globalSpaceNativeLimit及增长因子。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日志关键词：RecomputeLimits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Partial Old GC的CSet 选择策略"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "策略描述：Partial GC执行时，优先选择存活对象数量少、回收代价小的Region进行回收。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["典型日志：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Select CSet failure: number is too few"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Max evacuation size is 6_MB. The CSet Region number"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Select CSet success: number is"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "heap",
      children: "Heap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Heap包含两种类型：LocalHeap和SharedHeap。LocalHeap是应用进程中每个ArkTS线程独有的虚拟机堆，SharedHeap是应用进程中所有ArkTS线程共享的虚拟机堆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "localheap结构",
      children: "LocalHeap结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(905464)/* ["default"] */.A) + "",
        width: "734",
        height: "362"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "YoungSpace：年轻代（Young Generation），又称SemiSpace，存放新创建出来的对象，存活率低，主要使用半空间复制算法进行内存回收。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OldSpace：老年代（Old Generation），存放年轻代多次回收仍存活的对象会被移动到该空间，根据场景混合多种算法进行内存回收。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HugeObjectSpace：大对象空间，使用单独的Region存放一个大对象的空间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ReadOnlySpace：只读空间，存放运行期间的只读数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NonMovableSpace：不可移动空间，存放不可移动的对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SnapshotSpace：快照空间，转储堆快照时使用的空间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MachineCodeSpace：机器码空间，存放程序机器码。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(672745)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个空间由一个或多个Region进行分区域管理。Region是空间向内存分配器申请的单位。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "localheap相关参数",
      children: "LocalHeap相关参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(285418)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下参数未提示可配置的均为不可配置项，由系统自行设定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据系统分配堆空间总大小64MB-128MB/128MB-256MB/大于256MB的三个范围，以下参数系统会设置不同的大小。如果表格内范围仅有一个值，则表示该参数值不随堆空间总大小变化。手机设备堆空间总大小默认为大于256MB。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hidebug/js-apis-hidebug",
        children: "hidebug接口文档"
      }), "，使用相关接口查询内存信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "堆大小相关参数"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "范围"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "作用"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HeapSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "448MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主线程默认堆空间总大小，小内存设备（如手表）会根据设备实际内存大小自动调整该堆空间大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SemiSpaceSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2MB-4MB/2MB-8MB/2MB-16MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SemiSpace空间大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NonmovableSpaceSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2MB/6MB/64MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NonmovableSpace空间大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SnapshotSpaceSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快照空间大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MachineCodeSpaceSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "机器码空间大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Worker线程堆上限"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "范围"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "作用"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HeapSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "768 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worker类型线程堆空间大小。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "SemiSpace"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Heap中生成两个SemiSpace，供复制使用。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "范围"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "作用"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "semiSpaceSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2MB-4MB/2MB-8MB/2MB-16MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SemiSpace空间大小，会根据堆总大小有不同的范围限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "semiSpaceTriggerConcurrentMark"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1MB/1.5MB/1.5MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "首次单独触发SemiSpace的并发标记的界限值，超过该值则触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "semiSpaceStepOvershootSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许过冲最大大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "OldSpace和HugeObjectSpace"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化时均设定为Heap剩余未分配空间的大小，默认手机设备主线程OldSpaceSize上限接近350MB。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "范围"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "作用"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "oldSpaceOvershootSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4MB/8MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OldSpace允许过冲最大大小。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "其他空间"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "范围"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "作用"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defaultReadOnlySpaceSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReadOnlySpace默认空间大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defaultNonMovableSpaceSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2MB/6MB/64MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NonMovableSpace默认空间大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defaultSnapshotSpaceSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512KB/4MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SnapshotSpace默认空间大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defaultMachineCodeSpaceSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2MB/8MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MachineCodeSpace默认空间大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解释器栈大小"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "作用"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxStackSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制解释器栈的大小。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "并发参数"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "作用"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gcThreadNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gc线程数量，默认为7。可通过gc-thread-num参数设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIN_TASKPOOL_THREAD_NUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程池最小线程数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX_TASKPOOL_THREAD_NUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程池最大线程数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该线程池主要用于执行GC流程中的并发任务。线程池初始化时，会综合考虑gcThreadNum和线程数的上下限。如果gcThreadNum为负值，线程池的线程数将初始化为CPU核心数的一半。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "其他参数"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "作用"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minAllocLimitGrowingStep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2MB/4MB/8MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap整体重新计算空间大小限制时，此参数用于控制OldSpace、heapObject和globalNative的最小增长步长。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minGrowingStep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4MB/8MB/16MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调整OldSpace的最小增长步长。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "longPauseTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断是否为超长GC界限。超长GC会触发完整GC日志信息的打印，便于开发者定位和分析。可通过gc-long-paused-time进行配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sharedheap结构",
      children: "SharedHeap结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(854072)/* ["default"] */.A) + "",
        width: "717",
        height: "354"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SharedOldSpace：共享堆老年代空间，存放一般的共享对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SharedHugeObjectSpace：共享堆大对象空间，使用单独的Region存放一个大对象的空间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SharedReadOnlySpace：共享堆只读空间，存放运行期间的只读数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SharedNonMovableSpace：共享堆不可移动空间，存放不可移动的共享对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(104721)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SharedHeap用于存储线程间共享对象，提高效率并节省内存。共享堆不单独属于任何线程，保存具有共享价值的对象，提高对象的存活率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SharedHeap去除了SemiSpace类型，因为共享对象通常生命周期较长，不需要年轻代的复制算法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个空间由一个或多个Region进行分区域管理。Region是空间向内存分配器申请的单位。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sharedheap相关参数",
      children: "SharedHeap相关参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下参数适用于手机等大内存设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(193239)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SharedOldSpace和SharedHugeObjectSpace的阈值上限在共享堆初始化时均设定为SharedHeap剩余未分配空间的一半，手机设备默认分配的空间上限接近350MB，超过该值会发生内存溢出。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "范围"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "作用"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SharedHeapSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "778MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SharedHeap默认堆空间总大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SharedOldSpaceSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "约350MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SharedOldSpace空间容量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SharedHugeObjectSpaceSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "约350MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SharedHugeObjectSpace空间容量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SharedReadOnlySpaceSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SharedReadOnlySpace空间容量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SharedNonMovableSpaceSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SharedNonMovableSpace空间容量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "特性",
      children: "特性"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "smart-gc",
      children: "Smart GC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Smart GC是一种智能GC抑制机制，在冷启动场景和性能敏感场景中通过临时提高GC触发阈值来降低GC触发频率，避免因GC而导致应用掉帧，从而影响用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用冷启动（默认支持）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用滑动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用点击页面跳转。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "超长帧。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意事项"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Smart GC对Worker线程和TaskPool线程不生效，仅对主线程生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果敏感场景持续时间过久，对象分配仍可能达到提高后的GC阈值，仍会触发GC，且由于积累对象较多，GC时间会较长。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该特性由系统侧管控，三方应用暂无接口直接调用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "日志关键词"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "敏感场景：SmartGC: set high sensitive status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "冷启动场景：SmartGC: app cold start just finished"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "交互流程"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(721353)/* ["default"] */.A) + "",
        width: "582",
        height: "650"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "日志解释",
      children: "日志解释"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开启全量日志",
      children: "开启全量日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认情况下，详细的GC日志仅在GC耗时超过40毫秒时才会打印。若需开启所有GC日志，需使用命令在设备中开启。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 设置开启GC全量日志参数，开启参数为0x905d，关闭GC全量日志，设置为默认值为0x105c\nhdc shell param set persist.ark.properties 0x905d\n# 重启生效\nhdc shell reboot\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "典型日志",
      children: "典型日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下日志统计了GC完整执行后的信息，不同GC类型可能有所差异。在导出的日志文件中搜索关键词[gc]查看GC日志，或搜索关键词ArkCompiler查看更全面的虚拟机日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// GC前对象实际占用大小（Region实际占用大小）->GC后对象实际占用大小（Region实际占用大小），总耗时（+concurrentMark耗时），GC触发原因。\nC03F00/ArkCompiler: [gc]  [ CompressGC ] 26.1164 (35) -> 7.10049 (10.5) MB, 160.626(+0)ms, Switch to background\n// GC运行时的各种状态以及应用名称\nC03F00/ArkCompiler: [gc] IsInBackground: 1; SensitiveStatus: 0; OnStartupEvent: 0; BundleName: com.example.demo;\n// GC运行时的各阶段耗时统计\nC03F00/ArkCompiler: [gc] /***************** GC Duration statistic: ****************/\nC03F00/ArkCompiler: [gc] TotalGC:                 160.626 ms\nC03F00/ArkCompiler: Initialize:              0.179   ms\nC03F00/ArkCompiler: Mark:                    159.204 ms\nC03F00/ArkCompiler: MarkRoots:               6.925   ms\nC03F00/ArkCompiler: ProcessMarkStack:        158.99  ms\nC03F00/ArkCompiler: Sweep:                   0.957   ms\nC03F00/ArkCompiler: Finish:                  0.277   ms\n// GC后各个部分占用的内存大小\nC03F00/ArkCompiler: [gc] /****************** GC Memory statistic: *****************/\nC03F00/ArkCompiler: [gc] AllSpaces        used:  7270.9KB     committed:   10752KB\nC03F00/ArkCompiler: ActiveSemiSpace  used:       0KB     committed:     256KB\nC03F00/ArkCompiler: OldSpace         used:  4966.9KB     committed:    5888KB\nC03F00/ArkCompiler: HugeObjectSpace  used:    2304KB     committed:    2304KB\nC03F00/ArkCompiler: NonMovableSpace  used:       0KB     committed:    2304KB\nC03F00/ArkCompiler: MachineCodeSpace used:       0KB     committed:       0KB\nC03F00/ArkCompiler: HugeMachineCodeSpace used:       0KB     committed:       0KB\nC03F00/ArkCompiler: SnapshotSpace    used:       0KB     committed:       0KB\nC03F00/ArkCompiler: AppSpawnSpace    used: 4736.34KB     committed:    4864KB\nC03F00/ArkCompiler: [gc] Anno memory usage size:  45      MB\nC03F00/ArkCompiler: Native memory usage size:2.99652 MB\nC03F00/ArkCompiler: NativeBindingSize:       0.577148KB\nC03F00/ArkCompiler: ArrayBufferNativeSize:   0.0117188KB\nC03F00/ArkCompiler: RegExpByteCodeNativeSize:0.280273KB\nC03F00/ArkCompiler: ChunkNativeSize:         19096   KB\nC03F00/ArkCompiler: [gc] Heap alive rate:         0.202871\n// 该虚拟机的此类型GC的整体统计\nC03F00/ArkCompiler: [gc] /***************** GC summary statistic: *****************/\nC03F00/ArkCompiler: [gc] CompressGC occurs count  6\nC03F00/ArkCompiler: CompressGC max pause:    2672.33 ms\nC03F00/ArkCompiler: CompressGC min pause:    160.626 ms\nC03F00/ArkCompiler: CompressGC average pause:1076.06 ms\nC03F00/ArkCompiler: Heap average alive rate: 0.635325\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "gc类型：[HPP YoungGC]、[HPP OldGC]、[CompressGC]、[SharedGC]。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TotalGC：总耗时。其下相应为各个阶段对应的耗时，基本的包括Initialize、Mark、MarkRoots、ProcessMarkStack、Sweep、Finish，实际根据不同的GC流程不同会有不同的阶段。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IsInBackground：是否在后台场景，0：非后台场景，1：为后台场景。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SensitiveStatus：是否为", (0,jsx_runtime.jsx)(_components.a, {
          href: "#smart-gc",
          children: "敏感场景"
        }), "，0：非敏感场景，1：为敏感场景，2：退出敏感场景。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OnStartupEvent：是否为冷启动场景，0：非冷启动场景，1：为冷启动场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "used：当前已分配的对象实际占用的内存空间大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "committed：当前实际分配给heap内存空间的大小。由于各空间按Region分配，而Region通常不会被对象完全占满，因此committedSize大于等于usedSize。hugeSpace会完全相等，因为每个对象单独占用一个Region。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Anno memory usage size：当前进程所有堆申请的内存大小，包括heap与sharedHeap。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Native memory usage size：当前进程所申请的Native内存大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NativeBindingSize：当前进程堆内对象绑定的Native内存大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ArrayBufferNativeSize：当前进程申请的数组缓存Native内存大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RegExpByteCodeNativeSize：当前进程申请的正则表达式字节码Native内存大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ChunkNativeSize：当前进程申请的ChunkNative内存大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Heap alive rate：堆内对象的存活率。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gc开发者调试接口",
      children: "GC开发者调试接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(460067)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下接口仅供调试使用，非正式对外SDK接口，不应在应用正式版本中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arktoolshintgc",
      children: "ArkTools.hintGC()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用方式：ArkTools.hintGC()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接口类型：ArkTS接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用后，VM会判断是否适合进行full GC。如果后台场景中内存预期存活率低于设定值，则触发full GC；若判断为敏感状态，则不触发。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用场景：开发者提示系统进行GC。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "典型日志：无直接日志，仅区分外部触发（GCReason::TRIGGER_BY_JS）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 首先需要声明接口\ndeclare class ArkTools {\n  static hintGC(): void;\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        Button(\"触发HintGC\").onClick((event: ClickEvent) => {\n          ArkTools.hintGC(); // 方法内直接调用\n        })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gc常见问题",
      children: "GC常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gc稳定性问题排查指导",
      children: "GC稳定性问题排查指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GC稳定性问题主要由两种异常引起：一是非法多线程操作导致的对象异常，二是内存访问错误导致的指针异常。这两种问题在GC任务中通常表现为堆栈中的地址访问异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过线程名称和堆栈中的方法来识别GC任务：OS_GC_Thread线程主要执行GC任务和PGO相关任务（采集型任务）；或者通过堆栈中包含GCTask等关键词识别GC任务。GC任务上报地址异常类型的崩溃时，开发者应首先排查非法多线程问题和内存访问问题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检测非法多线程操作：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-multi-thread-check",
          children: "方舟运行时检测"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检测踩内存问题：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-hwasan",
          children: "HWASan检测"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例列举部分情况，实际问题上报的地址异常类型多样，不再赘述。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对象异常问题常见堆栈信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0xffff000000000048 是对象的异常偏移地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Reason:Signal:SIGSEGV(SEGV_MAPERR)@0xffff000000000048\nFault thread info:\nTid:6490, Name:OS_GC_Thread\n#00 pc 0000000000507310 /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::JSHClass::SizeFromJSHClass(panda::ecmascript::TaggedObject*)+0)(a3d1ba664de66d31faed07d711ee1299)\n#01 pc 0000000000521f94 /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::CompressGCMarker::EvacuateObject(unsigned int, panda::ecmascript::TaggedObject*, panda::ecmascript::MarkWord const&, panda::ecmascript::ObjectSlot)+80)(a3d1ba664de66d31faed07d711ee1299)\n#02 pc 0000000000521ee4 /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::CompressGCMarker::MarkObject(unsigned int, panda::ecmascript::TaggedObject*, panda::ecmascript::ObjectSlot)+372)(a3d1ba664de66d31faed07d711ee1299)\n#03 pc 0000000000523e40 /system/lib64/platformsdk/libark_jsruntime.so(a3d1ba664de66d31faed07d711ee1299)\n#04 pc 0000000000516d74 /system/lib64/platformsdk/libark_jsruntime.so(a3d1ba664de66d31faed07d711ee1299)\n#05 pc 00000000005206d4 /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::CompressGCMarker::ProcessMarkStack(unsigned int)+160)(a3d1ba664de66d31faed07d711ee1299)\n#06 pc 000000000050460c /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::Heap::ParallelGCTask::Run(unsigned int)+228)(a3d1ba664de66d31faed07d711ee1299)\n#07 pc 000000000064f648 /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::Runner::Run(unsigned int)+188)(a3d1ba664de66d31faed07d711ee1299)\n#08 pc 000000000064f718 /system/lib64/platformsdk/libark_jsruntime.so(a3d1ba664de66d31faed07d711ee1299)\n#09 pc 00000000001ba6b8 /system/lib/ld-musl-aarch64.so.1(start+236)(8102fa8a64ba5e1e9f2257469d3fb251)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指针异常问题常见堆栈信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0x000056c2fffc0008 指针出现异常，指针映射出错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Reason:Signal:SIGSEGV(SEGV_MAPERR)@0x000056c2fffc0008\nFault thread info:\nTid:2936, Name:OS_GC_Thread\n#00 pc 00000000004d2ec0 /system/lib64/platformsdk/libark_jsruntime.so(733f61d2f51e825872484cc344970fe5)\n#01 pc 00000000004c6cac /system/lib64/platformsdk/libark_jsruntime.so(733f61d2f51e825872484cc344970fe5)\n#02 pc 00000000004cd180 /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::NonMovableMarker::ProcessMarkStack(unsigned int)+256)(733f61d2f51e825872484cc344970fe5)\n#03 pc 000000000049d108 /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::ConcurrentMarker::ProcessConcurrentMarkTask(unsigned int)+52)(733f61d2f51e825872484cc344970fe5)\n#04 pc 00000000004b6620 /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::Heap::ParallelGCTask::Run(unsigned int)+236)(733f61d2f51e825872484cc344970fe5)\n#05 pc 00000000005d6e60 /system/lib64/platformsdk/libark_jsruntime.so(panda::ecmascript::Runner::Run(unsigned int)+168)(733f61d2f51e825872484cc344970fe5)\n#06 pc 00000000005d6f30 /system/lib64/platformsdk/libark_jsruntime.so(733f61d2f51e825872484cc344970fe5)\n#07 pc 00000000001bdb84 /system/lib/ld-musl-aarch64.so.1(start+236)(e65f5c83306cf9c7dd4643794946ab9f)\n"
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
639734(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797888-1722d4eea3f9b1b256228251681e86a6.png");

},
905464(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477539-c6127f802bb9757f962806ef5feb8e8c.png");

},
285418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
171969(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957538-0d0c65bfe86c39d7598c5bc418e2ab72.png");

},
90705(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
104721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
672745(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
854072(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797890-ebea6b9d59affee3243a88aaef4c075f.png");

},
721353(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437585-66dd1f8ee8ec66275b132799ea2f15ec.png");

},
952063(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437581-5fd95d8784ea7ab5ee2e6f0ad6ef83bd.png");

},
193239(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
460067(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
179389(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477537-54cce75bbb61af572141073aac946bbf.png");

},
16549(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437583-d634f2dc986622194dbb698333997e9c.png");

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