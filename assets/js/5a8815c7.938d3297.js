"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["220034"], {
497892(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_breakpoint_ide_debug_native_breakpoint_md_5a8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-debug-native-ide-debug-native-breakpoint-ide-debug-native-breakpoint-md-5a8.json
var site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_breakpoint_ide_debug_native_breakpoint_md_5a8_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-breakpoint/ide-debug-native-breakpoint","title":"使用断点","description":"点击*View Breakpoints* 图标可以打开断点管理界面，您可以在断点管理界面查看或更改您的断点。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-breakpoint/ide-debug-native-breakpoint.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-breakpoint","slug":"/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-breakpoint/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-breakpoint/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用断点","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-breakpoint","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"启动调试","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-enable/"},"next":{"title":"检查变量","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-variables/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-breakpoint/ide-debug-native-breakpoint.md


const frontMatter = {
	title: '使用断点',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-breakpoint',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '使用断点';

const assets = {

};



const toc = [{
  "value": "条件断点",
  "id": "条件断点",
  "level": 2
}, {
  "value": "日志断点",
  "id": "日志断点",
  "level": 2
}, {
  "value": "临时断点",
  "id": "临时断点",
  "level": 2
}, {
  "value": "函数断点",
  "id": "函数断点",
  "level": 2
}, {
  "value": "异常断点",
  "id": "异常断点",
  "level": 2
}, {
  "value": "数据断点",
  "id": "数据断点",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
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
        id: "使用断点",
        children: "使用断点"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "View Breakpoints"
        })
      }), " 图标", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(236638)/* ["default"] */.A) + "",
        width: "23",
        height: "25"
      }), "可以打开断点管理界面，您可以在断点管理界面查看或更改您的断点。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "勾选 Enable ，使能该断点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "勾选 Suspend execution ，使程序运行到断点时中断。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(582216)/* ["default"] */.A) + "",
        width: "867",
        height: "508"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "条件断点",
      children: "条件断点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在某个断点的配置中，勾选 Condition ，并设置表达式作为条件，使程序运行到断点且满足设置的条件时才会中断进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "日志断点",
      children: "日志断点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在某个断点的配置中，勾选以下类型的log，可以使进程运行到断点时在 console 窗口打印相应 log。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "勾选“Breakpoint hit”message，程序运行到断点时，打印“Breakpoint reached”。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "勾选 Stack trace，程序运行到断点时，打印当前线程的堆栈。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "勾选 Evaluate and log，并添加表达式，程序运行到断点时，打印表达式的值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(101005)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未勾选 Enable 的断点不会打印日志，未勾选 Suspend execution 的断点会打印日志，不满足所设置的 Condition 的断点不会打印日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(760190)/* ["default"] */.A) + "",
        width: "849",
        height: "751"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "临时断点",
      children: "临时断点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在某个断点的配置中，勾选 Remove once hit，该断点只生效一次，生效后该断点会被删除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数断点",
      children: "函数断点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "也叫方法断点或符号断点，使用函数名设置断点，当程序运行到对应函数时，中断进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在断点管理界面中点击“+”->“Cpp Symbolic Breakpoints”，在弹出窗口中填写函数名和模块名（模块名可缺省），添加函数断点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(417578)/* ["default"] */.A) + "",
        width: "300",
        height: "153"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "异常断点",
      children: "异常断点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异常断点可以使程序运行到抛异常或捕获异常的代码处停住。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(859409)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其他系统异常，如 SIGSEGV 等信号异常会默认捕获并中断进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在断点管理界面中点选 “Cpp Exception Breakpoints” 下的 “Any exception”，勾选 Enable 使能异常断点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(499499)/* ["default"] */.A) + "",
        width: "868",
        height: "506"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数据断点",
      children: "数据断点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持三种类型的数据断点，即变量被读、被写、被读写时中断进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在变量列表中对某一个变量右键，在菜单中选择添加数据断点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(865648)/* ["default"] */.A) + "",
        width: "431",
        height: "420"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在断点管理界面进行查看和修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(129202)/* ["default"] */.A) + "",
        width: "874",
        height: "514"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(635210)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据断点支持的类型受硬件限制，支持设置数据断点的变量类型 size 不能超过硬件支持的范围；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "受硬件限制，最多同时设置 2 个数据断点；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对局部变量设置的数据断点，需要在离开作用域时手动删除，否则会由于变量地址被重用导致进程中断。"
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
582216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752834-81492abd9eda462b21cdc2e30eafdde9.png");

},
859409(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
499499(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832743-91111343ef24cb3fba3f046a809f1fd4.png");

},
129202(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752763-50d378bc9426c665b16c7bfd691a4a45.png");

},
635210(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
865648(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752767-16ca11384a788ca383dbff661bc78e8f.png");

},
101005(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
760190(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912824-89a658f82cf53f882f802ebaa922cfa4.png");

},
236638(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAZCAYAAADaILXQAAABJ0lEQVRIDe2VSwrCMBCGPaYbH+BroQtBqBtFEDyBgngCFwW9gegdRBemVkEUBGPaC4xMIRqd6cOFoOAiZDqBbyb//KEp3/fhUyv1KTBy/3B2bn9ZvlQW7yLhOLbBrVsgMiVwrRac7Cn4SrEd67cTO1BPSti1urBJ58nad3qRBWLhcrWGQ38I21qDwLHgyZ6Edh8L11fE/Tybg1OsPhVxm+034UoFmqK2Ild+0vgqHHAKjwIiW34DrhSgllEan2eL+zkO2bydGRNZUEMOrHOBxp53nwG6yASaMYGjhhrE7Vrjw2AUuAhtagLNmMBFvhIJx3MEyOUK0KYm7DUm8KSdv4K4bwJPpHnCXyOB45OOcwvXJZejcOwqwuccJCzHwxNeOwyq878LvwHGZyNBusG6IgAAAABJRU5ErkJggg==");

},
417578(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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