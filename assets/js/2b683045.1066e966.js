"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["853098"], {
835181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_animation_ts_particle_animation_ts_particle_animation_md_2b6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-animation-ts-particle-animation-ts-particle-animation-md-2b6.json
var site_docs_ref_arkui_api_arkui_declarative_comp_animation_ts_particle_animation_ts_particle_animation_md_2b6_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/animation/ts-particle-animation/ts-particle-animation","title":"粒子动画 (Particle)","description":"粒子动画是在一定范围内随机生成的大量粒子产生运动而组成的动画。动画元素是一个个粒子，这些粒子可以是圆点、图片。通过对粒子在颜色、透明度、大小、速度、加速度、自旋角度等维度变化做动画，来营造一种氛围感，比如下雪的动效，雪花飘舞就相当于一个个雪花粒子在做动画。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/animation/ts-particle-animation/ts-particle-animation.md","sourceDirName":"arkui-api/arkui-declarative-comp/animation/ts-particle-animation","slug":"/arkui-api/arkui-declarative-comp/animation/ts-particle-animation/ts-particle-animation","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/animation/ts-particle-animation/ts-particle-animation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"粒子动画 (Particle)","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-particle-animation","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-particle-animation"},"sidebar":"ref","previous":{"title":"路径动画 (motionPath)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/animation/ts-motion-path-animation/ts-motion-path-animation"},"next":{"title":"显式动画立即下发 (animateToImmediately)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/animation/ts-explicit-animatetoimmediately/ts-explicit-animatetoimmediately"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/animation/ts-particle-animation/ts-particle-animation.md


const frontMatter = {
	title: '粒子动画 (Particle)',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-particle-animation',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-particle-animation'
};
const contentTitle = '粒子动画 (Particle)';

const assets = {

};



const toc = [{
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "disturbanceFields12+",
  "id": "disturbancefields12",
  "level": 3
}, {
  "value": "emitter12+",
  "id": "emitter12",
  "level": 3
}, {
  "value": "rippleFields22+",
  "id": "ripplefields22",
  "level": 3
}, {
  "value": "velocityFields22+",
  "id": "velocityfields22",
  "level": 3
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "ParticleOptions",
  "id": "particleoptions",
  "level": 2
}, {
  "value": "EmitterOptions",
  "id": "emitteroptions",
  "level": 2
}, {
  "value": "ParticleConfigs",
  "id": "particleconfigs",
  "level": 2
}, {
  "value": "PointParticleParameters",
  "id": "pointparticleparameters",
  "level": 2
}, {
  "value": "ImageParticleParameters",
  "id": "imageparticleparameters",
  "level": 2
}, {
  "value": "ParticleColorPropertyOptions",
  "id": "particlecolorpropertyoptions",
  "level": 2
}, {
  "value": "ParticleColorPropertyUpdaterConfigs",
  "id": "particlecolorpropertyupdaterconfigs",
  "level": 2
}, {
  "value": "ParticlePropertyOptions",
  "id": "particlepropertyoptions",
  "level": 2
}, {
  "value": "ParticlePropertyUpdaterConfigs",
  "id": "particlepropertyupdaterconfigs",
  "level": 2
}, {
  "value": "ParticlePropertyAnimation",
  "id": "particlepropertyanimation",
  "level": 2
}, {
  "value": "ParticleType",
  "id": "particletype",
  "level": 2
}, {
  "value": "ParticleEmitterShape",
  "id": "particleemittershape",
  "level": 2
}, {
  "value": "DistributionType12+",
  "id": "distributiontype12",
  "level": 2
}, {
  "value": "ParticleUpdater",
  "id": "particleupdater",
  "level": 2
}, {
  "value": "DisturbanceFieldOptions12+",
  "id": "disturbancefieldoptions12",
  "level": 2
}, {
  "value": "DisturbanceFieldShape12+",
  "id": "disturbancefieldshape12",
  "level": 2
}, {
  "value": "EmitterProperty12+",
  "id": "emitterproperty12",
  "level": 2
}, {
  "value": "ParticleTuple18+",
  "id": "particletuple18",
  "level": 2
}, {
  "value": "Particles18+",
  "id": "particles18",
  "level": 2
}, {
  "value": "VelocityOptions18+",
  "id": "velocityoptions18",
  "level": 2
}, {
  "value": "AccelerationOptions18+",
  "id": "accelerationoptions18",
  "level": 2
}, {
  "value": "EmitterParticleOptions18+",
  "id": "emitterparticleoptions18",
  "level": 2
}, {
  "value": "ParticleUpdaterOptions18+",
  "id": "particleupdateroptions18",
  "level": 2
}, {
  "value": "ParticleColorUpdaterOptions18+",
  "id": "particlecolorupdateroptions18",
  "level": 2
}, {
  "value": "ParticleColorOptions18+",
  "id": "particlecoloroptions18",
  "level": 2
}, {
  "value": "ParticleAnnulusRegion20+",
  "id": "particleannulusregion20",
  "level": 2
}, {
  "value": "Vector2T&lt;T&gt;22+",
  "id": "vector2tt22",
  "level": 2
}, {
  "value": "FieldRegion22+",
  "id": "fieldregion22",
  "level": 2
}, {
  "value": "RippleFieldOptions22+",
  "id": "ripplefieldoptions22",
  "level": 2
}, {
  "value": "VelocityFieldOptions22+",
  "id": "velocityfieldoptions22",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（圆形初始化粒子）",
  "id": "示例1圆形初始化粒子",
  "level": 3
}, {
  "value": "示例2（图片初始化粒子）",
  "id": "示例2图片初始化粒子",
  "level": 3
}, {
  "value": "示例3（粒子扰动场的干扰下运动轨迹发生变化）",
  "id": "示例3粒子扰动场的干扰下运动轨迹发生变化",
  "level": 3
}, {
  "value": "示例4（调整粒子发射器位置）",
  "id": "示例4调整粒子发射器位置",
  "level": 3
}, {
  "value": "示例5（环形发射器创建）",
  "id": "示例5环形发射器创建",
  "level": 3
}, {
  "value": "示例6（环形发射器更新）",
  "id": "示例6环形发射器更新",
  "level": 3
}, {
  "value": "示例7（设置波动场和速度场）",
  "id": "示例7设置波动场和速度场",
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
    number: "number",
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
        id: "粒子动画-particle",
        children: "粒子动画 (Particle)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粒子动画是在一定范围内随机生成的大量粒子产生运动而组成的动画。动画元素是一个个粒子，这些粒子可以是圆点、图片。通过对粒子在颜色、透明度、大小、速度、加速度、自旋角度等维度变化做动画，来营造一种氛围感，比如下雪的动效，雪花飘舞就相当于一个个雪花粒子在做动画。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粒子动画的效果通过Particle组件展现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(941847)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Particle在息屏之后再次打开或者切换后台再次唤起，粒子动画会自动暂停。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface ParticleInterface {\n  <\n    PARTICLE extends ParticleType,\n    COLOR_UPDATER extends ParticleUpdater,\n    OPACITY_UPDATER extends ParticleUpdater,\n    SCALE_UPDATER extends ParticleUpdater,\n    ACC_SPEED_UPDATER extends ParticleUpdater,\n    ACC_ANGLE_UPDATER extends ParticleUpdater,\n    SPIN_UPDATER extends ParticleUpdater\n  >(particles: Particles<\n      PARTICLE,\n      COLOR_UPDATER,\n      OPACITY_UPDATER,\n      SCALE_UPDATER,\n      ACC_SPEED_UPDATER,\n      ACC_ANGLE_UPDATER,\n      SPIN_UPDATER\n    >): ParticleAttribute;\n}\n"
      })
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
            children: "particles"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particles18",
              children: "Particles"
            }), "<  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particletype",
              children: "PARTICLE"
            }), ",  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "COLOR_UPDATER"
            }), ",  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "OPACITY_UPDATER"
            }), ",  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "SCALE_UPDATER"
            }), ",  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "ACC_SPEED_UPDATER"
            }), ",  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "ACC_ANGLE_UPDATER"
            }), ",  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "SPIN_UPDATER"
            }), "  >"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["粒子动画的集合，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particles18",
              children: "Particles"
            }), "属性说明。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "外还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "disturbancefields12",
      children: "disturbanceFields12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "disturbanceFields(fields: Array<DisturbanceFieldOptions>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置扰动场。"
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
            children: "fields"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#disturbancefieldoptions12",
              children: "DisturbanceFieldOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扰动场数组。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "emitter12",
      children: "emitter12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "emitter(value: Array<EmitterProperty>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持发射器位置动态更新"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#emitterproperty12",
              children: "EmitterProperty"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要更新的emitter参数数组"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ripplefields22",
      children: "rippleFields22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rippleFields(fields: Array<RippleFieldOptions>|undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置粒子波动场。波动场会对影响范围内的粒子施加按波形变化的力，产生类似波纹扩散的效果。"
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
            children: "fields"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ripplefieldoptions22",
              children: "RippleFieldOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "velocityfields22",
      children: "velocityFields22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "velocityFields(fields: Array<VelocityFieldOptions>|undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置粒子速度场。速度场会对影响范围内的粒子施加一个力，使粒子在原有速度的基础上叠加速度场指定的速度。"
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
            children: "fields"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#velocityfieldoptions22",
              children: "VelocityFieldOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "particleoptions",
      children: "ParticleOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface ParticleOptions<\n  PARTICLE extends ParticleType,\n  COLOR_UPDATER extends ParticleUpdater,\n  OPACITY_UPDATER extends ParticleUpdater,\n  SCALE_UPDATER extends ParticleUpdater,\n  ACC_SPEED_UPDATER extends ParticleUpdater,\n  ACC_ANGLE_UPDATER extends ParticleUpdater,\n  SPIN_UPDATER extends ParticleUpdater\n> {\n  emitter: EmitterOptions<PARTICLE>;\n  color?: ParticleColorPropertyOptions<COLOR_UPDATER>;\n  opacity?: ParticlePropertyOptions<number, OPACITY_UPDATER>;\n  scale?: ParticlePropertyOptions<number, SCALE_UPDATER>;\n  velocity?: VelocityOptions;\n  acceleration?: AccelerationOptions<ACC_SPEED_UPDATER, ACC_ANGLE_UPDATER>;\n  spin?: ParticlePropertyOptions<number, SPIN_UPDATER>;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置粒子参数。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "emitter"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#emitteroptions",
              children: "EmitterOptions"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particletype",
              children: "PARTICLE"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "粒子发射器配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "color"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particlecolorpropertyoptions",
              children: "ParticleColorPropertyOptions"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "COLOR_UPDATER"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["粒子颜色配置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  默认值：{ range:[Color.White,Color.White] } 。图片粒子不支持设置颜色。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "opacity"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particlepropertyoptions",
              children: "ParticlePropertyOptions"
            }), "<number, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "OPACITY_UPDATER"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "粒子透明度配置。  默认值：{ range:[1.0,1.0] }"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particlepropertyoptions",
              children: "ParticlePropertyOptions"
            }), "<number, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "SCALE_UPDATER"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "粒子大小配置。  默认值：{ range:[1.0,1.0] }"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "velocity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#velocityoptions18",
              children: "VelocityOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["粒子速度配置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  speed表示速度大小。angle表示速度的方向（单位为角度），以元素几何中心为坐标原点，水平方向为X轴，正数表示顺时针方向旋转角度。  默认值：{ speed:[0.0,0.0],angle:[0.0,0.0] }"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "acceleration"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#accelerationoptions18",
              children: "AccelerationOptions"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "ACC_SPEED_UPDATER"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "ACC_ANGLE_UPDATER"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["粒子加速度配置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  speed表示加速度大小，angle表示加速度方向（单位为角度）。  默认值：{ speed:{range:[0.0,0.0]},angle:{range:[0.0,0.0]} }"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spin"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particlepropertyoptions",
              children: "ParticlePropertyOptions"
            }), "<number, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "SPIN_UPDATER"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "粒子自旋角度配置。  默认值：{range:[0.0,0.0]}  方向：正数表示顺时针旋转，负数表示逆时针旋转。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "emitteroptions",
      children: "EmitterOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface EmitterOptions<PARTICLE extends ParticleType> {\n  particle: EmitterParticleOptions<PARTICLE>;\n  emitRate?: number;\n  shape?: ParticleEmitterShape;\n  position?: ParticleTuple<Dimension, Dimension>;\n  size?: ParticleTuple<Dimension, Dimension>;\n  annulusRegion?: ParticleAnnulusRegion;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粒子发射器的配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "particle"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#emitterparticleoptions18",
              children: "EmitterParticleOptions"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particletype",
              children: "PARTICLE"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["粒子配置。  -type表示粒子类型，可以选择图片或者是点。  -config表示对应类型的配置。  -config类型和type值有关联：  1. 如果type为ParticleType.POINT，则config类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pointparticleparameters",
              children: "PointParticleParameters"
            }), " 。  2. 如果type为ParticleType.IMAGE，则config类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#imageparticleparameters",
              children: "ImageParticleParameters"
            }), " 。  -count表示发射的粒子总数，count取值>=-1，当count为-1表示粒子总数无限大。  -lifetime表示单个粒子的生命周期，默认值1000（即1000ms，1s），lifetime>=-1，当lifetime为-1表示粒子生命周期无限大。当lifetime<-1，取默认值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：如果不需要动画一直播放，建议不要将生命周期设置为-1，可能对性能造成较大影响。  lifetimeRange表示粒子生命周期取值范围，设置lifetimeRange后粒子的生命周期为[lifetime-lifetimeRange, lifetime+lifetimeRange]中间的一个随机整数。lifetimeRange默认值为0，取值范围为[0, +∞）。设置为负值时取默认值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "emitRate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发射器发射速率（即每秒发射粒子数）。 默认值：5，小于0时取默认值5。emitRate值超过5000时会极大影响性能，建议设置参数小于5000。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleemittershape",
              children: "ParticleEmitterShape"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发射器形状。  默认值：ParticleEmitterShape.RECTANGLE  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "position"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particletuple18",
              children: "ParticleTuple"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发射器位置（距离组件左上角的位置。第一个参数为x方向上的相对偏移，第二个参数为y轴方向相对偏移。）  默认值：[0.0, 0.0]  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particletuple18",
              children: "ParticleTuple"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发射窗口的大小。第一个参数为发射器宽，第二个参数为发射器高。  默认值：", (0,jsx_runtime.jsx)(_components.a, {
              href: "%E5%8D%B3%E5%8F%91%E5%B0%84%E7%AA%97%E5%8F%A3%E5%8D%A0%E6%BB%A1Particle%E7%BB%84%E4%BB%B6",
              children: "'100%','100%'"
            }), "  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "annulusRegion20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-particle-animation/ts-particle-animation#particleannulusregion20",
              children: "ParticleAnnulusRegion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["环形发射器参数。需要发射器形状为环形（即shape参数为ParticleEmitterShape.ANNULUS）时才生效，且对于环形发射器，形状信息必须通过annulusRegion参数指定，position和size不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "particleconfigs",
      children: "ParticleConfigs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置粒子配置项。"
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
            children: "[ParticleType.POINT]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pointparticleparameters",
              children: "PointParticleParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点状粒子配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[ParticleType.IMAGE]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#imageparticleparameters",
              children: "ImageParticleParameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片粒子配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pointparticleparameters",
      children: "PointParticleParameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置粒子半径。"
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
            children: "radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#vp10",
              children: "VP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "粒子半径。  默认值：0，小于0时取默认值0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "imageparticleparameters",
      children: "ImageParticleParameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图片选项。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片路径，支持本地图片和网络图片，引用方式请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-media-display/arkts-graphics-display#%E5%8A%A0%E8%BD%BD%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90",
              children: "加载图片资源"
            }), "。  暂不支持svg图片类型。  src未发生变化时，会优先使用缓存的资源，无法动态切换资源。如需动态切换资源建议切换为不同的src。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particletuple18",
              children: "ParticleTuple"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像尺寸。  默认值：[0, 0]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "objectFit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#imagefit",
              children: "ImageFit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片显示模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "particlecolorpropertyoptions",
      children: "ParticleColorPropertyOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface ParticleColorPropertyOptions<UPDATER extends ParticleUpdater> {\n  range: ParticleTuple<ResourceColor, ResourceColor>;\n  distributionType?: DistributionType;\n  updater?: ParticleColorUpdaterOptions<UPDATER>;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置粒子颜色属性更新器配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "range"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particletuple18",
              children: "ParticleTuple"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["粒子初始颜色区间，粒子发射器生成粒子的初始颜色在range区间随机取值。  默认值：range:[Color.White,Color.White]  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "distributionType12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#distributiontype12",
              children: "DistributionType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["粒子初始颜色随机值分布，允许用户选择颜色随机值生成的分布类型，支持均匀分布或正态（高斯）分布。  默认值：DistributionType.UNIFORM  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "updater"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particlecolorupdateroptions18",
              children: "ParticleColorUpdaterOptions"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "UPDATER"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["颜色属性变化配置。颜色属性变化类型type有三类：  1、当type为ParticleUpdater.NONE，表示无变化，则config类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particlecolorpropertyupdaterconfigs",
              children: "ParticleColorPropertyUpdaterConfigs"
            }), "[ParticleUpdater.NONE]。  2、type为ParticleUpdater.RANDOM，表示随机变化，则config类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particlecolorpropertyupdaterconfigs",
              children: "ParticleColorPropertyUpdaterConfigs"
            }), "[ParticleUpdater.RANDOM]。  3、type为ParticleUpdater.CURVE,表示按动画曲线变化，则config类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particlecolorpropertyupdaterconfigs",
              children: "ParticleColorPropertyUpdaterConfigs"
            }), "[ParticleUpdater.CURVE]。  默认值：type默认为 ParticleUpdater.NONE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  当type为ParticleUpdater.RANDOM或者ParticleUpdater.CURVE时，updater中颜色配置的优先级高于range中的颜色配置。在updater配置的动画时间周期内，以updater中的颜色配置来变化；在updater配置的动画时间周期外，以range中的颜色配置来变化。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "particlecolorpropertyupdaterconfigs",
      children: "ParticleColorPropertyUpdaterConfigs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置粒子颜色属性更新器的配置。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "[ParticleUpdater.NONE]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[ParticleUpdater.RANDOM]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#particlecoloroptions18",
              children: "ParticleColorOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示变化方式为均匀变化的时候，在区间内随机生成一个差值。r、g、b、a四个颜色通道每秒分别使用差值叠加当前颜色值，生成目标颜色值。实现颜色随机变化的效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[ParticleUpdater.CURVE]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particlepropertyanimation",
              children: "ParticlePropertyAnimation"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            }), ">>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示变化方式为曲线变化时，颜色变化的配置。数组类型表示当前属性可以设置多段动画，如0ms-3000ms，3000ms-5000ms，5000ms-8000ms分别设置动画。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "particlepropertyoptions",
      children: "ParticlePropertyOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface ParticlePropertyOptions<TYPE, UPDATER extends ParticleUpdater> {\n  range: ParticleTuple<TYPE, TYPE>;\n  updater?: ParticleUpdaterOptions<TYPE, UPDATER>;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置粒子属性选项。"
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
            children: "range"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particletuple18",
              children: "ParticleTuple"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "TYPE"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "TYPE"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["粒子初始属性值区间，粒子发射器生成粒子的属性值在range区间随机取值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "  各项属性的非法输入取默认值，当最大值小于最小值的时候取默认区间。TYPE为number。  不同属性的默认值不同：  1、opacity属性：range:[1.0,1.0]，取值范围为[0, 1]，默认值为1.0。  2、scale属性：range:[1.0,1.0]，取值范围为[0, 10000]，默认值为1.0。  3、acceleration加速度speed属性：range:[0.0,0.0]，取值范围为[0, 10000]，默认值为0.0。  4、acceleration加速度angle属性：range:[0.0,0.0]，取值范围为[-10000, 10000]，默认值为0.0。  5、spin属性：range:[0.0,0.0]，取值范围为[-10000, 10000]，默认值为0.0。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "updater"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdateroptions18",
              children: "ParticleUpdaterOptions"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "TYPE"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "UPDATER"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["属性变化配置。属性变化类型type有三类：  1、当type为ParticleUpdater.NONE，表示无变化，则config类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particlepropertyupdaterconfigs",
              children: "ParticlePropertyUpdaterConfigs"
            }), "[ParticleUpdater.NONE]。  2、当type为ParticleUpdater.RANDOM，表示变化类型为随机变化，则config类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particlepropertyupdaterconfigs",
              children: "ParticlePropertyUpdaterConfigs"
            }), "[ParticleUpdater.RANDOM]。  3、当type为ParticleUpdater.CURVE，表示变化类型为曲线变化，则config类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particlepropertyupdaterconfigs",
              children: "ParticlePropertyUpdaterConfigs"
            }), "[ParticleUpdater.CURVE]  默认值：type默认为ParticleUpdater.NONE。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "particlepropertyupdaterconfigs",
      children: "ParticlePropertyUpdaterConfigs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface ParticlePropertyUpdaterConfigs<T> {\n    [ParticleUpdater.NONE]: void;\n    [ParticleUpdater.RANDOM]: ParticleTuple<T, T>;\n    [ParticleUpdater.CURVE]: Array<ParticlePropertyAnimation<T>>;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置粒子属性更新器配置。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "[ParticleUpdater.NONE]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[ParticleUpdater.RANDOM]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particletuple18",
              children: "ParticleTuple"
            }), "<T, T>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示变化方式为匀速变化时，每秒的变化差值为设置区间随机生成的值。  目标属性值为当前属性值叠加变化差值。如当前属性值为0.2，config取[0.1,1.0]:  1、如果变化差值在区间[0.1,1.0]取随机值0.5，则目标属性值为0.2+0.5 = 0.7；  2、变化差值也可以取负值。如当前属性值为0.2，config为 [-3.0,2.0],如果变化差值在区间[-3.0,2.0]取随机值-2.0，则目标属性值为0.2-2.0 = -1.8。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  config配置的是变化差值的取值范围，差值的最大最小值没有约束。但是如果当前属性值叠加差值大于属性最大值，目标属性值取属性最大值；如果当前属性值叠加差值小于属性最小值，目标属性值取属性最小值。T为number。  例如：opacity的取值范围[0.0,1.0]则当当前属性值叠加差值超过1.0，则取1.0。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[ParticleUpdater.CURVE]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particlepropertyanimation",
              children: "ParticlePropertyAnimation"
            }), "<T>>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示变化方式为曲线变化时，属性变化的配置。数组类型表示当前属性可以设置多段动画，如0ms-3000ms，3000ms-5000ms，5000ms-8000ms分别设置动画。T为number。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "particlepropertyanimation",
      children: "ParticlePropertyAnimation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface ParticlePropertyAnimation<T> {\n  from: T;\n  to: T;\n  startMillis: number;\n  endMillis: number;\n  curve?: Curve | ICurve;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置粒子属性生命周期。"
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
            children: "from"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性起始值。非法输入取对应属性的默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "to"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性目标值。非法输入取对应属性的默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startMillis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画开始时间。  单位：毫秒。  取值范围：[0, +∞)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endMillis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画结束时间。  单位：毫秒。  取值范围：[0, +∞)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "curve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#curve",
              children: "Curve"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-curve/js-apis-curve#icurve9",
              children: "ICurve"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "particletype",
      children: "ParticleType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粒子类型。"
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
            children: "POINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'point'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点状粒子"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'image'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片粒子"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "particleemittershape",
      children: "ParticleEmitterShape"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粒子发射器形状。"
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
            children: "RECTANGLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'rectangle'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["粒子发射器为矩形。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CIRCLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'circle'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["粒子发射器为圆形。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ELLIPSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'ellipse'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["粒子发射器为椭圆形。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ANNULUS20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'annulus'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["粒子发射器为环形。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "distributiontype12",
      children: "DistributionType12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始颜色随机值分布类型。"
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
            children: "UNIFORM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始颜色随机值分布为均匀分布。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAUSSIAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始颜色随机值分布为高斯分布。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "particleupdater",
      children: "ParticleUpdater"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粒子变化类型。"
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
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'none'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无变化"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RANDOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'random'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "随机变化"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CURVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'curve'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动画曲线变化"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "disturbancefieldoptions12",
      children: "DisturbanceFieldOptions12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置粒子扰动场参数。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "strength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场强，表示场从中心向外的排斥力的强度，默认值0。正数表示排斥力方向朝外，负数表示吸引力，方向朝内。  取值范围：(-∞, +∞)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#disturbancefieldshape12",
              children: "DisturbanceFieldShape"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场的形状。  默认为DisturbanceFieldShape.RECT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#sizett12",
              children: "SizeT"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场的大小。  默认值 {width:0，height:0}。  width和height的取值范围：[0, +∞)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "position"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#positiont12",
              children: "PositionT"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场的位置。  默认值{x:0，y:0}。  x、y的取值范围：(-∞, +∞)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "feather"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "羽化值，表示场从中心点到场边缘的衰减程度，取值范围0到100的整数，如果0则表示场是一个刚体，所有范围内的粒子都被排斥在外。羽化值越大场的缓和程度越大，场范围内出现越多靠近中心点的粒子。  默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "noiseScale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "噪声尺度，用于控制噪声图案的整体大小，取值大于等于0。  默认值1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "noiseFrequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "噪声频率，频率越大噪声越细腻，取值大于等于0。  默认值1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "noiseAmplitude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "噪声振幅，噪声的波动的范围，振幅越大噪音之间差异越大。取值大于等于0。  默认值1。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "disturbancefieldshape12",
      children: "DisturbanceFieldShape12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粒子形状。"
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
            children: "RECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长方形。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CIRCLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ELLIPSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "椭圆。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "emitterproperty12",
      children: "EmitterProperty12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置发射器属性。"
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["索引，取整，按初始化参数中发射器的数组索引指定对应的发射器。异常默认值为0。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "emitRate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发射器发射速率，即每秒发射粒子的数量。  未传入时保持其当前的发射速率， 传入值小于0时取默认值5。emitRate值超过5000时会极大影响性能，建议设置参数小于5000。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "position"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#positiont12",
              children: "PositionT"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发射器位置的数组，只支持number类型。  未传入时保持其当前的发射器位置。需传入两个有效参数，若其中一个为异常值，则position不生效。  x、y的取值范围：(-∞, +∞)。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#sizett12",
              children: "SizeT"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发射窗口的大小，只支持number类型。  未传入时保持其当前发射窗口大小。需传入两个有效参数且都大于0，若其中一个为异常值，则size不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "annulusRegion20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-particle-animation/ts-particle-animation#particleannulusregion20",
              children: "ParticleAnnulusRegion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["环形发射器参数。需要对应index的发射器形状为环形才生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "particletuple18",
      children: "ParticleTuple18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "declare type ParticleTuple<T1, T2> = [T1, T2];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粒子元组，表示定义一些动画参数的类型。"
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
            children: "[T1, T2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一些动画参数的类型，可能是任何类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "particles18",
      children: "Particles18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface Particles<\n  PARTICLE extends ParticleType,\n  COLOR_UPDATER extends ParticleUpdater,\n  OPACITY_UPDATER extends ParticleUpdater,\n  SCALE_UPDATER extends ParticleUpdater,\n  ACC_SPEED_UPDATER extends ParticleUpdater,\n  ACC_ANGLE_UPDATER extends ParticleUpdater,\n  SPIN_UPDATER extends ParticleUpdater\n> {\n  particles: Array<\n    ParticleOptions<\n      PARTICLE,\n      COLOR_UPDATER,\n      OPACITY_UPDATER,\n      SCALE_UPDATER,\n      ACC_SPEED_UPDATER,\n      ACC_ANGLE_UPDATER,\n      SPIN_UPDATER\n    >\n  >;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粒子动画的集合。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(447241)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
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
            children: "particles10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<  ParticleOptions<  PARTICLE,  COLOR_UPDATER,  OPACITY_UPDATER,  SCALE_UPDATER,  ACC_SPEED_UPDATER,  ACC_ANGLE_UPDATER,  SPIN_UPDATER  >  >"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["粒子动画的集合。每一个的粒子动画（", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleoptions",
              children: "ParticleOptions"
            }), "）包含粒子发射，同时可配置粒子的颜色、透明度、大小、速度、加速度与旋转速度，旋转速度，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleoptions",
              children: "ParticleOptions"
            }), "属性说明。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "velocityoptions18",
      children: "VelocityOptions18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粒子速度配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(501827)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
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
            children: "speed10+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particletuple18",
              children: "ParticleTuple"
            }), "<number, number>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示速度大小。  默认值：{range:[0.0,0.0]}  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "angle10+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particletuple18",
              children: "ParticleTuple"
            }), "<number, number>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示速度的方向（单位为角度）。以元素几何中心为坐标原点，水平方向为X轴，正数表示顺时针方向旋转角度。  默认值：{range:[0.0,0.0]}  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accelerationoptions18",
      children: "AccelerationOptions18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "declare interface AccelerationOptions<\n  ACC_SPEED_UPDATER extends ParticleUpdater,\n  ACC_ANGLE_UPDATER extends ParticleUpdater\n> {\n  speed?: ParticlePropertyOptions<number, ACC_SPEED_UPDATER>;\n  angle?: ParticlePropertyOptions<number, ACC_ANGLE_UPDATER>;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粒子加速度配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(687637)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
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
            children: "speed10+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particlepropertyoptions",
              children: "ParticlePropertyOptions"
            }), "<number, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "ACC_SPEED_UPDATER"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示加速度大小。  默认值：{range:[0.0,0.0]}  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "angle10+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particlepropertyoptions",
              children: "ParticlePropertyOptions"
            }), "<number, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "ACC_ANGLE_UPDATER"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示加速度方向（单位为角度）。  默认值：{range:[0.0,0.0]}  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "emitterparticleoptions18",
      children: "EmitterParticleOptions18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface EmitterParticleOptions<PARTICLE extends ParticleType> {\n  type: PARTICLE;\n  config: ParticleConfigs[PARTICLE];\n  count: number;\n  lifetime?: number;\n  lifetimeRange?: number;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "粒子配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(499868)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
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
            children: "type10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#particletype",
              children: "PARTICLE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示粒子类型，可以选择图片或者是点。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config10+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particleconfigs",
              children: "ParticleConfigs"
            }), "[PARTICLE]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示对应类型的配置。  config类型和type值有关联：  1. 如果type为ParticleType.POINT，则config类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pointparticleparameters",
              children: "PointParticleParameters"
            }), " 。  2. 如果type为ParticleType.IMAGE，则config类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#imageparticleparameters",
              children: "ImageParticleParameters"
            }), " 。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示发射的粒子总数，count取值>=-1,当count为-1表示粒子总数无限大。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lifetime10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示单个粒子的生命周期，默认值1000（即1000ms，1s），lifetime>=-1。当lifetime为-1表示粒子生命周期无限大。当lifetime<-1，取默认值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：如果不需要动画一直播放，建议不要将生命周期设置为-1，可能对性能造成较大影响。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lifetimeRange12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示粒子生命周期取值范围，设置lifetimeRange后粒子的生命周期为[lifetime-lifetimeRange, lifetime+lifetimeRange]中间的一个随机整数。lifetimeRange默认值为0，取值范围为0到正无穷。设置为负值时取默认值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "particleupdateroptions18",
      children: "ParticleUpdaterOptions18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface ParticleUpdaterOptions<TYPE, UPDATER extends ParticleUpdater> {\n  type: UPDATER;\n  config: ParticlePropertyUpdaterConfigs<TYPE>[UPDATER];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "颜色属性变化配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(923614)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
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
            children: "type10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "UPDATER"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示颜色属性变化类型。  默认值：type默认为ParticleUpdater.NONE。 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config10+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particlepropertyupdaterconfigs",
              children: "ParticlePropertyUpdaterConfigs"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "TYPE"
            }), ">[", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "UPDATER"
            }), "]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["属性变化配置。属性变化类型type有三类：  1、当type为ParticleUpdater.NONE，表示无变化，则config类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particlepropertyupdaterconfigs",
              children: "ParticlePropertyUpdaterConfigs"
            }), "[ParticleUpdater.NONE]。  2、当type为ParticleUpdater.RANDOM，表示变化类型为随机变化，则config类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particlepropertyupdaterconfigs",
              children: "ParticlePropertyUpdaterConfigs"
            }), "[ParticleUpdater.RANDOM]。  3、当type为ParticleUpdater.CURVE，表示变化类型为曲线变化，则config类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particlepropertyupdaterconfigs",
              children: "ParticlePropertyUpdaterConfigs"
            }), "[ParticleUpdater.CURVE]。 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "particlecolorupdateroptions18",
      children: "ParticleColorUpdaterOptions18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "interface ParticleColorUpdaterOptions<UPDATER extends ParticleUpdater> {\n  type: UPDATER;\n  config: ParticleColorPropertyUpdaterConfigs[UPDATER];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "颜色属性变化配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(23625)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
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
            children: "type10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "UPDATER"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示颜色属性变化类型。  默认值：type默认为 ParticleUpdater.NONE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config10+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particlecolorpropertyupdaterconfigs",
              children: "ParticleColorPropertyUpdaterConfigs"
            }), "[", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particleupdater",
              children: "UPDATER"
            }), "]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["颜色属性变化类型type有三类：  1、当type为ParticleUpdater.NONE，表示无变化，则config类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particlecolorpropertyupdaterconfigs",
              children: "ParticleColorPropertyUpdaterConfigs"
            }), "[ParticleUpdater.NONE]。  2、type为ParticleUpdater.RANDOM，表示随机变化，则config类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particlecolorpropertyupdaterconfigs",
              children: "ParticleColorPropertyUpdaterConfigs"
            }), "[ParticleUpdater.RANDOM]。  3、type为ParticleUpdater.CURVE,表示按动画曲线变化，则config类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#particlecolorpropertyupdaterconfigs",
              children: "ParticleColorPropertyUpdaterConfigs"
            }), "[ParticleUpdater.CURVE]。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  当type为ParticleUpdater.RANDOM或者ParticleUpdater.CURVE时，updater中颜色配置的优先级高于range中的颜色配置。在updater配置的动画时间周期内，以updater中的颜色配置来变化；在updater配置的动画时间周期前，以range中的颜色配置来变化。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "particlecoloroptions18",
      children: "ParticleColorOptions18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "颜色变化方式为均匀变化的时候，在区间内随机生成一个差值。r、g、b、a四个颜色通道每秒分别使用差值叠加当前颜色值，生成目标颜色值。实现颜色随机变化的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(521112)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "r10+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particletuple18",
              children: "ParticleTuple"
            }), "<number, number>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["r颜色通道的差值。 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "g10+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particletuple18",
              children: "ParticleTuple"
            }), "<number, number>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["g颜色通道的差值。 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "b10+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particletuple18",
              children: "ParticleTuple"
            }), "<number, number>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["b颜色通道的差值。 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "a10+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#particletuple18",
              children: "ParticleTuple"
            }), "<number, number>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["a颜色通道的差值。 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "particleannulusregion20",
      children: "ParticleAnnulusRegion20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置环形发射器区域的配置信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(348871)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "outerRadius、innerRadius小于零或使用百分比单位时，会按零进行处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当outerRadius小于innerRadius时（即外圆半径小于内圆半径时），会将当前较小的值作为新的内圆半径，将较大的值作为新的外圆半径。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当endAngle小于startAngle时（即结束角度小于起始角度时），会将当前较小的值作为新的起始角度，将较大的值作为新的结束角度。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(584275)/* ["default"] */.A) + "",
        width: "561",
        height: "385"
      })
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
            children: "center"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#positiont12",
              children: "PositionT"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆环的圆心坐标，组件的左上角为坐标原点。默认值：{x:LengthMetrics.percent(0.5),y:LengthMetrics.percent(0.5)}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "outerRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆环的外圆半径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "innerRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆环的内圆半径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆环的起始角度。  单位：度  默认值：0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "圆环的结束角度。  单位：度  默认值：360"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vector2tt22",
      children: "Vector2T<T>22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Vector2T<T> = Vector2T<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义Vector2T类型。其中Vector2T类型包含x和y两个属性值。"
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#vector2tt12",
              children: "Vector2T<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于表示T类型的包含x和y两个值的向量。x表示向量x轴方向的值。y表示向量y轴方向的值。  单位：vp"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fieldregion22",
      children: "FieldRegion22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于设置粒子场的区域信息。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "shape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#disturbancefieldshape12",
              children: "DisturbanceFieldShape"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "粒子场的区域形状。  默认值：DisturbanceFieldShape.RECT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "position"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#positiont12",
              children: "PositionT"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "粒子场的区域中心位置。坐标单位为vp。  默认值：{x:0, y:0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#sizett12",
              children: "SizeT"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "粒子场的区域大小。值的单位为vp。  默认值：{width:0, height:0}  取值范围：  width：[0, +∞)  height：[0, +∞)  当size的width（或height）设置为负值时取width（或height）的默认值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ripplefieldoptions22",
      children: "RippleFieldOptions22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于描述粒子波动场信息的参数。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "amplitude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述粒子波动场波的幅值。幅值越大，波动场的力越大。  取值范围：[0, +∞)  默认值：0  设置为负值时取默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wavelength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述粒子波动场的波长，即一个波周期的变化距离。波长越大，则随距离的变化，波的变化越慢，波动越不明显。  取值范围：[0, +∞)  默认值：0  设置为负值时取默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "waveSpeed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述粒子波动场的波速。波速越大，则随时间的变化，波的变化越快，波动越明显。  取值范围：[0, +∞)  默认值：0  设置为负值时取默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "attenuation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述粒子波动场波的衰减系数。衰减系数越大，则随时间的变化，波的衰减越快。  取值范围：[0, 1]  默认值：0.0  设置的数值不在范围内时取默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "center"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#positiont12",
              children: "PositionT"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "粒子波动场产生力的中心位置。组件的左上角为坐标原点。坐标单位为vp。  默认值：{x:0, y:0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-particle-animation/ts-particle-animation#fieldregion22",
              children: "FieldRegion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "粒子波动场影响的区域信息，其中区域信息包括区域形状、区域大小以及区域中心位置。  默认值：{shape:DisturbanceFieldShape.RECT, position:{x:0, y:0}, size:{width:0, height:0}}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "velocityfieldoptions22",
      children: "VelocityFieldOptions22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于描述粒子速度场信息的参数。"
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
            children: "velocity"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#vector2tt22",
              children: "Vector2T"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "粒子速度场的各方向速度值。粒子只有在速度场作用范围内时获得该速度，离开速度场范围后不受该速度场影响，不获得该额外的速度。  默认值：{x:0, y:0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-particle-animation/ts-particle-animation#fieldregion22",
              children: "FieldRegion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "粒子速度场影响的区域信息，其中区域信息包括区域形状、区域大小以及区域中心位置。  默认值：{shape:DisturbanceFieldShape.RECT, position:{x:0, y:0}, size:{width:0, height:0}}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1圆形初始化粒子",
      children: "示例1（圆形初始化粒子）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述粒子动画基础用法，通过圆形初始化粒子。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ParticleExample {\n  build() {\n    Stack() {\n      Text()\n        .width(300).height(300).backgroundColor(Color.Black)\n      Particle({\n        particles: [\n          {\n            emitter: {\n              particle: {\n                type: ParticleType.POINT, // 粒子类型\n                config: {\n                  radius: 10 // 圆点半径\n                },\n                count: 500, // 粒子总数\n                lifetime: 10000, // 粒子生命周期，单位ms\n                lifetimeRange: 100 // 粒子生命周期取值范围，单位ms\n              },\n              emitRate: 10, // 每秒发射粒子数\n              position: [0, 0],\n              shape: ParticleEmitterShape.RECTANGLE // 发射器形状\n            },\n            color: {\n              range: [Color.Red, Color.Yellow], // 初始颜色范围\n              distributionType: DistributionType.GAUSSIAN, // 初始颜色随机值分布\n              updater: {\n                type: ParticleUpdater.CURVE, // 变化方式为曲线变化\n                config: [\n                  {\n                    from: Color.White, // 变化起始值\n                    to: Color.Pink, // 变化终点值\n                    startMillis: 0, // 开始时间\n                    endMillis: 3000, // 结束时间\n                    curve: Curve.EaseIn // 变化曲线\n                  },\n                  {\n                    from: Color.Pink,\n                    to: Color.Orange,\n                    startMillis: 3000,\n                    endMillis: 5000,\n                    curve: Curve.EaseIn\n                  },\n                  {\n                    from: Color.Orange,\n                    to: Color.Pink,\n                    startMillis: 5000,\n                    endMillis: 8000,\n                    curve: Curve.EaseIn\n                  },\n                ]\n              }\n            },\n            opacity: {\n              range: [0.0, 1.0], // 粒子透明度的初始值从【0.0到1.0】随机产生\n              updater: {\n                type: ParticleUpdater.CURVE,\n                config: [\n                  {\n                    from: 0.0,\n                    to: 1.0,\n                    startMillis: 0,\n                    endMillis: 3000,\n                    curve: Curve.EaseIn\n                  },\n                  {\n                    from: 1.0,\n                    to: 0.0,\n                    startMillis: 5000,\n                    endMillis: 10000,\n                    curve: Curve.EaseIn\n                  }\n                ]\n              }\n            },\n            scale: {\n              range: [0.0, 0.0],\n              updater: {\n                type: ParticleUpdater.CURVE,\n                config: [\n                  {\n                    from: 0.0,\n                    to: 0.5,\n                    startMillis: 0,\n                    endMillis: 3000,\n                    curve: Curve.EaseIn\n                  }\n                ]\n              }\n            },\n            acceleration: {\n              // 加速度的配置，从大小和方向两个维度变化，speed表示加速度大小，angle表示加速度方向\n              speed: {\n                range: [3, 9],\n                updater: {\n                  type: ParticleUpdater.RANDOM, // Speed的变化方式是随机变化\n                  config: [1, 20]\n                }\n              },\n              angle: {\n                range: [90, 90]\n              }\n            }\n\n          }\n        ]\n      }).width(300).height(300)\n    }.width('100%').height('100%').align(Alignment.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(435641)/* ["default"] */.A) + "",
        width: "328",
        height: "326"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2图片初始化粒子",
      children: "示例2（图片初始化粒子）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述粒子动画基础用法，通过图片初始化粒子。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ParticleExample {\n  @State\n  myCount: number = 100\n  flag: boolean = false;\n\n  build() {\n    Column() {\n      Stack() {\n        Particle({\n          particles: [\n            {\n              emitter: {\n                particle: {\n                  type: ParticleType.IMAGE,\n                  config: {\n                    src: $r(\"app.media.book\"),\n                    size: [10, 10]\n                  },\n                  count: this.myCount,\n                  lifetime: 10000,\n                  lifetimeRange: 100\n                },\n                emitRate: 3,\n                shape: ParticleEmitterShape.CIRCLE\n              },\n              color: {\n                range: [Color.White, Color.White]\n              },\n              opacity: {\n                range: [1.0, 1.0],\n                updater: {\n                  type: ParticleUpdater.CURVE,\n                  config: [\n                    {\n                      from: 0,\n                      to: 1.0,\n                      startMillis: 0,\n                      endMillis: 6000\n                    },\n                    {\n                      from: 1.0,\n                      to: 0,\n                      startMillis: 6000,\n                      endMillis: 10000\n                    }\n                  ]\n                }\n              },\n              scale: {\n                range: [0.1, 1.0],\n                updater: {\n                  type: ParticleUpdater.CURVE,\n                  config: [\n                    {\n                      from: 0,\n                      to: 1.5,\n                      startMillis: 0,\n                      endMillis: 8000,\n                      curve: Curve.EaseIn\n                    }\n\n                  ]\n                }\n              },\n              acceleration: {\n                speed: {\n                  range: [3, 9],\n                  updater: {\n                    type: ParticleUpdater.CURVE,\n                    config: [\n                      {\n                        from: 10,\n                        to: 20,\n                        startMillis: 0,\n                        endMillis: 3000,\n                        curve: Curve.EaseIn\n                      },\n                      {\n                        from: 10,\n                        to: 2,\n                        startMillis: 3000,\n                        endMillis: 8000,\n                        curve: Curve.EaseIn\n                      }\n                    ]\n                  }\n                },\n                angle: {\n                  range: [0, 180],\n                  updater: {\n                    type: ParticleUpdater.CURVE,\n                    config: [{\n                      from: 1,\n                      to: 2,\n                      startMillis: 0,\n                      endMillis: 1000,\n                      curve: Curve.EaseIn\n                    },\n                      {\n                        from: 50,\n                        to: -50,\n                        startMillis: 1000,\n                        endMillis: 3000,\n                        curve: Curve.EaseIn\n                      },\n                      {\n                        from: 3,\n                        to: 5,\n                        startMillis: 3000,\n                        endMillis: 8000,\n                        curve: Curve.EaseIn\n                      }\n                    ]\n                  }\n                }\n              },\n              spin: {\n                range: [0.1, 1.0],\n                updater: {\n                  type: ParticleUpdater.CURVE,\n                  config: [\n                    {\n                      from: 0,\n                      to: 360,\n                      startMillis: 0,\n                      endMillis: 8000,\n                      curve: Curve.EaseIn\n                    }\n                  ]\n                }\n              },\n            }\n            , {\n            emitter: {\n              particle: {\n                type: ParticleType.IMAGE,\n                config: {\n                  src: $r('app.media.heart'),\n                  size: [10, 10]\n                },\n                count: this.myCount,\n                lifetime: 10000,\n                lifetimeRange: 100\n              },\n              emitRate: 3,\n              shape: ParticleEmitterShape.CIRCLE\n            },\n            color: {\n              range: [Color.White, Color.White]\n            },\n            opacity: {\n              range: [1.0, 1.0],\n              updater: {\n                type: ParticleUpdater.CURVE,\n                config: [\n                  {\n                    from: 0,\n                    to: 1.0,\n                    startMillis: 0,\n                    endMillis: 6000\n                  },\n                  {\n                    from: 1.0,\n                    to: 0,\n                    startMillis: 6000,\n                    endMillis: 10000\n                  }\n                ]\n              }\n            },\n            scale: {\n              range: [0.1, 1.0],\n              updater: {\n                type: ParticleUpdater.CURVE,\n                config: [\n                  {\n                    from: 0,\n                    to: 2.0,\n                    startMillis: 0,\n                    endMillis: 10000,\n                    curve: Curve.EaseIn\n                  }\n\n                ]\n              }\n            },\n            acceleration: {\n              speed: {\n                range: [3, 9],\n                updater: {\n                  type: ParticleUpdater.CURVE,\n                  config: [\n                    {\n                      from: 10,\n                      to: 20,\n                      startMillis: 0,\n                      endMillis: 3000,\n                      curve: Curve.EaseIn\n                    },\n                    {\n                      from: 10,\n                      to: 2,\n                      startMillis: 3000,\n                      endMillis: 8000,\n                      curve: Curve.EaseIn\n                    }\n                  ]\n                }\n              },\n              angle: {\n                range: [0, 180],\n                updater: {\n                  type: ParticleUpdater.CURVE,\n                  config: [{\n                    from: 1,\n                    to: 2,\n                    startMillis: 0,\n                    endMillis: 1000,\n                    curve: Curve.EaseIn\n                  },\n                    {\n                      from: 50,\n                      to: -50,\n                      startMillis: 0,\n                      endMillis: 3000,\n                      curve: Curve.EaseIn\n                    },\n                    {\n                      from: 3,\n                      to: 5,\n                      startMillis: 3000,\n                      endMillis: 10000,\n                      curve: Curve.EaseIn\n                    }\n                  ]\n                }\n              }\n            },\n            spin: {\n              range: [0.1, 1.0],\n              updater: {\n                type: ParticleUpdater.CURVE,\n                config: [\n                  {\n                    from: 0,\n                    to: 360,\n                    startMillis: 0,\n                    endMillis: 10000,\n                    curve: Curve.EaseIn\n                  }\n                ]\n              }\n            },\n          }, {\n            emitter: {\n              particle: {\n                type: ParticleType.IMAGE,\n                config: {\n                  src: $r('app.media.sun'),\n                  size: [10, 10]\n                },\n                count: this.myCount,\n                lifetime: 10000,\n                lifetimeRange: 100\n              },\n              emitRate: 3,\n              shape: ParticleEmitterShape.CIRCLE\n            },\n            color: {\n              range: [Color.White, Color.White]\n            },\n            opacity: {\n              range: [1.0, 1.0],\n              updater: {\n                type: ParticleUpdater.CURVE,\n                config: [\n                  {\n                    from: 0,\n                    to: 1.0,\n                    startMillis: 0,\n                    endMillis: 6000\n                  },\n                  {\n                    from: 1.0,\n                    to: 0,\n                    startMillis: 6000,\n                    endMillis: 10000\n                  }\n                ]\n              }\n            },\n            scale: {\n              range: [0.1, 1.0],\n              updater: {\n                type: ParticleUpdater.CURVE,\n                config: [\n                  {\n                    from: 0,\n                    to: 2.0,\n                    startMillis: 0,\n                    endMillis: 10000,\n                    curve: Curve.EaseIn\n                  }\n\n                ]\n              }\n            },\n            acceleration: {\n              speed: {\n                range: [3, 9],\n                updater: {\n                  type: ParticleUpdater.CURVE,\n                  config: [\n                    {\n                      from: 10,\n                      to: 20,\n                      startMillis: 0,\n                      endMillis: 3000,\n                      curve: Curve.EaseIn\n                    },\n                    {\n                      from: 10,\n                      to: 2,\n                      startMillis: 3000,\n                      endMillis: 8000,\n                      curve: Curve.EaseIn\n                    }\n                  ]\n                }\n              },\n              angle: {\n                range: [0, 180],\n                updater: {\n                  type: ParticleUpdater.CURVE,\n                  config: [{\n                    from: 1,\n                    to: 2,\n                    startMillis: 0,\n                    endMillis: 1000,\n                    curve: Curve.EaseIn\n                  },\n                    {\n                      from: 50,\n                      to: -50,\n                      startMillis: 1000,\n                      endMillis: 3000,\n                      curve: Curve.EaseIn\n                    },\n                    {\n                      from: 3,\n                      to: 5,\n                      startMillis: 3000,\n                      endMillis: 8000,\n                      curve: Curve.EaseIn\n                    }\n                  ]\n                }\n              }\n            },\n            spin: {\n              range: [0.1, 1.0],\n              updater: {\n                type: ParticleUpdater.CURVE,\n                config: [\n                  {\n                    from: 0,\n                    to: 360,\n                    startMillis: 0,\n                    endMillis: 10000,\n                    curve: Curve.EaseIn\n                  }\n                ]\n              }\n            },\n          }\n          ]\n        }).width(300).height(300)\n\n      }.width(500).height(500).align(Alignment.Center)\n    }.width(\"100%\").height(\"100%\")\n\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(750964)/* ["default"] */.A) + "",
        width: "269",
        height: "487"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3粒子扰动场的干扰下运动轨迹发生变化",
      children: "示例3（粒子扰动场的干扰下运动轨迹发生变化）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例主要演示如何通过粒子扰动场的干扰下来实现运动轨迹发生变化的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ParticleExample3 {\n  build() {\n    Stack() {\n      Text()\n        .width(300).height(300).backgroundColor(Color.Black)\n      Particle({\n        particles: [\n          {\n            emitter: {\n              particle: {\n                type: ParticleType.POINT, // 粒子类型\n                config: {\n                  radius: 10 // 圆点半径\n                },\n                count: 500, // 粒子总数\n                lifetime: 10000 // 粒子生命周期，单位ms\n              },\n              emitRate: 10, // 每秒发射粒子数\n              position: [0, 0],\n              shape: ParticleEmitterShape.RECTANGLE // 发射器形状\n            },\n            color: {\n              range: [Color.Red, Color.Yellow], // 初始颜色范围\n              updater: {\n                type: ParticleUpdater.CURVE, // 变化方式为曲线变化\n                config: [\n                  {\n                    from: Color.White, // 变化起始值\n                    to: Color.Pink, // 变化终点值\n                    startMillis: 0, // 开始时间\n                    endMillis: 3000, // 结束时间\n                    curve: Curve.EaseIn // 变化曲线\n                  },\n                  {\n                    from: Color.Pink,\n                    to: Color.Orange,\n                    startMillis: 3000,\n                    endMillis: 5000,\n                    curve: Curve.EaseIn\n                  },\n                  {\n                    from: Color.Orange,\n                    to: Color.Pink,\n                    startMillis: 5000,\n                    endMillis: 8000,\n                    curve: Curve.EaseIn\n                  },\n                ]\n              }\n            },\n            opacity: {\n              range: [0.0, 1.0], // 粒子透明度的初始值从[0.0,1.0]随机产生\n              updater: {\n                type: ParticleUpdater.CURVE,\n                config: [\n                  {\n                    from: 0.0,\n                    to: 1.0,\n                    startMillis: 0,\n                    endMillis: 3000,\n                    curve: Curve.EaseIn\n                  },\n                  {\n                    from: 1.0,\n                    to: 0.0,\n                    startMillis: 5000,\n                    endMillis: 10000,\n                    curve: Curve.EaseIn\n                  }\n                ]\n              }\n            },\n            scale: {\n              range: [0.0, 0.0],\n              updater: {\n                type: ParticleUpdater.CURVE,\n                config: [\n                  {\n                    from: 0.0,\n                    to: 0.5,\n                    startMillis: 0,\n                    endMillis: 3000,\n                    curve: Curve.EaseIn\n                  }\n                ]\n              }\n            },\n            acceleration: {\n              // 加速度的配置，从大小和方向两个维度变化，speed表示加速度大小，angle表示加速度方向\n              speed: {\n                range: [3, 9],\n                updater: {\n                  type: ParticleUpdater.RANDOM,\n                  config: [1, 20]\n                }\n              },\n              angle: {\n                range: [90, 90]\n              }\n            }\n\n          }\n        ]\n      }).width(300).height(300).disturbanceFields([{\n        strength: 10,\n        shape: DisturbanceFieldShape.RECT,\n        size: { width: 100, height: 100 },\n        position: { x: 100, y: 100 },\n        feather: 15,\n        noiseScale: 10,\n        noiseFrequency: 15,\n        noiseAmplitude: 5\n      }])\n    }.width('100%').height('100%').align(Alignment.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(522034)/* ["default"] */.A) + "",
        width: "312",
        height: "314"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4调整粒子发射器位置",
      children: "示例4（调整粒子发射器位置）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过emitter()调整粒子发射器的位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ParticleExample4 {\n  @State emitterProperties: Array<EmitterProperty> = [\n    {\n      index: 0,\n      emitRate: 100,\n      position: { x: 60, y: 80 },\n      size: { width: 200, height: 200 }\n    }\n  ];\n\n  build() {\n    Stack() {\n      Text()\n        .width(300).height(300).backgroundColor(Color.Black)\n      Particle({\n        particles: [\n          {\n            emitter: {\n              particle: {\n                type: ParticleType.POINT, // 粒子类型\n                config: {\n                  radius: 5 // 圆点半径\n                },\n                count: 400, // 粒子总数\n                lifetime: -1 // 粒子的生命周期，-1表示粒子生命周期无限大\n              },\n              emitRate: 10, // 每秒发射粒子数\n              position: [0, 0], // 粒子发射位置\n              shape: ParticleEmitterShape.CIRCLE // 发射器形状\n            },\n            color: {\n              range: [Color.Red, Color.Yellow], // 初始颜色范围\n              updater: {\n                type: ParticleUpdater.CURVE, // 变化方式为曲线变化\n                config: [\n                  {\n                    from: Color.White,\n                    to: Color.Pink,\n                    startMillis: 0,\n                    endMillis: 3000,\n                    curve: Curve.EaseIn\n                  },\n                  {\n                    from: Color.Pink,\n                    to: Color.Orange,\n                    startMillis: 3000,\n                    endMillis: 5000,\n                    curve: Curve.EaseIn\n                  },\n                  {\n                    from: Color.Orange,\n                    to: Color.Pink,\n                    startMillis: 5000,\n                    endMillis: 8000,\n                    curve: Curve.EaseIn\n                  },\n                ]\n              }\n            },\n          },\n        ]\n      })\n        .width(300)\n        .height(300)\n        .emitter(this.emitterProperties)\n    }.width('100%').height('100%').align(Alignment.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(448288)/* ["default"] */.A) + "",
        width: "173",
        height: "163"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5环形发射器创建",
      children: "示例5（环形发射器创建）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了粒子动画环形发射器每隔一秒钟沿着圆弧30度递增，周期性发射粒子，直至布满整个圆环。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct ParticleExample5 {\n  build() {\n    Stack() {\n      Text()\n        .width(300).height(300).backgroundColor(Color.Black)\n      Particle({\n        particles: [\n          {\n            emitter: {\n              particle: {\n                type: ParticleType.POINT, // 粒子类型\n                config: {\n                  radius: 5 // 圆点半径\n                },\n                count: 2000, // 粒子总数\n                lifetime: 10000, // 粒子生命周期，单位ms\n                lifetimeRange: 100 // 粒子生命周期取值范围，单位ms\n              },\n              emitRate: 100, // 每秒发射粒子数\n              shape: ParticleEmitterShape.ANNULUS, // 环形发射器\n              annulusRegion:{\n                center:{x:LengthMetrics.percent(0.5),y:LengthMetrics.percent(0.5)}, // 圆环的圆心坐标\n                innerRadius:LengthMetrics.vp(100), // 圆环的外圆半径\n                outerRadius:LengthMetrics.vp(120), // 圆环的内圆半径\n                startAngle:0, // 圆环的起始角度\n                endAngle:360 // 圆环的结束角度\n              }\n            },\n            color: {\n              range: [Color.Pink, Color.White],\n            },\n            opacity: {\n              range: [0.0, 1.0],\n              updater: {\n                type: ParticleUpdater.CURVE,\n                config: [\n                  {\n                    from: 0.0,\n                    to: 1.0,\n                    startMillis: 0,\n                    endMillis: 3000,\n                    curve: Curve.EaseIn\n                  },\n                  {\n                    from: 1.0,\n                    to: 0.0,\n                    startMillis: 5000,\n                    endMillis: 10000,\n                    curve: Curve.EaseIn\n                  }\n                ]\n              }\n            },\n            scale: {\n              range: [0.0, 0.0],\n              updater: {\n                type: ParticleUpdater.CURVE,\n                config: [\n                  {\n                    from: 0.0,\n                    to: 0.5,\n                    startMillis: 0,\n                    endMillis: 3000,\n                    curve: Curve.EaseIn\n                  }\n                ]\n              }\n            },\n          }\n        ]\n      }).width(300).height(300)\n    }.width('100%').height('100%').align(Alignment.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(206535)/* ["default"] */.A) + "",
        width: "830",
        height: "900"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6环形发射器更新",
      children: "示例6（环形发射器更新）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述粒子动画环形发射器更新的基础用法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct ParticleExample6 {\n\n  @State radius: number = 1;\n  @State shape: ParticleEmitterShape = ParticleEmitterShape.ANNULUS;\n  @State emitRate: number = 200;\n  @State count: number = 2000;\n  private timerID: number = -1;\n  private centerX: LengthMetrics = LengthMetrics.percent(0.5);\n  private centerY: LengthMetrics = LengthMetrics.percent(0.5);\n  private inRadius: LengthMetrics = LengthMetrics.vp(120);\n  private outRadius: LengthMetrics = LengthMetrics.vp(120);\n  private startAngle: number = 0;\n  private endAngle: number = 90;\n  @State emitterProperties: Array<EmitterProperty> = [\n    {\n      index: 0,\n      emitRate: 100,\n      annulusRegion: {\n        center:{x:this.centerX, y: this.centerY}, // 圆环的圆心坐标\n        outerRadius: this.outRadius, // 圆环的外圆半径\n        innerRadius: this.inRadius, // 圆环的内圆半径\n        startAngle: -90, // 圆环的起始角度\n        endAngle: 0 // 圆环的结束角度\n      }\n    }\n  ]\n  @State region: ParticleAnnulusRegion = {\n    center:{x:this.centerX, y: this.centerY},\n    outerRadius: this.outRadius,\n    innerRadius: this.inRadius,\n    startAngle: -90,\n    endAngle: 0\n  }\n\n  aboutToDisappear(): void {\n    // 页面销毁时清除计时器\n    if (this.timerID != -1) {\n      clearInterval(this.timerID);\n    }\n  }\n\n  build() {\n    Column({ space: 10}) {\n      Stack() {\n        Text()\n          .width(300).height(300).backgroundColor(Color.Black)\n\n        Particle({\n          particles: [\n            {\n              emitter: {\n                particle: {\n                  type: ParticleType.POINT, // 粒子类型\n                  config: {\n                    radius: this.radius // 圆点半径\n                  },\n                  count: this.count, // 粒子总数\n                  lifetime: -1 // 粒子的生命周期，-1表示粒子生命周期无限大\n                },\n                emitRate: this.emitRate, // 每秒发射粒子数\n                shape: this.shape, // 发射器形状\n                annulusRegion: this.region\n              },\n              color: {\n                range: [Color.White, Color.Pink], // 初始颜色范围\n              },\n            },\n          ]\n        }).width('100%')\n          .height('100%')\n          .emitter(this.emitterProperties)\n          .onClick(()=>{\n            // 清除已有定时器\n            if (this.timerID != -1) {\n              clearInterval(this.timerID);\n            }\n\n            // 创建定时器（每秒更新）\n            this.timerID = setInterval(() => {\n              this.emitterProperties = [\n                {\n                  index: 0,\n                  emitRate: this.emitRate,\n                  annulusRegion: {\n                    center:{x:this.centerX, y: this.centerY},\n                    outerRadius: this.outRadius,\n                    innerRadius: this.inRadius,\n                    startAngle: this.startAngle,\n                    endAngle: this.endAngle\n                  }\n                }\n              ];\n              if (this.endAngle >= 270) {\n                if (this.timerID != -1) {\n                  clearInterval(this.timerID);\n                }\n                return;\n              }\n              // 更新角度值（30度/秒）\n              this.startAngle += 30;\n              this.endAngle += 30;\n            }, 1000);\n\n          })\n      }\n      .width('100%')\n      .height('100%')\n      .align(Alignment.Center)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(722700)/* ["default"] */.A) + "",
        width: "469",
        height: "497"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7设置波动场和速度场",
      children: "示例7（设置波动场和速度场）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，支持设置粒子波动场和速度场。该示例演示如何通过rippleFields接口设置粒子波动场，产生类似波纹扩散的效果。通过velocityFields接口设置粒子速度场，使粒子在原有速度的基础上叠加速度场指定的速度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ParticleExample {\n  @State count: number = 1000\n  @State particle: EmitterParticleOptions<ParticleType> = {\n    type: ParticleType.POINT, // 粒子类型\n    config: {\n      radius: 1 // 圆点半径\n    },\n    count: this.count, // 粒子总数\n    lifetime: 9000, // 粒子生命周期，单位ms\n    lifetimeRange: 100 // 粒子生命周期取值范围，单位ms\n  }\n  build() {\n    Column() {\n      Text('波动场')\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n      Stack() {\n        Text()\n          .width(300).height(300).backgroundColor(Color.Black)\n        Particle({\n          particles: [\n            {\n              emitter: {\n                particle: this.particle,\n                emitRate: 10000, // 每秒发射粒子数\n                position: [0, 0],\n                shape: ParticleEmitterShape.RECTANGLE // 发射器形状\n              },\n              color: {\n                range: [Color.White, Color.White], // 初始颜色范围\n              },\n              scale: {\n                range: [0.2, 1.5], // 初始大小范围\n              },\n              opacity : {\n                range: [0.2, 0.8], // 初始透明度范围\n              }\n            }\n          ]\n        }).width(300).height(300)\n          .rippleFields([\n            {\n              amplitude: 120, // 波动场幅值\n              wavelength: 500, // 波动场的波长\n              waveSpeed: 220, // 波动场的波速\n              center: { x: 150, y: 150 }, // 波动场的力的中心\n              attenuation: 0, // 波动场随时间的衰减系数\n              region: {\n                // 波动场的影响区域\n                shape: DisturbanceFieldShape.RECT, // 波动场影响区域的形状\n                position: { x: 150, y: 150 }, // 波动场影响区域的区域中心\n                size: { width: 300, height: 300 } // 波动场影响区域的大小\n              }\n            }\n          ])\n      }.width(\"100%\").height(300).align(Alignment.Center)\n      Text('速度场')\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n      Stack() {\n        Text()\n          .width(300).height(300).backgroundColor(Color.Black)\n        Particle({\n          particles: [\n            {\n              emitter: {\n                particle: {\n                  type: ParticleType.POINT, // 粒子类型\n                  config: {\n                    radius: 2 // 圆点半径\n                  },\n                  count: 1000, // 粒子总数\n                  lifetime: 1000, // 粒子生命周期，单位ms\n                  lifetimeRange: 0 // 粒子生命周期取值范围，单位ms\n                },\n                emitRate: 120, // 每秒发射粒子数\n                position: [0, 0],\n                size: [300, 300],\n                shape: ParticleEmitterShape.RECTANGLE // 发射器形状\n              },\n              color: {\n                range: [Color.White, Color.White], // 初始颜色范围\n              },\n              opacity: {\n                range: [1.0, 1.0],\n                updater: {\n                  type: ParticleUpdater.CURVE, // 透明度按曲线变化\n                  config: [\n                    {\n                      from: 1.0,\n                      to: 0.0,\n                      startMillis: 0,\n                      endMillis: 1000,\n                      curve: Curve.EaseIn\n                    }\n                  ]\n                }\n              },\n            }\n          ]\n        }).width(300).height(300)\n          .margin({ top: 30 })\n          .velocityFields([\n            {\n              velocity: { x: 100, y: 0 }, // 速度场的速度值\n              region: {\n                // 速度场的影响区域\n                shape: DisturbanceFieldShape.RECT, // 速度场影响区域的形状\n                position: { x: 150, y: 150 }, // 速度场影响区域的区域中心\n                size: { width: 200, height: 200 } // 速度场影响区域的大小\n              }\n            }\n          ])\n      }.width(\"100%\").height(300).align(Alignment.Center)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(615814)/* ["default"] */.A) + "",
        width: "353",
        height: "719"
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
499868(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
447241(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
522034(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800382-c1a439be3af7e4251c551200ff971479.gif");

},
923614(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
521112(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
750964(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480031-295f38c44f164250f256754399635877.gif");

},
584275(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440075-7bf707541addf7e6cfd75c01097e4848.png");

},
687637(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
435641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960030-3448d42059cc0b39df1a1ad1a3c51401.gif");

},
501827(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
615814(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800384-6b37d456108bcab14f4cb93bcdebca24.gif");

},
348871(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
722700(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480033-3480f15e914743ba54563ee90e2221ff.gif");

},
941847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
448288(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440077-38dc4a3be6712671776c40db2ffbba02.gif");

},
206535(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960032-d63ef20e0a1d0d20b70a017f65feadee.gif");

},
23625(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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