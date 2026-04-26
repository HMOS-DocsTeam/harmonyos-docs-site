"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["616881"], {
214121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_images_and_videos_ts_basic_components_image_ts_basic_components_image_md_c52_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-images-and-videos-ts-basic-components-image-ts-basic-components-image-md-c52.json
var site_docs_ref_arkui_api_arkui_declarative_comp_images_and_videos_ts_basic_components_image_ts_basic_components_image_md_c52_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image","title":"Image","description":"Image为图片组件，常用于在应用中显示图片。Image支持加载PixelMap、ResourceStr和DrawableDescriptor类型的数据源，支持png、jpg、jpeg、bmp、svg、webp、gif、heif和tiff类型的图片格式，不支持apng和svga格式。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image.md","sourceDirName":"arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image","slug":"/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Image","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-components-image"},"sidebar":"ref","previous":{"title":"文本组件公共接口","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common"},"next":{"title":"ImageAnimator","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-imageanimator/ts-basic-components-imageanimator"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image.md


const frontMatter = {
	title: 'Image',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-components-image'
};
const contentTitle = 'Image';

const assets = {

};



const toc = [{
  "value": "需要权限",
  "id": "需要权限",
  "level": 2
}, {
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "Image",
  "id": "image-1",
  "level": 3
}, {
  "value": "Image12+",
  "id": "image12",
  "level": 3
}, {
  "value": "Image12+",
  "id": "image12-1",
  "level": 3
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "alt",
  "id": "alt",
  "level": 3
}, {
  "value": "alt22+",
  "id": "alt22",
  "level": 3
}, {
  "value": "objectFit",
  "id": "objectfit",
  "level": 3
}, {
  "value": "imageMatrix15+",
  "id": "imagematrix15",
  "level": 3
}, {
  "value": "objectRepeat",
  "id": "objectrepeat",
  "level": 3
}, {
  "value": "interpolation",
  "id": "interpolation",
  "level": 3
}, {
  "value": "renderMode",
  "id": "rendermode",
  "level": 3
}, {
  "value": "sourceSize",
  "id": "sourcesize",
  "level": 3
}, {
  "value": "matchTextDirection",
  "id": "matchtextdirection",
  "level": 3
}, {
  "value": "fitOriginalSize",
  "id": "fitoriginalsize",
  "level": 3
}, {
  "value": "fillColor",
  "id": "fillcolor",
  "level": 3
}, {
  "value": "fillColor15+",
  "id": "fillcolor15",
  "level": 3
}, {
  "value": "fillColor20+",
  "id": "fillcolor20",
  "level": 3
}, {
  "value": "autoResize",
  "id": "autoresize",
  "level": 3
}, {
  "value": "syncLoad8+",
  "id": "syncload8",
  "level": 3
}, {
  "value": "copyOption9+",
  "id": "copyoption9",
  "level": 3
}, {
  "value": "colorFilter9+",
  "id": "colorfilter9",
  "level": 3
}, {
  "value": "draggable9+",
  "id": "draggable9",
  "level": 3
}, {
  "value": "enableAnalyzer11+",
  "id": "enableanalyzer11",
  "level": 3
}, {
  "value": "resizable11+",
  "id": "resizable11",
  "level": 3
}, {
  "value": "privacySensitive12+",
  "id": "privacysensitive12",
  "level": 3
}, {
  "value": "dynamicRangeMode12+",
  "id": "dynamicrangemode12",
  "level": 3
}, {
  "value": "orientation14+",
  "id": "orientation14",
  "level": 3
}, {
  "value": "hdrBrightness19+",
  "id": "hdrbrightness19",
  "level": 3
}, {
  "value": "supportSvg221+",
  "id": "supportsvg221",
  "level": 3
}, {
  "value": "contentTransition21+",
  "id": "contenttransition21",
  "level": 3
}, {
  "value": "antialiased23+",
  "id": "antialiased23",
  "level": 3
}, {
  "value": "ImageContent12+",
  "id": "imagecontent12",
  "level": 2
}, {
  "value": "ImageInterpolation",
  "id": "imageinterpolation",
  "level": 2
}, {
  "value": "ImageRenderMode",
  "id": "imagerendermode",
  "level": 2
}, {
  "value": "ResizableOptions11+",
  "id": "resizableoptions11",
  "level": 2
}, {
  "value": "ImageAlt22+",
  "id": "imagealt22",
  "level": 2
}, {
  "value": "DynamicRangeMode12+枚举说明",
  "id": "dynamicrangemode12枚举说明",
  "level": 2
}, {
  "value": "ImageRotateOrientation14+",
  "id": "imagerotateorientation14",
  "level": 2
}, {
  "value": "ImageSourceSize18+对象说明",
  "id": "imagesourcesize18对象说明",
  "level": 2
}, {
  "value": "DrawableDescriptor10+",
  "id": "drawabledescriptor10",
  "level": 2
}, {
  "value": "DrawingColorFilter12+",
  "id": "drawingcolorfilter12",
  "level": 2
}, {
  "value": "DrawingLattice12+",
  "id": "drawinglattice12",
  "level": 2
}, {
  "value": "ImageMatrix15+对象说明",
  "id": "imagematrix15对象说明",
  "level": 2
}, {
  "value": "ColorContent15+",
  "id": "colorcontent15",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onComplete",
  "id": "oncomplete",
  "level": 3
}, {
  "value": "onError9+",
  "id": "onerror9",
  "level": 3
}, {
  "value": "onFinish",
  "id": "onfinish",
  "level": 3
}, {
  "value": "ImageErrorCallback9+",
  "id": "imageerrorcallback9",
  "level": 2
}, {
  "value": "ImageError9+",
  "id": "imageerror9",
  "level": 2
}, {
  "value": "BusinessError20+",
  "id": "businesserror20",
  "level": 2
}, {
  "value": "RequestDownloadInfo23+",
  "id": "requestdownloadinfo23",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（加载基本类型图片）",
  "id": "示例1加载基本类型图片",
  "level": 3
}, {
  "value": "示例2（下载与显示静态网络图片）",
  "id": "示例2下载与显示静态网络图片",
  "level": 3
}, {
  "value": "示例3（下载与显示网络gif图片）",
  "id": "示例3下载与显示网络gif图片",
  "level": 3
}, {
  "value": "示例4（为图片添加事件）",
  "id": "示例4为图片添加事件",
  "level": 3
}, {
  "value": "示例5（开启图像AI分析）",
  "id": "示例5开启图像ai分析",
  "level": 3
}, {
  "value": "示例6（通过slice拉伸图片）",
  "id": "示例6通过slice拉伸图片",
  "level": 3
}, {
  "value": "示例7（通过lattice拉伸图片）",
  "id": "示例7通过lattice拉伸图片",
  "level": 3
}, {
  "value": "示例8（播放PixelMap数组动画）",
  "id": "示例8播放pixelmap数组动画",
  "level": 3
}, {
  "value": "示例9（为图像设置颜色滤镜效果）",
  "id": "示例9为图像设置颜色滤镜效果",
  "level": 3
}, {
  "value": "示例10（为图像设置填充效果）",
  "id": "示例10为图像设置填充效果",
  "level": 3
}, {
  "value": "示例11（切换显示不同类型图片）",
  "id": "示例11切换显示不同类型图片",
  "level": 3
}, {
  "value": "示例12（配置隐私隐藏）",
  "id": "示例12配置隐私隐藏",
  "level": 3
}, {
  "value": "示例13（为图片设置扫光效果）",
  "id": "示例13为图片设置扫光效果",
  "level": 3
}, {
  "value": "示例14（为图片添加变换效果）",
  "id": "示例14为图片添加变换效果",
  "level": 3
}, {
  "value": "示例15（通过sourceSize设置图片解码尺寸）",
  "id": "示例15通过sourcesize设置图片解码尺寸",
  "level": 3
}, {
  "value": "示例16（通过renderMode设置图片的渲染模式）",
  "id": "示例16通过rendermode设置图片的渲染模式",
  "level": 3
}, {
  "value": "示例17（通过objectRepeat设置图片的重复样式）",
  "id": "示例17通过objectrepeat设置图片的重复样式",
  "level": 3
}, {
  "value": "示例18（设置SVG图片的填充颜色）",
  "id": "示例18设置svg图片的填充颜色",
  "level": 3
}, {
  "value": "示例19（设置HDR图源动态提亮）",
  "id": "示例19设置hdr图源动态提亮",
  "level": 3
}, {
  "value": "示例20（设置图片是否跟随系统语言方向）",
  "id": "示例20设置图片是否跟随系统语言方向",
  "level": 3
}, {
  "value": "示例21（设置图像内容的显示方向）",
  "id": "示例21设置图像内容的显示方向",
  "level": 3
}, {
  "value": "示例22（获取图片的exif信息并设置图像内容的显示方向）",
  "id": "示例22获取图片的exif信息并设置图像内容的显示方向",
  "level": 3
}, {
  "value": "示例23（动态切换SVG图片的填充颜色）",
  "id": "示例23动态切换svg图片的填充颜色",
  "level": 3
}, {
  "value": "示例24（使用应用沙箱路径显示图片）",
  "id": "示例24使用应用沙箱路径显示图片",
  "level": 3
}, {
  "value": "示例25（使用相对路径显示图片）",
  "id": "示例25使用相对路径显示图片",
  "level": 3
}, {
  "value": "示例26（使用supportSvg2属性时，SVG图片的显示效果）",
  "id": "示例26使用supportsvg2属性时svg图片的显示效果",
  "level": 3
}, {
  "value": "示例27（使用ContentTransition属性实现图片淡入淡出切换效果）",
  "id": "示例27使用contenttransition属性实现图片淡入淡出切换效果",
  "level": 3
}, {
  "value": "示例28（使用alt属性实现设置加载失败中图片和加载失败时图片）",
  "id": "示例28使用alt属性实现设置加载失败中图片和加载失败时图片",
  "level": 3
}, {
  "value": "示例29（使用onError回调监听网络图片加载异常信息）",
  "id": "示例29使用onerror回调监听网络图片加载异常信息",
  "level": 3
}, {
  "value": "示例30（设置位图图片边缘抗锯齿）",
  "id": "示例30设置位图图片边缘抗锯齿",
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
    ol: "ol",
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
        id: "image",
        children: "Image"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Image为图片组件，常用于在应用中显示图片。Image支持加载", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
        children: "PixelMap"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
        children: "ResourceStr"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#drawabledescriptor10",
        children: "DrawableDescriptor"
      }), "类型的数据源，支持png、jpg、jpeg、bmp、svg、webp、gif、heif和tiff类型的图片格式，不支持apng和svga格式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(335519)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 23开始，图片类型新增支持tiff格式。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用快捷组合键对Image组件复制时，Image组件必须处于获焦状态，如何获焦请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E8%AE%BE%E7%BD%AE%E7%BB%84%E4%BB%B6%E6%98%AF%E5%90%A6%E5%8F%AF%E8%8E%B7%E7%84%A6",
          children: "设置组件是否可获焦"
        }), "。Image组件默认不获焦，需将", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#focusable",
          children: "focusable"
        }), "属性设置为true，即可使用Tab键将焦点切换到组件上，再将", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#focusontouch9",
          children: "focusOnTouch"
        }), "属性设置为true，即可实现点击获焦。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["图片格式支持SVG图源，SVG标签文档请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-svg/ts-basic-svg",
          children: "SVG标签说明"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["动图的播放依赖于Image节点的可见性变化，其默认行为是不播放的。当节点可见时，通过回调启动动画，当节点不可见时，停止动画。可见性状态的判断是通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event#onvisibleareachange",
          children: "onVisibleAreaChange"
        }), "事件触发的，当可见阈值ratios大于0时，表明Image处于可见状态。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果图片加载过程中出现白色块，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-image-white-lump-solution",
          children: "Image白块问题解决方案"
        }), "。如果图片加载时间过长，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-texture-compression-improve-performance#section91526132216",
          children: "预置图片资源加载优化"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "需要权限",
      children: "需要权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用网络图片时，需要申请权限ohos.permission.INTERNET。具体申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "image-1",
      children: "Image"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Image(src: PixelMap | ResourceStr | DrawableDescriptor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过图片数据源获取图片，用于后续渲染展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Image组件加载图片失败或图片尺寸为0时，图片组件大小自动为0，不跟随父组件的布局约束。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Image组件默认按照居中裁剪，例如组件宽高设置相同，原图长宽不等，此时按照中间区域进行裁剪。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Image加载成功且组件不设置宽高时，其显示大小自适应父组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(390686)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Image直接传入URL可能会带来的潜在性能问题，例如：(1) 大图加载时无法提前下载，白块显示的时间较长；(2) 小图设置同步加载，在弱网环境下，可能会阻塞UI线程造成冻屏问题；(3) 在快速滑动的瀑布流中，无法提前对即将要显示的图片进行下载，导致滑动白块较多。不同场景下，性能问题会有不同的表现，建议将网络下载部分与Image的显示剥离，可提前下载或者异步下载。如果图片加载过程中出现白色块，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-image-white-lump-solution",
            children: "Image白块解决方案"
          }), "。如果图片加载时间过长，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-texture-compression-improve-performance",
            children: "预置图片资源加载优化"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "src由有效值（可正常解析并加载的图片资源）切换为无效值（无法解析或加载的图片路径）时，组件保持显示此前成功加载的图片内容，不进行清除或重置操作。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当Image组件入参为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
            children: "PixelMap"
          }), "类型时，只有当PixelMap对象发生变化（即指向一个新的PixelMap实例），Image组件才能感知到数据的变化。仅修改PixelMap对象的内容（如像素值）而不更换对象引用，无法触发数据变化的感知。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Image组件入参为Base64字符串时，Base64字符串通用格式为data:image/subtype;base64,Base64EncodedData，其中subtype为类型声明，Base64EncodedData为数据对应的base64编码，其他为固定字符串。例如：png图像对应的入参为data:image/png;base64,iVBORw0KGgo...。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "image/subType用于声明数据内容的类型。Image组件不会强制校验声明的类型与Base64解码后的实际图片格式是否完全一致。在部分场景下，即使声明的类型与真实格式不一致，图片仍可能正常显示。为避免未来行为变化或未知问题，建议始终保持类型与实际图片格式一致。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Image组件不支持data:image/*;base64,Base64EncodedData的通配写法，subType必须显式声明具体的图片类型。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Image组件不支持通过Base64字符串形式加载SVG图片。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-common/ts-image-common#pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawabledescriptor10",
              children: "DrawableDescriptor"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "image12",
      children: "Image12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Image(src: PixelMap | ResourceStr | DrawableDescriptor | ImageContent)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["src新增", (0,jsx_runtime.jsx)(_components.a, {
        href: "#imagecontent12",
        children: "ImageContent"
      }), "类型，可指定对应的图形内容。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 12开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-common/ts-image-common#pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawabledescriptor10",
              children: "DrawableDescriptor"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "image12-1",
      children: "Image12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Image(src: PixelMap | ResourceStr | DrawableDescriptor, imageAIOptions: ImageAIOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Image新增", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-common/ts-image-common#imageaioptions12",
        children: "imageAIOptions"
      }), "参数，为组件设置AI分析选项。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-common/ts-image-common#pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawabledescriptor10",
              children: "DrawableDescriptor"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageAIOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-common/ts-image-common#imageaioptions12",
              children: "ImageAIOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给组件设置一个AI分析选项，通过此项可配置分析类型或绑定一个分析控制器。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["属性的详细使用指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-media-display/arkts-graphics-display#%E6%B7%BB%E5%8A%A0%E5%B1%9E%E6%80%A7",
        children: "添加属性"
      }), "。除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "外，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(326477)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Image组件不支持设置通用属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-color/ts-universal-attributes-foreground-color#foregroundcolor",
        children: "foregroundColor"
      }), "，可以通过Image组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fillcolor",
        children: "fillColor"
      }), "属性设置填充颜色。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alt",
      children: "alt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "alt(value: string | Resource | PixelMap)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图片加载过程中显示的占位图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["占位图支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#objectfit",
        children: "objectFit"
      }), "设置填充效果，与图片的填充效果一致。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时设置该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            }), "12+"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alt22",
      children: "alt22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "alt(src: ResourceStr | PixelMap | ImageAlt)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图片加载过程中和加载失败时的占位图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(582523)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#imagealt22",
        children: "ImageAlt"
      }), "配置占位图时，Image会根据用户配置的加载过程中和加载失败的占位图源生效，未配置时默认不显示。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["占位图支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#objectfit",
        children: "objectFit"
      }), "设置填充效果，与图片的填充效果一致。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时设置该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 22开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#imagealt22",
              children: "ImageAlt"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "objectfit",
      children: "objectFit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "objectFit(value: ImageFit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图片的填充效果。未通过该接口设置时，默认为ImageFit.Cover，保持宽高比进行缩小或者放大。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#imagefit",
              children: "ImageFit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片的填充效果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "imagematrix15",
      children: "imageMatrix15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "imageMatrix(matrix: ImageMatrix)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置图片的变换矩阵。通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#imagematrix15%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "ImageMatrix"
      }), "对象使用平移、旋转、缩放等函数，实现宫格缩略图的最佳呈现。SVG类型图源不支持该属性。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#resizable11",
        children: "resizable"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#objectrepeat",
        children: "objectRepeat"
      }), "属性时，该属性设置不生效。该属性只针对图源做处理，不会触发Image组件的回调事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该属性与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#objectfit",
        children: "objectFit"
      }), "属性强关联，仅在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#objectfit",
        children: "objectFit"
      }), "属性设置为ImageFit.MATRIX时生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 15开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#imagematrix15%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ImageMatrix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片的变换矩阵。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "objectrepeat",
      children: "objectRepeat"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "objectRepeat(value: ImageRepeat)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图片的重复样式，从中心点向两边重复，剩余空间不足放下一张图片时会截断。SVG类型图源不支持该属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时设置该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#imagerepeat",
              children: "ImageRepeat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片的重复样式。  默认值：ImageRepeat.NoRepeat"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interpolation",
      children: "interpolation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interpolation(value: ImageInterpolation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义图片插值效果。用于优化图片缩放时的锯齿问题。SVG类型图源不支持该属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时设置该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#imageinterpolation",
              children: "ImageInterpolation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片的插值效果。  默认值：ImageInterpolation.Low  设置undefined时，取值为ImageInterpolation.None。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rendermode",
      children: "renderMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "renderMode(value: ImageRenderMode)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图片的渲染模式。SVG类型图源不支持该属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#colorfilter9",
        children: "ColorFilter"
      }), "时，该属性设置不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时设置该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#imagerendermode",
              children: "ImageRenderMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片的渲染模式为原色或黑白。  默认值：ImageRenderMode.Original"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sourcesize",
      children: "sourceSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sourceSize(value: ImageSourceSize)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图片解码尺寸。仅在目标尺寸小于图源尺寸时生效。SVG类型图源和PixelMap资源不支持该属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时设置该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#imagesourcesize18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ImageSourceSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片解码尺寸参数，降低图片的分辨率，常用于需要让图片显示尺寸比组件尺寸更小的场景。和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#objectfit",
              children: "objectFit"
            }), "接口的ImageFit.None配合使用时可在组件内显示小图。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "matchtextdirection",
      children: "matchTextDirection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "matchTextDirection(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图片是否跟随系统语言方向，在RTL语言环境下显示镜像翻转显示效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时设置该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片是否跟随系统语言方向。  默认值：false，false表示图片不跟随系统语言方向，true表示图片跟随系统语言方向，在RTL语言环境下显示镜像翻转显示效果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fitoriginalsize",
      children: "fitOriginalSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fitOriginalSize(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图片的显示尺寸是否跟随图源尺寸。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片组件已设置width、height属性时，fitOriginalSize属性不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时设置该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片的显示尺寸是否跟随图源尺寸。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当不设置fitOriginalSize或者设置fitOriginalSize为false时，组件显示大小不跟随图源大小。  当设置fitOriginalSize为true时，组件显示大小跟随图源大小。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fillcolor",
      children: "fillColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fillColor(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置填充颜色。仅对SVG图源生效，设置后会替换SVG图片中所有可绘制元素的填充颜色。如需对png图片进行修改颜色，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#colorfilter9",
        children: "colorFilter"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时设置该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置填充颜色。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  默认不对组件进行填充。当传入异常值时，系统将使用默认的主题色：浅色模式下为黑色，深色模式下为白色。  从API version 21开始，当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#supportsvg221",
              children: "supportSvg2"
            }), "设置为true时，fillColor依赖SVG图源中fill属性的参数配置。当SVG图源中fill属性为'none'时，fillColor不生效。当supportSvg2设置为false时，fillColor生效，替换SVG图片中所有可绘制元素的填充颜色。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fillcolor15",
      children: "fillColor15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fillColor(color: ResourceColor|ColorContent)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置填充颜色。仅对SVG图源生效，设置后会替换SVG图片中所有可绘制元素的填充颜色。如需对png图片进行修改颜色，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#colorfilter9",
        children: "colorFilter"
      }), "。如果想重置填充颜色可以传入", (0,jsx_runtime.jsx)(_components.a, {
        href: "#colorcontent15",
        children: "ColorContent"
      }), "类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时设置该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 15开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#colorcontent15",
              children: "ColorContent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fillcolor20",
      children: "fillColor20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fillColor(color: ResourceColor|ColorContent|ColorMetrics)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置填充颜色。仅对SVG图源生效，设置后会替换SVG图片中所有可绘制元素的填充颜色。如需对png图片进行修改颜色，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#colorfilter9",
        children: "colorFilter"
      }), "。如果想重置填充颜色可以传入", (0,jsx_runtime.jsx)(_components.a, {
        href: "#colorcontent15",
        children: "ColorContent"
      }), "类型。支持通过传入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
        children: "ColorMetrics"
      }), "类型设置P3色域颜色值，可在支持高色域的设备上获得更丰富的色彩表现。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时设置该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#colorcontent15",
              children: "ColorContent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "autoresize",
      children: "autoResize"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "autoResize(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图片解码过程中是否对图源自动缩放。降采样解码时图片的部分信息丢失，因此可能会导致图片质量的下降（如：出现锯齿），这时可以选择把autoResize设为false，按原图尺寸解码，提升显示效果，但会增加内存占用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "原图尺寸和显示尺寸不匹配时，图片都会出现些许的失真、模糊。最佳清晰度配置建议："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片缩小显示时：.autoResize(false) + .interpolation(.Medium)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片放大显示时：.interpolation(.High)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "和SVG时设置该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片解码过程中是否对图源自动缩放。设置为true时，组件会根据显示区域的尺寸决定用于绘制的图源尺寸，有利于减少内存占用。如原图大小为800x1200，而显示区域大小为200x200，则图片会降采样解码到200x300的尺寸（实际计算过程中会依赖缩放和填充类型的配置，从而得到的计算结果会有差异），从而大幅度节省图片占用的内存。  默认值：false，false表示关闭图源自动缩放，true表示开启图源自动缩放。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syncload8",
      children: "syncLoad8+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "syncLoad(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否同步加载图片。建议加载尺寸较小的本地图片时将syncLoad设为true，因为耗时较短，在主线程上执行即可。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时设置该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果加载图片时出现闪烁，设置syncLoad为true。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-click-to-click-response-optimization#section715115119192",
        children: "并发优化"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否同步加载图片，默认是异步加载。同步加载时阻塞UI线程，不会显示占位图。  默认值：false，false表示异步加载图片，true表示同步加载图片。  阻塞主线程超过6s将导致AppFreeze，具体参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines",
              children: "AppFreeze（应用冻屏）检测"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "copyoption9",
      children: "copyOption9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "copyOption(value: CopyOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图片是否可复制。当copyOption设置为非CopyOptions.None时，支持使用长按、鼠标右击、快捷组合键'CTRL+C'等方式进行复制。SVG图片不支持复制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时设置该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#copyoptions9",
              children: "CopyOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片是否可复制。  默认值：CopyOptions.None"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "colorfilter9",
      children: "colorFilter9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "colorFilter(value: ColorFilter | DrawingColorFilter)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为图像设置颜色滤镜效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置该属性时，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rendermode",
        children: "renderMode"
      }), "属性设置不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#colorfilter9",
              children: "ColorFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawingcolorfilter12",
              children: "DrawingColorFilter12+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "颜色滤镜通过一个4x5的矩阵来设置图像的颜色滤镜，矩阵第一行表示R（红色）的向量值，第二行表示G（绿色）的向量值，第三行表示B（蓝色）的向量值，第四行表示A（透明度）的向量值，4行分别代表不同的RGBA的向量值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当矩阵对角线值为1，其余值为0时，保持图片原有色彩。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "计算规则："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果输入的滤镜矩阵如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(550546)/* ["default"] */.A) + "",
        width: "207",
        height: "123"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "像素点为[R, G, B, A]，色值的范围[0, 255]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "则过滤后的颜色为 [R’, G’, B’, A’]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(769404)/* ["default"] */.A) + "",
        width: "324",
        height: "127"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该属性的具体使用可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B9%E4%B8%BA%E5%9B%BE%E5%83%8F%E8%AE%BE%E7%BD%AE%E9%A2%9C%E8%89%B2%E6%BB%A4%E9%95%9C%E6%95%88%E6%9E%9C",
        children: "示例9"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "draggable9",
      children: "draggable9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "draggable(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件默认拖拽效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件默认拖拽效果，设置为true时，组件可拖拽，绑定的长按手势不生效。  API version 9及之前，默认值为false。API version 10及之后，默认值为true。  若用户需要设置自定义手势，则需要将draggable设置为false。设置为false之后，拖拽类事件不再触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enableanalyzer11",
      children: "enableAnalyzer11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableAnalyzer(enable: boolean)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置组件支持AI分析，当前支持主体识别、文字识别和对象查找等功能。具体使用指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/vision-kit-guide/vision-imageanalyzer",
        children: "AI识图"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不能和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-overlay/ts-universal-attributes-overlay#overlay",
        children: "overlay"
      }), "属性同时使用，两者同时设置时overlay中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
        children: "CustomBuilder"
      }), "属性将失效。该特性依赖设备能力。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["分析图像要求是静态非矢量图，即svg、gif等图像类型不支持分析，支持传入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
        children: "PixelMap"
      }), "进行分析，目前仅支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#pixelmapformat7",
        children: "RGBA_8888"
      }), "类型，使用方式见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B5%E5%BC%80%E5%90%AF%E5%9B%BE%E5%83%8Fai%E5%88%86%E6%9E%90",
        children: "示例5开启图像AI分析"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#alt",
        children: "alt"
      }), "占位图不支持分析，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#objectrepeat",
        children: "objectRepeat"
      }), "属性仅在取值为ImageRepeat.NoRepeat时支持分析，隐私遮罩属性", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-obscured/ts-universal-attributes-obscured#obscured",
        children: "obscured"
      }), "打开时不支持分析。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基于完整原始图像进行分析，设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
        children: "clip"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#margin",
        children: "margin"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border/ts-universal-attributes-border#borderradius",
        children: "borderRadius"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#position",
        children: "position"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#objectfit",
        children: "objectFit"
      }), "属性导致图像显示不完整，或使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rendermode",
        children: "renderMode"
      }), "设置蒙层，仍基于完整原始图像进行分析。 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#copyoption9",
        children: "copyOption"
      }), "属性不影响AI分析功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时设置该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(962580)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要配置权限：ohos.permission.INTERNET。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 12开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
          children: "attributeModifier"
        }), "中调用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image组件是否支持AI分析。  设置为true时，Image组件支持AI分析。设置为false时，Image组件不支持AI分析。  默认值：false"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resizable11",
      children: "resizable11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resizable(value: ResizableOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图像拉伸时可调整大小的图像选项。拉伸对拖拽缩略图以及占位图有效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置合法的 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#resizableoptions11",
        children: "ResizableOptions"
      }), " 时，objectRepeat属性、antialiased属性和orientation属性设置不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当设置 top +bottom 大于原图的高或者 left + right 大于原图的宽时 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#resizableoptions11",
        children: "ResizableOptions"
      }), " 属性设置不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "和SVG时设置该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(934334)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#resizableoptions11",
              children: "ResizableOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像拉伸时可调整大小的图像选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "privacysensitive12",
      children: "privacySensitive12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "privacySensitive(supported: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否支持卡片敏感隐私信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 12开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否支持卡片敏感隐私信息。  默认值为false，表示不支持卡片敏感隐私信息，当设置为true时，隐私模式下图片将显示为半透明底板样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置null则不敏感。  进入隐私模式需要卡片框架支持。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dynamicrangemode12",
      children: "dynamicRangeMode12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dynamicRangeMode(value: DynamicRangeMode)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置期望展示的图像动态范围。SVG类型图源不支持该属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在手机、PC/2in1和Tablet设备中可正常生效，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#dynamicrangemode12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "DynamicRangeMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像显示的动态范围。  默认值：DynamicRangeMode.STANDARD"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "orientation14",
      children: "orientation14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "orientation(orientation: ImageRotateOrientation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图像内容的显示方向。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该属性对", (0,jsx_runtime.jsx)(_components.a, {
        href: "#alt",
        children: "alt"
      }), "占位图不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 23开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "orientation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#imagerotateorientation14",
              children: "ImageRotateOrientation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像内容的显示方向。  仅支持静态位图的显示。  如果需要显示携带旋转角度信息或翻转信息的图片，建议使用ImageRotateOrientation.AUTO进行设置。  默认值：ImageRotateOrientation.UP  设置为undefined或null时，取值为ImageRotateOrientation.AUTO。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hdrbrightness19",
      children: "hdrBrightness19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hdrBrightness(brightness: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件在显示HDR图片时的亮度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SVG类型图源不支持该属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该属性与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#dynamicrangemode12",
        children: "dynamicRangeMode"
      }), "属性同时设置时，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#dynamicrangemode12",
        children: "dynamicRangeMode"
      }), "属性不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 19开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "brightness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于调整组件展示HDR图片的亮度，该接口仅对HDR图源生效。  默认值：1.0  取值范围：[0.0，1.0]，小于0和大于1.0时取1.0。0表示图片按照SDR亮度显示，1.0表示图片按照当前允许的最高HDR亮度显示。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "supportsvg221",
      children: "supportSvg221+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "supportSvg2(enable: boolean)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开启或关闭", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-svg2-capabilities/ts-image-svg2-capabilities",
        children: "SVG标签解析能力增强功能"
      }), "，开启后相关SVG图片显示效果会有变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Image组件创建后，不支持动态修改该属性的值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 21开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制是否开启SVG标签解析能力增强功能。  默认值：false  true：支持SVG解析新能力；false：保持原有SVG解析能力。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "contenttransition21",
      children: "contentTransition21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contentTransition(transition: ContentTransitionEffect)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片内容发生变化时，触发过渡动效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-common/ts-image-common#contenttransitioneffect21%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ContentTransitionEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["过渡动效的类型。  其中取值为ContentTransitionEffect.OPACITY表示淡入淡出效果，取值为ContentTransitionEffect.IDENTITY表示无动画效果。  默认值：ContentTransitionEffect.IDENTITY  设置为undefined或null时，取默认值ContentTransitionEffect.IDENTITY。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：对动态图片资源不生效。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "antialiased23",
      children: "antialiased23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "antialiased(isAntialiased: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置位图图片边缘是否开启抗锯齿。未通过该接口设置时，默认不开启抗锯齿。SVG类型图片不支持该属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(637627)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果图片设置了背景色属性(", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundcolor",
        children: "backgroundColor"
      }), ")，图片的抗锯齿属性设置为true不会影响背景色的锯齿效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#resizable11",
        children: "resizable"
      }), "一起使用时，该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isAntialiased"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置位图图片边缘是否开启抗锯齿。  true表示开启边缘抗锯齿；false表示不开启边缘抗锯齿。  设置为undefined时，不开启边缘抗锯齿。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "imagecontent12",
      children: "ImageContent12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定图像内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 12开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EMPTY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空图像。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "imageinterpolation",
      children: "ImageInterpolation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片的插值效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最近邻插值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "双线性插值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MipMap插值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cubic插值，插值质量最高，可能会影响图片渲染的速度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "imagerendermode",
      children: "ImageRenderMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片的渲染模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Original"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "原色渲染模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "黑白渲染模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resizableoptions11",
      children: "ResizableOptions11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像拉伸时可调整大小的图像选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#edgewidths9",
              children: "EdgeWidths"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["边框宽度类型，用于描述组件边框不同方向的宽度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  只有当bottom和right同时大于0时，该属性生效。  当设置了top时，图片顶部拉伸，图片的像素值保持不变。  当设置了right时，图片右部拉伸，图片的像素值保持不变。  当设置了bottom时，图片底部拉伸，图片的像素值保持不变。  当设置了left时，图片左部拉伸，图片的像素值保持不变。  每个方向的宽度默认值为0，传入数字时默认单位为vp。  设置了EdgeWidths后的效果如图1（设置EdgeWidths效果图）所示。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lattice12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawinglattice12",
              children: "DrawingLattice"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["矩形网格对象。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  通过@ohos.graphics.drawing的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-lattice/arkts-apis-graphics-drawing-lattice#createimagelattice12",
              children: "createImageLattice"
            }), "接口创建Lattice类型作为入参。将图像划分为矩形网格，同时处于偶数列和偶数行上的网格图像是固定的，不会被拉伸。其他位置的网格图像会根据slice进行拉伸。  该参数对", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundimageresizable12",
              children: "backgroundImageResizable"
            }), "接口不生效。  传入数字时默认单位为px。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 设置EdgeWidths效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(158592)/* ["default"] */.A) + "",
        width: "547",
        height: "230"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "imagealt22",
      children: "ImageAlt22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图片占位图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 22开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "placeholder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dynamicrangemode12枚举说明",
      children: "DynamicRangeMode12+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "期望展示的图像动态范围。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不受限动态范围，最大限度进行图片提亮。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONSTRAINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "受限动态范围，受限进行图片提亮。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STANDARD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标准动态范围，不进行图片提亮。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "imagerotateorientation14",
      children: "ImageRotateOrientation14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "期望的图像内容显示方向。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 23开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["读取图片携带的EXIF元数据作为显示方向，支持旋转和镜像。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#drawabledescriptor10",
              children: "DrawableDescriptor"
            }), "类型的图片不包含头信息，调用该接口时图片显示效果不变化。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 14开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认按照当前图片的像素数据进行显示，不做任何处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 14开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将当前图片顺时针旋转90度后显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 14开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将当前图片顺时针旋转180度后显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 14开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将当前图片顺时针旋转270度后显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 14开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UP_MIRRORED20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将当前图片水平翻转后显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RIGHT_MIRRORED20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将当前图片水平翻转再顺时针旋转90度后显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOWN_MIRRORED20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将当前图片垂直翻转后显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT_MIRRORED20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将当前图片水平翻转再顺时针旋转270度后显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "imagesourcesize18对象说明",
      children: "ImageSourceSize18+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片解码尺寸。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(870854)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 18开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片解码尺寸宽度。  单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片解码尺寸高度。  单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "drawabledescriptor10",
      children: "DrawableDescriptor10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type DrawableDescriptor = DrawableDescriptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "作为Image组件的入参对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#drawabledescriptor",
              children: "DrawableDescriptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个DrawableDescriptor对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "drawingcolorfilter12",
      children: "DrawingColorFilter12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type DrawingColorFilter = ColorFilter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "颜色滤波器对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-colorfilter/arkts-apis-graphics-drawing-colorfilter",
              children: "ColorFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个颜色滤波器。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "drawinglattice12",
      children: "DrawingLattice12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type DrawingLattice = Lattice"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将图片按照矩形网格进行划分。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-lattice/arkts-apis-graphics-drawing-lattice",
              children: "Lattice"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个矩阵网格对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "imagematrix15对象说明",
      children: "ImageMatrix15+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type ImageMatrix = Matrix4Transit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前的矩阵对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 15开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-matrix4/js-apis-matrix4#matrix4transit",
              children: "Matrix4Transit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前的矩阵对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "colorcontent15",
      children: "ColorContent15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定颜色填充内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 15开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ORIGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ColorContent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["重置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fillcolor",
              children: "fillColor"
            }), "接口，效果上与不设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fillcolor",
              children: "fillColor"
            }), "一致。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "外，还支持以下事件："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oncomplete",
      children: "onComplete"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onComplete(callback: (event?: { width: number, height: number, componentWidth: number, componentHeight: number, loadingStatus: number,contentWidth: number, contentHeight: number, contentOffsetX: number, contentOffsetY: number }) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片数据加载成功和解码成功时均触发该回调，返回成功加载的图片尺寸。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时该事件不触发。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片的宽。  单位：px  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片的高。  单位：px  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "componentWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件的宽。  单位：px  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "componentHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件的高。  单位：px  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "loadingStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片加载成功的状态值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  返回的状态值为0时，表示图片数据加载成功。返回的状态值为1时，表示图片解码成功。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentWidth10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片实际绘制的宽度。  单位：px  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅在loadingStatus返回1时有效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 10开始，该接口支持在ArkTS卡片中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentHeight10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片实际绘制的高度。  单位：px  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅在loadingStatus返回1时有效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 10开始，该接口支持在ArkTS卡片中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentOffsetX10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实际绘制内容相对于组件自身的x轴偏移。  单位：px  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅在loadingStatus返回1时有效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 10开始，该接口支持在ArkTS卡片中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentOffsetY10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实际绘制内容相对于组件自身的y轴偏移。  单位：px  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅在loadingStatus返回1时有效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 10开始，该接口支持在ArkTS卡片中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onerror9",
      children: "onError9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onError(callback: ImageErrorCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片加载异常时触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时该事件不触发。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#imageerrorcallback9",
              children: "ImageErrorCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片加载异常时触发的回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  建议开发者使用此回调，可快速确认图片加载失败时的具体原因，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#imageerror9",
              children: "ImageError"
            }), "的错误信息详细介绍。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onfinish",
      children: "onFinish"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onFinish(event: () => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当加载的源文件为带动效的SVG格式图片时，SVG动效播放完成时会触发这个回调。如果动效为无限循环动效，则不会触发这个回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅支持SVG格式的图片。当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时该事件不触发。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当加载的源文件为带动效的SVG格式图片时，SVG动效播放完成时会触发这个回调。如果动效为无限循环动效，则不会触发这个回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "imageerrorcallback9",
      children: "ImageErrorCallback9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type ImageErrorCallback = (error: ImageError) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片加载异常时触发此回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时该事件不触发。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#imageerror9",
              children: "ImageError"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片加载异常时触发回调的返回对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "imageerror9",
      children: "ImageError9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片加载异常时触发回调的返回对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当组件的参数类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "时该事件不触发。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "componentWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件的宽。  单位：px  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "componentHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件的高。  单位：px  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "message10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["报错信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 10开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "error20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#businesserror20",
              children: "BusinessError<void>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片加载异常返回的报错信息，其中code为错误码，message为错误信息。报错信息请参考以下错误信息的详细介绍。  默认值：{ code : -1, message : \"\" }  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 20开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "downloadInfo23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#requestdownloadinfo23",
              children: "RequestDownloadInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["网络图片下载的详细信息，包含下载资源、网络、性能等信息。当图片来源为网络图片且下载失败时将携带此字段。  默认值：null  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 23开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 23开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "businesserror20",
      children: "BusinessError20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type BusinessError<T = void> = BusinessError<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片加载异常返回的错误信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 20开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#businesserror",
              children: "BusinessError<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片加载异常返回的错误信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是错误信息的详细介绍：ImageError的error属性为错误信息对象，其中code为错误码，message为错误信息。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息发生阶段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "图片加载类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "101000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unknown source type."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sync http task of uri cancelled."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sync http task of uri failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "async http task of uri cancelled."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "async http task of uri failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wrong code format."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "base64字符串文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "decode base64 image failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "base64字符串文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102050"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "path is too long."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "沙箱文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102051"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "read data failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "沙箱文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102070"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "get image data by name failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102071"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "get image data by id failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uri is invalid."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102090"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uri is invalid."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包内文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102091"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "get asset failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包内文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "open file failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体库文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102111"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "get file stat failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体库文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102112"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "read file failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体库文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102130"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "decoded data is empty."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体库缩略图文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102131"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "load shared memory image data timeout."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "共享内存文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "103100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "make svg dom failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "矢量图文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "103200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image data size is invalid."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "位图文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "111000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "image source create failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据解码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "位图文件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "111001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pixelmap create failed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据解码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "位图文件"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requestdownloadinfo23",
      children: "RequestDownloadInfo23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type RequestDownloadInfo = DownloadInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于描述网络图片加载失败或异常时的下载信息。该对象包含本次下载任务的资源信息、网络信息以及性能统计信息，可用于定位加载异常的具体原因。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 23开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request-cachedownload/js-apis-request-cachedownload#downloadinfo20",
              children: "DownloadInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络资源加载异常时返回的下载信息，包含资源信息、网络请求信息与性能统计信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1加载基本类型图片",
      children: "示例1（加载基本类型图片）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过传入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
        children: "Resource"
      }), "资源，加载png、gif、svg和jpg等基本类型的图片。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ImageExample1 {\n  build() {\n    Column() {\n      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Start }) {\n        Row() {\n          // 加载png格式图片\n          // $r('app.media.ic_camera_master_ai_leaf')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.ic_camera_master_ai_leaf'))\n            .width(110).height(110).margin(15)\n            .overlay('png', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n          // 加载gif格式图片\n          // $r('app.media.loading')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.loading'))\n            .width(110).height(110).margin(15)\n            .overlay('gif', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n        }\n        Row() {\n          // 加载svg格式图片\n          // $r('app.media.ic_camera_master_ai_clouded')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.ic_camera_master_ai_clouded'))\n            .width(110).height(110).margin(15)\n            .overlay('svg', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n          // 加载jpg格式图片\n          // $r('app.media.ic_public_favor_filled')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.ic_public_favor_filled'))\n            .width(110).height(110).margin(15)\n            .overlay('jpg', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n        }\n      }\n    }.height(320).width(360).padding({ right: 10, top: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(902379)/* ["default"] */.A) + "",
        width: "404",
        height: "439"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2下载与显示静态网络图片",
      children: "示例2（下载与显示静态网络图片）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["加载网络图片时，默认网络超时是5分钟，建议使用alt配置加载时的占位图。使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/network-kit/network-kit-data-transmission/http-request",
        children: "HTTP"
      }), "工具包发送网络请求，接着将返回的数据解码为Image组件中的PixelMap，加载gif到PixelMap时，gif显示为静态图。图片开发可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-overview",
        children: "Image Kit简介"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用网络图片时，需要申请权限ohos.permission.INTERNET。具体申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { http } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { image } from '@kit.ImageKit';\n\n@Entry\n@Component\nstruct ImageExample2 {\n  @State pixelMapImg: PixelMap | undefined = undefined;\n\n  aboutToAppear() {\n    this.requestImageUrl('https://www.example.com/xxx.png'); // 请填写一个具体的网络图片地址\n  }\n\n  requestImageUrl(url: string) {\n    http.createHttp().request(url, (error: BusinessError, data: http.HttpResponse) => {\n      if (error) {\n        console.error(`request image failed: url: ${url}, code: ${error.code}, message: ${error.message}`);\n      } else {\n        let imgData: ArrayBuffer = data.result as ArrayBuffer;\n        console.info(`request image success, size: ${imgData.byteLength}`);\n        let imgSource: image.ImageSource = image.createImageSource(imgData);\n        class sizeTmp {\n          height: number = 100;\n          width: number = 100;\n        }\n        let options: Record<string, number | boolean | sizeTmp> = {\n          'alphaType': 0,\n          'editable': false,\n          'pixelFormat': 3,\n          'scaleMode': 1,\n          'size': { height: 100, width: 100 }\n        }\n        imgSource.createPixelMap(options).then((pixelMap: PixelMap) => {\n          console.error('image createPixelMap success');\n          this.pixelMapImg = pixelMap;\n          imgSource.release();\n        }).catch(() => {\n          imgSource.release();\n        })\n      }\n    })\n  }\n\n  build() {\n    Column() {\n      Image(this.pixelMapImg)\n        // $r('app.media.img')需要替换为开发者所需的图像资源文件。\n        .alt($r('app.media.img'))\n        .objectFit(ImageFit.None)\n        .width('100%')\n        .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(502383)/* ["default"] */.A) + "",
        width: "265",
        height: "197"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3下载与显示网络gif图片",
      children: "示例3（下载与显示网络gif图片）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request-cachedownload/js-apis-request-cachedownload#cachedownloaddownload",
        children: "cacheDownload.download"
      }), "接口下载网络gif图片。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用网络图片时，需要申请权限ohos.permission.INTERNET。具体申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cacheDownload } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  @State src: string = 'https://www.example.com/xxx.gif'; // 请填写一个具体的网络图片地址。\n\n  async aboutToAppear(): Promise<void> {\n    // 提供缓存下载任务的配置选项。\n    let options: cacheDownload.CacheDownloadOptions = {};\n    try {\n      // 进行缓存下载，资源若下载成功会被缓存到应用内存或应用沙箱目录的特定文件中。\n      cacheDownload.download(this.src, options);\n      console.info(`success to download the resource. `);\n    } catch (err) {\n      console.error(`Failed to download the resource: code: ${err.code}, message: ${err.message}`);\n    }\n  }\n\n  build() {\n    Column() {\n      // 若src指定的是网络图片且已成功下载并缓存，则本次显示无需重复下载。\n      Image(this.src)\n        .width(100)\n        .height(100)\n        .objectFit(ImageFit.Cover)\n        .borderWidth(1)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4为图片添加事件",
      children: "示例4（为图片添加事件）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例为图片添加", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click#onclick",
        children: "onClick"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onfinish",
        children: "onFinish"
      }), "事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ImageExample3 {\n  // $r('app.media.earth')需要替换为开发者所需的图像资源文件。\n  private imageOne: Resource = $r('app.media.earth');\n  // $r('app.media.star')需要替换为开发者所需的图像资源文件。\n  private imageTwo: Resource = $r('app.media.star');\n  // $r('app.media.moveStar')需要替换为开发者所需的图像资源文件。\n  private imageThree: Resource = $r('app.media.moveStar');\n  @State src: Resource = this.imageOne;\n  @State src2: Resource = this.imageThree;\n  build(){\n    Column(){\n      // 为图片添加点击事件，点击完成后加载特定图片\n      Image(this.src)\n        .width(100)\n        .height(100)\n        .onClick(() => {\n          this.src = this.imageTwo;\n        })\n\n      // 当加载图片为SVG格式时\n      Image(this.src2)\n        .width(100)\n        .height(100)\n        .onFinish(() => {\n          // SVG动效播放完成时加载另一张图片\n          this.src2 = this.imageOne;\n        })\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(355313)/* ["default"] */.A) + "",
        width: "341",
        height: "321"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5开启图像ai分析",
      children: "示例5（开启图像AI分析）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enableanalyzer11",
        children: "enableAnalyzer"
      }), "接口开启图像AI分析。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { image } from '@kit.ImageKit'\n\n@Entry\n@Component\nstruct ImageExample4 {\n  @State imagePixelMap: image.PixelMap | undefined = undefined\n  private aiController: ImageAnalyzerController = new ImageAnalyzerController()\n  private options: ImageAIOptions = {\n    types: [ImageAnalyzerType.SUBJECT, ImageAnalyzerType.TEXT],\n    aiController: this.aiController\n  }\n\n  async aboutToAppear() {\n    this.imagePixelMap = await this.getPixmapFromMedia($r('app.media.img'))\n  }\n\n  build() {\n    Column() {\n      Image(this.imagePixelMap, this.options)\n        .enableAnalyzer(true)\n        .objectFit(ImageFit.Contain)\n        .width(200)\n        .height(300)\n        .margin({left: 10})\n      Button('getTypes')\n        .onClick(() => {\n          this.aiController.getImageAnalyzerSupportTypes()\n        })\n    }\n  }\n  private async getPixmapFromMedia(resource: Resource) {\n    let unit8Array = await this.getUIContext().getHostContext()?.resourceManager?.getMediaContent({\n      bundleName: resource.bundleName,\n      moduleName: resource.moduleName,\n      id: resource.id\n    })\n    let imageSource = image.createImageSource(unit8Array?.buffer.slice(0, unit8Array.buffer.byteLength))\n    let createPixelMap: image.PixelMap = await imageSource.createPixelMap({\n      desiredPixelFormat: image.PixelMapFormat.RGBA_8888\n    })\n    await imageSource.release()\n    return createPixelMap\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(639405)/* ["default"] */.A) + "",
        width: "359",
        height: "363"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6通过slice拉伸图片",
      children: "示例6（通过slice拉伸图片）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#resizable11",
        children: "resizable"
      }), "属性的slice选项，调整不同方向对图片进行拉伸。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State top: number = 10;\n  @State bottom: number = 10;\n  @State left: number = 10;\n  @State right: number = 10;\n\n  build() {\n    Column({ space: 5 }) {\n      // 原图效果\n      // $r('app.media.landscape')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.landscape'))\n        .width(200).height(200)\n        .border({ width: 2, color: Color.Pink })\n        .objectFit(ImageFit.Contain)\n\n      // 图像拉伸效果，设置resizable属性，对图片不同方向进行拉伸\n      // $r('app.media.landscape')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.landscape'))\n        .resizable({\n          slice: {\n            // 传入数字时默认为vp单位，但在不同设备上vp单位会被解析成不同大小的px单位，可以根据需要选择传入的单位\n            left: `${this.left}px`,\n            right: `${this.right}px`,\n            top: `${this.top}px`,\n            bottom: `${this.bottom}px`\n          }\n        })\n        .width(200)\n        .height(200)\n        .border({ width: 2, color: Color.Pink })\n        .objectFit(ImageFit.Contain)\n\n      Row() {\n        Button('add top to ' + this.top).fontSize(10)\n          .onClick(() => {\n            this.top += 10;\n          })\n        Button('add bottom to ' + this.bottom).fontSize(10)\n          .onClick(() => {\n            this.bottom += 10;\n          })\n      }\n\n      Row() {\n        Button('add left to ' + this.left).fontSize(10)\n          .onClick(() => {\n            this.left += 10;\n          })\n        Button('add right to ' + this.right).fontSize(10)\n          .onClick(() => {\n            this.right += 10;\n          })\n      }\n\n    }\n    .justifyContent(FlexAlign.Start).width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(599306)/* ["default"] */.A) + "",
        width: "375",
        height: "686"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7通过lattice拉伸图片",
      children: "示例7（通过lattice拉伸图片）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#resizable11",
        children: "resizable"
      }), "属性的lattice选项，使用矩形网格对象对图片进行拉伸。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { drawing } from '@kit.ArkGraphics2D';\n\n@Entry\n@Component\nstruct drawingLatticeTest {\n  private xDivs: Array<number> = [1, 2, 200];\n  private yDivs: Array<number> = [1, 2, 200];\n  private fXCount: number = 3;\n  private fYCount: number = 3;\n  private drawingLatticeFirst: DrawingLattice =\n    drawing.Lattice.createImageLattice(this.xDivs, this.yDivs, this.fXCount, this.fYCount);\n\n  build() {\n    Scroll() {\n      Column({ space: 10 }) {\n        Text('Original Image').fontSize(20).fontWeight(700)\n        Column({ space: 10 }) {\n          // $r('app.media.mountain')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.mountain'))\n            .width(260).height(260)\n        }.width('100%')\n\n        Text('Resize by lattice').fontSize(20).fontWeight(700)\n        Column({ space: 10 }) {\n          // $r('app.media.mountain')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.mountain'))\n            .objectRepeat(ImageRepeat.X)\n            .width(260)\n            .height(260)\n            .resizable({\n              lattice: this.drawingLatticeFirst\n            })\n        }.width('100%')\n      }.width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(785960)/* ["default"] */.A) + "",
        width: "347",
        height: "760"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8播放pixelmap数组动画",
      children: "示例8（播放PixelMap数组动画）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-drawabledescriptor/js-apis-arkui-drawabledescriptor#animateddrawabledescriptor12",
        children: "AnimatedDrawableDescriptor"
      }), "对象播放PixelMap数组动画。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AnimationOptions, AnimatedDrawableDescriptor } from '@kit.ArkUI';\nimport { image } from '@kit.ImageKit';\n\n@Entry\n@Component\nstruct ImageExample {\n  pixelMaps: PixelMap[] = [];\n  @State options: AnimationOptions = { iterations: 1 };\n  @State animated: AnimatedDrawableDescriptor | undefined = undefined;\n\n  async aboutToAppear() {\n    this.pixelMaps = await this.getPixelMaps();\n    this.animated = new AnimatedDrawableDescriptor(this.pixelMaps, this.options);\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Image(this.animated)\n          .width('500px').height('500px')\n          .onFinish(() => {\n            console.info('finish');\n          })\n      }.height('50%')\n\n      Row() {\n        Button('once').width(100).padding(5).onClick(() => {\n          this.options = { iterations: 1 };\n          this.animated = new AnimatedDrawableDescriptor(this.pixelMaps, this.options);\n        }).margin(5)\n        Button('infinite').width(100).padding(5).onClick(() => {\n          this.options = { iterations: -1 };\n          this.animated = new AnimatedDrawableDescriptor(this.pixelMaps, this.options);\n        }).margin(5)\n      }\n    }.width('50%')\n  }\n\n  private async getPixmapListFromMedia(resource: Resource) {\n    let unit8Array = await this.getUIContext().getHostContext()?.resourceManager?.getMediaContent(resource.id);\n    let imageSource = image.createImageSource(unit8Array?.buffer.slice(0, unit8Array.buffer.byteLength));\n    let createPixelMap: image.PixelMap[] = await imageSource.createPixelMapList({\n      desiredPixelFormat: image.PixelMapFormat.RGBA_8888\n    });\n    await imageSource.release();\n    return createPixelMap;\n  }\n\n  private async getPixmapFromMedia(resource: Resource) {\n    let unit8Array = await this.getUIContext().getHostContext()?.resourceManager?.getMediaContent(resource.id);\n    let imageSource = image.createImageSource(unit8Array?.buffer.slice(0, unit8Array.buffer.byteLength));\n    let createPixelMap: image.PixelMap = await imageSource.createPixelMap({\n      desiredPixelFormat: image.PixelMapFormat.RGBA_8888\n    });\n    await imageSource.release();\n    return createPixelMap;\n  }\n\n  private async getPixelMaps() {\n    // $r('app.media.mountain')需要替换为开发者所需的图像资源文件。\n    let myPixelMaps: PixelMap[] = await this.getPixmapListFromMedia($r('app.media.mountain')); // 添加图片\n    // $r('app.media.sky')需要替换为开发者所需的图像资源文件。\n    myPixelMaps.push(await this.getPixmapFromMedia($r('app.media.sky')));\n    // $r('app.media.clouds')需要替换为开发者所需的图像资源文件。\n    myPixelMaps.push(await this.getPixmapFromMedia($r('app.media.clouds')));\n    // $r('app.media.landscape')需要替换为开发者所需的图像资源文件。\n    myPixelMaps.push(await this.getPixmapFromMedia($r('app.media.landscape')));\n    return myPixelMaps;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(654100)/* ["default"] */.A) + "",
        width: "356",
        height: "460"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9为图像设置颜色滤镜效果",
      children: "示例9（为图像设置颜色滤镜效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#colorfilter9",
        children: "colorFilter"
      }), "属性实现了给图像设置颜色滤镜效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { drawing, common2D } from '@kit.ArkGraphics2D';\n\n@Entry\n@Component\nstruct ImageExample3 {\n  // 当加载图片为svg格式时\n  // $r('app.media.svg1')需要替换为开发者所需的图像资源文件。\n  private imageOne: Resource = $r('app.media.svg1');\n  // $r('app.media.1')需要替换为开发者所需的图像资源文件。\n  private imageTwo: Resource = $r('app.media.1');\n  @State src: Resource = this.imageOne;\n  @State src2: Resource = this.imageTwo;\n  private colorFilterMatrix: number[] = [1, 0, 0, 0, 0.5,\n                                         0, 1, 0, 0, 0,\n                                         0, 0, 1, 0, 0,\n                                         0, 0, 0, 1, 0];\n  private color: common2D.Color = {\n    alpha: 255,\n    red: 255,\n    green: 0,\n    blue: 0\n  };\n  @State drawingColorFilterFirst: ColorFilter | undefined = undefined;\n  @State drawingColorFilterSecond: ColorFilter | undefined = undefined;\n  @State drawingColorFilterThird: ColorFilter | undefined = undefined;\n\n  build() {\n    Column() {\n      Image(this.src)\n        .width(100)\n        .height(100)\n        .colorFilter(this.drawingColorFilterFirst)\n        .onClick(()=>{\n          this.drawingColorFilterFirst =\n            drawing.ColorFilter.createBlendModeColorFilter(this.color, drawing.BlendMode.SRC_IN);\n        })\n\n      Image(this.src2)\n        .width(100)\n        .height(100)\n        .colorFilter(this.drawingColorFilterSecond)\n        .onClick(()=>{\n          this.drawingColorFilterSecond = new ColorFilter(this.colorFilterMatrix);\n        })\n\n      // 当加载图片为svg格式时\n      // $r('app.media.svg2')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.svg2'))\n        .width(110)\n        .height(110)\n        .margin(15)\n        .colorFilter(this.drawingColorFilterThird)\n        .onClick(()=>{\n          this.drawingColorFilterThird =\n            drawing.ColorFilter.createBlendModeColorFilter(this.color, drawing.BlendMode.SRC_IN);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(633740)/* ["default"] */.A) + "",
        width: "139",
        height: "343"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10为图像设置填充效果",
      children: "示例10（为图像设置填充效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#objectfit",
        children: "objectFit"
      }), "属性为图像设置填充效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ImageExample{\n  build() {\n    Column() {\n      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Start }) {\n        Row() {\n          // 加载png格式图片\n          // $r('app.media.sky')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.sky'))\n            .width(110).height(110).margin(15)\n            .overlay('png', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n            .border({ width: 2, color: Color.Pink })\n            .objectFit(ImageFit.TOP_START)\n          // 加载gif格式图片\n          // $r('app.media.loading')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.loading'))\n            .width(110).height(110).margin(15)\n            .overlay('gif', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n            .border({ width: 2, color: Color.Pink })\n            .objectFit(ImageFit.BOTTOM_START)\n        }\n        Row() {\n          // 加载svg格式图片\n          // $r('app.media.svg')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.svg'))\n            .width(110).height(110).margin(15)\n            .overlay('svg', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n            .border({ width: 2, color: Color.Pink })\n            .objectFit(ImageFit.TOP_END)\n          // 加载jpg格式图片\n          // $r('app.media.jpg')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.jpg'))\n            .width(110).height(110).margin(15)\n            .overlay('jpg', { align: Alignment.Bottom, offset: { x: 0, y: 20 } })\n            .border({ width: 2, color: Color.Pink })\n            .objectFit(ImageFit.CENTER)\n        }\n      }\n    }.height(320).width(360).padding({ right: 10, top: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(732982)/* ["default"] */.A) + "",
        width: "258",
        height: "255"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例11切换显示不同类型图片",
      children: "示例11（切换显示不同类型图片）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例展示了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
        children: "ResourceStr"
      }), "类型与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#imagecontent12",
        children: "ImageContent"
      }), "类型作为数据源的显示图片效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ImageContentExample {\n  @State imageSrcIndex: number = 0;\n  // $r('app.media.app_icon')需要替换为开发者所需的图像资源文件。\n  @State imageSrcList: (ResourceStr | ImageContent)[] = [$r('app.media.app_icon'), ImageContent.EMPTY];\n\n  build() {\n    Column({ space: 10 }) {\n      Image(this.imageSrcList[this.imageSrcIndex])\n        .width(100)\n        .height(100)\n      Button('点击切换Image的src', { type: ButtonType.Capsule, stateEffect: false })\n        .height(50)\n        .onClick(() => {\n          this.imageSrcIndex = (this.imageSrcIndex + 1) % this.imageSrcList.length;\n        })\n    }.width('100%')\n    .padding(20)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(768305)/* ["default"] */.A) + "",
        width: "294",
        height: "235"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例12配置隐私隐藏",
      children: "示例12（配置隐私隐藏）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#privacysensitive12",
        children: "privacySensitive"
      }), "属性展示了如何配置隐私隐藏，效果展示需要卡片框架支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ImageExample {\n  build() {\n    Column({ space: 10 }) {\n      // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.startIcon'))\n        .width(50)\n        .height(50)\n        .margin({top :30})\n        .privacySensitive(true)\n    }\n    .alignItems(HorizontalAlign.Center)\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(993281)/* ["default"] */.A) + "",
        width: "60",
        height: "64"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例13为图片设置扫光效果",
      children: "示例13（为图片设置扫光效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-datapanel/ts-basic-components-datapanel#lineargradient10",
        children: "linearGradient"
      }), "接口和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#animateto",
        children: "animateTo()"
      }), "接口实现了给图片设置扫光效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { curves } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct ImageExample11 {\n  private curve = curves.cubicBezierCurve(0.33, 0, 0.67, 1);\n  @State moveImg: string[] = ['imageScanEffect'];\n  @State moveImgVisible: Visibility = Visibility.Visible;\n  @State durationTime: number = 1500;\n  @State iterationsTimes: number = -1;\n  @State private opacityValue: number = 0.5;\n  @State imageWidth: number = 450;\n  @State visible: Visibility = Visibility.Hidden;\n  @State stackBackgroundColor: string = '#E1E4E9';\n  @State linePositionX: number = 0 - this.imageWidth;\n  @State linePositionY: number = 0;\n  @State imgResource: Resource | undefined = undefined;\n\n  startupAnimate() {\n    this.moveImg.pop();\n    this.moveImg.push('imageScanEffect');\n    setTimeout(() => {\n      // $r('app.media.img')需要替换为开发者所需的图像资源文件。\n      this.imgResource = $r('app.media.img');\n    }, 3000);\n    this.getUIContext()?.animateTo({\n      duration: this.durationTime,\n      curve: this.curve,\n      tempo: 1,\n      iterations: this.iterationsTimes,\n      delay: 0\n    }, () => {\n      this.linePositionX = this.imageWidth;\n    })\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Stack() {\n          Image(this.imgResource)\n            .width(this.imageWidth)\n            .height(200)\n            .objectFit(ImageFit.Contain)\n            .visibility(this.visible)\n            .onComplete(() => {\n              this.visible = Visibility.Visible;\n              this.moveImg.pop();\n            })\n            .onError(() =>{\n              setTimeout(() => {\n                this.visible = Visibility.Visible;\n                this.moveImg.pop();\n              }, 2600)\n            })\n          ForEach(this.moveImg, (item: string) => {\n            Row()\n              .width(this.imageWidth)\n              .height(200)\n              .visibility(this.moveImgVisible)\n              .position({ x: this.linePositionX, y: this.linePositionY })\n              .linearGradient({\n                direction: GradientDirection.Right,\n                repeating: false,\n                colors: [[0xE1E4E9, 0], [0xFFFFFF, 0.75], [0xE1E4E9, 1]]\n              })\n              .opacity(this.opacityValue)\n          })\n        }\n        .backgroundColor(this.visible ? this.stackBackgroundColor : undefined)\n        .margin({top: 20, left: 20, right: 20})\n        .borderRadius(20)\n        .clip(true)\n        .onAppear(() => {\n          this.startupAnimate();\n        })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(481724)/* ["default"] */.A) + "",
        width: "284",
        height: "181"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例14为图片添加变换效果",
      children: "示例14（为图片添加变换效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#imagematrix15",
        children: "imageMatrix"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#objectfit",
        children: "objectFit"
      }), "属性，为图片添加旋转和平移的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 15开始，新增imageMatrix属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { matrix4 } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Test {\n  private matrix1 = matrix4.identity()\n    .translate({ x: -400, y: -750 })\n    .scale({ x: 0.5, y: 0.5 })\n    .rotate({\n      x: 2,\n      y: 0.5,\n      z: 3,\n      centerX: 10,\n      centerY: 10,\n      angle: -10\n    })\n\n  build() {\n    Row() {\n      Column({ space: 50 }) {\n        Column({ space: 5 }) {\n          // $r('app.media.example')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.example'))\n            .border({ width:2, color: Color.Black })\n            .objectFit(ImageFit.Contain)\n            .width(150)\n            .height(150)\n          Text('图片无变换')\n            .fontSize('25px')\n        }\n        Column({ space: 5 }) {\n          // $r('app.media.example')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.example'))\n            .border({ width:2, color: Color.Black })\n            .objectFit(ImageFit.None)\n            .translate({ x: 10, y: 10 })\n            .scale({ x: 0.5, y: 0.5 })\n            .width(100)\n            .height(100)\n          Text('Image直接变换，默认显示图源左上角。')\n            .fontSize('25px')\n        }\n        Column({ space: 5 }) {\n          // $r('app.media.example')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.example'))\n            .objectFit(ImageFit.MATRIX)\n            .imageMatrix(this.matrix1)\n            .border({ width:2, color: Color.Black })\n            .width(150)\n            .height(150)\n          Text('通过imageMatrix变换，调整图源位置，实现最佳呈现。')\n            .fontSize('25px')\n        }\n      }\n      .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(814573)/* ["default"] */.A) + "",
        width: "460",
        height: "572"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例15通过sourcesize设置图片解码尺寸",
      children: "示例15（通过sourceSize设置图片解码尺寸）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#sourcesize",
        children: "sourceSize"
      }), "接口自定义图片的解码尺寸。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State borderRadiusValue: number = 10;\n  build() {\n    Column() {\n      // $r('app.media.sky')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.sky'))\n        .sourceSize({width:1393, height:1080})\n        .height(300)\n        .width(300)\n        .objectFit(ImageFit.Contain)\n        .borderWidth(1)\n      // $r('app.media.sky')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.sky'))\n        .sourceSize({width:13, height:10})\n        .height(300)\n        .width(300)\n        .objectFit(ImageFit.Contain)\n        .borderWidth(1)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(181680)/* ["default"] */.A) + "",
        width: "419",
        height: "817"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例16通过rendermode设置图片的渲染模式",
      children: "示例16（通过renderMode设置图片的渲染模式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#rendermode",
        children: "renderMode"
      }), "接口设置图片渲染模式为黑白模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State borderRadiusValue: number = 10;\n  build() {\n    Column() {\n      // $r('app.media.sky')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.sky'))\n        .renderMode(ImageRenderMode.Template)\n        .height(300)\n        .width(300)\n        .objectFit(ImageFit.Contain)\n        .borderWidth(1)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(844364)/* ["default"] */.A) + "",
        width: "431",
        height: "444"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例17通过objectrepeat设置图片的重复样式",
      children: "示例17（通过objectRepeat设置图片的重复样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#objectrepeat",
        children: "objectRepeat"
      }), "接口在竖直轴上重复绘制图片。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State borderRadiusValue: number = 10;\n  build() {\n    Column() {\n      // $r('app.media.sky')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.sky'))\n        .objectRepeat(ImageRepeat.Y)\n        .height('90%')\n        .width('90%')\n        .objectFit(ImageFit.Contain)\n        .borderWidth(1)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(139192)/* ["default"] */.A) + "",
        width: "404",
        height: "612"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例18设置svg图片的填充颜色",
      children: "示例18（设置SVG图片的填充颜色）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fillcolor15",
        children: "fillColor"
      }), "属性为SVG图片设置不同颜色的填充效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      Text('不设置fillColor')\n      // $r('app.media.svgExample')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.svgExample'))\n        .height(100)\n        .width(100)\n        .objectFit(ImageFit.Contain)\n        .borderWidth(1)\n      Text('fillColor传入ColorContent.ORIGIN')\n      // $r('app.media.svgExample')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.svgExample'))\n        .height(100)\n        .width(100)\n        .objectFit(ImageFit.Contain)\n        .borderWidth(1)\n        .fillColor(ColorContent.ORIGIN)\n      Text('fillColor传入Color.Blue')\n      // $r('app.media.svgExample')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.svgExample'))\n        .height(100)\n        .width(100)\n        .objectFit(ImageFit.Contain)\n        .borderWidth(1)\n        .fillColor(Color.Blue)\n      Text('fillColor传入undefined')\n      // $r('app.media.svgExample')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.svgExample'))\n        .height(100)\n        .width(100)\n        .objectFit(ImageFit.Contain)\n        .borderWidth(1)\n        .fillColor(undefined)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(222321)/* ["default"] */.A) + "",
        width: "510",
        height: "844"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例19设置hdr图源动态提亮",
      children: "示例19（设置HDR图源动态提亮）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hdrbrightness19",
        children: "hdrBrightness"
      }), "属性调整HDR图源的亮度，将hdrBrightness从0调整到1。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 19开始，新增hdrBrightness属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { image } from '@kit.ImageKit';\n\nconst TAG = 'AceImage';\n\n@Entry\n@Component\nstruct Index {\n  // 'img_1'需要替换为开发者所需的图像资源文件。\n  @State imgUrl: string = 'img_1';\n  @State bright: number = 0; // 默认亮度为0\n  aboutToAppear(): void {\n    // 获取资源管理器中的媒体资源\n    let img = this.getUIContext().getHostContext()?.resourceManager.getMediaByNameSync(this.imgUrl);\n    // 创建图片源并获取图片信息\n    if (img && img.buffer) {\n      let imageSource = image.createImageSource(img?.buffer.slice(0));\n      let imageInfo = imageSource.getImageInfoSync();\n      // 检查图片信息是否获取成功\n      if (imageInfo == undefined) {\n        console.error(TAG, 'Failed to obtain the image information.');\n      } else {\n        // 成功获取到图片信息，打印HDR状态\n        console.info(TAG, 'imageInfo.isHdr:' + imageInfo.isHdr);\n      }\n    } else {\n      console.error(TAG, 'Failed to obtain the image buffer.');\n    }\n  }\n\n  build() {\n    Column() {\n      // $r('app.media.img_1')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.img_1')).width('50%')\n        .height('auto')\n        .margin({ top: 160 })\n        .hdrBrightness(this.bright) // 设置图片的HDR亮度，值由bright状态控制\n      Button('图片动态提亮 0->1')\n        .onClick(() => {\n          // 动画过渡，切换亮度值\n          this.getUIContext()?.animateTo({}, () => {\n            this.bright = 1.0 - this.bright;\n          });\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例20设置图片是否跟随系统语言方向",
      children: "示例20（设置图片是否跟随系统语言方向）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#matchtextdirection",
        children: "matchTextDirection"
      }), "接口，设置手机语言为维语时图片是否显示镜像翻转显示效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Start }) {\n        Row() {\n          // 图片不跟随系统语言方向\n          // $r('app.media.ocean')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.ocean'))\n            .width(110).height(110).margin(15)\n            .matchTextDirection(false)\n        }\n        Row() {\n          // 图片跟随系统语言方向\n          // $r('app.media.ocean')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.ocean'))\n            .width(110).height(110).margin(15)\n            .matchTextDirection(true)\n        }\n      }\n    }.height(320).width(360).padding({ right: 10, top: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(29330)/* ["default"] */.A) + "",
        width: "280",
        height: "596"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例21设置图像内容的显示方向",
      children: "示例21（设置图像内容的显示方向）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#orientation14",
        children: "orientation"
      }), "属性，设置图像内容的显示方向。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct OrientationExample {\n  build() {\n    Column() {\n      Row({ space: 25 }) {\n        Column() {\n          Text('AUTO')\n          // $r('app.media.hello')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.hello'))\n            .width(125).height(125)\n            .orientation(ImageRotateOrientation.AUTO)\n        }\n\n        Column() {\n          Text('UP')\n          // $r('app.media.hello')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.hello'))\n            .width(125).height(125)\n            .orientation(ImageRotateOrientation.UP)\n        }\n\n        Column() {\n          Text('RIGHT')\n          // $r('app.media.hello')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.hello'))\n            .width(125).height(125)\n            .orientation(ImageRotateOrientation.RIGHT)\n        }\n      }\n\n      Row({ space: 25 }) {\n        Column() {\n          Text('DOWN')\n          // $r('app.media.hello')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.hello'))\n            .width(125).height(125)\n            .orientation(ImageRotateOrientation.DOWN)\n        }\n\n        Column() {\n          Text('LEFT')\n          // $r('app.media.hello')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.hello'))\n            .width(125).height(125)\n            .orientation(ImageRotateOrientation.LEFT)\n        }\n\n        Column() {\n          Text('UP_MIRRORED')\n          // $r('app.media.hello')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.hello'))\n            .width(125).height(125)\n            .orientation(ImageRotateOrientation.UP_MIRRORED)\n        }\n      }\n\n      Row({ space: 15 }) {\n        Column() {\n          Text('RIGHT_MIRRORED')\n          // $r('app.media.hello')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.hello'))\n            .width(125).height(125)\n            .orientation(ImageRotateOrientation.RIGHT_MIRRORED)\n        }\n\n        Column() {\n          Text('DOWN_MIRRORED')\n          // $r('app.media.hello')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.hello'))\n            .width(125).height(125)\n            .orientation(ImageRotateOrientation.DOWN_MIRRORED)\n        }\n\n        Column() {\n          Text('LEFT_MIRRORED')\n          // $r('app.media.hello')需要替换为开发者所需的图像资源文件。\n          Image($r('app.media.hello'))\n            .width(125).height(125)\n            .orientation(ImageRotateOrientation.LEFT_MIRRORED)\n        }\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(687419)/* ["default"] */.A) + "",
        width: "388",
        height: "399"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例22获取图片的exif信息并设置图像内容的显示方向",
      children: "示例22（获取图片的exif信息并设置图像内容的显示方向）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagesource/arkts-apis-image-imagesource#getimageproperty11",
        children: "getImageProperty"
      }), "接口，获取图片的exif信息，再根据获取到的exif信息，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#orientation14",
        children: "orientation"
      }), "属性设置图像内容显示为正确方向。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { image } from '@kit.ImageKit';\nimport { resourceManager } from '@kit.LocalizationKit';\n\n@Entry\n@Component\nstruct Example {\n  @State rotateOrientation: ImageRotateOrientation = ImageRotateOrientation.UP;\n  @State pixelMap: image.PixelMap | undefined = undefined;\n  @State text1: string = 'The exif orientation is ';\n  @State text2: string = 'Set orientation to ';\n\n  // 根据获取到的EXIF方向信息，转换ImageRotateOrientation，使图片显示为正确的方向。\n  getOrientation(orientation: string): ImageRotateOrientation {\n    if (orientation == 'Top-right') {\n      this.text2 = this.text2 + 'UP_MIRRORED';\n      return ImageRotateOrientation.UP_MIRRORED;\n    } else if (orientation == 'Bottom-right') {\n      this.text2 = this.text2 + 'DOWN';\n      return ImageRotateOrientation.DOWN;\n    } else if (orientation == 'Bottom-left') {\n      this.text2 = this.text2 + 'DOWN_MIRRORED';\n      return ImageRotateOrientation.DOWN_MIRRORED;\n    } else if (orientation == 'Left-top') {\n      this.text2 = this.text2 + 'LEFT_MIRRORED';\n      return ImageRotateOrientation.LEFT_MIRRORED;\n    } else if (orientation == 'Right-top') {\n      this.text2 = this.text2 + 'RIGHT';\n      return ImageRotateOrientation.RIGHT;\n    } else if (orientation == 'Right-bottom') {\n      this.text2 = this.text2 + 'RIGHT_MIRRORED';\n      return ImageRotateOrientation.RIGHT_MIRRORED;\n    } else if (orientation == 'Left-bottom') {\n      this.text2 = this.text2 + 'LEFT';\n      return ImageRotateOrientation.LEFT;\n    } else if (orientation == 'Top-left') {\n      this.text2 = this.text2 + 'UP';\n      return ImageRotateOrientation.UP;\n    } else {\n      this.text2 = this.text2 + 'UP';\n      return ImageRotateOrientation.UP;\n    }\n  }\n\n  async getFileBuffer(context: Context): Promise<ArrayBuffer | undefined> {\n    try {\n      const resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n      // 传入带有EXIF信息的资源文件，获取资源文件内容，返回Uint8Array。\n      // 'hello.jpg'需要替换为开发者所需的图像资源文件。\n      const fileData: Uint8Array = await resourceMgr.getRawFileContent('hello.jpg');\n      console.info('Successfully get RawFileContent');\n      // 转为ArrayBuffer并返回。\n      const buffer: ArrayBuffer = fileData.buffer.slice(0);\n      return buffer;\n    } catch (error) {\n      console.error('Failed to get RawFileContent');\n      return undefined;\n    }\n  }\n\n  aboutToAppear() {\n    let context = this.getUIContext().getHostContext();\n    if (!context) {\n      return;\n    }\n    this.getFileBuffer(context).then((buf: ArrayBuffer | undefined) => {\n      let imageSource = image.createImageSource(buf);\n      if (!imageSource) {\n        return;\n      }\n      // 从图像源中读取图片的EXIF方向信息。\n      imageSource.getImageProperty(image.PropertyKey.ORIENTATION).then((orientation) => {\n        this.rotateOrientation = this.getOrientation(orientation);\n        this.text1 = this.text1 + orientation;\n        let options: image.DecodingOptions = {\n          'editable': true,\n          'desiredPixelFormat': image.PixelMapFormat.RGBA_8888,\n        }\n        imageSource.createPixelMap(options).then((pixelMap: image.PixelMap) => {\n          this.pixelMap = pixelMap;\n          imageSource.release();\n        });\n      }).catch(() => {\n        imageSource.release();\n      });\n    })\n  }\n\n  build() {\n    Column({ space: 40 }) {\n      Column({ space: 10 }) {\n        Text('before').fontSize(20).fontWeight(700)\n        // 'hello.jpg'需要替换为开发者所需的图像资源文件。\n        Image($rawfile('hello.jpg'))\n          .width(100)\n          .height(100)\n        Text(this.text1)\n      }\n\n      Column({ space: 10 }) {\n        Text('after').fontSize(20).fontWeight(700)\n        Image(this.pixelMap)\n          .width(100)\n          .height(100)\n          .orientation(this.rotateOrientation)\n        Text(this.text2)\n      }\n    }\n    .height('80%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(542379)/* ["default"] */.A) + "",
        width: "270",
        height: "426"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例23动态切换svg图片的填充颜色",
      children: "示例23（动态切换SVG图片的填充颜色）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过按钮切换不同色域下的颜色值，动态改变SVG图片的填充颜色效果，以展示", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
        children: "ColorMetrics"
      }), "类型的使用方式和显示差异。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ColorMetrics } from '@kit.ArkUI';\n@Entry\n@Component\nstruct fillColorMetricsDemo {\n  @State p3Red: ColorMetrics = ColorMetrics.colorWithSpace(ColorSpace.DISPLAY_P3, 0.631, 0.0392, 0.1294);\n  @State sRGBRed: ColorMetrics = ColorMetrics.colorWithSpace(ColorSpace.SRGB, 0.631, 0.0392, 0.1294);\n  @State p3Green: ColorMetrics = ColorMetrics.colorWithSpace(ColorSpace.DISPLAY_P3, 0.09, 0.662 ,0.552);\n  @State sRGBGreen: ColorMetrics = ColorMetrics.colorWithSpace(ColorSpace.SRGB, 0.09, 0.662 ,0.552);\n  @State p3Blue: ColorMetrics = ColorMetrics.colorWithSpace(ColorSpace.DISPLAY_P3, 0, 0.290 ,0.686);\n  @State sRGBBlue: ColorMetrics = ColorMetrics.colorWithSpace(ColorSpace.SRGB, 0, 0.290 ,0.686);\n  @State colorArray: (Color|undefined|ColorMetrics|ColorContent)[] = [\n    this.p3Red, this.sRGBRed, this.p3Green, this.sRGBGreen, this.p3Blue,\n    this.sRGBBlue, ColorContent.ORIGIN, Color.Gray, undefined\n  ]\n  @State colorArrayStr: string[] = [\n    'P3 Red', 'SRGB Red', 'P3 Green', 'SRGB Green',\n    'P3 Blue', 'SRGB Blue', 'ORIGIN', 'Gray', 'undefined'\n  ]\n  @State arrayIdx: number = 0\n  build() {\n    Column() {\n      Text('FillColor is ' + this.colorArrayStr[this.arrayIdx])\n      // $r('app.media.svgExample')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.svgExample'))\n        .width(110).height(110).margin(15)\n        .fillColor(this.colorArray[this.arrayIdx])\n      Button('ChangeFillColor')\n        .onClick(()=>{\n          this.arrayIdx = (this.arrayIdx + 1) % this.colorArray.length\n        })\n      Blank().height(30).width('100%')\n      Text('FillColor is SRGB Red')\n      // $r('app.media.svgExample')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.svgExample'))\n        .width(110).height(110).margin(15)\n        .fillColor(this.sRGBRed)\n      Blank().height(30).width('100%')\n      Text('FillColor is SRGB Green')\n      // $r('app.media.svgExample')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.svgExample'))\n        .width(110).height(110).margin(15)\n        .fillColor(this.sRGBGreen)\n      Blank().height(30).width('100%')\n      Text('FillColor is SRGB Blue')\n      // $r('app.media.svgExample')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.svgExample'))\n        .width(110).height(110).margin(15)\n        .fillColor(this.sRGBBlue)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(577611)/* ["default"] */.A) + "",
        width: "336",
        height: "794"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例24使用应用沙箱路径显示图片",
      children: "示例24（使用应用沙箱路径显示图片）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在当前应用的haps/entry/files目录下预置一张名为cloud.png的图片，随后使用应用沙箱路径显示该图片。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileUri } from '@kit.CoreFileKit';\n\n@Entry\n@Component\nstruct Index {\n  private getSandBoxUri(): string {\n    let context = this.getUIContext().getHostContext();\n    if (!context) {\n      return '';\n    }\n    // /data/storage/el2/base/haps/entry/files/cloud.png\n    // 从应用沙箱中的文件路径获取URI\n    // '/cloud.png'需要替换为开发者所需的图像资源文件。\n    return fileUri.getUriFromPath(context.filesDir + '/cloud.png');\n  }\n\n  build() {\n    Column() {\n      Image(this.getSandBoxUri())\n        .width(150)\n        .height(150)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(874137)/* ["default"] */.A) + "",
        width: "144",
        height: "145"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例25使用相对路径显示图片",
      children: "示例25（使用相对路径显示图片）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程pages目录同级位置创建common目录，在common目录下预置一张名为cloud1.png的图片，随后使用相对路径显示该图片。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Column({ space: 10 }) {\n      Image('common/cloud1.png')\n        .width(100)\n        .height(100)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(603533)/* ["default"] */.A) + "",
        width: "144",
        height: "145"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例26使用supportsvg2属性时svg图片的显示效果",
      children: "示例26（使用supportSvg2属性时，SVG图片的显示效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#supportsvg221",
        children: "supportSvg2"
      }), "属性，使SVG标签解析能力增强功能生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，新增supportSvg2属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        Text('supportSvg2参数设置为true')\n        // $rawfile('image.svg')需要替换为开发者所需的图像资源文件。\n        Image($rawfile('image.svg'))\n          .width(200)\n          .height(200)\n          .border({ width: 2, color: 'red' })\n          .supportSvg2(true)\n          .margin({ bottom: 30 })\n        Text('supportSvg2参数设置为false（默认值）')\n        // $rawfile('image.svg')需要替换为开发者所需的图像资源文件。\n        Image($rawfile('image.svg'))\n          .width(200)\n          .height(200)\n          .border({ width: 2, color: 'red' })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(249222)/* ["default"] */.A) + "",
        width: "517",
        height: "734"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例27使用contenttransition属性实现图片淡入淡出切换效果",
      children: "示例27（使用ContentTransition属性实现图片淡入淡出切换效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 21开始，该示例演示了在点击图片切换图源时，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contenttransition21",
        children: "contentTransition"
      }), "属性实现淡入淡出效果，完成图片的平滑过渡。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ImageExample {\n  // $r('app.media.icon')需要替换为开发者所需的图像资源文件。\n  @State imageResource: Resource = $r('app.media.icon');\n\n  build() {\n    Row() {\n      Column() {\n        Image(this.imageResource)\n          .width(200)\n          .height(200)\n          // 启用淡入淡出过渡效果。\n          .contentTransition(ContentTransitionEffect.OPACITY)\n          .onClick(() => {\n            // $r('app.media.cloud1')需要替换为开发者所需的图像资源文件。\n            this.imageResource = $r('app.media.cloud1')\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(607199)/* ["default"] */.A) + "",
        width: "295",
        height: "271"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例28使用alt属性实现设置加载失败中图片和加载失败时图片",
      children: "示例28（使用alt属性实现设置加载失败中图片和加载失败时图片）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例演示了在图片加载过程中和加载失败时，通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#alt22",
        children: "alt"
      }), "属性实现图片加载过程中和图片加载失败时显示指定图片。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ImageExample {\n  build() {\n      Column() {\n      Text('同时设置placeholder属性和error属性')\n      // 设置一个错误网址来触发alt的placeholder属性和error属性。\n      Image(\"https://www.example.com/xxx.png\")\n      // $r('app.media.startIcon')和$r('app.media.example')需要替换为开发者所需的图像资源文件。\n        .alt({ placeholder: $r('app.media.startIcon'), error: $r('app.media.example') })\n        .width(100)\n        .height(100)\n        .margin(20)\n      Text('只设置placeholder属性')\n      Image(\"https://www.example.com/xxx.png\")\n        .alt({ placeholder: $r('app.media.startIcon')})\n        .width(100)\n        .height(100)\n        .margin(20)\n      Text('只设置error属性')\n      Image(\"https://www.example.com/xxx.png\")\n        .alt({error: $r('app.media.example')})\n        .width(100)\n        .height(100)\n        .margin(20)\n      }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(253480)/* ["default"] */.A) + "",
        width: "325",
        height: "534"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例29使用onerror回调监听网络图片加载异常信息",
      children: "示例29（使用onError回调监听网络图片加载异常信息）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例演示如何通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onerror9",
        children: "onError"
      }), "回调获取网络图片加载异常时的详细下载信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "#imageerror9",
        children: "ImageError"
      }), "。当图片加载失败时，可通过ImageError中的downloadInfo属性获取网络图片下载的详细信息，包括下载的资源信息、网络请求信息以及性能统计信息，有助于快速定位网络异常或资源错误原因。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，ImageError新增downloadInfo属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  build() {\n    RelativeContainer() {\n      Image('https://www.example.com/xxx.png') // 请填写一个具体的网络图片地址\n        .height(100)\n        .width(100)\n        .onError((e)=>{\n          console.info(\"DownLoadErrorInfo : \" + JSON.stringify(e?.downloadInfo))\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例30设置位图图片边缘抗锯齿",
      children: "示例30（设置位图图片边缘抗锯齿）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例演示了如何通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#antialiased23",
        children: "antialiased"
      }), "接口开启位图图片边缘的抗锯齿功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，新增", (0,jsx_runtime.jsx)(_components.a, {
        href: "#antialiased23",
        children: "antialiased"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ImageExample {\n  // $r('app.media.icon')需要替换为开发者所需的图像资源文件。\n  @State imageResource: Resource = $r('app.media.icon');\n\n  build() {\n    Row() {\n      Blank()\n        .width(50)\n\n      Column() {\n        Blank()\n          .height(20)\n        Text('没有设置抗锯齿的有旋转角度的图片')\n        Blank()\n          .height(20)\n        Image(this.imageResource)\n          .width(50)\n          .height(50)\n          .rotate({angle: 1})\n\n        Blank()\n          .height(20)\n        Text('设置了抗锯齿的有旋转角度的图片')\n        Blank()\n          .height(20)\n        Image(this.imageResource)\n          .width(50)\n          .height(50)\n          .rotate({angle: 1})\n          .antialiased(true)\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(207070)/* ["default"] */.A) + "",
        width: "273",
        height: "210"
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
687419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800192-e639723ef79c2c65620d310bb53a4b6c.png");

},
335519(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
249222(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800194-3af2014e968084f4a2f383c3530c7430.png");

},
181680(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479839-280fdd11615a3435c3e3e90807aaf5c3.png");

},
253480(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959844-9ea8b8d1afe536106d3380d7670969e1.gif");

},
158592(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
481724(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439883-b6399b7fdddf492bdce1aa0e49980045.gif");

},
577611(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959842-335155d86fd736e95bac7a579bdc45b3.gif");

},
902379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959832-28fbb9b1876301547d3b821dc364586e.gif");

},
785960(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479835-1ab244e4c433c98076e06da7ca07a9ac.png");

},
29330(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479841-aca6158b9b18c53a7aeff54f483babe9.png");

},
732982(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959836-7391251617a9cea8259d6214e08ddea7.gif");

},
870854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
599306(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959834-da8917e2c0affb966dcabc2effabc6ea.gif");

},
222321(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959840-12edcb2a6160a9bdfa4c52ef551c1bdb.png");

},
874137(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479843-d4debe56447329bd6bd240de4fa79045.png");

},
639405(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439879-d6d98d98198084e3dc84febaa188a89a.gif");

},
633740(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439881-95c0ab31361f32b784db37ac9d2f08a7.gif");

},
768305(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479837-11b375d67575fed01d095a8f935af2d8.gif");

},
326477(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
814573(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959838-4d0ed3b9c5d555f9000f79c65b6f91d3.jpeg");

},
355313(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800184-395a0afc1024e1c59de8aa8e1ddfb73f.gif");

},
139192(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439885-97adcb011a85f7ea53d79a54ed3e32f5.png");

},
502383(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479833-855a3ad5054ebfbb6dc504f38ee1db38.png");

},
550546(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
654100(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800186-89d0753ed46d955205c25445e634075e.gif");

},
390686(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
603533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479843-d4debe56447329bd6bd240de4fa79045.png");

},
207070(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479845-234a8626e496800e958285292d1de4a5.png");

},
582523(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
993281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,R0lGODlhPABAAHcAACH5BAD6AAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAPABAAKf9/v2KsfscavQlcvPK2/wTYvTT4vsNXPTc6fzE2fshbPQqePIodfLi7fva5fwTYvgLXPoZZfMRXPTC1fwkcvgcavoSXPnl8fv7/fWEsPrq8vv1/PwkbPoqc/kree0UafQNYfKKsvQkc+wLYvvN4vvR3fsaZPkiauwba+0kevTE2/aIrvopc+waZO0GXPNmlewTavkKWu2FrvpqmvE9duN0peEUXOu91PwecfQ+evRTjPKQsPsUYu09eORjlPgNYuyBrfLD4/x6qeIydfLV6fqFsvXa6vTr+vz1/fauyvjp7PsGW/mqyfV7rPtzovR3qOCKs+xik/Uzcuk0euwOV/Mle+sNVvlblOm72vzL3fR5pPJCgPGNu/hBeuVblPFrnOw8dejr+PPT5PXr8fEccel6o+ota+M2fPWyzfl7sfp9qvNLg+ljmelnmPVqlut6o9670/Sz1P3x9/zs6/Pi5vuFqd5soeOcvfKly/Klwe1WkOdVkfJRhOkkYuMra/NBfewzauwBYOsQVPQPaPNfmvE7dfWiwvqpx/Oxy+5De9ujxfNLe/NBe/SNsOQ+guyeyvWsxOqSsveRvPDk6/To5fzc8vXZ8fwGYPsHVv3k8fQcdfgreuQleeU9fOzC1/IqauolZujJ4PTN6/psnuVZkudzm+ZpluZBgehYhfNRkOuHq+ZMiuh0q/xajuJnleN0pe1Ni/VvovlEg+JSh+coZup8nuYiZvXI1/5QgvY0b+cocOUrZ/B9qN/Z3/zG4/T3/e/x8fQFY/Lz7v0aV/ZgjuZnmuMYXPogXNJwme4zcdfV6vZ4leoxZdcladvX8fXh5feVwvqewfJBd+qfweuhyu1NiPl/se9GdOJNhOZdhd5LfepLgtxGgN+ZvOedvulKfuWTteiw0vN0q++50u7F1O00euWz3Pux2PU0cuW30utCftd8q+rJ3e5IdtS30OdTjOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI/wABCBxIsKDBgwgTKlxYEAMGhhARPoyYEIMGIyR8qdiYoKPHjipAgtxIUqSKLCSMjJlIkaCcdKr0OJoyxYPNmzg9LNi5U6cHBixYMBg6dMqWWWU8aWDIUuAFPHxs8pxKtepOolgZDNBKgcJQFp3CjQGwAeIFLVM2WbWaleeAtww6yM1KYS4ZKWWcIWE4rh2DFCmqdqhKdMHQt1vjDkbMwGsHCm+7DhChzhMAlg4F/kKCYNWmKh2GrOWJ1fDVwAMWIF7N+q0fFppwcMtyWSBmBKUWVPHQ4czow6y1Jm5NHLGIxjhEuLnQ9PIGKOV+Mui5AHDgoXNZ6MTuAXHdoXW7iv+P3JUD5LcKpEQL0xDBmuvTGVT53oGBTRFVRHS1ToETBREDQCaCCJzkN+CB4wFYHgUcrMFObQPlIUUK8U2XwhTFQAFFCBx2WEQIULxyygDzbcXCC2oUAUQRKrKoohp2yEIBDgFSoMAACnwCTkEXfDEAhYYNJYUQR2wQRhgaJKnBERoAI4cSiGyj3wDouIJAkkoo0cCWXF5QCRN/cKCAAmKSycEVRwyEgTtTUMgYA28QoYEcwiR5wZ14ZnKBJedIEeAXluCJwKCEDkrHMwg8YsaYYw7AAQ4sEKHmND8WtgALcByB5BiZcLnlHJNsSUkD17wFxRha0uHAqqw6YIABDoj/EUQ1N9bKARkKYDHRBta8+RYLV9rp6ZaFDqrHW0lc0AACq77qrAEklFCCASUQIiYHZeJ6R1lkPbHVcR0EyEIDwg67bLFXvIXGls06SwIJBERbAgHVCqCAvWTi2gi3G9gBXFdDBavssucWO+gVN67L7LMEEGBAwxAT4AWjAtiLggB1cAuAHXXB9WuwxBrcKgIIn5DEsu5C/HDEEjN6bwUoKJDxQKN0HODHGnA5aKs8E0GKAiicjEDKK7MsccUVjxnzzGR9cd7NW10Z8s6sPkvyjSe7ujK8Rje8B75I3ysEQTNIVuMAwOa87KrMsk3E0Ab4fG8SCxfddUdeVFABthXg/zv2QDMMEC7UDEi9NtVaO0tEKkAzUXfDXDecAAEdTbDHvUgLYIsAfwOARNms3YiAloTyDOuzeszdgLMsf1T5Hn1nLvZAnzfq8gkG6Nzqs8+ucq8icM8reUeUezQBLCZEoHwEAjDf+ec44njjACdAMnDV7T5LQjJ9qxI8xK4nEBIanTDffPPKdw7ADJo86rICxCSgBCV0wM37qyRI0gwMArSSwKvC60gQPKICciQACCfQm94q5jzazQBp5mEUB8QhCiNMgmcOQIAYoHWHNXBAbyxgQwJIQK2uEeAG0OiBAAqQuQ8o7wlq+gKZcCBBBVRABHzQAhB2KAMZqEEGTVDDK/8IYQYBKLBif5iBFsqgBSc48YmjSIUIeFCxD6xQAC6MAAwH8gUcCMCLFEPBBxd4AhSc4ASZEwAMrIg0GPAPBRfLHBw/8AE3Mq8AHyiAHl9IEDdUjIbvq5gZTzAmQpYRX5hjXt8upryKtaAF6FthBEzwABZeMY8F2KJAXrC3inEAaR84ATO0gAdEMOGUSTiEIQwRAD6AogImsKIJWnCCHMBCB7jMJS63oIsWxLIADwhmLJVXA4JwsgJeTJoC/FAGZVQCAQUjlBGMIIpHyMIEfVOAI5qQAQ4F4Jvg/GYaYgGICDyAksHUYyYJwoYFhk0BrjDAHOZAsLbxDAGS2IUJTJD/gzQEYAcABeg/vxmJSHDIB+Z8ACwrWQAeFHMgLzBi0ip2AmooCwFEuB+1pGWAIJTTBDoI5ze5EACShjMEaRBBOtUZAYcaM3b2omgCGmCEjL7KYQ3LQhZyGopFtOABXtgBh7gQApOKNAAhaMIZgKlOPbrUNpxMYwVOQACUbXRewotYEHwKAx/sYKBfFak3AyCDIegxmAwtwEMvE9HYHTEIg4KWCT+yhQgMwgdHzes3M3AGtKJVj2sFQETNhzQUJGBhkQNfAibgkS0U4K56zWsGhvDXpq4VA4P9QN+saFjERmxyi50AYxNwigh8AK+R/WYIMrCCyf61khJQqzHPR0cG/x7WVcX7iGh3m4C6giAKqQUnayerznTGNrAvKIAJ0Ke8Fhz2ppMD3y12y9gcPDYKGQhuAIY7hNiCgKHHtQ0ATAGDWAYTBg+IABZcFYrhhZa6jGVEBH6A3eBmILtltcADRrBfCfwAAm/QGHljSckIVEC9qyKBbuEr2gT8Yb7YzW5qu9mEIRzgARbQowRAIAFeaKwUk8zjCgvQgjg4oBe5ZfAEbjABLPSAByPwQREkfNQVBKC1SWVAAQ7A4wNYgMP7GggQWmDaAlRgj1CAVYrhe4Mmx6EPBRgBLtJA4xuv4MpX7qEMWBEBCewXBD4GgQ0UQZA7EFmPMCiA8lqBBTFITv/FN0DDBFZQgB9cohCsEOkKZHDfG2eghz6QgAUuzGMIHMAGQWAJHMoZAabqsQVsMEcQBviRJjsZCDSo5AEicIZY3PfToL5vE3xAi0H3GAKGNgMCJoKBI9SAB2dlaHqP8Y0ozODWbci1D6KAilzYwMsPIHQL/FCIHBibEcY2thT6YIMen/oAEHiBxi7DhBaMgKlpxXBTmyoBQR+Av+k09AggYIFym1vQFkC1C8DsbAjYoBvivcwF1pBWpzIVBCDQsHcLkGEesHsEB/Avvp1N8EIb2tkSmIURDpIHM2zbGOUOJrrNTfFyE5zcqM54ug0dg24fwAoH53Ef4BBv22wAD9v/bugPfiBodeK72zz4NQRi2+1up/sAPyg4qg8QgxgcvOdcmDaP3mEDCBTABvjON7lrXnOCS6DgAX86wakgiJ4fQBAHWIINsoGAhWjgDREYAQhQje9xj2DcEDg72tGe8bar2wUHcIELeg4BK2BiCYHAxDBqsRSGbAASiegyuplO+MJDnQpUsAIVLGCFxlMhBlS3QBe8IXSEcEsM6wCFDX4QjEuw3e0uMPQSICB3CCxh9KePu9xdEIhAwD0Gn1iGAfYCIYhs4AiHQIYOsJGILnShB77vgfCHT4PiG//4YEh+8qWhDVS4IQ9FaomaCLKBnOGpAQPLvrLuhP0tDcz7DVCCGAYqL/3ym//86E+/+tfP/va7//3wT0hAAAAh+QQBWgABACwAAAAAPAA7AKD///8A/wACVYyPoMvtDxma9MSLs6o86A9uVUiWkGem6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcLDovH5IsFZRwlO0j20Z0+FAAAOw==");

},
769404(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959812-3b5e507efeb214e88a750f1e7b5810af.png");

},
934334(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
637627(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
607199(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439889-a537e9569bde6df01b1d80634f8c17a9.gif");

},
542379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439887-0b8dddbde806e93ec62a15222d9424b7.png");

},
962580(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
844364(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800190-e781ea9685c3cc80940e7c07c1b02f55.png");

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