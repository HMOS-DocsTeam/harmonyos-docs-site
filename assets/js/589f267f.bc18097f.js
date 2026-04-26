"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["342631"], {
218608(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_service_widget_ide_service_widget_md_589_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-service-widget-ide-service-widget-md-589.json
var site_docs_ide_project_ide_module_management_ide_service_widget_ide_service_widget_md_589_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-service-widget/ide-service-widget","title":"创建服务卡片","description":"概述","source":"@site/docs/ide-project/ide-module-management/ide-service-widget/ide-service-widget.md","sourceDirName":"ide-project/ide-module-management/ide-service-widget","slug":"/ide-project/ide-module-management/ide-service-widget/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-service-widget/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"创建服务卡片","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-service-widget","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"在模块中添加Ability","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-add-new-ability/"},"next":{"title":"添加Page","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-add-page/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-service-widget/ide-service-widget.md


const frontMatter = {
	title: '创建服务卡片',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-service-widget',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '创建服务卡片';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "创建服务卡片",
  "id": "创建服务卡片-1",
  "level": 2
}, {
  "value": "预览服务卡片",
  "id": "预览服务卡片",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "创建服务卡片",
        children: "创建服务卡片"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/formkit-overview",
        children: "服务卡片（简称“卡片”）"
      }), "可将元服务/应用的重要信息以卡片的形式展示在桌面，用户可通过快捷手势使用卡片，通过轻量交互行为实现服务直达、减少层级跳转的目的。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡片类型分静态卡片和动态卡片两种。静态卡片内存占用较小，有助于实现整机内存优化，可实现静态信息展示、刷新和点击跳转；动态卡片支持自定义交互、动效、滑动等功能，功能丰富但内存占用较大。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从编译产物角度，卡片包产物分为共包和独立包两种类型，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-widget-creation",
        children: "创建ArkTS卡片"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "创建方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "卡片类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "共包"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "静态卡片（Static Widget）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "动态卡片（Dynamic Widget）"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "独立包"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "独立静态卡片（Static Widget(Standalone)）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "独立动态卡片（Dynamic Widget(Standalone)）"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建卡片后可选择不同卡片模板以满足业务需求，具体卡片模板和详细描述如下。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "模板名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的设备"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的开发语言"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "模板描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hello World"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、2in1、Wearable、Car、TV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS、JS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HelloWorld卡片，用于高效直观地构建UI。当前Hello World卡片模板支持使用6*4尺寸。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image With Information（图文卡片模板）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、2in1、Wearable、Car"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS、JS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图文卡片模板主要在于展现图片和一定数量文本的搭配，在这种布局下，图片和文本属于同等重要的信息。在不同尺寸下，图片大小和文本数量会发生一定变化，用于凸显关键信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Immersive Information（沉浸图文卡片模板）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、2in1、Wearable、Car"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS、JS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "沉浸式卡片的装饰性较强，能够较好的提升卡片品质感并起到装饰桌面的作用，合理的去布局信息与背景图片之间的空间比例，可以提升用户的个性化使用体验。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、2in1、Car"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供基本的列表功能。当前仅动态卡片支持在API 11及以上工程创建List卡片模板。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control Button"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、2in1、Car"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操控类型的卡片，展示文本信息与按钮操作，点击按钮响应事件。当前仅静态卡片支持API 11及以上工程创建Control Button卡片模板。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、2in1、Car"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操控类型的卡片，适用于搜索场景。当前仅静态卡片支持API 11及以上工程创建Control Search卡片模板。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片不支持调试。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅应用的Hello World、Image With Information、Immersive Information的动态卡片和独立动态卡片支持JS语言，元服务不支持JS语言。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从DevEco Studio 5.0.4 Release开始，支持在API 16及以上工程创建Wearable设备可用的卡片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从DevEco Studio 6.0.0 Beta3开始，支持在API 20及以上工程创建Car设备可用的卡片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从DevEco Studio 6.0.0 Beta3开始，支持Phone设备创建独立静态/动态卡片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DevEco Studio 5.1.1 Release（Build Version:5.1.1.850）版本、DevEco Studio 6.0.0 Release（Build Version:6.0.0.868）及以上版本，支持工程创建TV设备可用的卡片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一个工程模块内，仅支持创建共包类型卡片或独立包类型卡片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "每个模块最多可以配置16张卡片。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建服务卡片-1",
      children: "创建服务卡片"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-create-new-project",
        children: "创建一个工程"
      }), "后，可以通过如下方法进行创建卡片。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建卡片包括如下两种方式："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["选择模块（如entry模块）下的任意文件，单击菜单栏", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "File > New > Service Widget"
              })
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section6353219163116",
              children: "按需选择卡片"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["选择模块（如entry模块）下的任意文件，单击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "右键 > New > Service Widget"
              })
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section6353219163116",
              children: "按需选择卡片"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(152331)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "API 11 Stage模型及以上，创建元服务工程或在元服务工程中创建模块时，不再默认创建卡片和EntryCard。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Choose a Template for Your Service Widget"
            })
          }), "界面中，选择卡片模板，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Next"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(365839)/* ["default"] */.A) + "",
            width: "982",
            height: "656"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Configure Your Service Widget"
            })
          }), "界面中，配置卡片的基本信息，包括："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Service widget name"
              })
            }), "：卡片的名称，在同一个应用/元服务中，卡片名称不能重复，且只能包含大小写字母、数字和下划线。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Display name"
              })
            }), "：卡片预览面板上显示的卡片名称。仅API 11 及以上Stage工程支持配置该字段。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            }), "：卡片的描述信息。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "****Language：****界面开发语言，可选择创建ArkTS/JS卡片。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Support dimension"
              })
            }), "：选择卡片的规格。部分卡片支持同时设置多种规格。首次创建卡片时，将默认生成一个EntryCard目录，用于存放卡片快照。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Default dimension"
              })
            }), "：在下拉框中可选择默认的卡片。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "****Ability name：****选择一个挂靠卡片的Form Ability，或者创建一个新的Form Ability。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "****Module name：****卡片所属的模块。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(53816)/* ["default"] */.A) + "",
            width: "970",
            height: "647"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finish"
            })
          }), "完成卡片的创建。创建完成后，工具会自动创建出卡片的布局文件，并在form_config.json文件中写入服务卡片的属性字段，关于各字段的说明请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-ui-widget-configuration",
            children: "配置文件说明"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["卡片创建完成后，请根据开发指导，完成卡片的开发，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget",
            children: "服务卡片开发指南"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预览服务卡片",
      children: "预览服务卡片"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发卡片过程中，支持对卡片进行实时预览。卡片通过ArkTS文件进行布局设计，在开发过程中，可以对布局文件进行实时预览，只要在布局文件中保存了修改的源代码，在预览器中就可以实时查看布局效果。在Phone和Tablet卡片的预览效果中，每个尺寸的卡片提供3种场景的预览效果，分别为极窄（Minimum）、默认（Default）、极宽(Maximum)，开发者应确保三种尺寸的显示效果均正常，以便适应不同屏幕尺寸的设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(79613)/* ["default"] */.A) + "",
        width: "1408",
        height: "880"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于预览器的使用详细说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-01",
        children: "界面预览"
      }), "。"]
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
79613(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912762-ee60de22cbae9d0aea5a47e105c15a7a.png");

},
152331(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
365839(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832691-6e2456cdf251833ebe62de92c8470e43.png");

},
53816(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752768-95a20236891306a4a05883a3a2aaeb7a.png");

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