"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["611370"], {
613253(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_particle_animation_arkts_particle_animation_md_ad2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-particle-animation-arkts-particle-animation-md-ad2.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_particle_animation_arkts_particle_animation_md_ad2_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-particle-animation/arkts-particle-animation","title":"粒子动画","description":"粒子动画是通过在限定区域内随机生成大量粒子的运动，进而组合成的动画效果，通过Particle组件来实现。动画的基本构成元素为单个粒子，这些粒子可以表现为圆点或图片等形式。开发者能够通过对粒子在颜色、透明度、大小、速度、加速度、自旋角度等多个维度上的动态变化做动画，以营造特定的氛围，例如模拟下雪场景时，飘舞的雪花实际上是由一个个雪花粒子的动画效果所构成。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-particle-animation/arkts-particle-animation.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-particle-animation","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-particle-animation/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-particle-animation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"粒子动画","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-particle-animation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"页面转场动画 (不推荐)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-page-transition-animation/"},"next":{"title":"组件动画","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-component-animation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-particle-animation/arkts-particle-animation.md


const frontMatter = {
	title: '粒子动画',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-particle-animation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '粒子动画';

const assets = {

};



const toc = [{
  "value": "实现粒子发射器",
  "id": "实现粒子发射器",
  "level": 2
}, {
  "value": "设置粒子颜色",
  "id": "设置粒子颜色",
  "level": 2
}, {
  "value": "粒子的生命周期",
  "id": "粒子的生命周期",
  "level": 2
}, {
  "value": "设置粒子扰动场",
  "id": "设置粒子扰动场",
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
        id: "粒子动画",
        children: "粒子动画"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-particle-animation/ts-particle-animation",
        children: "粒子动画"
      }), "是通过在限定区域内随机生成大量粒子的运动，进而组合成的动画效果，通过Particle组件来实现。动画的基本构成元素为单个粒子，这些粒子可以表现为圆点或图片等形式。开发者能够通过对粒子在颜色、透明度、大小、速度、加速度、自旋角度等多个维度上的动态变化做动画，以营造特定的氛围，例如模拟下雪场景时，飘舞的雪花实际上是由一个个雪花粒子的动画效果所构成。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粒子动画的简单实现如下所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ParticleExample {\n  build() {\n    Stack() {\n      Text()\n        .width(300).height(300).backgroundColor('rgb(240, 250, 255)')\n      Particle({ particles: [\n        {\n          emitter: {\n            particle: {\n              type: ParticleType.POINT, // 粒子类型\n              config: {\n                radius: 5 // 圆点半径\n              },\n              count: 100, // 粒子总数\n            },\n          },\n          color:{\n            range:['rgb(39, 135, 217)','rgb(0, 74, 175)'], // 初始颜色范围\n          },\n        },\n      ]\n      }).width(250).height(250)\n    }.width('100%').height('100%').align(Alignment.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(343170)/* ["default"] */.A) + "",
        width: "223",
        height: "223"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现粒子发射器",
      children: "实现粒子发射器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["粒子发射器（Particle Emitter）主要定义粒子的初始属性（如类型和位置），控制粒子的生成速率，以及管理粒子的生命周期。可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-particle-animation/ts-particle-animation#emitter12",
        children: "emitter"
      }), "方法调整粒子发射器的位置、发射速率和发射窗口的大小，实现发射器位置的动态更新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ...\n@State emitterProperties: Array<EmitterProperty> = [\n  {\n    index: 0,\n    emitRate: 100,\n    position: { x: 60, y: 80 },\n    size: { width: 200, height: 200 }\n  }\n]\n\nParticle(...).width(300).height(300).emitter(this.emitterProperties) // 动态调整粒子发射器的位置\n// ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(13401)/* ["default"] */.A) + "",
        width: "223",
        height: "223"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置粒子颜色",
      children: "设置粒子颜色"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-particle-animation/ts-particle-animation#particlecolorpropertyoptions",
        children: "range"
      }), "来确定粒子的初始颜色范围，而", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-particle-animation/ts-particle-animation#particlecolorpropertyoptions",
        children: "distributionType"
      }), "则用于指定粒子初始颜色随机值的分布方式，具体可选择均匀分布或者高斯（正态）分布。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ...\ncolor: {\n  range: ['rgb(39, 135, 217)','rgb(0, 74, 175)'], // 初始颜色范围\n  distributionType: DistributionType.GAUSSIAN // 初始颜色随机值分布\n},\n// ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(153537)/* ["default"] */.A) + "",
        width: "223",
        height: "223"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "粒子的生命周期",
      children: "粒子的生命周期"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["粒子的生命周期（Lifecycle）是粒子从生成至消亡的整个过程，用于确定粒子的存活时间长度。粒子的生命周期可通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-particle-animation/ts-particle-animation#emitterparticleoptions18",
        children: "EmitterParticleOptions"
      }), "的lifetime和lifetimeRange属性来指定。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ...\nemitter: {\n  particle: {\n    // ...\n    lifetime: 300, // 粒子生命周期，单位ms\n    lifetimeRange: 100 // 粒子生命周期取值范围，单位ms\n  },\n  emitRate: 10, // 每秒发射粒子数\n  position: [0, 0],\n  shape: ParticleEmitterShape.RECTANGLE // 发射器形状\n},\ncolor: {\n  range: ['rgb(39, 135, 217)','rgb(0, 74, 175)'], // 初始颜色范围\n},\n// ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(854760)/* ["default"] */.A) + "",
        width: "223",
        height: "223"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置粒子扰动场",
      children: "设置粒子扰动场"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["扰动场（Disturbance Field）是一种影响粒子运动的机制。通过在粒子所在的空间区域内施加特定的力，扰动场能够改变粒子的轨迹和行为，进而实现更为复杂和自然的动画效果。扰动场的配置可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-particle-animation/ts-particle-animation#disturbancefields12",
        children: "disturbanceFields"
      }), "方法来完成。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ...\nParticle({ particles: [\n  {\n    emitter: // ...\n    color: // ...\n    scale: {\n      range: [0.0, 0.0],\n      updater: {\n        type: ParticleUpdater.CURVE,\n        config: [\n          {\n            from: 0.0,\n            to: 0.5,\n            startMillis: 0,\n            endMillis: 3000,\n            curve: Curve.EaseIn\n          }\n        ]\n      }\n    },\n    acceleration: { // 加速度的配置，从大小和方向两个维度变化，speed表示加速度大小，angle表示加速度方向\n      speed: {\n        range: [3, 9],\n        updater: {\n          type: ParticleUpdater.RANDOM,\n          config: [1, 20]\n        }\n      },\n      angle: {\n        range: [90, 90]\n      }\n    }\n\n  }\n]\n}).width(300).height(300).disturbanceFields([{\n  strength: 10,\n  shape: DisturbanceFieldShape.RECT,\n  size: { width: 100, height: 100 },\n  position: { x: 100, y: 100 },\n  feather: 15,\n  noiseScale: 10,\n  noiseFrequency: 15,\n  noiseAmplitude: 5\n}])\n// ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(513545)/* ["default"] */.A) + "",
        width: "223",
        height: "223"
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
153537(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438039-c8d5e0657d2d48eac68c0b89818fd136.gif");

},
13401(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798344-770cc6fce91a2c41f233e27da72cb407.gif");

},
854760(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957994-e1c49b0b73be795ac77946406b094765.gif");

},
343170(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477993-febe3cb4583ced9177346826a66b71db.gif");

},
513545(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477995-774fb344202c7263ad866b3a54ff5896.gif");

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