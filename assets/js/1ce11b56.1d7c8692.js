"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["977694"], {
895620(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_page_interaction_web_scale_zoom_web_scale_zoom_md_1ce_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-page-interaction-web-scale-zoom-web-scale-zoom-md-1ce.json
var site_docs_arkweb_web_manage_page_interaction_web_scale_zoom_web_scale_zoom_md_1ce_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-page-interaction/web-scale-zoom/web-scale-zoom","title":"使用Web组件管理网页缩放","description":"Web组件支持手势缩放、鼠标滚轮、键盘缩放，以方便用户调整到舒适的显示大小。并对应用提供监听、控制页面缩放比例的功能，以便应用实现个性化的视觉效果。","source":"@site/docs/arkweb/web-manage-page-interaction/web-scale-zoom/web-scale-zoom.md","sourceDirName":"arkweb/web-manage-page-interaction/web-scale-zoom","slug":"/arkweb/web-manage-page-interaction/web-scale-zoom/","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-scale-zoom/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用Web组件管理网页缩放","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-scale-zoom","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Web组件的手势与应用交互","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-gesture/"},"next":{"title":"使用Web组件显示网页弹框","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-dialog/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-page-interaction/web-scale-zoom/web-scale-zoom.md


const frontMatter = {
	title: '使用Web组件管理网页缩放',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-scale-zoom',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Web组件管理网页缩放';

const assets = {

};



const toc = [{
  "value": "启用/禁用网页缩放",
  "id": "启用禁用网页缩放",
  "level": 2
}, {
  "value": "启用/禁用网页手势缩放",
  "id": "启用禁用网页手势缩放",
  "level": 3
}, {
  "value": "启用/禁用手势强制缩放",
  "id": "启用禁用手势强制缩放",
  "level": 3
}, {
  "value": "启用/禁用网页键盘鼠标缩放",
  "id": "启用禁用网页键盘鼠标缩放",
  "level": 3
}, {
  "value": "监听页面缩放比例变化",
  "id": "监听页面缩放比例变化",
  "level": 2
}, {
  "value": "控制网页的缩放比例",
  "id": "控制网页的缩放比例",
  "level": 2
}, {
  "value": "以固定比例缩放页面",
  "id": "以固定比例缩放页面",
  "level": 3
}, {
  "value": "根据输入值控制页面缩放比例:",
  "id": "根据输入值控制页面缩放比例",
  "level": 3
}, {
  "value": "缩放页面到目标比例:",
  "id": "缩放页面到目标比例",
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
    meta: "meta",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用web组件管理网页缩放",
        children: "使用Web组件管理网页缩放"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件支持手势缩放、鼠标滚轮、键盘缩放，以方便用户调整到舒适的显示大小。并对应用提供监听、控制页面缩放比例的功能，以便应用实现个性化的视觉效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启用禁用网页缩放",
      children: "启用/禁用网页缩放"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "启用禁用网页手势缩放",
      children: "启用/禁用网页手势缩放"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#zoomaccess",
        children: "zoomAccess"
      }), "控制网页缩放功能，当设置为false时，网页不允许手势缩放行为。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当html网页设置", (0,jsx_runtime.jsx)(_components.meta, {
        name: "viewport",
        id: "viewport",
        content: "user-scalable=no"
      }), "时，网页不允许手势缩放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅当zoomAccess和viewport标签都设置为允许缩放时，才允许手势缩放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(317382)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在PC/2in1设备上，viewport标签不生效，仅能通过设置zoomAccess为false来禁用手势缩放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上方法仅能控制缩放功能的开关，但如果网页在viewport标签中设置了minimum-scale和maximum-scale，那么缩放的范围也会受到这两个属性的限制，当最大、最小值相等时，网页也是不能缩放的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "另外，网页的内容宽度也会限制缩小的比例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .zoomAccess(false)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "启用禁用手势强制缩放",
      children: "启用/禁用手势强制缩放"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#forceenablezoom21",
        children: "forceEnableZoom"
      }), "控制网页强制缩放功能，当设置为true时，手势缩放行为不受minimum-scale和maximum-scale以及user-scalable=no的限制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "启用禁用网页键盘鼠标缩放",
      children: "启用/禁用网页键盘鼠标缩放"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb默认支持通过Ctrl+按键'-'/'+' 或者 Ctrl+鼠标滚轮进行缩放。应用可以通过拦截键盘事件来阻止按键缩放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过拦截键盘事件来阻止按键缩放："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { KeyCode } from '@kit.InputKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .zoomAccess(true)\n        .onKeyPreIme((event) => {\n          if (event.type === KeyType.Down &&\n          event.getModifierKeyState &&\n          event.getModifierKeyState(['Ctrl']) &&\n            (event.keyCode === KeyCode.KEYCODE_MINUS || event.keyCode === KeyCode.KEYCODE_EQUALS ||\n              event.keyCode === KeyCode.KEYCODE_NUMPAD_SUBTRACT || event.keyCode === KeyCode.KEYCODE_NUMPAD_ADD)) {\n            return true;\n          }\n          return false;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["或者通过属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#zoomcontrolaccess22",
        children: "zoomControlAccess"
      }), "设置是否允许通过组合按键（Ctrl+'-/+'或Ctrl+鼠标滚轮/触摸板）进行缩放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .zoomControlAccess(false)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监听页面缩放比例变化",
      children: "监听页面缩放比例变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onscalechange9",
        children: "onScaleChange"
      }), "接口监听页面缩放比例的变化。该接口事件对应手势事件(双指缩放)，event.newScale对应网页属性visualViewport.scale。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onScaleChange((event) => {\n          console.info('onScaleChange changed from ' + event.oldScale + ' to ' + event.newScale);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "控制网页的缩放比例",
      children: "控制网页的缩放比例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#initialscale9",
        children: "initialScale"
      }), "属性设置页面初始缩放比例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#zoom",
        children: "zoom"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#zoomin",
        children: "zoomIn"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#zoomout",
        children: "zoomOut"
      }), "接口控制页面缩放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(221845)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用以上接口控制页面缩放时，必须设置属性zoomAccess为true。zoomAccess为false时，zoom类接口会抛出异常17100004。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "以固定比例缩放页面",
      children: "以固定比例缩放页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "zoomIn将当前网页进行放大，比例为25%；zoomOut将当前网页进行缩小，比例为20%。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  build() {\n    Column() {\n      Button('zoomIn')\n        .onClick(() => {\n          try {\n            this.controller.zoomIn();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('zoomOut')\n        .onClick(() => {\n          try {\n            this.controller.zoomOut();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n        .zoomAccess(true)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "根据输入值控制页面缩放比例",
      children: "根据输入值控制页面缩放比例:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "zoom基于当前网页比例进行缩放，入参要求大于0，当入参为1时为默认加载网页的缩放比例，入参小于1为缩小，入参大于1为放大。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  @State factor: number = 1;\n\n  build() {\n    Column() {\n      TextInput()\n        .type(InputType.NUMBER_DECIMAL)\n        .onChange((value)=>{\n          this.factor = Number(value);\n        })\n      Button('zoom')\n        .onClick(() => {\n          try {\n            this.controller.zoom(this.factor);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n        .zoomAccess(true)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(74509)/* ["default"] */.A) + "",
        width: "1036",
        height: "654"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "缩放页面到目标比例",
      children: "缩放页面到目标比例:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过onScaleChange接口，应用可以得知当前网页的缩放比例，配合zoom接口即可实现将页面缩放至指定比例的功能。根据当前页面缩放比例pageFactor和目标比例targetFactor计算zoom入参的公式为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "factor = 100 * targetFactor / pageFactor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  @State targetFactor: number = 1;\n  // This represents the page zoom level\n  @State pageFactor: number = 100;\n  // Represents the integer 100\n  intNumber: number = 100;\n\n  build() {\n    Column() {\n      TextInput()\n        .type(InputType.NUMBER_DECIMAL)\n        .onChange((value)=>{\n          this.targetFactor = Number(value);\n        })\n      Button('zoom')\n        .onClick(() => {\n          try {\n            let factor = this.targetFactor * this.intNumber / this.pageFactor;\n            this.controller.zoom(factor);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n        .zoomAccess(true)\n        .onScaleChange((event) => {\n          console.error('onScaleChange changed from ' + event.oldScale + ' to ' + event.newScale);\n          this.pageFactor = event.newScale;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(884970)/* ["default"] */.A) + "",
        width: "1036",
        height: "652"
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
884970(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798572-029b41204d5c62e1456fe5dee1f518bf.gif");

},
317382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
221845(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
74509(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478221-251a50d350d99a9bc5267fbf43b14619.gif");

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