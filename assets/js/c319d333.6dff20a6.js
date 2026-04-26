"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["190447"], {
226114(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_draw_graphics_arkts_clip_shape_arkts_clip_shape_md_c31_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-draw-graphics-arkts-clip-shape-arkts-clip-shape-md-c31.json
var site_docs_arkui_arkts_ui_development_arkts_draw_graphics_arkts_clip_shape_arkts_clip_shape_md_c31_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-draw-graphics/arkts-clip-shape/arkts-clip-shape","title":"形状裁剪（clipShape）","description":"可利用clipShape接口将组件裁剪为所需的形状。调用该接口后，可以保留该形状覆盖的组件部分，同时移除组件的其余部分。裁剪形状本身是不可见的。","source":"@site/docs/arkui/arkts-ui-development/arkts-draw-graphics/arkts-clip-shape/arkts-clip-shape.md","sourceDirName":"arkui/arkts-ui-development/arkts-draw-graphics/arkts-clip-shape","slug":"/arkui/arkts-ui-development/arkts-draw-graphics/arkts-clip-shape/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-draw-graphics/arkts-clip-shape/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"形状裁剪（clipShape）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-clip-shape","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"绘制几何图形 (Shape)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-draw-graphics/arkts-geometric-shape-drawing/"},"next":{"title":"交互响应概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-capability-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-draw-graphics/arkts-clip-shape/arkts-clip-shape.md


const frontMatter = {
	title: '形状裁剪（clipShape）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-clip-shape',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '形状裁剪（clipShape）';

const assets = {

};



const toc = [{
  "value": "裁剪圆形",
  "id": "裁剪圆形",
  "level": 2
}, {
  "value": "裁剪椭圆形",
  "id": "裁剪椭圆形",
  "level": 2
}, {
  "value": "裁剪矩形",
  "id": "裁剪矩形",
  "level": 2
}, {
  "value": "裁剪不规则形状",
  "id": "裁剪不规则形状",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "形状裁剪clipshape",
        children: "形状裁剪（clipShape）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clipshape12",
        children: "clipShape"
      }), "接口将组件裁剪为所需的形状。调用该接口后，可以保留该形状覆盖的组件部分，同时移除组件的其余部分。裁剪形状本身是不可见的。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(675402)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同的形状支持的属性范围不同，路径是一种形状，除此之外还有椭圆、矩形等形状。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["路径的形状不支持设置宽度和高度，具体形状支持的属性参考具体", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-shape/js-apis-arkui-shape",
        children: "形状"
      }), "的文档。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["形状中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-shape/js-apis-arkui-shape#fill",
        children: "fill"
      }), "属性对clipShape接口不生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "裁剪圆形",
      children: "裁剪圆形"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置CircleShape，将图片裁剪为圆形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { CircleShape } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct ClipShapeExample {\n  build() {\n    Column({ space: 15 }) {\n      // 用一个280px直径的圆对图片进行裁剪\n      // 请将$r('app.media.background')替换为实际资源文件\n      Image($r('app.media.background'))\n        .clipShape(new CircleShape({ width: '280px', height: '280px' }))\n        .width('500px').height('280px')\n\n      // 用一个350px直径的圆对图片进行裁剪\n      // 请将$r('app.media.background')替换为实际资源文件\n      Image($r('app.media.background'))\n        .clipShape(new CircleShape({ width: '350px', height: '350px' }))\n        .width('500px').height('370px')\n    }\n    .width('100%')\n    .margin({ top: 15 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(300995)/* ["default"] */.A) + "",
        width: "164",
        height: "322"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "裁剪椭圆形",
      children: "裁剪椭圆形"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置EllipseShape，将图片裁剪为椭圆形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { EllipseShape } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct ClipShapeExample {\n  build() {\n    Column({ space: 15 }) {\n      // 请将$r('app.media.background')替换为实际资源文件\n      Image($r('app.media.background'))\n        .clipShape(new EllipseShape({ width: '280px', height: '200px' }))\n        .width('500px').height('400px')\n\n      // 请将$r('app.media.background')替换为实际资源文件\n      Image($r('app.media.background'))\n        .clipShape(new EllipseShape({ width: '380px', height: '280px' }))\n        .width('500px').height('400px')\n    }\n    .width('100%')\n    .margin({ top: 15 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(957199)/* ["default"] */.A) + "",
        width: "303",
        height: "429"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "裁剪矩形",
      children: "裁剪矩形"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置RectShape，将图片裁剪为矩形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { RectShape } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct ClipShapeExample {\n  build() {\n    Column({ space: 15 }) {\n      // 请将$r('app.media.background')替换为实际资源文件\n      Image($r('app.media.background'))\n        .clipShape(new RectShape({ width: '200px', height: '200px' }))\n        .width('500px').height('400px')\n\n      // 请将$r('app.media.background')替换为实际资源文件\n      Image($r('app.media.background'))\n        .clipShape(new RectShape({ width: '380px', height: '280px' }))\n        .width('500px').height('400px')\n    }\n    .width('100%')\n    .margin({ top: 15 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(623771)/* ["default"] */.A) + "",
        width: "296",
        height: "432"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "裁剪不规则形状",
      children: "裁剪不规则形状"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置PathShape，将图片裁剪为不规则形状。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { PathShape } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct ClipShapeExample {\n  build() {\n    Column({ space: 15 }) {\n      Row() {\n        // 请将$r('app.media.background')替换为实际资源文件\n        Image($r('app.media.background'))\n          .clipShape(new PathShape({ commands: 'M0 0 H400 V200 H0 Z' }))\n          .width('500px').height('300px')\n      }\n      .clip(true)\n      .borderRadius(20)\n    }\n    .width('100%')\n    .margin({ top: 15 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(374624)/* ["default"] */.A) + "",
        width: "309",
        height: "408"
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
623771(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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3/2gubk7z5ubvvtcrunzz9vVe3+8uN39g0bh/F3Tl82y8Haz7OT1jNe9cuf3iZ3+ub4/9H14dh+e7MqdD5rrfF7YtbsvZOp7v5OFv9d7gnf+W5a//VJe8YuFhx6BimnIC8np5XPdS90LXVE/0Mt1XbjsPA6X7eOSLrx85/Z1Z17+nOPwNqzjzpdJc9zt7Vz22+z29hMvE/48dtz58v0ch9so3Fbh/R5uu5w+3Wg+hWFGoBIOW49d1PQjvF7Vy2NpND/Yz58c62dL5+p1fT7LNut9a71cfPqS0W2m/9e8DRvhAMOMQMWUddXw0R0+3qXS+Vly7o70onPNX8tmvBzLOv2fMA2RNMKs4/Ay4TbT/8DoZVXf++G2xHAjUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAA3CJQANwiUADcIlAAnBL5f0qq6pP5Hy5YAAAAAElFTkSuQmCC");

},
957199(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957936-e8afbe650201795c0594f94f21673fa8.png");

},
675402(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
300995(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
374624(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAAGYCAYAAAAjnXU0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABM/SURBVHhe7d1Lc1xpfcfxvIYwN3yXLVueGyk2sKIqq2QBpCCbrEOYi2csWxfbM5AKkFQum7yPVJbZUZVsskwFSAipCjCQKiqQmYxnxtb90t168pwjtdWWH7X76ZZnpv/1+Zifz1Fb9hgkfXVO22h+KwEEImpAKKIGhCJqQCiiBoQiakAoogaEImpAKKIGhCJqQCiiBoQiakAoogaEImpAKKIGhCJqQCiiBoQiakAoogaEImpAKKIGhCJqQCiiBoQiakAoogaEImpAKKIGhCJqQCiiBoQiakAoogaEImpAKKIGhCJqQCiidhK6eb2U9vJhL3Xy91tpN7/c63XTXm8nbXU302Z+9H7er/PJz+7upB+/u5l++O5G+sF72/m4nX703lb60btb6d/y+ufN482PH328OW8e7//c/nn/dQYff/Bzh655vaOb5PXG2w/zfnCwYef/esx57euUzv/xf9dT6qyknb381sxvym7aad+qTA9ROwE7+V1/N1et17zzN+//OWips5V2drfSu/kD42/+4d30pVvvpefzXnx7PV25s51m3+6m2eWd9PJit91LC51HNsqPDa70Y/3HXry5e/xudAvrFXb0dTrphfkxd727v/nDzeVfs9mV67v7y693Nb/crP9jc/mx5vHBzc33HuzK9WFrfu3he3np/bS7vZM29rabz0r5LXvwNmVqiNoJaK7N8iVZ/rS+mXqd3Ry4lH6ys5d+b+kn6Yv5A+355ZV0+dvvpJeX19NLS2vp5Vvr+bHVNHd7Nc2+db/dpYPN3hk4P+7xg/PBn9se79xLF/OaY+m8ffl26Xwln6+0x4vNMW8m/x4vHuzBefN4u/v55fvtsfq8OeZdyP/9m80sr+Xj2sFxNZ27tZrO38rnec3x6Pn55nUO9uB8aT2dz2uO5/L/xu15PhbP887mt8G5xbX2ePT8/MJqvkpLaT01Ueu0F+GiNl1E7SQ07/Td5lYzpd/kov3RX/9zeulb3fxB/FG6+K276fLtrTS3mHJ8VtOltz/Iu5v3Ubp8ZzXHbfPEdnVpY8xtPdjc4ubDW+g/VvixMXZlYePh3Tx87PLCZl5zPP589maz9YP1z5vjVt7mwYafX7qxkdc/Pnw+s3C/fepgp7nc7vTaK3Cmi6iNZW/gXb15Fm0lv/N3009XdtMXFn+czn1rL1+NfZjmlpqrsSY46/m25n56finfBuYrhRfzyy8t5tu+/PLVfGVyUpvLV4Tjbe3BruTfc7vlewe7v3/Mv/8HPzbBLi/mq9ZmSznq7e49OL+U/zmXlpvjwXn+sUeXP1EslpavOEfczMJHx2528d32OdJe84lqdy+/XT2nNm1ErVbzDp+/yzcn7XNnvbSVb1d20z+9k9JLN3/eXn3NLe+kuXy7Nt7yFc2QXVnOVzUT7HKO6mjLV0cVm13MV0sntEsL64drrqwm2MV89VW1fGW6t9dJ27lj7a1nEzVNmyqiViuHbP+dvfmjsW7q5nf47/93J/3u27/Zv026vZNeyFdg5WCNsnLM+iuFqmblgJX2aLiGrRSncSdqTELUKu3lb+07e746a+5R/me7l37n9i/TlXybeenOdrry1gfpxVsf5QCVgvX4lUI06spxGncfY7iGrRCq/opRqtzM/PpDu7iwnXrd/ZtOUZtOolZpL7+Tt+/j+Yrtbu7aF2/9R5rNt5xXbuVbztur6fk777XHUrBGWSlWo64cp3EnaqI2nUStUvuXa3PQmr+48Z2/+1WaffuDHLTt9g8BXlheT8/fap5Y7xaDNcpKsRp15TiNu09D1PLrFWLWXylStStGrSdq00zUKu00T6Jt9tL7ve30wvzddPWt/0tXC3EqPR/WXylIo64coGF7NE7DVgpQzYpxKgRp1JVCNNq22s3Mb1ZN1KafqFXrpL3eXvrbv2/+ysbddH7xuFvNctCalWI16srhGrZyvI5bKVQ1EzU+aaJWbTt9mG8/v3T9/XT5rXvp8q29HJu1wspROm7lIJ3ETjZazYrhGrYTjdXhjt46PrxytI7bhesb7WZubonalBO1St3uVvqvtZReXPowzd5ZSS8udtPc8moOk6gdO1HjYyRqlfbSavqr7++m5299mK/S9m8l544E6riVozPKHg7TcSsFaNyVQlS7UohG2WGYmpfHu43srx+rUTdzs7n93P/aHPtRa/+aNVNE1KptpC/c/Em62v5fiPIH/517aS4H5WjASisHa5SVI3Z0pTiNu1KkalcK1igbvOL6+KO2m3rdwahttd8zPUStUi/vC0u/SlfvrKcrt1bzLejdHLVyxI6uHKxRVo7Y0ZXiNO5KkapdKVijTNSYhKhVar7M0Ofmf51vPdcOovZBupIjUI7RSe3kwlV8zqu0QqT6K4Vo3A0GrLxyrAZXitO4m7mxI2pTTtQqNe/sn19+P126vdaGbfb2ao5aE5xSjE5qojZspTiNO1GbfqJWrdd+0F9d2P9SOheXd3NscuCGhGiUlQI07kaN07CVAjTa9m8XJ7llHFwpPKOt+bnlnX9z49hdmBe1aSdq1Tqp+UoOTdSar5d2cbmToyRqhxM1PlmiVq2TZkRtyJqfK2p8ckStWiddyB+8czdXRopaKTonsYfCNWyFYPVXjlLdxnkObHDlIE2+UrBG2vUtUZtyolZN1AYnanzaiFq1Xjq3sJGuLNxLl5dX0sxyL0dm/ZHojLvaMJVWik/tSgGqXSk29Tu8bXzcreOoO/fG+rFz+zn9RK2aqI26cqRqJ2rUEbVqA1Fbup8uLHVzjOqiVgzXsJ1guB69XTxu5VAdXTlEk+38m+sDezRKw1YKVdXedPs57USt2mHUZkWtGKVJ98lGbVPUppyoVXOlNrhSlCadqDEJUavWSeeur7V/+nllcSXNLO3mUB1GbViIRlkpRJOsFKKalaIzfPvPfT1upSANWzFAw3Ztc7y5/Zx6olZN1Ibv0YCVVgrXsBXDNWylYI0yUZt6olbtMGqXF/Lt5+JOjtjaYcyGRK0UnXFXvmUsrRyrZuUoTbZSkGpXjFTtSsEaZaI29UStmqgNWylStStGqnalYI0yUZt6olatk87O70dtdmElnf9UR2347WcpSpOuFKnaFSNVu1KwRpmoTT1Rq9ZLZ3IsLt9YzfFazVHr5Mg0X6F1PzaTBqwUn0lWCs9o23/ua5LnwUorBmjYSuEZc2df33jsRG36iVo1UZtkxXANWyFO464UsaMTteknatV66fT19TQ7v5Iu5lvQcwu7OUaHURtl5VvF/spxOrpyiCbfuH8/rL9imCZZIU7DVgpVzURt+olaNVEbtmKYJlkhXMNWClXNRG36iVq14VGrjdPRlUIz2Q5vHye9hSxGZ5QV4jPuSiEq7fQbW+n0ta10Ju/o+anXN9PpvFP513vk/PpW2stRa/4FO/v/DuP8cntkWohaNVGr3kCUJl0pYKWdauJ1zD6bf53jduogau1VWq7ZnqhNHVGrJmrVy7E4qZUCVlopZv2VYtafqE0/Uau0t9dNZ29stn/6OXPjfjp7cyfHaC2vH7O6qJVDNN4Onw8b3KNxGrZilCZdjsUoK8WpdmdeW29XCtYoey7/ftuoNSUTtakkapVEbYzlWIyyUqRqJ2qIWqVufoe/sLibLl1voraao7ab43R8xErxGb7DW8XSSiGqWTE6peUP8CexUoiO25lr+7eR7ZP7/eVfox+gUc4ft+fyP2dwT+dPBPmNnD95Nf/fkYY//Zw2olbp0ah1crya59JEbZSV4nXc+lEbXClMk+xo1J4aiNpu+xYXtWkjapV6vd5h1OZX0xlRq1opXsdN1BiHqFVqonZ+YaeN2oX5lXTmxm6OzXpeKVD1K4Vo1BXjNO7yB/w4K8Wpdv3nxU6/Pv5zY/0djdbjJmrTT9QqidrwlSJVO1FjEqJWqdfr5Kht56jdz1FbS2fmOzlGpaid/K1js2KAhi1/YJ/0SiHqb/+W8egevoU8qdvIUpSG7rXtR/bsq1sP7ak3NkVtyolaJVETNT7dRK1SG7WbW+niQNTOv7mW9yn8+2HN8gf/41aKU+0evmU8unKUjlsxSGPu2fx7erAjASvtqRxhUZtuolap291N55qovXlP1AYWJWqfyVeaojbdRK1St9s5iJortcH1o3bqiURt8LG682dfOwjbq/lYiNjRidr0E7VK+1HbThff2A/Z6eu99lgK1XErxqe//EH9JFYK0bA9qefB+jsM0GNWeB6sv1KUavfMK5sP7TPXcsS6ewNRa76yGtNE1CqJ2smsGLDSCjHrrxSp2olaPKJW6XFRK4aqZvkDftyV4lS7/m1kKUS1K0aqcqUQjbujASvtt/Otq6hNN1GrJGqjrxSp2pXiNO5KETs6UZt+olapt7edzs/vpbM3PkoXcoSem++mszlm+1tPZ/NjJ7P867V7+PxMPu6vcH4tH6+tHRybNY/t7/TBzuRQlGLW32hR2xhppUhVrXmS/9XNgyg1x6Png489fqWIHd1nXssR623n5ba1b/H8fQ4c00PUau2tp8/9cUoX3vxNeukbG2kmf2Y/e2233ZmDPcnz06/v5DDttMfHnzev38nnnXTqtd12p09gp17dqdsr+Z9/zD77ym767DfH23N/snOwzsR79hu77Z7+ZvM189byJ6+mZYdfV43pIWqVNvIu56uQ5uroQr5qeebGysCV1JPf4VXYKGtef7Pd6Xzl0+xUcwV1cCXVXk2Ncf7c6/kKNe/Zg+Pjz5ufk6+6Do6D581ft3gmr/93yWrOn3l1LT2d98wrG+2efnX/OM75U6+s56Ctp1Pf3GhDttlcqqVO/r6tG1NE1Cpt5c/eX/vzH6av/+lP09f+4t/Tl//yP9PXvvez9PXv/iIf30lf/94v0h9+75cPztvHv/tOu4//vNkv83n+/Ryc/0HeV/OPfzW//NWD8698p9kvDo4ncH701/zuz8fel78zwv7snQf7yoT7/W//S/tk2r3m01e+XNv/90oxTUStVmc7rTXPt6w1zyfvpk5+n9/J37Y+Bd+2H1nzbWeEPelvpd/bSa7/rfTfrW4fNVdo62vpfspv4O2mb/k7poqoVWs+dzdPHjdPI6/mHdyeTMuauyo7dr3myqy7s/82zv/pNd8xVUQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IRdSAUEQNCEXUgFBEDQhF1IBQRA0IJKX/B2J2NeXqzWlgAAAAAElFTkSuQmCC");

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