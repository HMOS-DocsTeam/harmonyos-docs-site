"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["975684"], {
798133(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_theme_ui_dark_light_color_adaptation_ui_dark_light_color_adaptation_md_00c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-theme-ui-dark-light-color-adaptation-ui-dark-light-color-adaptation-md-00c.json
var site_docs_arkui_arkts_ui_development_arkts_theme_ui_dark_light_color_adaptation_ui_dark_light_color_adaptation_md_00c_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-theme/ui-dark-light-color-adaptation/ui-dark-light-color-adaptation","title":"应用深浅色适配","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-theme/ui-dark-light-color-adaptation/ui-dark-light-color-adaptation.md","sourceDirName":"arkui/arkts-ui-development/arkts-theme/ui-dark-light-color-adaptation","slug":"/arkui/arkts-ui-development/arkts-theme/ui-dark-light-color-adaptation/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-theme/ui-dark-light-color-adaptation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用深浅色适配","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-dark-light-color-adaptation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"支持适老化","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkui-support-for-aging-adaptation/"},"next":{"title":"设置应用内主题换肤","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-theme/theme_skinning/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-theme/ui-dark-light-color-adaptation/ui-dark-light-color-adaptation.md


const frontMatter = {
	title: '应用深浅色适配',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-dark-light-color-adaptation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用深浅色适配';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "应用跟随系统的深浅色模式",
  "id": "应用跟随系统的深浅色模式",
  "level": 2
}, {
  "value": "应用主动设置深浅色模式",
  "id": "应用主动设置深浅色模式",
  "level": 2
}, {
  "value": "系统判定应用深浅色模式的规则",
  "id": "系统判定应用深浅色模式的规则",
  "level": 2
}, {
  "value": "深浅色模式的使用建议与注意事项",
  "id": "深浅色模式的使用建议与注意事项",
  "level": 2
}, {
  "value": "优化深浅色模式切换开销",
  "id": "优化深浅色模式切换开销",
  "level": 2
}, {
  "value": "利用反色能力快速适配深色模式",
  "id": "利用反色能力快速适配深色模式",
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
        id: "应用深浅色适配",
        children: "应用深浅色适配"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前系统存在深浅色两种显示模式，为了给用户更好的使用体验，应用应适配深浅色模式。从应用与系统配置关联的角度来看，适配深浅色模式可以分为下面两种情况："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BA%94%E7%94%A8%E8%B7%9F%E9%9A%8F%E7%B3%BB%E7%BB%9F%E7%9A%84%E6%B7%B1%E6%B5%85%E8%89%B2%E6%A8%A1%E5%BC%8F",
        children: "应用跟随系统的深浅色模式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BA%94%E7%94%A8%E4%B8%BB%E5%8A%A8%E8%AE%BE%E7%BD%AE%E6%B7%B1%E6%B5%85%E8%89%B2%E6%A8%A1%E5%BC%8F",
        children: "应用主动设置深浅色模式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用跟随系统的深浅色模式",
      children: "应用跟随系统的深浅色模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "颜色适配"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "自定义资源实现"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["resources目录下增加深色模式限定词目录（命名为dark）并新建color.json文件，可显示深色模式颜色资源的配置。详细请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/resource-categories-and-access",
                children: "资源分类与访问"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "图1 resources目录结构示意"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(907151)/* ["default"] */.A) + "",
                width: "229",
                height: "278"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "例如，开发者可在这两个color.json中定义同名配色定义并赋予不同的色值。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "base/element/color.json文件："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"color\": [\n    {\n      \"name\": \"app_title_color\",\n      \"value\": \"#000000\"\n    }\n  ]\n}\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "dark/element/color.json文件："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"color\": [\n    {\n      \"name\": \"app_title_color\",\n      \"value\": \"#FFFFFF\"\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过系统资源实现"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["开发者可直接使用的", (0,jsx_runtime.jsx)(_components.a, {
                href: "/resource-categories-and-access#%E7%B3%BB%E7%BB%9F%E8%B5%84%E6%BA%90",
                children: "系统预置资源"
              }), "，即分层参数，同一资源ID在设备类型、深浅色等不同配置下有不同的取值。通过使用系统资源，不同的开发者可以开发出具有相同视觉风格的应用，不需要自定义两份颜色资源，在深浅色模式下也会自动切换成不同的颜色值。例如，开发者可调用系统资源中的文本主要配色来定义应用内文本颜色。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Text('使用系统定义配色')\n  .fontColor($r('sys.color.ohos_id_color_text_primary'))\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图片资源适配"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采用资源限定词目录的方式。参照颜色适配的方法，需要将深色模式下对应的同名图片放到 dark/media 目录下，再通过$r的方式加载图片资源的key值，系统做深浅色模式切换时，会自动加载对应资源文件中的value值。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对于 SVG 格式的一些简单图标，可以使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-media-display/arkts-graphics-display#%E6%98%BE%E7%A4%BA%E7%9F%A2%E9%87%8F%E5%9B%BE",
            children: "fillColor"
          }), "属性配合系统资源改变图片的绘制颜色。不通过两套图片资源的方式，也可以实现深浅色模式适配。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Image($r('app.media.pic_svg'))\n  .width(50)\n  .fillColor($r('sys.color.ohos_id_color_text_primary'))\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Web组件适配"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Web组件支持对前端页面进行深色模式配置，可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkweb/web-set-attributes-events/web-set-dark-mode",
            children: "Web组件深色模式"
          }), "进行相关配置。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"自定义节点\"适配"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["自定义节点BuilderNode和ComponentContent需手动传递系统环境变化事件，触发节点的全量更新，详细请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#updateconfiguration12",
            children: "BuilderNode系统环境变化更新"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 记录创建的自定义节点对象\nconst builderNodeMap: BuilderNode<[Params]>[] = [];\n\nclass MyFrameCallback extends FrameCallback {\n  onFrame() {\n    updateColorMode();\n  }\n}\n\nfunction updateColorMode() {\n  builderNodeMap.forEach((value, index) => {\n    // 通知BuilderNode环境变量改变，触发深浅色切换\n    value.updateConfiguration();\n  })\n}\n// ...\n  aboutToAppear(): void {\n    // ...\n        this.getUIContext()?.postFrameCallback(new MyFrameCallback());\n    // ...\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用监听深浅色模式切换事件"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用可以主动监听系统深浅色模式变化，进行其他类型的资源初始化等自定义逻辑。应用使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#setcolormode18",
            children: "setColorMode"
          }), "手动设置深浅色的情况下，将不会收到onConfigurationUpdate回调。除此之外，无论应用是否跟随系统深浅色模式变化，该监听方式均可生效。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "a. 在 AbilityStage 的 onCreate() 生命周期中获取APP当前的颜色模式并保存到 AppStorage。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onCreate(): void {\n  // ...\n  AppStorage.setOrCreate('currentColorMode', this.context.config.colorMode);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "b. 在AbilityStage的onConfigurationUpdate()生命周期中获取最新更新的颜色模式并刷新到AppStorage。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onConfigurationUpdate(newConfig: Configuration): void {\n  AppStorage.setOrCreate('currentColorMode', newConfig.colorMode);\n  hilog.info(0x0000, 'testTag', 'the newConfig.colorMode is %{public}s', JSON.stringify(AppStorage.get('currentColorMode')) ?? '');\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "c. 在Page中通过 @StorageProp + @Watch 方式获取当前最新颜色并监听设备深色模式变化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@StorageProp('currentColorMode') @Watch('onColorModeChange') currentMode: number =\n  ConfigurationConstant.ColorMode.COLOR_MODE_LIGHT;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "d. 在 aboutToAppear 初始化函数中根据当前最新颜色模式刷新状态变量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "aboutToAppear(): void {\n  // ...\n  if (this.currentMode == ConfigurationConstant.ColorMode.COLOR_MODE_LIGHT) {\n    // 当前为浅色模式，资源初始化逻辑\n    // ...\n  } else {\n    // 当前为深色模式，资源初始化逻辑\n    // ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "e. 在 @Watch 回调函数中执行同样的适配逻辑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onColorModeChange(): void {\n  if (this.currentMode == ConfigurationConstant.ColorMode.COLOR_MODE_LIGHT) {\n    // 当前为浅色模式，资源初始化逻辑\n  // ···\n  } else {\n    // 当前为深色模式，资源初始化逻辑\n  // ···\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "局部深浅色适配"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/themes/ts-container-with-theme/ts-container-with-theme",
            children: "WithTheme"
          }), "可以设置三种", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-blur-style/ts-universal-attributes-foreground-blur-style#themecolormode%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
            children: "颜色模式"
          }), "，分别为：跟随系统深浅色模式、固定使用浅色模式和固定使用深色模式。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在WithTheme作用范围内，组件的样式资源值将依据指定模式，读取对应的深浅色模式系统和应用资源值。这表明，在WithTheme作用范围内，组件的配色将根据指定的深浅模式进行调整。详情请参阅", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-theme/theme_skinning#%E8%AE%BE%E7%BD%AE%E5%BA%94%E7%94%A8%E9%A1%B5%E9%9D%A2%E5%B1%80%E9%83%A8%E6%B7%B1%E6%B5%85%E8%89%B2",
            children: "设置应用页面局部深浅色"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用主动设置深浅色模式",
      children: "应用主动设置深浅色模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用默认配置为跟随系统切换深浅色模式，如不希望应用跟随系统深浅色模式变化，可主动设置应用的深浅色风格。设置后，应用的深浅色模式固定，不会随系统改变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(261912)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用未专门适配深色模式，直接跟随系统切换可能遇到深色模式下的显示异常，也可考虑使用该方法将本应用固定为浅色模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n  try {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n    this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_LIGHT);\n  } catch (err) {\n    hilog.error(DOMAIN, 'testTag', 'Failed to set colorMode. Cause: %{public}s', JSON.stringify(err));\n  }\n  hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onCreate');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "系统判定应用深浅色模式的规则",
      children: "系统判定应用深浅色模式的规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果应用调用上述setColorMode接口主动设置了深浅色，则以接口效果优先。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用没有调用setColorMode接口时："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果应用工程dark目录下有深色资源，则系统组件在深色模式下会自动切换成为深色。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果应用工程dark目录下没有任何深色资源，则系统组件在深色模式下仍会保持浅色体验。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(576656)/* ["default"] */.A) + "",
                width: "364",
                height: "151"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果应用全部都是由系统组件/系统颜色开发，且想要跟随系统切换深浅色模式时，请参考以下示例修改代码来保证应用体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onCreate(): void {\n  this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);\n  AppStorage.setOrCreate('currentColorMode', this.context.config.colorMode);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "深浅色模式的使用建议与注意事项",
      children: "深浅色模式的使用建议与注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议方法"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当应用跟随系统深色或浅色模式时，建议采用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#onconfigurationupdate",
            children: "AbilityStage的监听回调"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-ability/js-apis-app-ability-ability#abilityonconfigurationupdate",
            children: "Ability的监听回调"
          }), "方式，主动监听系统深浅色模式变化。一旦颜色模式发生变化，应通过绑定状态变量等方法，执行特定的业务逻辑。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不推荐方法"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者在使用资源时，未采用监听系统深浅色模式变化的方式，而是在属性设置中，通过函数返回值实现深浅色切换。例如以下写法："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "getResource() : string {\n  // 获取系统颜色模式\n  if (colorMode == \"dark\") {\n    return \"#FF000000\"\n  } else {\n    return \"#FFFFFFFF\"\n  }\n}\n// ... other code ...\nbuild() {\n  // ... other code ...\n  Button.backgroundColor(this.getResource())\n  // ... other code ...\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "这种方式依赖于切换流程中重新执行属性设置代码，随着系统的发展和性能优化，并不能确保所有属性代码均被重新执行。因为在大部分热更新场景中，重新执行全部页面构建和属性设置代码显然是冗余的。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "优化深浅色模式切换开销",
      children: "优化深浅色模式切换开销"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认情况下，深浅色模式的切换需要执行全量重绘，包括重新设置所有组件的属性，性能开销会随着应用UI的复杂度线性增加。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，系统提供了一种高性能的深浅色切换流程，开发者可通过新增", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#metadata%E6%A0%87%E7%AD%BE",
        children: "metadata"
      }), "配置项开启该能力，从而实现深浅色切换时的开销更小。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(693097)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置此metadata时，必须确保在属性设置中，没有通过函数返回值实现深浅色切换。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation",
        children: "HdsNavigation"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavdestination/ui-design-hdsnavdestination",
        children: "HdsNavDestination"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdstabs/ui-design-hdstabs",
        children: "HdsTabs"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdslistitemcard/ui-design-hdslistitemcard",
        children: "HdsListItemCard"
      }), "四个高级组件暂未适配，这些高级组件的颜色相关属性均需使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#onconfigurationupdate",
        children: "AbilityStage的监听回调"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-ability/js-apis-app-ability-ability#abilityonconfigurationupdate",
        children: "Ability的监听回调"
      }), "方式来处理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过metadata开启深浅色切换优化选项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "优化深浅色模式切换开销，需在module.json5文件中新增metadata字段，同时需对部分组件的属性进行适配。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"metadata\": [\n  {\n    \"name\": \"configColorModeChangePerformanceInArkUI\",\n    \"value\": \"true\"\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用的自定义行为需要正确适配。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开启深浅色切换优化选项后，深浅色切换不会全量重新执行前端代码和属性设置，仅会更新、重绘必要的属性，如果开发者之前在属性设置中通过函数适配深浅色更新将不会生效，这种情况需要开启优化流程前进行正确适配，可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E6%B7%B1%E6%B5%85%E8%89%B2%E6%A8%A1%E5%BC%8F%E7%9A%84%E4%BD%BF%E7%94%A8%E5%BB%BA%E8%AE%AE%E4%B8%8E%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",
            children: "深浅色模式的使用建议与注意事项"
          }), "进行适配。以下是三个典型的适配场景："]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据实时读取的深浅色模式返回不同资源值。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开启深浅色切换优化选项后，可以采用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#onconfigurationupdate",
            children: "AbilityStage的监听回调"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-ability/js-apis-app-ability-ability#abilityonconfigurationupdate",
            children: "Ability的监听回调"
          }), "方式，主动监听系统深浅色模式变化，更新对应文本的文字颜色，示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// EntryAbility.ets\nimport { Configuration, UIAbility } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n\n  onConfigurationUpdate(newConfig: Configuration): void {\n    AppStorage.setOrCreate('colorMode', newConfig.colorMode);\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport { ConfigurationConstant } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct MainPage {\n  @StorageLink('colorMode') @Watch('colorModeChange') colorMode: ConfigurationConstant.ColorMode = ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET;\n  @State textColor: Resource = $r(\"app.color.color_light\");\n\n  colorModeChange() {\n    if (this.colorMode === ConfigurationConstant.ColorMode.COLOR_MODE_LIGHT) {\n      this.textColor = $r(\"app.color.color_light\")\n    } else {\n      this.textColor = $r(\"app.color.color_night\")\n    }\n  }\n\n  build() {\n    Column() {\n      Text('fontColor')\n        .fontColor(this.textColor)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据判断自定义主题模式返回不同资源值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启深浅色切换优化选项后，需要将Text中文本内容和文本颜色与状态变量进行绑定，在接收到深浅色切换事件后通过状态变量更新实现组件属性的更新，示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ResourceTheme.ets\nexport enum ThemeMode {\n  mode1 = 0,\n  mode2\n}\n\nexport class ResourceTheme {\n  fontColor: ResourceColor = this.getColor();\n  themeMode: ThemeMode = ThemeMode.mode1;\n\n  setThemeMode(mode: ThemeMode) {\n    this.themeMode = mode\n  }\n  getThemeMode(): ThemeMode {\n    return this.themeMode\n  }\n  getColor(): ResourceColor {\n    if (this.themeMode === ThemeMode.mode1) {\n      return $r(\"app.color.color_light\")\n    } else {\n      return $r(\"app.color.color_night\")\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport { ConfigurationConstant } from '@kit.AbilityKit';\nimport { ResourceTheme, ThemeMode } from './ResourceTheme';\n\n@Entry\n@Component\nstruct MainPage {\n  @StorageLink('colorMode') @Watch('colorModeChange') colorMode: ConfigurationConstant.ColorMode = ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET;\n  resourceTheme = new ResourceTheme();\n  @State textColor: ResourceColor = this.resourceTheme.getColor();\n  @State textContent: string = this.resourceTheme.getThemeMode().toString();\n\n  colorModeChange() {\n    if (this.colorMode === ConfigurationConstant.ColorMode.COLOR_MODE_LIGHT) {\n      this.resourceTheme.setThemeMode(ThemeMode.mode1)\n    } else {\n      this.resourceTheme.setThemeMode(ThemeMode.mode2)\n    }\n    this.textContent = this.resourceTheme.getThemeMode().toString()\n    this.textColor = this.resourceTheme.getColor()\n  }\n\n  build() {\n    Column() {\n      Text('ThemeMode is ' + this.textContent)\n        .fontColor(this.textColor)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据读取的成员变量值返回不同资源值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启深浅色切换优化选项后，需要将文本文字颜色属性与状态变量绑定。在深浅色切换时通过回调函数更新状态变量，从而实现仅在下一次深浅色切换时发生属性更新的效果，示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport { ConfigurationConstant } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct MainPage {\n  mode: number = 0;\n  @StorageLink('colorMode') @Watch('colorModeChange') colorMode: ConfigurationConstant.ColorMode = ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET;\n  @State textColor: Resource = $r(\"app.color.color_light\");\n\n  colorModeChange() {\n    if (this.mode % 2 === 0) {\n      return $r(\"app.color.color_light\")\n    } else {\n      return $r(\"app.color.color_night\")\n    }\n  }\n\n  build() {\n    Column() {\n      Button('change mode')\n        .onClick((event: ClickEvent) => {\n          this.mode++\n        })\n      Text('fontColor')\n        .fontColor(this.textColor)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "利用反色能力快速适配深色模式",
      children: "利用反色能力快速适配深色模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，对于有大量存量代码，之前已经通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BA%94%E7%94%A8%E8%B7%9F%E9%9A%8F%E7%B3%BB%E7%BB%9F%E7%9A%84%E6%B7%B1%E6%B5%85%E8%89%B2%E6%A8%A1%E5%BC%8F",
        children: "资源配置"
      }), "模式或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/themes/ts-container-with-theme/ts-container-with-theme",
        children: "主题"
      }), "方式，实现部分深色模式适配。可使用系统提供的反色能力，快速实现全量深色模式适配。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这种方式虽然管理上不如资源配置和主题方式精细可控，但适配工作量更低，应用包也不会因为大量的资源配置而膨胀，同时也能够带来一定程度上可以接受的视觉效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(754526)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["反色能力需在", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BC%98%E5%8C%96%E6%B7%B1%E6%B5%85%E8%89%B2%E6%A8%A1%E5%BC%8F%E5%88%87%E6%8D%A2%E5%BC%80%E9%94%80",
          children: "优化深浅色模式切换开销"
        }), "使用的前提下使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["跨进程场景如果想使用反色能力，需要", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability",
          children: "UIExtensionAbility"
        }), "和对应UIExtensionAbility的宿主同时适配。UIExtensionAbility的宿主相关接口请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uiextension/js-apis-arkui-uiextension",
          children: "@ohos.arkui.uiExtension (uiExtension)"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用反色能力。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，ArkUI开发框架新增了", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_setforcedarkconfig",
            children: "OH_ArkUI_SetForceDarkConfig"
          }), "接口，提供反色能力。该功能可根据开发者自定义的反色算法，在深浅色切换时自动对颜色属性进行反色。反色能力只有在颜色属性设置为非资源值时生效，若通过$r设置颜色属性，则优先生效资源文件中配置的颜色值。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用开发时，可能会涉及到多个颜色属性的设置，当该属性不存在深色模式颜色资源的配置时，使用该能力可以快速实现深色模式的适配。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(606255)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用OH_ArkUI_SetForceDarkConfig前，需确保已加载过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-h/capi-native-interface-h#oh_arkui_querymoduleinterfacebyname",
              children: "OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\")"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["OH_ArkUI_SetForceDarkConfig接口一定要在节点创建前的UI线程中调用。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "页面创建完成后，不支持通过该接口动态修改应用的反色能力生效状态。"
              })
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_ArkUI_SetForceDarkConfig接口仅支持进程级生效，暂不支持不同实例使用不同的反色算法。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_ArkUI_SetForceDarkConfig接口仅支持CAPI接口，考虑到反色算法在深浅色切换时会被频繁调用，采用C-API接口可以避免存在大量的跨语言调用开销。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果组件设置了异常值颜色或者undefined，反色能力不生效。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本示例展示OH_ArkUI_SetForceDarkConfig接口的基础使用方式，自定义反色算法根据开发者实际场景进行设置，便于深浅色切换时展示不同的颜色值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_ArkUI_SetForceDarkConfig(nullptr, true, ArkUI_NodeType::ARKUI_NODE_UNDEFINED, nullptr); // 对所有组件使用x系统默认反色算法，即三原色取反。\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// page1 ArkTs侧创建组件使用反色能力。\n// 前置已默认对所有组件使用默认反色算法，深浅色切换时会对文本的文字颜色进行反色，浅色模式下展示为黑色字体，深色模式下展示为白色字体。\nbuild() {\n  // ... other code ...\n  Text(\"测试反色算法\")\n    .fontColor(Color.Black)\n  // ... other code ...\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OH_ArkUI_SetForceDarkConfig接口不同入参效果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 开发者自定义的反色算法函数。\nuint32_t colorInvertFunc(uint32_t color) {\n  return ~color;\n}\nOH_ArkUI_SetForceDarkConfig(nullptr, true, ArkUI_NodeType::ARKUI_NODE_UNDEFINED, colorInvertFunc); // 对所有组件使用自定义反色算法。\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_ArkUI_SetForceDarkConfig(nullptr, false, ArkUI_NodeType::ARKUI_NODE_UNDEFINED, nullptr); // 对所有组件停用反色能力，深浅色切换使用系统原始逻辑。\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_ArkUI_SetForceDarkConfig(nullptr, true, ArkUI_NodeType::ARKUI_NODE_TEXT, nullptr); // 仅对文本组件使用默认反色算法。\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 开发者自定义的反色算法函数。\nuint32_t colorInvertFunc(uint32_t color) {\n  return ~color;\n}\nOH_ArkUI_SetForceDarkConfig(nullptr, true, ArkUI_NodeType::ARKUI_NODE_TEXT, colorInvertFunc); // 仅对文本组件使用自定义反色算法。\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(825696)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不支持全局禁用反色能力的同时仅对某类组件使用反色算法。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不支持全局使用反色能力的同时仅对某类组件禁用反色算法。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "反色算法生效优先级说明。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "a. 使用开发者深色模式颜色资源的配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "b. 使用开发者为本进程中指定组件配置的反色算法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "c. 使用开发者为本进程中所有组件配置的反色算法。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "反色能力逃生通道。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 21开始，基于开发者当前实现，开发者可以通过主动设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-allow-force-dark/ts-allow-force-dark#allowforcedark",
            children: "allowForceDark"
          }), "属性，禁用指定组件的自动反色能力，维持深浅色切换时的原有逻辑，即使用主题或资源值切换。"]
        }), "\n"]
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
693097(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
907151(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
261912(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
825696(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
754526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
576656(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
606255(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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