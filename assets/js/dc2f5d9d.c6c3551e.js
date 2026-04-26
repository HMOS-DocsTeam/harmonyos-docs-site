"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["615709"], {
877343(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_inter_app_redirection_directional_redirection_obtaining_target_app_url_info_obtaining_target_app_url_info_md_dc2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-inter-app-redirection-directional-redirection-obtaining-target-app-url-info-obtaining-target-app-url-info-md-dc2.json
var site_docs_ability_kit_stage_model_development_inter_app_redirection_directional_redirection_obtaining_target_app_url_info_obtaining_target_app_url_info_md_dc2_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/inter-app-redirection/directional-redirection/obtaining-target-app-url-info/obtaining-target-app-url-info","title":"获取目标应用的URL信息","description":"场景介绍","source":"@site/docs/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/obtaining-target-app-url-info/obtaining-target-app-url-info.md","sourceDirName":"ability-kit/stage-model-development/inter-app-redirection/directional-redirection/obtaining-target-app-url-info","slug":"/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/obtaining-target-app-url-info/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/obtaining-target-app-url-info/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"获取目标应用的URL信息","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/obtaining-target-app-url-info","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"（可选）使用canOpenLink判断应用是否可访问","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/canopenlink/"},"next":{"title":"使用App Linking实现应用间跳转","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-linking-startup/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/obtaining-target-app-url-info/obtaining-target-app-url-info.md


const frontMatter = {
	title: '获取目标应用的URL信息',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/obtaining-target-app-url-info',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '获取目标应用的URL信息';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "环境要求",
  "id": "环境要求",
  "level": 2
}, {
  "value": "操作步骤",
  "id": "操作步骤",
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
        id: "获取目标应用的url信息",
        children: "获取目标应用的URL信息"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者在使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
        children: "UIAbilityContext.openLink"
      }), "接口拉起目标应用时，需要传入目标应用的URL信息。本章节主要介绍如何获取目标应用的URL信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["假设目标应用的UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5"
      }), "配置信息如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"name\": \"EntryAbility\",\n  \"srcEntry\": \"./ets/entryability/EntryAbility.ets\",\n  \"icon\": \"$media:layered_image\",\n  \"label\": \"$string:EntryAbility_label\",\n  // ···\n  \"skills\": [\n    {\n      \"uris\": [\n        {\n          \"scheme\": \"appurl\",\n          \"host\": \"www.example.com\",\n          \"path\": \"path1\"\n          // ...\n        }\n      ],\n      \"domainVerify\": false,\n    }\n    // ...\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者需要先获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hdc",
        children: "hdc工具"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/debugging-commands/bm-tool",
            children: "bm工具"
          }), "获取目标应用的bundleName。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "获取当前设备上所有已安装应用的bundleName，保存结果。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hdc shell bm dump -a\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "安装目标应用。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "再次获取当前设备上所有已安装应用的bundleName，并与之前保存的结果进行对比。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "新增的bundleName即为目标应用包名，本例中假设为com.example.myapplication。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据bundleName获取目标应用的Mission ID。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/system-debug-optimize/debugging-commands/aa-tool",
                children: "aa工具"
              }), "，获取目标应用的abilityName。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hdc shell \"aa dump -l | grep com.examplmyapplication\"\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过查看输出中的Mission ID部分，获取abilityName即为EntryAbility。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "# 执行结果\nMission ID #48  mission name #[#com.example.myapplication:entry:EntryAbility] lockedStat#0 mission affinity #[]\n      app name [com.example.myapplication]\n      bundle name [com.example.myapplication]\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据bundleName获取应用的uris信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "使用bm工具，获取应用的完整配置信息，包括abilities、skills、uris等配置。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hdc shell bm dump -n com.example.myapplication\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过查看输出中name为的EntryAbility下方的skills部分，获取应用支持的URL Scheme配置。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 输出示例（skills部分）：\n// ...\n\"name\": \"EntryAbility\",\n// ...\n{\n  \"skills\": [\n    {\n      \"actions\": [\n        \"ohos.want.action.viewData\"\n      ],\n      \"domainVerify\": false,\n      \"entities\": [\n        \"entity.system.browsable\"\n      ],\n      \"permissions\": [],\n      \"uris\": [\n        {\n          \"host\": \"www.example.com\",\n          \"linkFeature\": \"\",\n          \"maxFileSupported\": 0,\n          \"path\": \"path1\",\n          \"pathRegex\": \"\",\n          \"pathStartWith\": \"\",\n          \"port\": \"\",\n          \"scheme\": \"appurl\",\n          \"type\": \"\",\n          \"utd\": \"\"\n        }\n      ]\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据获取到的配置信息拼接生成URL信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "URL格式如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "scheme://host:port/path\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以目标应用为例，其URL构成如下："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "配置项"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "值"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "scheme"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "appurl"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "host"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "www.example.com"
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "port"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "未指定（可选）"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "path"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "path1"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据上述参数，拼接得到的完整URL为："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "appurl://www.example.com/path1\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(201773)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不同应用的bundleName和URL配置可能因版本不同而有所变化。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "建议在实际使用前，通过hdc命令确认目标应用的最新配置信息。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果应用未配置skills中的uris字段，则不支持通过Deep Linking方式拉起。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用Deep Linking方式拉起目标应用。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下为通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
            children: "UIAbilityContext.openLink"
          }), "接口拉起目标应用的完整示例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(201364)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "URL配置验证：在使用目标应用的URL之前，务必验证其正确性，避免因URL错误导致拉起失败。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用安装检测：在拉起目标应用前，建议先检测应用是否已安装。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit'\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct SpecifiedPage {\n\n  build() {\n    Row() {\n      Column() {\n        Button(\"拉起目标应用\")\n          .onClick(() => {\n            let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n            let link: string = 'appurl://www.example.com/path1';\n\n            context.openLink(link, { appLinkingOnly: false })\n              .then(() => {\n                hilog.info(0x0000, 'testTag', `Succeeded in opening link.`);\n              })\n              .catch((error: BusinessError) => {\n                hilog.error(0x0000, 'testTag', `Failed to open link, code: ${error.code}, message: ${error.message}`);\n              });\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调试验证。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装并启动拉起方应用后，点击\"拉起目标应用\"按钮即可拉起目标应用，演示效果如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图1"
            })
          }), " 拉起目标应用演示"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(211551)/* ["default"] */.A) + "",
            width: "323",
            height: "699"
          })
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
201364(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
211551(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477503-9009100ca3271a18f64a18a380787f24.gif");

},
201773(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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