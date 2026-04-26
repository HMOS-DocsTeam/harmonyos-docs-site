"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["140892"], {
817602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_launch_page_launch_page_config_launch_page_config_md_523_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-launch-page-launch-page-config-launch-page-config-md-523.json
var site_docs_arkui_window_manager_launch_page_launch_page_config_launch_page_config_md_523_namespaceObject = JSON.parse('{"id":"arkui/window-manager/launch-page/launch-page-config/launch-page-config","title":"配置应用启动页","description":"启动页的分类和实现方式","source":"@site/docs/arkui/window-manager/launch-page/launch-page-config/launch-page-config.md","sourceDirName":"arkui/window-manager/launch-page/launch-page-config","slug":"/arkui/window-manager/launch-page/launch-page-config/","permalink":"/harmonyos-docs-site/arkui/window-manager/launch-page/launch-page-config/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"配置应用启动页","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/launch-page-config","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用启动页简介","permalink":"/harmonyos-docs-site/arkui/window-manager/launch-page/launch-page-overview/"},"next":{"title":"启动页资源分类配置","permalink":"/harmonyos-docs-site/arkui/window-manager/launch-page/launch-page-resource-config/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/launch-page/launch-page-config/launch-page-config.md


const frontMatter = {
	title: '配置应用启动页',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/launch-page-config',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '配置应用启动页';

const assets = {

};



const toc = [{
  "value": "启动页的分类和实现方式",
  "id": "启动页的分类和实现方式",
  "level": 2
}, {
  "value": "配置简易启动页",
  "id": "配置简易启动页",
  "level": 2
}, {
  "value": "配置增强启动页",
  "id": "配置增强启动页",
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
        id: "配置应用启动页",
        children: "配置应用启动页"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启动页的分类和实现方式",
      children: "启动页的分类和实现方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["启动页分为简易启动页和增强启动页，开发者通过在module.json5配置文件中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
        children: "abilities标签"
      }), "配置启动页资源，涉及的对应字段及含义如下表所示。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startWindowIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件简易启动页面图标资源文件的索引，取值为长度不超过255字节的字符串。  此图标资源会在启动页面上按实际大小居中显示。  当startWindow被配置时失效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startWindowBackground"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件简易启动页面背景颜色资源文件的索引，取值为长度不超过255字节的字符串。  考虑到启动页在各种场景下的显示效果及系统动效的连续性，不建议采用透明色。  当startWindow被配置时失效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startWindow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识当前UIAbility组件增强启动页面配置资源json文件的索引，取值为长度不超过255字节的字符串。  指向二级配置json文件，当应用需要配置增强启动页时，填写此字段，以提供更丰富的启动页资源配置项。  从API version 19开始，支持使用startWindow字段配置增强启动页。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置简易启动页",
      children: "配置简易启动页"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["简易启动页是每个UIAbility都必须配置的能力，开发者通过配置module.json5文件中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
        children: "abilities标签"
      }), "的startWindowIcon和startWindowBackground字段，实现简易启动页的配置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(810546)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "startWindowIcon用于展示应用图标，不会随窗口尺寸进行缩放。建议开发者避免设计针对单个产品全屏尺寸的startWindowIcon图标资源，防止在其他尺寸设备的显示效果无法自动适配。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["全屏资源的展示建议采用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E9%85%8D%E7%BD%AE%E5%A2%9E%E5%BC%BA%E5%90%AF%E5%8A%A8%E9%A1%B5",
          children: "配置增强启动页"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在创建的UIAbility模板中，简易启动页相关字段的默认配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"startWindowIcon\": \"$media:startIcon\",\n\"startWindowBackground\": \"$color:start_window_background\",\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此时，默认启动页呈现示意图如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 默认启动页示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(815189)/* ["default"] */.A) + "",
        width: "1400",
        height: "817"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以根据应用需要，配置使用自定义设计的图标资源和颜色资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置增强启动页",
      children: "配置增强启动页"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 19开始，支持使用startWindow字段配置增强启动页。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startWindow字段提供了增强的启动页配置能力，可用于元素更复杂的启动页配置。同时，相应资源也具备根据窗口尺寸进行缩放的能力，更易于多设备适配设计，更有利于“一次开发，多端部署”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(147225)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于应用进程创建包括启动页图片资源的解码，使用适当分辨率的图片是影响应用启动时延体验的关键。若对启动时延体验有较高要求，建议启动页中使用不超过256*256分辨率的图片资源。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["启动页中的图片资源支持的文件格式同", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
          children: "Image组件"
        }), "，考虑到解码性能和显示效果，建议启动页中使用jpg或png格式的图片资源。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在创建的UIAbility模板中，开发者可以新增startWindow字段指向二级配置json文件，以启用启动页增强配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中，json文件需要由开发者自行创建并放置到工程目录下。推荐的文件名及路径为resources/base/profile/start_window.json，此时需在module.json5的abilities标签中配置如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"startWindow\": \"$profile:start_window\",\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置二级json文件的具体字段。启动页资源主要在上、下两个区域进行展示，如果对应区域的资源未配置，则留空，其他区域的位置和尺寸不受影响。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "具体可配置字段、各字段含义及增强启动页示意图请见下文。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "字段"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否可缺省"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "含义"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "startWindowType"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["标识当前UIAbility组件是否隐藏启动页。  当前仅支持在2in1设备或平板设备的自由多窗模式下使用。  不同取值含义如下：  - \"REQUIRED_SHOW\"：强制显示启动页。不受", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-startoptions/js-apis-app-ability-startoptions#startoptions",
                  children: "Ability管理服务（即StartOptions中hideStartWindow字段）"
                }), "的影响。  - \"REQUIRED_HIDE\"：强制隐藏启动页。不受", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-startoptions/js-apis-app-ability-startoptions#startoptions",
                  children: "Ability管理服务（即StartOptions中hideStartWindow字段）"
                }), "的影响。  - \"OPTIONAL_SHOW\"：可选显示，默认行为为显示启动页，如果", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-startoptions/js-apis-app-ability-startoptions#startoptions",
                  children: "Ability管理服务（即StartOptions中hideStartWindow字段）"
                }), "设置隐藏启动页，则隐藏启动页。  - 如未配置该字段，默认取值为\"REQUIRED_SHOW\"，即强制显示启动页。  从API version 20开始支持该字段。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "startWindowAppIcon"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "标识当前UIAbility组件增强启动页面图标资源文件的索引，取值为长度不超过255字节的字符串。  在窗口上部分展示，资源由系统侧进行缩放，使其完全显示在展示区域内，宽高比保持不变。  图标资源展示区域的尺寸由系统侧根据窗口尺寸选取，取值为128vp*128vp、192vp*192vp或256vp*256vp。  与插画资源startWindowIllustration同时配置时，仅展示图标资源。  从API version 19开始支持该字段。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "startWindowIllustration"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "标识当前UIAbility组件增强启动页面插画资源文件的索引，取值为长度不超过255字节的字符串。  在窗口上部分展示，如资源尺寸超出其展示区域，将由系统侧保持宽高比缩小，使得资源完全显示在其展示区域内；否则其尺寸保持不变。  插画资源展示区域宽高比为1。  与图标资源startWindowAppIcon同时配置时，仅展示图标资源。  从API version 19开始支持该字段。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "startWindowBrandingImage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "标识当前UIAbility组件增强启动页面品牌标识资源文件的索引，取值为长度不超过255字节的字符串。  在窗口下部分展示，如资源尺寸超出其展示区域，将由系统侧保持宽高比缩小，使得资源完全显示在其展示区域内；否则其尺寸保持不变。  如果窗口高度不足300vp，此资源将被隐藏。  从API version 19开始支持该字段。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "startWindowBackgroundColor"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "标识当前UIAbility组件增强启动背景色资源文件的索引，取值为长度不超过255字节的字符串。  背景色填充整个窗口，显示层级最低，不建议采用透明色。  如未配置该字段，则启动页增强配置文件不生效，采用简易启动页配置。  从API version 19开始支持该字段。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "startWindowBackgroundImage"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "标识当前UIAbility组件增强启动背景图片资源文件的索引，取值为长度不超过255字节的字符串。  以整个窗口为容器，填充方式由startWindowBackgroundImageFit字段指定。  从API version 19开始支持该字段。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "startWindowBackgroundImageFit"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "标识当前UIAbility组件增强启动背景图片的填充方式，当前支持取值为：  - \"Contain\"：保持宽高比进行缩小或者放大，使得图片完全显示在显示边界内。  - \"Cover\"：保持宽高比进行缩小或者放大，使得图片两边都大于或等于显示边界。  - \"Auto\"：图像会根据其自身尺寸和组件的尺寸进行适当缩放，以在保持比例的同时填充视图。  - \"Fill\"：不保持宽高比进行放大缩小，使得图片充满显示边界。  - \"ScaleDown\"：保持宽高比显示，图片缩小或者保持不变。  - \"None\"：保持原有尺寸显示。  如未配置该字段，默认采用Cover填充方式。  从API version 19开始支持该字段。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "startWindowColorModeType"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "标识当前UIAbility组件启动页深浅色模式，仅作用于同进程间拉起场景。  不同取值含义如下：  - \"FOLLOW_SYSTEM\"：启动页颜色模式跟随系统深浅色。  - \"FOLLOW_APPLICATION\"：启动页颜色模式跟随应用深浅色。  - 如未配置该字段，默认取值为\"FOLLOW_SYSTEM\"，即启动页颜色模式跟随系统深浅色。  从API version 20开始支持该字段。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 增强启动页示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(459925)/* ["default"] */.A) + "",
        width: "771",
        height: "966"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"startWindowType\": \"REQUIRED_SHOW\",\n  \"startWindowColorModeType\": \"FOLLOW_SYSTEM\",\n  \"startWindowAppIcon\": \"$media:icon\",\n  \"startWindowIllustration\": \"$media:illustration\",\n  \"startWindowBrandingImage\": \"$media:brand\",\n  \"startWindowBackgroundColor\": \"$color:start_window_background\",\n  \"startWindowBackgroundImage\": \"$media:bgImage\",\n  \"startWindowBackgroundImageFit\": \"Contain\"\n}\n"
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
810546(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
147225(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
459925(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438247-5117105441c357fd8730a0984a336663.png");

},
815189(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798552-9f09c9680481320a2acabe095a9265da.png");

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