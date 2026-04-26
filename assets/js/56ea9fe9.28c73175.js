"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["775896"], {
144447(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_transparent_backplate_form_arkts_ui_transparent_backplate_form_development_arkts_ui_transparent_backplate_form_development_md_56e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-arkts-ui-transparent-backplate-form-arkts-ui-transparent-backplate-form-development-arkts-ui-transparent-backplate-form-development-md-56e.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_transparent_backplate_form_arkts_ui_transparent_backplate_form_development_arkts_ui_transparent_backplate_form_development_md_56e_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-transparent-backplate-form/arkts-ui-transparent-backplate-form-development/arkts-ui-transparent-backplate-form-development","title":"背板透明卡片开发指导","description":"从API version 22开始，Form Kit提供卡片背板元素透明显示的能力，满足更丰富的UI设计以及美观诉求。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-transparent-backplate-form/arkts-ui-transparent-backplate-form-development/arkts-ui-transparent-backplate-form-development.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-transparent-backplate-form/arkts-ui-transparent-backplate-form-development","slug":"/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-transparent-backplate-form/arkts-ui-transparent-backplate-form-development/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-transparent-backplate-form/arkts-ui-transparent-backplate-form-development/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"背板透明卡片开发指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-transparent-backplate-form-development","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"锁屏卡片开发指导","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-lockscreen-form/arkts-ui-lockscreen-form-development/"},"next":{"title":"互动卡片概述","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-transparent-backplate-form/arkts-ui-transparent-backplate-form-development/arkts-ui-transparent-backplate-form-development.md


const frontMatter = {
	title: '背板透明卡片开发指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-transparent-backplate-form-development',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '背板透明卡片开发指导';

const assets = {

};



const toc = [{
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 2
}, {
  "value": "开发准备",
  "id": "开发准备",
  "level": 2
}, {
  "value": "透明卡片开放能力申请",
  "id": "透明卡片开放能力申请",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "背板透明卡片开发指导",
        children: "背板透明卡片开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，Form Kit提供卡片背板元素透明显示的能力，满足更丰富的UI设计以及美观诉求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(627194)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例效果请以真机运行为准，当前不支持DevEco Studio预览器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "非透明区域要求大于等于10%，不能有大面积全透明，让用户误以为此区域没有卡片的UI设计和实现。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为保障卡片内容和文字清晰可见，建议根据加卡时系统告知的推荐颜色值来显示文字。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发准备",
      children: "开发准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "透明卡片开放能力申请",
      children: "透明卡片开放能力申请"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因为背板透明卡片仅使用于符合UI规范以及声明使用的场景，不允许对用户隐藏卡片显示或者功能按钮的恶意设计，所以需要开发者申请上架开放能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "登录AppGallery Connect，选择“开发与服务”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(546022)/* ["default"] */.A) + "",
            width: "2552",
            height: "569"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在项目列表中找到您的项目，并点击选择需开启开放能力的应用/元服务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(535235)/* ["default"] */.A) + "",
            width: "1601",
            height: "673"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“开放能力管理”页面，点击背板透明卡片对应的申请按钮。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(569098)/* ["default"] */.A) + "",
            width: "1691",
            height: "96"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“新建业务申请”窗口填写申请信息，然后点击“提交”。申请原因：必填，包括应用介绍、使用场景、申请用途，不超过256个字符。上传附件：必填，提供对应卡片UI设计释义材料，仅可上传1个附件，大小不超过500MB。支持文本、表格、图片、视频、压缩包格式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(522351)/* ["default"] */.A) + "",
            width: "2099",
            height: "747"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回“开放能力管理”页面，原“申请”按钮变为“申请中”，1-3个工作日反馈申请结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(902669)/* ["default"] */.A) + "",
            width: "1687",
            height: "96"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "申请审批通过后，互动中心会发送通知给您，同时“申请中”按钮会变为置灰显示的“申请”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(698689)/* ["default"] */.A) + "",
            width: "1390",
            height: "108"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "能力申请通过后，勾选背板透明卡片的能力开关，点击右上角“保存”。至此，您的应用已成功接入开放能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(652657)/* ["default"] */.A) + "",
            width: "2093",
            height: "949"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面给出示例，实现背板透明卡片功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-ui-widget-creation",
            children: "创建卡片"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置背板透明卡片。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在form_config.json配置文件中，背板透明卡片必须配置transparencyEnabled字段为true。具体参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
            children: "配置文件字段说明"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/resources/base/profile/form_config.json\n\n{\n  \"forms\": [\n    {\n        \"name\": \"widget\",\n        \"displayName\": \"$string:widget_display_name\",\n        \"description\": \"$string:widget_desc\",\n        \"src\": \"./ets/widget/pages/WidgetCard.ets\",\n        \"uiSyntax\": \"arkts\",\n        \"window\": {\n            \"designWidth\": 720,\n            \"autoDesignWidth\": true\n        },\n        \"isDynamic\": true,\n        \"isDefault\": true,\n        \"updateEnabled\": false,\n        \"scheduledUpdateTime\": \"10:30\",\n        \"updateDuration\": 1,\n        \"defaultDimension\": \"2*2\",\n        \"transparencyEnabled\": true,\n        \"supportDimensions\": [\n            \"2*2\"\n        ]\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置背板透明卡片字体反色。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在WidgetCard.ets卡片布局文件中，实现默认卡片反色字体颜色设置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/widget/pages/WidgetCard.ets\nconst TAG: string = 'WidgetCard';\n\n@Entry\n@Component\nexport struct WidgetCard {\n  readonly title: string = '已配置form_config为true三方透明卡片';\n  readonly actionType: string = 'router';\n  readonly abilityName: string = 'EntryAbility';\n  readonly message: string = 'add detail';\n  readonly fullWidthPercent: string = '100%';\n  readonly fullHeightPercent: string = '100%';\n\n  // 获取反色信息\n  @LocalStorageProp('textColor') @Watch('getTextColor') textColor: string = '#00ff00';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.title)\n          .fontSize('20vp')\n          .fontWeight(FontWeight.Medium)\n          .fontColor(this.textColor)\n      }\n      .width(this.fullWidthPercent)\n    }\n    .height(this.fullHeightPercent)\n    .backgroundColor(Color.Transparent)\n    .onClick(() => {\n      postCardAction(this, {\n        action: this.actionType,\n        abilityName: this.abilityName,\n        params: {\n          message: this.message\n        }\n      });\n    })\n  }\n\n  private getTextColor(): void {\n    console.info(TAG, `this.textColor = ${this.textColor}`);\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在卡片Ability生命周期EntryFormAbility.ets文件中，实现反色字体颜色更新。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/entryformability/EntryFormAbility.ets\nimport { formBindingData, FormExtensionAbility, formInfo, formProvider } from '@kit.FormKit';\nimport { Want } from '@kit.AbilityKit';\n\nconst TAG: string = 'ServiceEntryFormAbility';\n\nexport default class EntryFormAbility extends FormExtensionAbility {\n  onAddForm(want: Want) {\n    console.info(TAG, 'onAddForm', JSON.stringify(want));\n    let textColor: string = '#707070';\n    let formData: Record<string, string> = {};\n    if (want && want.parameters) {\n      // 获取反色信息\n      let testColorJsonStr = want.parameters[formInfo.FormParam.HOST_BG_INVERSE_COLOR_KEY] as TextColor;\n      if (!testColorJsonStr) {\n        console.error(TAG, `no host_bg_inverse_color in want parameters`);\n      } else {\n        textColor = testColorJsonStr.mTextColor;\n        formData['textColor'] = textColor;\n      }\n    }\n\n    return formBindingData.createFormBindingData(formData);\n  }\n\n  onCastToNormalForm(formId: string) {}\n\n  onUpdateForm(formId: string, wantParams?: Record<string, Object>) {\n    console.info(TAG, 'onUpdateForm', JSON.stringify(wantParams));\n    let textColor: string = '#707070';\n    if (wantParams) {\n      let testColorJsonStr = wantParams[formInfo.FormParam.HOST_BG_INVERSE_COLOR_KEY] as TextColor;\n      console.info(TAG, `onUpdate typeof testColorJsonStr = ${JSON.stringify(testColorJsonStr)}`);\n      // 获取反色信息\n      if (!testColorJsonStr) {\n        console.error(TAG, `no host_bg_inverse_color in wantParams parameters`);\n        return;\n      } else {\n        textColor = testColorJsonStr.mTextColor;\n      }\n    }\n\n    let formMsg: Record<string, string> = {\n      'textColor': textColor\n    };\n\n    let formData: formBindingData.FormBindingData = formBindingData.createFormBindingData(formMsg);\n    formProvider.updateForm(formId, formData).then((succ) => {\n      console.info(TAG,`succ = ${JSON.stringify(succ)}`);\n    }).catch((fail :Error) => {\n      console.info(TAG,`err = ${JSON.stringify(fail)}`);\n    })\n\n  }\n\n  onFormEvent(formId: string, message: string) {}\n\n  onRemoveForm(formId: string) {}\n\n  onAcquireFormState(want: Want) {\n    return formInfo.FormState.READY;\n  }\n}\n\ninterface  TextColor {\n  mTextColor: string;\n  mWallpaperType: number;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在应用调试或发布时，进行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-signing#section297715173233",
            children: "手动签名"
          }), "后运行。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户可在卡片中心-卡片管理页面，点击“添加至桌面”，此时在桌面即可看到新添加的背板透明卡片。结果示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(53821)/* ["default"] */.A) + "",
            width: "522",
            height: "1080"
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
546022(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438349-5dadf8edbbe996ec8e66c1facf8dea0c.png");

},
522351(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798656-7473095bfd5badba2ae36c821b97059a.png");

},
627194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
902669(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438351-26f83a7a1aba03155f8cbeedfb1b31e0.png");

},
535235(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958304-d9f5bc6567244428034eb8acc42a2a7b.png");

},
569098(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478305-d032f3c4255980a2bd5448c5c7852ac9.png");

},
53821(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798658-9b47cfcc52bd3f5974f36e37cf370bfe.gif");

},
698689(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958306-f0df4db18022948e7826c45288fcda96.png");

},
652657(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478307-f96ea46af56c44e10ec2685c44668df2.png");

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