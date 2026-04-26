"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["236595"], {
891024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_codegenie_service_widget_ide_codegenie_service_widget_md_51e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-codegenie-service-widget-ide-codegenie-service-widget-md-51e.json
var site_docs_ide_codegenie_service_widget_ide_codegenie_service_widget_md_51e_namespaceObject = JSON.parse('{"id":"ide-codegenie-service-widget/ide-codegenie-service-widget","title":"万能卡片生成","description":"基于AI大模型理解开发者的卡片需求信息，通过对话式的交互智能生成HarmonyOS万能卡片工程。","source":"@site/docs/ide-codegenie-service-widget/ide-codegenie-service-widget.md","sourceDirName":"ide-codegenie-service-widget","slug":"/ide-codegenie-service-widget/","permalink":"/harmonyos-docs-site/ide-codegenie-service-widget/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"万能卡片生成","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-codegenie-service-widget","kit":"devtools/ai-coding","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"页面生成","permalink":"/harmonyos-docs-site/ide-page-generation/"},"next":{"title":"单元测试用例生成","permalink":"/harmonyos-docs-site/ide-ut-generation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-codegenie-service-widget/ide-codegenie-service-widget.md


const frontMatter = {
	title: '万能卡片生成',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-codegenie-service-widget',
	kit: 'devtools/ai-coding',
	last_updated: '2026-04-24'
};
const contentTitle = '万能卡片生成';

const assets = {

};



const toc = [{
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "万能卡片生成",
  "id": "万能卡片生成-1",
  "level": 2
}, {
  "value": "万能卡片保存",
  "id": "万能卡片保存",
  "level": 2
}, {
  "value": "自定义配置逻辑代码",
  "id": "自定义配置逻辑代码",
  "level": 2
}, {
  "value": "目录结构",
  "id": "目录结构",
  "level": 3
}, {
  "value": "自定义配置卡片事件",
  "id": "自定义配置卡片事件",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "万能卡片生成",
        children: "万能卡片生成"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于AI大模型理解开发者的卡片需求信息，通过对话式的交互智能生成HarmonyOS万能卡片工程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.1 Beta1开始，在输入框新增卡片生成的入口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta2开始，不支持在对话区域输入\"/\"调出命令，选择Service Widget进入卡片生成窗口的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议从以下维度描述卡片需求："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "序号"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "建议描述维度"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "说明"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "举例"
                  })
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "卡片用途"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "卡片的用途/业务场景，比如电商购物、娱乐、生活服务类等。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "例如“电商购物卡片”、“娱乐类卡片”。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "2"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "卡片功能"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "卡片包含的组件，如图标、标题、按钮等。  组件的状态信息，如图标主题、标题内容、按钮显示的文字等。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "例如“新品上市主标题”、“商品搜索按钮”、“热门电影子板块入口”等。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "卡片尺寸"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HarmonyOS官网提供的四种卡片尺寸：1*2（微卡片）、2*2（小卡片）、2*4（中卡片）、4*4（大卡片）。  卡片尺寸为非必选项，AI会根据前两个维度描述的信息，智能选择效果最佳的尺寸。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "例如“2*2尺寸的卡片”、“中卡片”等。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前不支持在生成卡片预览图后，继续描述需求进行增量修改。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "万能卡片生成-1",
      children: "万能卡片生成"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击页面右侧菜单栏CodeGenie图标完成登录后，可以通过如下两种方式进入卡片生成窗口。在窗口输入万能卡片的需求，并点击发送，根据模型提示进行多轮交互，不断完善需求。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在对话区域输入\"/\"调出命令，选择", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Service Widget"
              })
            }), "。从DevEco Studio 6.1.0 Beta2开始不支持。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在输入框左下角的下拉框选择", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Service Widget"
              })
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(641919)/* ["default"] */.A) + "",
            width: "569",
            height: "881"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需求描述完成后，可以根据提示信息进一步细化卡片尺寸、用途、展示元素等，以及预览卡片效果图。生成效果示例****：****"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(620693)/* ["default"] */.A) + "",
            width: "1378",
            height: "978"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "万能卡片保存",
      children: "万能卡片保存"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(320467)/* ["default"] */.A) + "",
            width: "86",
            height: "32"
          }), "，可查看生成卡片的UI代码、配置信息和下载静态资源文件。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "保存卡片工程有两种方式："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式一：使用代码/配置查看窗口的“复制”、“插入”或“创建文件”等按钮，手动保存卡片代码和配置信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["方式二：点击“保存工程”按钮，自动保存卡片工程，卡片代码、配置、静态资源文件等会自动保存到工程对应目录中。默认勾选保存逻辑代码，逻辑代码用于配置卡片事件及卡片数据等信息，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section17840955102711",
            children: "自定义配置逻辑代码"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "流程示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(34722)/* ["default"] */.A) + "",
            width: "1378",
            height: "978"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "工程保存完成后，工程中会新增如下卡片相关文件："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(696528)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "716",
            height: "1804"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义配置逻辑代码",
      children: "自定义配置逻辑代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "逻辑代码包含实现卡片数据交互和卡片事件两类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片数据交互：触发卡片页面刷新。应用工程生成的卡片数据交互，可通过数据库或网络请求两种方式来触发卡片页面刷新；对于元服务工程生成的卡片，数据交互为通过网络请求方式触发卡片页面刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片事件：使用router事件跳转到指定的UIAbility、使用call事件拉起UIAbility到后台、使用message事件刷新卡片内容。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "目录结构",
      children: "目录结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在module > src > main > ets 路径下， formcommon目录用于存放生成卡片的逻辑代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(273402)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "355",
        height: "383"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["formsetting：存放用户可配置的文件。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "formsetting > formdbsetting：自定义配置以数据库方式进行卡片刷新的相关参数。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "formdbsetting > formdbinfo：存放包含卡片信息的Info.ets文件，可在Info.ets文件中，添加卡片刷新所需要的具体的数据，后续会读取该文件并将数据存入数据库中。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "UserSettings.ets：可以自定义卡片刷新时从数据库获取数据的规则、数据解析规则、message内容刷新规则。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "formsetting > formhttpsetting：自定义配置以网络请求方式进行卡片刷新的相关参数。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "formhttpsetting > formhttpinfo：存放包含卡片信息的Info.ets文件，可在Info.ets文件中添加获取卡片刷新数据的URL。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "UserSettings.ets：可以自定义卡片刷新时从URL获取数据的规则、数据解析规则、message内容刷新规则。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(959164)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如需使用网络请求方式刷新卡片页面，需在EntryFormAbility.ets文件中将FormDbUpdate的接口注释掉，并将启用FormHttpUpdate接口。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "formsetting > FormAction.ets：配置卡片事件。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "utils：存放工具类的目录，用户不可修改，如果修改再次生成逻辑代码时utils目录会被刷新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义配置卡片事件",
      children: "自定义配置卡片事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(668796)/* ["default"] */.A) + "",
        width: "316",
        height: "262"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在FormAction.ets文件中，配置触发卡片router事件时具体的页面分发规则。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在EntryAbility.ets文件的onWindowStageCreate方法中，会插入页面分发接口的调用，示例如下："
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(849693)/* ["default"] */.A) + "",
        width: "681",
        height: "185"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口默认插入到方法开头，开发者可根据当前工程onWindowStageCreate逻辑来将此接口移动至合适的位置，保证页面能正常跳转。"
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
668796(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
849693(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912860-d302bd6595fac42dabac46b1cd505060.png");

},
34722(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752799-138434b9d8513675e742d873dbb009fa.gif");

},
959164(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
620693(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752801-7d694174d620b90a2bfe85571c6cd585.gif");

},
273402(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912858-d1ba2286301dec99162cd09d7d8e49be.png");

},
320467(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAgCAIAAAAHTxh8AAAAAXNSR0IArs4c6QAABCdJREFUaEPtmL9PU1EUx6kaO9mB0Inn0k506kOUTu0EkyzSBIXFX/HHov4p6qIuMrUu4FJcYGqn1qU1mJKQlARTEpJ2qlNNsH7a2zwf97133y0gieG93BD67rnnnvM953zPvS/06PGTsQv89Hq/L11g9/uuh0KXLjoEoBBAEEAQZEFQCH1GDLhgLPT/ngsikUh0YiIajar7erPZbLXb3W7XS+xcIcDc1OytcDisMBpbq7Vv2K12LJGYyqTT9PVWu6WWNCYnO51OYeNLq+UuOTIEhmGgSwGql0EE7eGD+/WdHQxSGI1YPBbP5fMKMWRWlu8VS6V6fUfnaDc/P0e+5PKfXIVHhuDVyxdr6599o+TcLJWajcfjuVze1+iVleV6vV6t1rwkCUN28c7a2rqvKiFA9mUy6XfvP7hGzgcC8LZHQ+z9+s1b9EpTvtYAAct17M5mF4G4XK6oIfDdURLwitwVhSLyx5g0Pq6uWjKGMdk8OBA/s4t9Qze3tkY1BfmFhdvxWExa2NjbKxQ29LWJSDgf19iQvF6aPZsi/lOThY1jNhFGqwSYIrHn5+b0jbYki8USMZEGL0+gSloC10IT2IltqdlZHYXuEAj/19bXJRaFXZvNYRYwhUB/p5TWTnZrKC6glB41TXo5g8+E3Zo1zWS3+0vEyTRNnQi5QODpv2Gg106EAgUzadKidPC2ZDAaNK0x0lq7MDxHzK0YAIeZTJYrZWQajUaxVMQwMkKtX4bAy3+02InAUipQyKQzI6EAP8N51pCON/C2TtNlFdwMN1kVJFJAdMp+F0in6cG+zcu1EHqusNmJwCHQ8wXbvgTag8ysIZUbs4qOaE8lwo6HAi97CgwgmMD/zc0hW8O1XkcjGQLWIA26zoOnnQgsO0QoWGJtduKsHnUhqU4/otoJ/qDy+RtqNPaEHnLBzq/A6pVZLlngioIIspRUZ+I/pkPdYjx/9pQBU/ASovUFBT85+XY6P5FMTCWqtarkJzRBaY/GBULaiYKTCM7E/wHFGMb14SCZBcPzjkz2hUDQHg//4L9r+dj7havCy9PTN1wnyKjx8fGbMzPVWg2BVCo16GHDjsibu0tL+z/29fMfr7DGearf3d3lpRgU1Pb298PDQ17a95IsRA/sW64cOz6y6ujoSJL02tQupvpegHuwvZB2EgFT+v7rxFNfhhMEzK/oQWQoBWXRmfRT2kjrmmS/GugbKkn2r0mxmOt1jSlucuXKV5q8xTh0O8U1YXBZzoTDV532wJEk1KC7x8hb/Ke4FIStBQEqUOTbYNXoDG64y9StdArEOKYikWuUHgKiqvnbarVFkXs9g1V/z4WWGPrFFqCQmOqf2ezd0alNC4ITR95ZmVC99MkEDlO7eprdQYEeob59nCsEp3Hm360NPp8GX5CDj+jUV1AIY38A+u1IWhcYwzMAAAAASUVORK5CYII=");

},
696528(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912854-bcc0c9998705056bcc55be64ac5f419d.png");

},
641919(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752864-fbe83d3e283fb6c3cc6b173f849bd883.png");

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