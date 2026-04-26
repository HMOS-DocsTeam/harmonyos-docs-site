"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["613965"], {
978886(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_xengine_kit_guide_xengine_kit_introduction_xengine_kit_introduction_md_cce_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-xengine-kit-guide-xengine-kit-introduction-xengine-kit-introduction-md-cce.json
var site_docs_xengine_kit_guide_xengine_kit_introduction_xengine_kit_introduction_md_cce_namespaceObject = JSON.parse('{"id":"xengine-kit-guide/xengine-kit-introduction/xengine-kit-introduction","title":"XEngine Kit简介","description":"XEngine Kit（GPU加速引擎服务）提供基于马良GPU的性能提升方案，包括GPU/AI超分能力、自适应VRS（Variable Rate Shading，可变速率着色）、Subpass Shading、光线追踪技术（包括反射、阴影、环境光遮蔽和全局光照，Ray-Traced Reflection, Shadow, Ambient Occlusion and Global Illumination）和高性能着色器（High performance shaders，简称HPS）等，通过图形算法以及软硬件优化，让用户拥有更高画质、更高性能、更低功耗的3D游戏/应用、AR/VR体验。","source":"@site/docs/xengine-kit-guide/xengine-kit-introduction/xengine-kit-introduction.md","sourceDirName":"xengine-kit-guide/xengine-kit-introduction","slug":"/xengine-kit-guide/xengine-kit-introduction/","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"XEngine Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-introduction","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"添加滤镜效果","permalink":"/harmonyos-docs-site/spatial-recon-kit-guide/spatial-recon-filter/"},"next":{"title":"开发准备","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-preparations/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/xengine-kit-guide/xengine-kit-introduction/xengine-kit-introduction.md


const frontMatter = {
	title: 'XEngine Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-introduction',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'XEngine Kit简介';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "优化细节画质，降低能耗",
  "id": "优化细节画质降低能耗",
  "level": 3
}, {
  "value": "画质视觉无损，智能降低渲染开销",
  "id": "画质视觉无损智能降低渲染开销",
  "level": 3
}, {
  "value": "降低带宽开销，提升性能",
  "id": "降低带宽开销提升性能",
  "level": 3
}, {
  "value": "光线追踪加速技术，高效利用硬件光追能力",
  "id": "光线追踪加速技术高效利用硬件光追能力",
  "level": 3
}, {
  "value": "高性能GPU排序",
  "id": "高性能gpu排序",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "xengine-kit简介",
        children: "XEngine Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XEngine Kit（GPU加速引擎服务）提供基于马良GPU的性能提升方案，包括GPU/AI超分能力、自适应VRS（Variable Rate Shading，可变速率着色）、Subpass Shading、光线追踪技术（包括反射、阴影、环境光遮蔽和全局光照，Ray-Traced Reflection, Shadow, Ambient Occlusion and Global Illumination）和高性能着色器（High performance shaders，简称HPS）等，通过图形算法以及软硬件优化，让用户拥有更高画质、更高性能、更低功耗的3D游戏/应用、AR/VR体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行XEngine Kit开发前，建议开发者提前了解以下基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
          children: "XComponent"
        }), "组件：是一种绘制组件，通常用于满足开发者较为复杂的自定义绘制需求，例如相机预览流的显示和游戏画面的绘制。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可变速率着色（Variable Rate Shading，简称VRS）：是一种图形功能，允许应用程序独立于渲染目标的分辨率来控制像素着色器调用的频率。自适应可变速率着色（Adaptive VRS）在VRS的基础上，添加了可动态调整的着色率，能够大幅提升渲染性能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基于瓦片的延迟渲染（Tile-Based Deferred Rendering，TBDR）：是一种渲染技术，它结合了即时渲染（Immediate Mode Rendering, IMR）和延迟渲染（Deferred Rendering）的优点，旨在提高渲染效率和减少内存访问。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "动态漫反射全局光照（Dynamic Diffuse Global Illumination，简称DDGI）：是一种实时渲染技术，旨在模拟光线在场景中经多次漫反射后的全局光照效果，以提升画面真实感。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "优化细节画质降低能耗",
      children: "优化细节画质，降低能耗"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当GPU性能不足以支持渲染高分辨率场景时，为了提高用户体验，可以使用超分能力，将较低分辨率图像通过超分重建为高分辨率图像。相较于直接渲染高分辨率图像，使用超分能力能够降低GPU渲染负载，降低功耗。目前支持以下3种超分能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "空域GPU超分：基于单帧图像的空域超采样，开销最低。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "空域AI超分：GPU/NPU协同空域超采样，效果更好。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "时域AI超分：GPU/NPU协同时域超采样，抗锯齿效果明显，画质更优，倍率更高。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "画质视觉无损智能降低渲染开销",
      children: "画质视觉无损，智能降低渲染开销"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当GPU性能限制，不能持续为输出图像的每个像素提供相同质量级别的渲染结果时，可使用自适应VRS功能，其通过合理分配画面的计算资源，视觉无损降低渲染频次，使不同的渲染图像使用不同的渲染速率，能够有效提高渲染性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "降低带宽开销提升性能",
      children: "降低带宽开销，提升性能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于TBDR（Tile-Based Deferred Rendering，基于瓦片的延迟渲染）和Forward+管线，Subpass Shading能力可以有效降低带宽开销，提升性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "光线追踪加速技术高效利用硬件光追能力",
      children: "光线追踪加速技术，高效利用硬件光追能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当GPU支持硬件光线追踪能力时，可以使用光线追踪渲染技术，提升场景的光影效果和画面质量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "反射、阴影和环境光遮蔽"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "XEngine Kit提供开箱即用的光线追踪渲染技术，包括反射（Reflection）、阴影（Shadow）和环境光遮蔽（Ambient Occlusion，AO）效果的相关API。相比于这些效果的传统光线追踪实现方式，XEngine Kit可以在较少光线数的情况下达成较高的画质表现，实现同等画质GPU负载更轻，同等负载下画质更好。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "全局光照"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "XEngine Kit全局光照解决方案，基于硬件光线追踪、AI渲染和端云结合渲染等技术，实现移动端的实时全局光照，包括动态漫反射全局光照（Dynamic Diffuse Global Illumination，DDGI）和神经网络全局光照（Neural Network Global Illumination，NNGI）两种技术。DDGI更轻量级，配合端云渲染能效更佳，而NNGI则能够提供移动端更好的动态GI画质。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "高性能gpu排序",
      children: "高性能GPU排序"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "高性能GPU排序可以帮助我们更快地将乱序信息进行整齐排列，降低排序时延，提升性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在调用XEngine Kit能力前，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/syscap/syscap#%E5%88%A4%E6%96%AD-api-%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8",
            children: "Syscap"
          }), "查询您的目标设备是否支持SystemCapability.Graphic.XEngine系统能力。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持的设备类型：Phone、Tablet、PC/2in1、TV。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "XEngine Kit特性仅在使用马良GPU芯片的设备上受支持。不同设备支持的特性范围有所差异，可以通过以下方式查询设备支持的特性列表："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["对于OpenGL ES，使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_getstring",
              children: "HMS_XEG_GetString"
            }), "扩展特性查询接口进行查询。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["对于Vulkan，使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties",
              children: "HMS_XEG_EnumerateDeviceExtensionProperties"
            }), "扩展特性查询接口进行查询。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "两种方式均返回所支持的特性列表，具体使用方式参考各个特性的示例代码。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
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