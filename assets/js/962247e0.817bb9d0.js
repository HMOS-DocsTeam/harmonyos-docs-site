"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["911531"], {
495824(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_extend_components_arkts_extend_arkts_extend_md_962_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-paradigm-basic-syntax-arkts-extend-components-arkts-extend-arkts-extend-md-962.json
var site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_extend_components_arkts_extend_arkts_extend_md_962_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend/arkts-extend","title":"@Extend装饰器：定义扩展组件样式","description":"在前文的示例中，可以使用@Styles用于样式的重用，在@Styles的基础上，我们提供了@Extend，用于扩展组件样式。","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend/arkts-extend.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend","slug":"/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"@Extend装饰器：定义扩展组件样式","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-extend","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@Styles装饰器：定义组件重用样式","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-style/"},"next":{"title":"stateStyles：多态样式","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-statestyles/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend/arkts-extend.md


const frontMatter = {
	title: '@Extend装饰器：定义扩展组件样式',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-extend',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@Extend装饰器：定义扩展组件样式';

const assets = {

};



const toc = [{
  "value": "装饰器使用说明",
  "id": "装饰器使用说明",
  "level": 2
}, {
  "value": "语法",
  "id": "语法",
  "level": 3
}, {
  "value": "使用规则",
  "id": "使用规则",
  "level": 3
}, {
  "value": "限制条件",
  "id": "限制条件",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "extend装饰器定义扩展组件样式",
        children: "@Extend装饰器：定义扩展组件样式"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在前文的示例中，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-style",
        children: "@Styles"
      }), "用于样式的重用，在@Styles的基础上，我们提供了@Extend，用于扩展组件样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(516157)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9开始，该装饰器支持在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，该装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器使用说明",
      children: "装饰器使用说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "语法",
      children: "语法"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Extend(UIComponentName) function functionName { ... }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用规则",
      children: "使用规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "和@Styles不同，@Extend支持封装指定组件的私有属性、私有事件和自身定义的全局方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// @Extend(Text)可以支持Text的私有属性fontColor\n@Extend(Text)\nfunction fancy() {\n  .fontColor(Color.Red)\n}\n\n// superFancyText可以调用预定义的fancy\n@Extend(Text)\nfunction superFancyText(size: number) {\n  .fontSize(size)\n  .fancy()\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用@Extend封装指定组件的私有属性、私有事件和自身定义的全局方法时，不支持和@Styles混用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Styles\nfunction fancy() {\n  .backgroundColor(Color.Red)\n}\n\n// superFancyText不可以调用预定义的fancy\n@Extend(Text)\nfunction superFancyText(size: number) {\n  .fontSize(size)\n  .fancy()\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "和@Styles不同，@Extend装饰的方法支持传入参数，调用遵循TS方法传值调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\n@Extend(Text)\nfunction fancy(fontSize: number) {\n  .fontColor(Color.Red)\n  .fontSize(fontSize)\n}\n\n@Entry\n@Component\nstruct FancyUse {\n  build() {\n    Row({ space: 10 }) {\n      Text('Fancy')\n        .fancy(16)\n      Text('Fancy')\n        .fancy(24)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Extend装饰的方法的参数可以为function，作为Event事件的句柄。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Extend(Text)\nfunction makeMeClick(onClick: () => void) {\n  .backgroundColor(Color.Blue)\n  .onClick(onClick)\n}\n\n@Entry\n@Component\nstruct FancyUse {\n  @State label: string = 'Hello World';\n\n  onClickHandler() {\n    this.label = 'Hello ArkUI';\n  }\n\n  build() {\n    Row({ space: 10 }) {\n      Text(`${this.label}`)\n        .makeMeClick(() => {\n          this.onClickHandler();\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["@Extend的参数可以为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview",
            children: "状态变量"
          }), "，当状态变量改变时，UI可以正常的被刷新渲染。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Extend(Text)\nfunction fancy(fontSize: number) {\n  .fontColor(Color.Blue)\n  .fontSize(fontSize)\n}\n\n@Entry\n@Component\nstruct FancyUse {\n  @State fontSizeValue: number = 20;\n\n  build() {\n    Column({ space: 10 }) {\n      Text('Fancy')\n        .fancy(this.fontSizeValue)\n        .onClick(() => {\n          this.fontSizeValue = 30;\n        })\n    }\n    .width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(859540)/* ["default"] */.A) + "",
        width: "133",
        height: "63"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "和@Styles不同，@Extend仅支持在全局定义，不支持在组件内部定义。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(212329)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅限在当前文件内使用，不支持导出。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果要实现export功能，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributemodifier",
        children: "AttributeModifier"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct FancyUse {\n  // 错误写法，@Extend仅支持在全局定义，不支持在组件内部定义\n  @Extend(Text) function fancy (fontSize: number) {\n    .fontSize(fontSize)\n  }\n\n  build() {\n    Row({ space: 10 }) {\n      Text('Fancy')\n        .fancy(16)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 正确写法\n@Extend(Text)\nfunction fancy(fontSize: number) {\n  .fontSize(fontSize)\n}\n\n@Entry\n@Component\nstruct FancyUse {\n  build() {\n    Row({ space: 10 }) {\n      Text('Fancy')\n        .fancy(16)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例声明了3个Text组件，每个Text组件均设置了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontstyle",
        children: "fontStyle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontweight",
        children: "fontWeight"
      }), " 和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundcolor",
        children: "backgroundColor"
      }), "样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct FancyUse {\n  @State label: string = 'Hello World';\n\n  build() {\n    Row({ space: 10 }) {\n      Text(`${this.label}`)\n        .fontStyle(FontStyle.Italic)\n        .fontWeight(500)\n        .backgroundColor(Color.Yellow)\n      Text(`${this.label}`)\n        .fontStyle(FontStyle.Italic)\n        .fontWeight(600)\n        .backgroundColor(Color.Pink)\n      Text(`${this.label}`)\n        .fontStyle(FontStyle.Italic)\n        .fontWeight(700)\n        .backgroundColor(Color.Orange)\n    }.margin('20%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(647345)/* ["default"] */.A) + "",
        width: "286",
        height: "74"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@Extend将样式组合复用，示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Extend(Text)\nfunction fancyText(weightValue: number, color: Color) {\n  .fontStyle(FontStyle.Italic)\n  .fontWeight(weightValue)\n  .backgroundColor(color)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过@Extend组合样式后，使得代码更加简洁，增强可读性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct FancyUse {\n  @State label: string = 'Hello World';\n\n  build() {\n    Row({ space: 10 }) {\n      Text(`${this.label}`)\n        .fancyText(100, Color.Blue)\n      Text(`${this.label}`)\n        .fancyText(200, Color.Pink)\n      Text(`${this.label}`)\n        .fancyText(300, Color.Orange)\n    }.margin('20%')\n  }\n}\n"
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
516157(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
859540(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
647345(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957584-04786a3d2377c0cca98ab87cfdd6c6c3.png");

},
212329(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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