"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["329866"], {
77554(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_inter_app_redirection_specified_type_app_redirection_start_email_apps_by_mailto_start_email_apps_by_mailto_md_1c1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-inter-app-redirection-specified-type-app-redirection-start-email-apps-by-mailto-start-email-apps-by-mailto-md-1c1.json
var site_docs_ability_kit_stage_model_development_inter_app_redirection_specified_type_app_redirection_start_email_apps_by_mailto_start_email_apps_by_mailto_md_1c1_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-email-apps-by-mailto/start-email-apps-by-mailto","title":"拉起邮件类应用（mailto方式）","description":"使用场景","source":"@site/docs/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-email-apps-by-mailto/start-email-apps-by-mailto.md","sourceDirName":"ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-email-apps-by-mailto","slug":"/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-email-apps-by-mailto/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-email-apps-by-mailto/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"拉起邮件类应用（mailto方式）","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-email-apps-by-mailto","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拉起邮件类应用（startAbilityByType）","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-email-apps/"},"next":{"title":"拉起金融类应用（startAbilityByType）","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-finance-apps/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-email-apps-by-mailto/start-email-apps-by-mailto.md


const frontMatter = {
	title: '拉起邮件类应用（mailto方式）',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-email-apps-by-mailto',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '拉起邮件类应用（mailto方式）';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "mailto协议格式",
  "id": "mailto协议格式",
  "level": 2
}, {
  "value": "拉起方开发步骤",
  "id": "拉起方开发步骤",
  "level": 2
}, {
  "value": "从网页拉起",
  "id": "从网页拉起",
  "level": 3
}, {
  "value": "从应用拉起",
  "id": "从应用拉起",
  "level": 3
}, {
  "value": "目标方开发步骤",
  "id": "目标方开发步骤",
  "level": 2
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
        id: "拉起邮件类应用mailto方式",
        children: "拉起邮件类应用（mailto方式）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过mailto电子邮件协议，可以创建指向电子邮件地址的超链接，方便用户通过网页或应用中的超链接直接跳转电子邮件应用。同时，支持在mailto:的相关字段中定义邮件的收件人、主题、正文内容等，节省用户编辑邮件的时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见的应用场景举例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从网页拉起：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "用户在购物网站浏览产品页面时，看到“联系我们”按钮，点击后会拉起默认邮件客户端。收件人自动填写为客服邮箱，邮件主题设定为产品咨询。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在招聘岗位页面，点击“申请职位”按钮，会拉起邮件客户端。收件人地址为招聘邮箱，邮件主题为“应聘某职位”，正文可以预先填入申请模板。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从应用拉起：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "移动应用中，用户点击“反馈”按钮时，应用调用系统功能，拉起默认邮件客户端，预先填写反馈邮箱、问题描述等信息。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "移动应用中，当用户点击“通过邮件分享”按钮时，应用会通过 mailto 调用邮件客户端，预填邮件主题和正文。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(335264)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "如果使用mailto方式拉起邮件应用，需要拉起方先按mailto格式封装字符串，再使用mailto方式拉起。邮件应用会解析收到的mailto协议字符串，并填充发件人、收件人、邮件内容等信息。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["如果拉起方已知发件人、收件人、邮件内容等信息，推荐", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-email-apps",
                  children: "使用startAbilityByType方式拉起邮件应用"
                }), "。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mailto协议格式",
      children: "mailto协议格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "mailto协议标准格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mailto:someone@example.com?key1=value1&key2=value2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "mailto:：mailto scheme，必填。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "mailto:someone@example.com",
            children: "someone@example.com"
          }), "：收件人地址，选填。如果存在多个地址，用英文逗号分隔。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "?：邮件头声明开始符号。如果带邮件头参数，则必填。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "key-value：邮件头参数，详细参数见下表。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "邮件头"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "含义"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "数据类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否必填"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "subject"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "邮件主题"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "body"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "邮件正文"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "cc"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "抄送人，多个用逗号分隔"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "bcc"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "密送人，多个用逗号分隔"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "特殊符号处理："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果邮件头参数值中存在特殊字符，如@、?、=、&等符号，可能导致配置不生效。建议将特殊字符替换为ASCII码，并在ASCII码前加百分号%。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常用符号替换为ASCII码的对照表如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "特殊符号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: ":"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "="
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "&"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "替换编码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "%3A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "%40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "%3F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "%3D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "%26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "%23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "%24"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拉起方开发步骤",
      children: "拉起方开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "从网页拉起",
      children: "从网页拉起"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网页中的超链接需要满足mailto协议。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<a href=\"mailto:support@example.com?subject=Product Inquiry&body=I am interested in...\">联系我们</a>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实际开发时，需要将邮箱地址替换为真实的邮箱，邮件内容可以根据需要进行配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(900519)/* ["default"] */.A) + "",
        width: "1194",
        height: "674"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "从应用拉起",
      children: "从应用拉起"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "保证mailto字符串传入uri参数即可，在应用中page页面可通过 getHostContext() 获取context，在ability中可通过this.context获取context。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      Button('反馈')\n        .onClick(() => {\n          let ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;\n          ctx.startAbility({\n            action: 'ohos.want.action.sendToData',\n            uri: 'mailto:feedback@example.com?subject=App Feedback&body=Please describe your feedback here...'\n          })\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(944960)/* ["default"] */.A) + "",
        width: "1194",
        height: "675"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "目标方开发步骤",
      children: "目标方开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为了能够支持被其他应用通过mailto协议拉起，目标应用需要在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中声明mailto。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    // ...\n    \"abilities\": [\n      {\n        // ...\n        \"skills\": [\n          {\n          \"actions\": [\n              'ohos.want.action.sendToData'\n            ],\n            \"uris\": [\n              {\n                \"scheme\": \"mailto\",\n                // linkFeature 用于适配垂类面板拉起\n                \"linkFeature\": 'ComposeMail'\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目标应用在代码中取出uri参数进行解析。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    // 应用冷启动生命周期回调，其他业务处理...\n    this.parseMailto(want);\n  }\n\n  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    // 应用热启动生命周期回调，其他业务处理...\n    this.parseMailto(want);\n  }\n\n  public parseMailto(want: Want) {\n    const uri = want?.uri;\n    if (!uri || uri.length <= 0) {\n      return;\n    }\n    // 开始解析 mailto...\n  }\n}\n"
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
900519(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957506-286965d0a93991a2a10bbc6ac8aeadca.gif");

},
944960(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477507-fa8ac1f841fabc009a2012c1afe1f196.gif");

},
335264(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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