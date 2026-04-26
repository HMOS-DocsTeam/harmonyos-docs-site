"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["513591"], {
772465(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_hvigor_ide_hvigor_life_cycle_ide_hvigor_life_cycle_md_ea6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-hvigor-ide-hvigor-life-cycle-ide-hvigor-life-cycle-md-ea6.json
var site_docs_ide_hvigor_ide_hvigor_life_cycle_ide_hvigor_life_cycle_md_ea6_namespaceObject = JSON.parse('{"id":"ide-hvigor/ide-hvigor-life-cycle/ide-hvigor-life-cycle","title":"构建系统生命周期","description":"本文档对Hvigor编译构建系统结构及生命周期进行简要讲解，首先介绍Hvigor对工程结构模型的定义，随后介绍什么是任务（Task），最后会介绍Hvigor的构建生命周期以及它是如何依赖hvigor-ohos-plugin一起完成自动化编译构建流程的。","source":"@site/docs/ide-hvigor/ide-hvigor-life-cycle/ide-hvigor-life-cycle.md","sourceDirName":"ide-hvigor/ide-hvigor-life-cycle","slug":"/ide-hvigor/ide-hvigor-life-cycle/","permalink":"/harmonyos-docs-site/ide-hvigor/ide-hvigor-life-cycle/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"构建系统生命周期","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-life-cycle","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"pac.json5隐私清单文件","permalink":"/harmonyos-docs-site/ide-appendix/agc-pac/"},"next":{"title":"构建任务说明","permalink":"/harmonyos-docs-site/ide-hvigor/ide-hvigor-task-process/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-hvigor/ide-hvigor-life-cycle/ide-hvigor-life-cycle.md


const frontMatter = {
	title: '构建系统生命周期',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-life-cycle',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '构建系统生命周期';

const assets = {

};



const toc = [{
  "value": "工程结构定义",
  "id": "工程结构定义",
  "level": 2
}, {
  "value": "Hvigor脚本文件",
  "id": "hvigor脚本文件",
  "level": 2
}, {
  "value": "任务与任务依赖图",
  "id": "任务与任务依赖图",
  "level": 2
}, {
  "value": "hvigor-ohos-plugin",
  "id": "hvigor-ohos-plugin",
  "level": 2
}, {
  "value": "Hvigor与hvigor-ohos-plugin的关系",
  "id": "hvigor与hvigor-ohos-plugin的关系",
  "level": 3
}, {
  "value": "Hvigor生命周期",
  "id": "hvigor生命周期",
  "level": 2
}, {
  "value": "初始化",
  "id": "初始化",
  "level": 3
}, {
  "value": "配置",
  "id": "配置",
  "level": 3
}, {
  "value": "执行",
  "id": "执行",
  "level": 3
}, {
  "value": "生命周期及hook点",
  "id": "生命周期及hook点",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "构建系统生命周期",
        children: "构建系统生命周期"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档对Hvigor编译构建系统结构及生命周期进行简要讲解，首先介绍Hvigor对工程结构模型的定义，随后介绍什么是任务（Task），最后会介绍Hvigor的构建生命周期以及它是如何依赖hvigor-ohos-plugin一起完成自动化编译构建流程的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "工程结构定义",
      children: "工程结构定义"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hvigor将工程解析为一个树形结构，项目为树的根节点，项目中的每个模块为树的叶子节点，树最多为两层，模块中不能包含其他模块，在Hvigor的定义中统称项目或模块为一个node(节点)。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(979969)/* ["default"] */.A) + "",
        width: "834",
        height: "286"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在构建最开始的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section19246144681710",
        children: "初始化阶段"
      }), "，会通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section810245135914",
        children: "hvigorconfig.ts文件"
      }), "以及工程级build-profile.json5文件中的配置来构造出一个树形结构存储项目的工程结构，工程级build-profile.json5文件和hvigorconfig.ts文件均可以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration/ide-hvigor-multi-module#section99251918477",
        children: "配置多模块"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hvigor脚本文件",
      children: "Hvigor脚本文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["构建的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section8207184919159",
        children: "生命周期"
      }), "中Hvigor使用两个脚本文件来完成插件、任务以及生命周期hook的注册："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "hvigorconfig.ts"
          })
        }), "：此文件在整个项目中只有根目录下存在一份，不是构建必须的文件并且默认不存在，如有需要可自行创建，此文件被解析执行的时间较早，可用于在Hvigor生命周期刚开始时操作某些数据。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "hvigorfile.ts"
          })
        }), "：此文件在每个node下都有一份，是构建的必须文件，在此文件中可以注册插件、任务以及生命周期hook等操作。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "任务与任务依赖图",
      children: "任务与任务依赖图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hvigor是基于任务对您的项目进行自动化构建的，任务（Task）是Hvigor构建过程中的基本工作单元，它定义了构建项目时需要执行的具体工作。任务可以完成多种操作，比如源码编译任务，打包任务或签名任务等。每一种任务的执行逻辑由插件（plugin）提供，插件可以是由", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section199818016213",
        children: "hvigor-ohos-plugin"
      }), "提供的默认任务逻辑，也可由您个性化定制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的一点是，任务是存在依赖关系的，Hvigor在执行任何任务之前会构建任务依赖图，所有任务会形成一个有向无环图（DAG），如下示例图，任务之间的依赖关系用箭头进行表示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(377899)/* ["default"] */.A) + "",
        width: "509",
        height: "716"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hvigor插件（hvigor-ohos-plugin）和hvigorfile.ts文件中的构建脚本都将通过任务依赖机制对任务依赖图做出影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hvigor-ohos-plugin",
      children: "hvigor-ohos-plugin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hvigor-ohos-plugin是默认的构建插件，为任务（Task）的完成提供业务逻辑支持，比如为Hvigor提供HAP、HAR和HSP打包服务等任务，每一种任务的具体执行逻辑由本模块中不同的插件来提供。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hvigor与hvigor-ohos-plugin的关系",
      children: "Hvigor与hvigor-ohos-plugin的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor",
        children: "概述"
      }), "部分提到了Hvigor提供任务注册编排以及配置管理等任务管理机制，它负责控制任务的执行流程，但是并不包含每一个任务的具体业务逻辑，具体逻辑是由hvigor-ohos-plugin提供的。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hvigor和hvigor-ohos-plugin的关系可以通过下图来说明，Hvigor接受任务的注册并编排任务执行顺序，并按照顺序依次调用hvigor-ohos-plugin中的插件来执行任务。如果您定制了自己的任务逻辑插件并将其注册，Hvigor也会调用您的个性化插件来完成编译构建流程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在Hvigor执行构建的过程中，hvigor-ohos-plugin会向Hvigor进行任务的注册，Hvigor会根据构建的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section194191858161220",
        children: "任务依赖图"
      }), "依次调用对应的插件来执行相应任务，在完成编译、打包、签名等一系列任务后，Hvigor也就正式完成了构建。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(680837)/* ["default"] */.A) + "",
        width: "327",
        height: "576"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hvigor生命周期",
      children: "Hvigor生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生命周期展示了Hvigor编译构建系统如何进行一次完整的编译构建流程。Hvigor的编译构建过程有三个不同的阶段，分为初始化、配置和执行，Hvigor会按顺序运行这些阶段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "初始化",
      children: "初始化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(45420)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此阶段主要目的为初始化项目的编译参数，构造出项目结构的树形数据模型，每个node为一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-expanding/ide-hvigor-apis/ide-hvigor-api#section14832104719474",
        children: "HvigorNode"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["根据命令参数和hvigor-config.json5文件中的配置，设置Hvigor的构建参数，并构造出hvigor对象和hvigorConfig对象：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "hvigor对象贯穿整个hvigor生命周期，从最开始创建出来一直到此次构建结束才被销毁；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "hvigorConfig对象用于表示hvigor对项目结构的抽象，是hvigor的简单配置对象，用于动态添加或删除节点，它也会保存对每个节点的描述对象（nodeDescriptor对象）。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过项目根目录下的build-profile.json5文件，创建出", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-build-expanding/ide-hvigor-apis/ide-hvigor-api#section1914012226435",
          children: "rootNodeDescriptor"
        }), "实例，并通过其中的modules字段，来初始化工程中所有模块的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-build-expanding/ide-hvigor-apis/ide-hvigor-api#section1914012226435",
          children: "NodeDescriptor"
        }), "对象实例。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行项目根目录下的hvigorconfig.ts文件，可以在此文件中通过hvigor的相关API来为生命周期注册hook或在构建开始时进行其他处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据节点描述对象构造出每个节点的HvigorNode对象实例。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置",
      children: "配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(753911)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此阶段开始时，所有的node都已经加载完毕，但每个node中还没有加载插件（plugin）、任务（task）和DAG图，此阶段的主要目的就是加载出这些内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行每个node中的hvigorfile.ts文件，为每个node添加插件（向Hvigor注册任务），执行插件的apply方法，并添加插件的上下文。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基于上一步加载的插件和任务，根据任务执行的依赖关系构造出DAG图。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "执行",
      children: "执行"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行选定的任务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "任务之间的依赖关系决定了任务执行顺序。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "任务可以并行执行。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "生命周期及hook点",
      children: "生命周期及hook点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Hvigor的生命周期中，以下多个hook点可供您使用，便于您在对应的时机调用某些逻辑。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在下图中所有绿色标记的线框为可以使用的hook点。每个hook点的使用方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-expanding/ide-hvigor-apis/ide-hvigor-api",
        children: "基础构建能力"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(537397)/* ["default"] */.A) + "",
        width: "787",
        height: "635"
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
979969(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913018-855bb1befc7e2a3d662537541fd54d05.png");

},
377899(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913020-748f334a04911c3614aad025f8e2ace8.png");

},
45420(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
753911(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
680837(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832945-de142edf394293106be1be28c26effea.png");

},
537397(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002573888241-68f273f75c166cb22edaba200669cc63.png");

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