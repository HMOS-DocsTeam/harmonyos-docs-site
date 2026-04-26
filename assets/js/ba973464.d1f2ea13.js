"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["36444"], {
566157(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_add_component_arkts_common_components_progress_indicator_arkts_common_components_progress_indicator_md_ba9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-add-component-arkts-common-components-progress-indicator-arkts-common-components-progress-indicator-md-ba9.json
var site_docs_arkui_arkts_ui_development_arkts_add_component_arkts_common_components_progress_indicator_arkts_common_components_progress_indicator_md_ba9_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-add-component/arkts-common-components-progress-indicator/arkts-common-components-progress-indicator","title":"进度条 (Progress)","description":"Progress是进度条显示组件，显示内容通常为目标操作的当前进度。具体用法请参考Progress。","source":"@site/docs/arkui/arkts-ui-development/arkts-add-component/arkts-common-components-progress-indicator/arkts-common-components-progress-indicator.md","sourceDirName":"arkui/arkts-ui-development/arkts-add-component/arkts-common-components-progress-indicator","slug":"/arkui/arkts-ui-development/arkts-add-component/arkts-common-components-progress-indicator/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-add-component/arkts-common-components-progress-indicator/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"进度条 (Progress)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-progress-indicator","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义渲染 (XComponent)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines/"},"next":{"title":"弹窗概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-dialog-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-add-component/arkts-common-components-progress-indicator/arkts-common-components-progress-indicator.md


const frontMatter = {
	title: '进度条 (Progress)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-progress-indicator',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '进度条 (Progress)';

const assets = {

};



const toc = [{
  "value": "创建进度条",
  "id": "创建进度条",
  "level": 2
}, {
  "value": "设置进度条样式",
  "id": "设置进度条样式",
  "level": 2
}, {
  "value": "场景示例",
  "id": "场景示例",
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
        id: "进度条-progress",
        children: "进度条 (Progress)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Progress是进度条显示组件，显示内容通常为目标操作的当前进度。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress",
        children: "Progress"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建进度条",
      children: "创建进度条"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Progress通过调用接口来创建，接口调用方式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Progress(options: {value: number, total?: number, type?: ProgressType})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，value用于设置初始进度值，total用于设置进度总长度，type用于设置Progress样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Progress({ value: 24, total: 100, type: ProgressType.Linear }) // 创建一个进度总长为100，初始进度值为24的线性进度条\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(935855)/* ["default"] */.A) + "",
        width: "477",
        height: "93"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置进度条样式",
      children: "设置进度条样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Progress有5种可选类型，通过ProgressType可以设置进度条样式。ProgressType类型包括：ProgressType.Linear（线性样式）、 ProgressType.Ring（环形无刻度样式）、ProgressType.ScaleRing（环形有刻度样式）、ProgressType.Eclipse（圆形样式）和ProgressType.Capsule（胶囊样式）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "线性样式进度条（默认类型）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(412865)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 9开始，组件高度大于宽度时，自适应垂直显示；组件高度等于宽度时，保持水平显示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Progress({ value: 20, total: 100, type: ProgressType.Linear }).width(200).height(50)\nProgress({ value: 20, total: 100, type: ProgressType.Linear }).width(50).height(200)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(21605)/* ["default"] */.A) + "",
            width: "442",
            height: "387"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "环形无刻度样式进度条"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从左往右，1号环形进度条，默认前景色为蓝色渐变，默认strokeWidth进度条宽度为2.0vp\nProgress({ value: 40, total: 150, type: ProgressType.Ring }).width(100).height(100)\n// 从左往右，2号环形进度条\nProgress({ value: 40, total: 150, type: ProgressType.Ring }).width(100).height(100)\n  .color(Color.Grey)    // 进度条前景色为灰色\n  .style({ strokeWidth: 15})    // 设置strokeWidth进度条宽度为15.0vp\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(822172)/* ["default"] */.A) + "",
            width: "390",
            height: "195"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "环形有刻度样式进度条"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Progress({ value: 20, total: 150, type: ProgressType.ScaleRing }).width(100).height(100)\n  .backgroundColor(Color.Black)\n  .style({ scaleCount: 20, scaleWidth: 5 })    // 设置环形有刻度进度条总刻度数为20，刻度宽度为5vp\nProgress({ value: 20, total: 150, type: ProgressType.ScaleRing }).width(100).height(100)\n  .backgroundColor(Color.Black)\n  .style({ strokeWidth: 15, scaleCount: 20, scaleWidth: 5 })    // 设置环形有刻度进度条宽度15，总刻度数为20，刻度宽度为5vp\nProgress({ value: 20, total: 150, type: ProgressType.ScaleRing }).width(100).height(100)\n  .backgroundColor(Color.Black)\n  .style({ strokeWidth: 15, scaleCount: 20, scaleWidth: 3 })    // 设置环形有刻度进度条宽度15，总刻度数为20，刻度宽度为3vp\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(912832)/* ["default"] */.A) + "",
            width: "560",
            height: "203"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "圆形样式进度条"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从左往右，1号圆形进度条，默认前景色为蓝色\nProgress({ value: 10, total: 150, type: ProgressType.Eclipse }).width(100).height(100)\n// 从左往右，2号圆形进度条，指定前景色为灰色\nProgress({ value: 20, total: 150, type: ProgressType.Eclipse }).color(Color.Grey).width(100).height(100)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(314120)/* ["default"] */.A) + "",
            width: "519",
            height: "227"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "胶囊样式进度条"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(428410)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "头尾两端圆弧处的进度展示效果与ProgressType.Eclipse样式一致。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "中段处的进度展示效果为矩形状长条，与ProgressType.Linear线性样式相似。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "组件高度大于宽度时，自适应垂直显示。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Progress({ value: 10, total: 150, type: ProgressType.Capsule }).width(100).height(50)\nProgress({ value: 20, total: 150, type: ProgressType.Capsule }).width(50).height(100).color(Color.Grey)\nProgress({ value: 50, total: 150, type: ProgressType.Capsule }).width(50).height(100).color(Color.Blue).backgroundColor(Color.Black)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(697268)/* ["default"] */.A) + "",
            width: "644",
            height: "310"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新当前进度值，如应用安装进度条，可通过点击Button增加progressValue，value属性将progressValue设置给Progress组件，进度条组件即会触发刷新，更新当前进度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ProgressCase1 {\n  @State progressValue: number = 0;    // 设置进度条初始值为0\n  build() {\n    Column() {\n      Column() {\n        Progress({value:0, total:100, type:ProgressType.Capsule}).width(200).height(50).value(this.progressValue)\n        Row().width('100%').height(5)\n        // 请将$r('app.string.progress_add')替换为实际资源文件，在本示例中该资源文件的value值为\"进度条+5\"\n        Button($r('app.string.progress_add'))\n          .onClick(()=>{\n            this.progressValue += 5;\n            if (this.progressValue > 100){\n              this.progressValue = 0;\n            }\n          })\n      }\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(266825)/* ["default"] */.A) + "",
        width: "752",
        height: "400"
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
412865(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
935855(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
428410(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
21605(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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JnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0AJQmdACUJnQAlCZ0APxSpmnKtm2ZpinLsmSapqzrmnmeM8Z40cMTOgA+v9Za9vt9Wms5nU6Z5/nj23a7XVprL3B0Z/OzNwGAP2mMkdZaDodD1nXN9fV11nXNGCNXV1e5f//+ix5ikqSNL8K8EoCXzm3obj9e1zXbtqX3/qmZ3YsmdAD8Up4M3pPXJflC7LoUOgBKsxgFgNKEDoDShA6A0oQOgNKEDoDShA6A0oQOgNKEDoDShA6A0oQOgNKEDoDShA6A0v4fkVALgfqGFgIAAAAASUVORK5CYII=");

},
314120(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798244-0d8f4c53bbde08ee2d1870ea97e36de2.png");

},
697268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437939-97d18bc5213faf5d59e2462a418ce56b.png");

},
822172(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957892-888fb0522bfb93d1b0a4e4d90f018915.png");

},
912832(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477893-58be55b644f1b4663b3fc7b26292b188.png");

},
266825(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957894-fb2e250a635e5bc097d1c61e87041fa0.gif");

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