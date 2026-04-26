"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["534199"], {
529336(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_debug_optimize_ui_ide_previewer_ui_ide_previewer_md_719_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-debug-optimize-ui-ide-previewer-ui-ide-previewer-md-719.json
var site_docs_arkui_ui_debug_optimize_ui_ide_previewer_ui_ide_previewer_md_719_namespaceObject = JSON.parse('{"id":"arkui/ui-debug-optimize/ui-ide-previewer/ui-ide-previewer","title":"UI预览","description":"DevEco Studio为开发者提供了UI预览功能，方便查看UI效果并随时调整页面布局。预览支持页面预览和组件预览。图1中左侧图标表示页面预览，右侧图标表示组件预览。","source":"@site/docs/arkui/ui-debug-optimize/ui-ide-previewer/ui-ide-previewer.md","sourceDirName":"arkui/ui-debug-optimize/ui-ide-previewer","slug":"/arkui/ui-debug-optimize/ui-ide-previewer/","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-ide-previewer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"UI预览","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-ide-previewer","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"UI上下文异常调试","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/arkts-wrong-uicontext-debug/"},"next":{"title":"UI调优","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-inspector-profiler/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-debug-optimize/ui-ide-previewer/ui-ide-previewer.md


const frontMatter = {
	title: 'UI预览',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-ide-previewer',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'UI预览';

const assets = {

};



const toc = [{
  "value": "页面预览",
  "id": "页面预览",
  "level": 2
}, {
  "value": "极速预览",
  "id": "极速预览",
  "level": 3
}, {
  "value": "inspector双向预览",
  "id": "inspector双向预览",
  "level": 3
}, {
  "value": "组件预览",
  "id": "组件预览",
  "level": 2
}, {
  "value": "动态修改分辨率",
  "id": "动态修改分辨率",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ui预览",
        children: "UI预览"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio为开发者提供了UI预览功能，方便查看UI效果并随时调整页面布局。预览支持页面预览和组件预览。图1中左侧图标", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(549794)/* ["default"] */.A) + "",
        width: "23",
        height: "25"
      }), "表示页面预览，右侧图标", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(528833)/* ["default"] */.A) + "",
        width: "28",
        height: "25"
      }), "表示组件预览。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(412635)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作系统和真机设备的差异可能导致预览效果与真机效果不同。预览效果仅作参考，实际效果以真机为准。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 预览图标"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(356787)/* ["default"] */.A) + "",
        width: "283",
        height: "56"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "页面预览",
      children: "页面预览"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS应用/元服务均支持页面预览。页面预览通过在工程的ets文件中，给自定义组件添加", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#entry",
        children: "@Entry"
      }), "装饰器，即可以查看当前UI页面效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "启动方式：选中需要预览的ets页面，点击右侧侧边栏的Previewer按钮，启动页面预览。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "热加载：在启动页面预览的前提下，添加、删除或修改UI组件后，通过Ctrl+S保存，预览器会同步刷新预览效果，无需重新启动预览。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "路由能力：支持通过路由能力进行页面切换查看其它页面预览效果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在页面预览的基础上，提供了极速预览和Inspector双向预览两种特性。下面将详细说明这两种特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "极速预览",
      children: "极速预览"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持在修改组件的属性时，无需使用Ctrl+S进行保存，可以直接观察到修改后的预览效果。极速预览默认开启，若需关闭，点击预览器右上角按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(503438)/* ["default"] */.A) + "",
        width: "24",
        height: "24"
      }), "即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(695124)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分应用场景不支持极速预览："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不显示的组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "新增或删除组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "包含private变量或无类型的controller的组件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用了", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
          children: "@Builder"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-style",
          children: "@Style"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend",
          children: "@Extend"
        }), "等装饰器的组件。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改使用import导入外部组件/模块的组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改状态变量。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如图2所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 极速预览演示图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(323339)/* ["default"] */.A) + "",
        width: "1475",
        height: "717"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inspector双向预览",
      children: "inspector双向预览"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持ets文件与预览器的双向预览。使用时，点击预览器界面图标", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(930710)/* ["default"] */.A) + "",
        width: "27",
        height: "24"
      }), "开启双向预览功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启双向预览功能后，支持代码编辑器、UI界面和组件树之间的联动："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "选中预览器界面中的组件，组件树上对应的组件将被选中，同时代码编辑器中的布局文件中对应的代码块高亮显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "选中布局文件中的代码块，预览器界面将高亮显示，组件树上的组件节点将呈现被选中的状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "选中组件树中的组件，对应的代码块和预览器界面将高亮显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在预览界面，通过组件的属性面板修改可修改的属性或样式。预览界面的修改会自动同步到代码编辑器中，并实时刷新预览器界面。代码编辑器中的源码修改也会实时刷新预览器界面，并更新组件树信息及组件属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如图3所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " inspector双向预览演示图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(558150)/* ["default"] */.A) + "",
        width: "1475",
        height: "987"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "组件预览",
      children: "组件预览"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS应用/元服务支持组件预览功能。组件预览通过在自定义组件前添加", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/component-preview/ts-universal-component-previewer/ts-universal-component-previewer#preview%E8%A3%85%E9%A5%B0%E5%99%A8",
        children: "@Preview"
      }), "装饰器实现。在单个源文件中，最多可以使用10个@Preview装饰自定义组件。启动方式："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当组件被@Entry和@Preview装饰时，点击右侧侧边栏的Previewer按钮，启动页面预览，页面加载成功后，点击", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(222266)/* ["default"] */.A) + "",
          width: "28",
          height: "25"
        }), "，切换到组件预览。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当组件仅被@Preview装饰时，点击右侧侧边栏的Previewer按钮，则默认为组件预览。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件预览时，使用@Preview装饰器的默认属性（请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/component-preview/ts-universal-component-previewer/ts-universal-component-previewer#previewparams9",
        children: "PreviewParams"
      }), "）进行效果显示。可以通过设置@Preview的参数，指定预览设备的相关属性，包括设备类型、屏幕形状等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Preview的使用参考如下示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Preview\n@Component\nstruct ComponentPreviewOne {\n  build() {\n    Column() {\n      Text('this is component previewer One')\n        .height(80)\n        .fontSize(30)\n      // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件\n      Image($r('app.media.startIcon'))\n        .height(300)\n        .width(300)\n    }\n  }\n}\n\n@Preview\n@Component\nstruct ComponentPreviewTwo {\n  build() {\n    Column() {\n      Text('this is component previewer Two')\n        .height(80)\n        .fontSize(30)\n        .fontColor(Color.Pink)\n      // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件\n      Image($r('app.media.startIcon'))\n        .height(300)\n        .width(300)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如图4所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " 组件预览效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(522854)/* ["default"] */.A) + "",
        width: "1498",
        height: "728"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "动态修改分辨率",
      children: "动态修改分辨率"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["同一个应用/元服务可以运行在多个设备上，因不同设备的屏幕分辨率、形状、大小等不同，开发者需要在不同的设备上查看应用/元服务的UI布局和交互效果。预览支持动态修改分辨率，方便开发者随时查看不同设备上的页面显示效果。启动方式：启动页面预览后，点击右上角", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(804998)/* ["default"] */.A) + "",
        width: "24",
        height: "26"
      }), "，即可拖动页面选中框动态修改当前设备的屏幕大小。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果如图5所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图5"
        })
      }), " 动态修改分辨率效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(724019)/* ["default"] */.A) + "",
        width: "643",
        height: "588"
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
323339(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958158-c111b1283cb0a66576f47f6229cf2e71.gif");

},
503438(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAABGElEQVQ4jWO0dg9hoAZgooopowZRYFBKVCCRggQMEhDgI1IQDhiR01FKVCB+1RDw4cOnOcvW4zMIAkqy4vGY0jNtIVZxLF779u07LlPwSGEx6MWbt7hU45HCYtDpc1f///+PKf7////T566SYNDjZy+OnjqPZtJ/Boajp84/fvYCl0HMcipamKJPnr969vw1GysLHw/Pv3//7j18vO/w6as37+IyhYGBgQWXxMMnzx4+eWZlqs/AwHDs9EU8RhAwCA0wMzN7u9gqK8oyMzExYEsExBqkqabEzs46Ze7y37//YFVAINN++vJNQkyEg51NU1Xh+u0HuEwhbND1W/f+/PmbHhf68+fv67fu4VGJJYuQB4ZKwUYGAACbe2ekXVHcSQAAAABJRU5ErkJggg==");

},
356787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
412635(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
222266(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAIAAACtotlwAAACKElEQVRIibWV8W/SQBTH79qOAl3BFmiBQSjMDLUgmxr1hxn50T/bxBhDXCITAUFoC2UgxaKDlY7F9vwBQpQNFqT7/vbu3n3uvXt57+Bx/g1wWsRQ17anQAhdpJui6DnUQ/k8bveWUMuyzMmFYYxnXGzbIAEAAOA47vFSV9PLmekMFACA4wRCyGHo3yJu9QiwzJNDESH06bSiD39uC+W5YFZMR8LczIyEud53rVSu9bUf/wPdi4azYjoUZJfWI2EuEua0gV4q17q9/iroDW/KMv7Xx8+vExfiQoH8qxc+eneVAx6NCTvEP/Gal9NvTWWHIBjGDyFcOmDbdr0hv31XMCbm0pZpGh4vBValj2FY4aT4pVI/zD1KJmIzNEJIbqnF06oxmXi9nlVhroQe7AsQw2RFff/hpFypP848QAh9Ln89Px/f8/uOciKy7WKpukH6AAB9+IuivBkxHWSZ0fiiWmu01a6PprNi+n4qoQ30ekO2bXuz9Hk+1Fa79YYsJGJZ8QBiGAAA2bakqIWPRTdJ8nyoc9bbLH2W8T87ysitjqSoSquzF+UBAGfdPk3v5rIPk4mYpKhroPDpy/yNU4okXSkhnhTi2mAoK20AYFKIcyFWUlRZUafTq+tHhrrGBrh10PmdEKaE+H4qAQBoSi1JURdTYw30lt5HCDXldlNur3db0p1MKceglvV70X7OQC3LMieGi5zXhjCNkWmMtoQuf3yzejmrOynUH3FC37x1dyJ0AAAAAElFTkSuQmCC");

},
558150(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798510-829042d4d736bc59a80a07bd1185c351.gif");

},
695124(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
549794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAZCAIAAABVQiKHAAABrUlEQVQ4jc2UTUvDQBCGZ9tEkxibZmPqBxYUKwURL1KRoGAvIv4Z8eZZxIP/RdCjF70VqQcvHvyoUlpaKTVpUpM2ZWPjoVJCUiyYHpzTzsvwMO/u7KCtnT0IHZHwCACgGlrddd2wFIabDN/LaBz9JwrlyzU5a0gKRXRBu4s18n29KW4YOOPQcUHN4frNEIohKYKaY9plfx3RpNqVzSYNSRlOoYjOtMucWfDpfcUi+nBHgnbXO7go0uaXLT4NAHzzgbWKAF1vwW+U3l00xUwxfUTGsFy9BIDS8iHTKi0+nnDmSxABANG5+QWfpE7vvq0cd6Msrl8vPJ8J2m17YskU1tSZ/bFOjbNeg5QBL92Ncj+mAHl1F0WQ+zWwF78jAJCrF8h1SqmDhpwtEQNQVJ/apjsfi0+nk/r9QApa39zx5k1xgyIaZxY6zKwhKWZsFblfsUYe129Ql7T4lENj7xwN7sXAGal2BQDj9nuicp6onAcLhlMcOm6zyd7ZOzUtPgUANpt06HjQUWBe1JwhKRbRfXPh0Lj/A4IU/738Lf7TZhjRfrFbnyPY3iKWw/fyDSn+pnbpsstYAAAAAElFTkSuQmCC");

},
930710(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAYCAIAAACEIhGsAAAAzUlEQVRIiWO0sXdkoCpgoq5xI9ZEFkwhbW1tPBo+ffz0+Mlj0kz0cHfHo+HWrVskm4isQVRElIOD493791+/foGIvHn7Fo9xDAwMjPjTY0hIsLyc/K7duy9fvozfIHxuxANYWVk5OTnRBD99+kS+iRoaGm6urmiCvX19yFy6pB484PLly5cvX5aTkwsNCfn44eOceXMx1QyFPDMyTWSWU1DEI/3t27dHjx4/ffr0x48fcME/f/6+efvm3v177969w9RCIBeSAYZCOA4FEwGBBEduJaNiEAAAAABJRU5ErkJggg==");

},
724019(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478161-45609663d6501d5d9b4b92c9f6393e6a.gif");

},
522854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438205-c8bcd59db25fa8a304eab67a98c9da48.png");

},
804998(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAaCAIAAAAi3QukAAAA5UlEQVRIie2UvQrCMBSFbyWTyW1p61Zi6tah9Akc3HQSfFLBzZcQkQ5uGkvmUGidHQSRpNIOHfw7U8g5+Qi598aZzhbQhwa9UP6gTiL2FqPDx7qqrx3dBhAArJZzAJAXJQtlWIJHYhwBwHqzbbnRQ77vEWIGEGljuBkkL8r3vdO5OORHw8rSZBJzrct2UFVfZaEIITYFAA75cRQGslDG871f+X8LxOhQ8AiRZmliu1maIFLBo+cWh1d9dO/dScxHYWBYiNRF5iLb7fN20F1al40j4iKzw4791fY2tPbhLu5HlP9bQDdmTkTs2peGPQAAAABJRU5ErkJggg==");

},
528833(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAIAAACtotlwAAACKElEQVRIibWV8W/SQBTH79qOAl3BFmiBQSjMDLUgmxr1hxn50T/bxBhDXCITAUFoC2UgxaKDlY7F9vwBQpQNFqT7/vbu3n3uvXt57+Bx/g1wWsRQ17anQAhdpJui6DnUQ/k8bveWUMuyzMmFYYxnXGzbIAEAAOA47vFSV9PLmekMFACA4wRCyGHo3yJu9QiwzJNDESH06bSiD39uC+W5YFZMR8LczIyEud53rVSu9bUf/wPdi4azYjoUZJfWI2EuEua0gV4q17q9/iroDW/KMv7Xx8+vExfiQoH8qxc+eneVAx6NCTvEP/Gal9NvTWWHIBjGDyFcOmDbdr0hv31XMCbm0pZpGh4vBValj2FY4aT4pVI/zD1KJmIzNEJIbqnF06oxmXi9nlVhroQe7AsQw2RFff/hpFypP848QAh9Ln89Px/f8/uOciKy7WKpukH6AAB9+IuivBkxHWSZ0fiiWmu01a6PprNi+n4qoQ30ekO2bXuz9Hk+1Fa79YYsJGJZ8QBiGAAA2bakqIWPRTdJ8nyoc9bbLH2W8T87ysitjqSoSquzF+UBAGfdPk3v5rIPk4mYpKhroPDpy/yNU4okXSkhnhTi2mAoK20AYFKIcyFWUlRZUafTq+tHhrrGBrh10PmdEKaE+H4qAQBoSi1JURdTYw30lt5HCDXldlNur3db0p1MKceglvV70X7OQC3LMieGi5zXhjCNkWmMtoQuf3yzejmrOynUH3FC37x1dyJ0AAAAAElFTkSuQmCC");

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