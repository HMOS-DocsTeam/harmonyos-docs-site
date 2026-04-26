"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["873675"], {
344716(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_form_js_ui_widget_development_fa_widget_development_fa_md_154_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-form-js-ui-widget-development-fa-widget-development-fa-md-154.json
var site_docs_form_kit_form_js_ui_widget_development_fa_widget_development_fa_md_154_namespaceObject = JSON.parse('{"id":"form-kit/form-js-ui/widget-development-fa/widget-development-fa","title":"JS卡片开发指导（FA模型）","description":"FA模型从API version 7开始支持，已经不再主推。该应用模型通过导出匿名对象、固定入口文件的方式指定应用组件，开发者无法进行派生，不利于扩展能力。建议使用新的Stage模型进行开发。","source":"@site/docs/form-kit/form-js-ui/widget-development-fa/widget-development-fa.md","sourceDirName":"form-kit/form-js-ui/widget-development-fa","slug":"/form-kit/form-js-ui/widget-development-fa/","permalink":"/harmonyos-docs-site/form-kit/form-js-ui/widget-development-fa/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"JS卡片开发指导（FA模型）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/widget-development-fa","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"JS卡片开发指导（Stage模型）","permalink":"/harmonyos-docs-site/form-kit/form-js-ui/js-ui-widget-development/"},"next":{"title":"IME Kit简介","permalink":"/harmonyos-docs-site/ime-kit/ime-kit-intro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/form-js-ui/widget-development-fa/widget-development-fa.md


const frontMatter = {
	title: 'JS卡片开发指导（FA模型）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/widget-development-fa',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'JS卡片开发指导（FA模型）';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "实现卡片生命周期接口",
  "id": "实现卡片生命周期接口",
  "level": 3
}, {
  "value": "配置卡片配置文件",
  "id": "配置卡片配置文件",
  "level": 3
}, {
  "value": "卡片信息的持久化",
  "id": "卡片信息的持久化",
  "level": 3
}, {
  "value": "卡片数据交互",
  "id": "卡片数据交互",
  "level": 3
}, {
  "value": "开发卡片页面",
  "id": "开发卡片页面",
  "level": 3
}, {
  "value": "开发卡片事件",
  "id": "开发卡片事件",
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
        id: "js卡片开发指导fa模型",
        children: "JS卡片开发指导（FA模型）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FA模型从API version 7开始支持，已经不再主推。该应用模型通过导出匿名对象、固定入口文件的方式指定应用组件，开发者无法进行派生，不利于扩展能力。建议使用新的Stage模型进行开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FormAbility生命周期接口如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onCreate(want: Want): formBindingData.FormBindingData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片提供方接收创建卡片的通知接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onCastToNormal(formId: string): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片提供方接收临时卡片转常态卡片的通知接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onUpdate(formId: string): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片提供方接收更新卡片的通知接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onVisibilityChange(newStatus: Record<string, number>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片提供方接收修改可见性的通知接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onEvent(formId: string, message: string): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片提供方接收处理卡片事件的通知接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDestroy(formId: string): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片提供方接收销毁卡片的通知接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onAcquireFormState?(want: Want): formInfo.FormState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片提供方接收查询卡片状态的通知接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onShare?(formId: string): {[key: string]: any}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片提供方接收卡片分享的通知接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onShareForm?(formId: string): Record<string, Object>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片提供方接收卡片分享的通知接口。推荐使用该接口替代onShare接口。如果实现了该接口，onShare将不再被回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FormProvider类有如下API接口，具体的API介绍详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider",
        children: "@ohos.app.form.formProvider (formProvider)"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setFormNextRefreshTime(formId: string, minute: number, callback: AsyncCallback<void>): void;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置指定卡片的下一次更新时间，使用callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setFormNextRefreshTime(formId: string, minute: number): Promise<void>;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置指定卡片的下一次更新时间，以promise方式返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "updateForm(formId: string, formBindingData: formBindingData.FormBindingData,callback: AsyncCallback<void>): void;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新指定的卡片，使用callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "updateForm(formId: string, formBindingData: FormBindingData): Promise<void>;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新指定的卡片，以promise方式返回。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FormBindingData类有如下API接口，具体的API介绍详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formbindingdata/js-apis-app-form-formbindingdata",
        children: "@ohos.app.form.formBindingData (卡片数据绑定类)"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "createFormBindingData(obj?: Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string): FormBindingData"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FA卡片开发，即基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/fa-model-development/fa-model-development-overview",
        children: "FA模型"
      }), "的卡片提供方开发，主要涉及如下关键步骤："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%AE%9E%E7%8E%B0%E5%8D%A1%E7%89%87%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%8E%A5%E5%8F%A3",
          children: "实现卡片生命周期接口"
        }), "：开发FormAbility生命周期回调函数。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E9%85%8D%E7%BD%AE%E5%8D%A1%E7%89%87%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",
          children: "配置卡片配置文件"
        }), "：配置应用配置文件config.json。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%8D%A1%E7%89%87%E4%BF%A1%E6%81%AF%E7%9A%84%E6%8C%81%E4%B9%85%E5%8C%96",
          children: "卡片信息的持久化"
        }), "：对卡片信息进行持久化管理。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%8D%A1%E7%89%87%E6%95%B0%E6%8D%AE%E4%BA%A4%E4%BA%92",
          children: "卡片数据交互"
        }), "：通过updateForm()更新卡片显示的信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%BC%80%E5%8F%91%E5%8D%A1%E7%89%87%E9%A1%B5%E9%9D%A2",
          children: "开发卡片页面"
        }), "：使用HML+CSS+JSON开发JS卡片页面。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%BC%80%E5%8F%91%E5%8D%A1%E7%89%87%E4%BA%8B%E4%BB%B6",
          children: "开发卡片事件"
        }), "：为卡片添加router事件和message事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现卡片生命周期接口",
      children: "实现卡片生命周期接口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建FA模型的卡片，需实现卡片的生命周期接口。先参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-service-widget",
        children: "DevEco Studio开发服务卡片指南"
      }), "生成服务卡片模板。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在form.ts中，导入相关模块"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import type featureAbility from '@ohos.ability.featureAbility';\nimport type Want from '@ohos.app.ability.Want';\nimport formBindingData from '@ohos.app.form.formBindingData';\nimport formInfo from '@ohos.app.form.formInfo';\nimport formProvider from '@ohos.app.form.formProvider';\nimport dataPreferences from '@ohos.data.preferences';\nimport hilog from '@ohos.hilog';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在form.ts中，实现卡片生命周期接口"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const TAG: string = '[Sample_FAModelAbilityDevelop]';\nconst domain: number = 0xFF00;\n\nconst DATA_STORAGE_PATH: string = 'form_store';\nlet storeFormInfo = async (formId: string, formName: string, tempFlag: boolean, context: featureAbility.Context): Promise<void> => {\n  // 此处仅对卡片ID：formId，卡片名：formName和是否为临时卡片：tempFlag进行了持久化\n  let formInfo: Record<string, string | number | boolean> = {\n    'formName': 'formName',\n    'tempFlag': 'tempFlag',\n    'updateCount': 0\n  };\n  try {\n    const storage = await dataPreferences.getPreferences(context, DATA_STORAGE_PATH);\n    // put form info\n    await storage.put(formId, JSON.stringify(formInfo));\n    hilog.info(domain, TAG, `storeFormInfo, put form info successfully, formId: ${formId}`);\n    await storage.flush();\n  } catch (err) {\n    hilog.error(domain, TAG, `failed to storeFormInfo, err: ${JSON.stringify(err as Error)}`);\n  }\n};\n\nlet deleteFormInfo = async (formId: string, context: featureAbility.Context) => {\n  try {\n    const storage = await dataPreferences.getPreferences(context, DATA_STORAGE_PATH);\n    // del form info\n    await storage.delete(formId);\n    hilog.info(domain, TAG, `deleteFormInfo, del form info successfully, formId: ${formId}`);\n    await storage.flush();\n  } catch (err) {\n    hilog.error(domain, TAG, `failed to deleteFormInfo, err: ${JSON.stringify(err)}`);\n  }\n}\n\nclass LifeCycle {\n  onCreate: (want: Want) => formBindingData.FormBindingData = (want) => ({ data: '' });\n  onCastToNormal: (formId: string) => void = (formId) => {\n  };\n  onUpdate: (formId: string) => void = (formId) => {\n  };\n  onVisibilityChange: (newStatus: Record<string, number>) => void = (newStatus) => {\n    let obj: Record<string, number> = {\n      'test': 1\n    };\n    return obj;\n  };\n  onEvent: (formId: string, message: string) => void = (formId, message) => {\n  };\n  onDestroy: (formId: string) => void = (formId) => {\n  };\n  onAcquireFormState?: (want: Want) => formInfo.FormState = (want) => (0);\n  onShareForm?: (formId: string) => Record<string, Object> = (formId) => {\n    let obj: Record<string, number> = {\n      'test': 1\n    };\n    return obj;\n  };\n}\n\nlet obj: LifeCycle = {\n  onCreate(want: Want) {\n    hilog.info(domain, TAG, 'FormAbility onCreate');\n    if (want.parameters) {\n      let formId = String(want.parameters['ohos.extra.param.key.form_identity']);\n      let formName = String(want.parameters['ohos.extra.param.key.form_name']);\n      let tempFlag = Boolean(want.parameters['ohos.extra.param.key.form_temporary']);\n      // 将创建的卡片信息持久化，以便在下次获取/更新该卡片实例时进行使用\n      // 此接口请根据实际情况实现，具体请参考：FormExtAbility Stage模型卡片实例\n      hilog.info(domain, TAG, 'FormAbility onCreate' + formId);\n      storeFormInfo(formId, formName, tempFlag, this.context);\n    }\n\n    // 使用方创建卡片时触发，提供方需要返回卡片数据绑定类\n    let obj: Record<string, string> = {\n      'title': 'titleOnCreate',\n      'detail': 'detailOnCreate'\n    };\n    let formData: formBindingData.FormBindingData = formBindingData.createFormBindingData(obj);\n    return formData;\n  },\n  onCastToNormal(formId: string) {\n    // 使用方将临时卡片转换为常态卡片触发，提供方需要做相应的处理，当前卡片使用方不存在临时卡片场景\n    hilog.info(domain, TAG, 'FormAbility onCastToNormal');\n  },\n  onUpdate(formId: string) {\n    // 若卡片支持定时更新/定点更新/卡片使用方主动请求更新功能，则提供方需要重写该方法以支持数据更新\n    hilog.info(domain, TAG, 'FormAbility onUpdate');\n    let obj: Record<string, string> = {\n      'title': 'titleOnUpdate',\n      'detail': 'detailOnUpdate'\n    };\n    let formData: formBindingData.FormBindingData = formBindingData.createFormBindingData(obj);\n    // 调用updateForm接口去更新对应的卡片，仅更新入参中携带的数据信息，其他信息保持不变\n    formProvider.updateForm(formId, formData).catch((error: Error) => {\n      hilog.error(domain, TAG, 'FormAbility updateForm, error:' + JSON.stringify(error));\n    });\n  },\n  onVisibilityChange(newStatus: Record<string, number>) {\n    // 使用方发起可见或者不可见通知触发，提供方需要做相应的处理，仅系统应用生效\n    hilog.info(domain, TAG, 'FormAbility onVisibilityChange');\n  },\n  onEvent(formId: string, message: string) {\n    // 若卡片支持触发事件，则需要重写该方法并实现对事件的触发\n    let obj: Record<string, string> = {\n      'title': 'titleOnEvent',\n      'detail': 'detailOnEvent'\n    };\n    let formData: formBindingData.FormBindingData = formBindingData.createFormBindingData(obj);\n    // 调用updateForm接口去更新对应的卡片，仅更新入参中携带的数据信息，其他信息保持不变\n    formProvider.updateForm(formId, formData).catch((error: Error) => {\n      hilog.error(domain, TAG, 'FormAbility updateForm, error:' + JSON.stringify(error));\n    });\n    hilog.info(domain, TAG, 'FormAbility onEvent');\n  },\n  onDestroy(formId: string) {\n    // 删除卡片实例数据\n    hilog.info(domain, TAG, 'FormAbility onDestroy');\n    // 删除之前持久化的卡片实例数据\n    // 此接口请根据实际情况实现，具体请参考：FormExtAbility Stage模型卡片实例\n    deleteFormInfo(formId, this.context);\n  },\n  onAcquireFormState(want: Want) {\n    hilog.info(domain, TAG, 'FormAbility onAcquireFormState');\n    return formInfo.FormState.READY;\n  }\n};\n\nexport default obj;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(974651)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FormAbility不能常驻后台，即在卡片生命周期回调函数中无法处理长时间的任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置卡片配置文件",
      children: "配置卡片配置文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡片需要在应用配置文件config.json中进行配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "JS模块，用于对应卡片的JS相关资源，内部字段结构说明："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "属性名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "含义"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "数据类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否可缺省"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "name"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示JS Component的名字。该标签不可缺省，默认值为default。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "pages"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示JS Component的页面用于列举JS Component中每个页面的路由信息[页面路径+页面名称]。该标签不可缺省，取值为数组，数组第一个元素代表JS FA首页。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "数组"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "window"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用于定义与显示窗口相关的配置。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "对象"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["可缺省，缺省值参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#window%E6%A0%87%E7%AD%BE",
                  children: "window标签"
                }), "表格。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "type"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示JS应用的类型。取值范围如下：  normal：标识该JS Component为应用实例。  form：标识该JS Component为卡片实例。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可缺省，缺省值为“normal” 。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "mode"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "定义JS组件的开发模式。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "对象"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可缺省，缺省值为空。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"js\": [\n  // ...\n  {\n    \"name\": \"widget\",\n    \"pages\": [\n      \"pages/index/index\"\n    ],\n    \"window\": {\n      \"designWidth\": 720,\n      \"autoDesignWidth\": true\n      },\n      \"type\": \"form\"\n    }\n  ]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "abilities模块，用于对应卡片的FormAbility，内部字段结构说明："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "属性名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "含义"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "数据类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否可缺省"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "name"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示卡片的类名。字符串最大长度为127字节。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "description"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示卡片的描述。取值可以是描述性内容，也可以是对描述性内容的资源索引，以支持多语言。字符串最大长度为255字节。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可缺省，缺省为空。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "isDefault"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示该卡片是否为默认卡片，每个Ability有且只有一个默认卡片。  true：默认卡片。  false：非默认卡片。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "布尔值"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "type"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示卡片的类型。取值范围如下：  JS：JS卡片。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "colorMode(deprecated)"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["表示卡片的主题样式，取值范围如下：  auto：自适应。  dark：深色主题。  light：浅色主题。  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "说明："
                  })
                }), "  从API version 20开始，该接口废弃，卡片主题样式统一跟随系统的颜色模式。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可缺省，缺省值为“auto”。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "supportDimensions"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示卡片支持的外观规格，取值范围：  1 * 2：表示1行2列的二宫格。  2 * 2：表示2行2列的四宫格。  2 * 4：表示2行4列的八宫格。  4 * 4：表示4行4列的十六宫格。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串数组"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "defaultDimension"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示卡片的默认外观规格，取值必须在该卡片supportDimensions配置的列表中。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "updateEnabled"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示卡片是否支持周期性刷新，取值范围：  true：表示支持周期性刷新，可以在定时刷新（updateDuration）和定点刷新（scheduledUpdateTime）两种方式任选其一，优先选择定时刷新。  false：表示不支持周期性刷新。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "布尔类型"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "scheduledUpdateTime"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示卡片的定点刷新的时刻，采用24小时制，精确到分钟。  updateDuration参数优先级高于scheduledUpdateTime，两者同时配置时，以updateDuration配置的刷新时间为准。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可缺省，缺省值为“0:0”，缺省时不进行定点刷新。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "updateDuration"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示卡片定时刷新的更新周期，单位为30分钟，取值为自然数。  当取值为0时，表示该参数不生效。  当取值为正整数N时，表示刷新周期为30*N分钟。  updateDuration参数优先级高于scheduledUpdateTime，两者同时配置时，以updateDuration配置的刷新时间为准。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "数值"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可缺省，缺省值为0。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "formConfigAbility"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示卡片的配置跳转链接，采用URI格式。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可缺省，缺省值为空。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "formVisibleNotify"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "标识是否允许卡片使用卡片可见性通知。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可缺省，缺省值为空。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "jsComponentName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示JS卡片的Component名称。字符串最大长度为127字节。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "metaData"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示卡片的自定义信息，包含customizeData数组标签。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "对象"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可缺省，缺省值为空。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "customizeData"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示自定义的卡片信息。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "对象数组"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可缺省，缺省值为空。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"abilities\": [\n  // ...\n  {\n    \"name\": \".FormAbility\",\n    \"srcPath\": \"FormAbility\",\n    \"description\": \"$string:FormAbility_desc\",\n    \"icon\": \"$media:icon\",\n    \"label\": \"$string:FormAbility_label\",\n    \"type\": \"service\",\n    \"formsEnabled\": true,\n    \"srcLanguage\": \"ets\",\n    \"forms\": [\n      {\n        \"jsComponentName\": \"widget\",\n        \"isDefault\": true,\n        \"scheduledUpdateTime\": \"10:30\",\n        \"defaultDimension\": \"2*2\",\n        \"name\": \"widget\",\n        \"description\": \"This is a service widget.\",\n        \"type\": \"JS\",\n        \"formVisibleNotify\": true,\n        \"supportDimensions\": [\n          \"2*2\"\n        ],\n        \"updateEnabled\": true,\n        \"updateDuration\": 1\n      }\n    ]\n  },\n  // ...\n]\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "卡片信息的持久化",
      children: "卡片信息的持久化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因大部分卡片提供方都不是常驻服务，只有在需要使用时才会被拉起获取卡片信息，且卡片管理服务支持对卡片进行多实例管理，卡片ID对应实例ID，因此若卡片提供方支持对卡片数据进行配置，则需要对卡片的业务数据按照卡片ID进行持久化管理，以便在后续获取、更新以及拉起时能获取到正确的卡片业务数据。且需要适配onDestroy卡片删除通知接口，在其中实现卡片实例数据的删除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const TAG: string = '[Sample_FAModelAbilityDevelop]';\nconst domain: number = 0xFF00;\n\nconst DATA_STORAGE_PATH: string = 'form_store';\nlet storeFormInfo = async (formId: string, formName: string, tempFlag: boolean, context: featureAbility.Context): Promise<void> => {\n  // 此处仅对卡片ID：formId，卡片名：formName和是否为临时卡片：tempFlag进行了持久化\n  let formInfo: Record<string, string | number | boolean> = {\n    'formName': 'formName',\n    'tempFlag': 'tempFlag',\n    'updateCount': 0\n  };\n  try {\n    const storage = await dataPreferences.getPreferences(context, DATA_STORAGE_PATH);\n    // put form info\n    await storage.put(formId, JSON.stringify(formInfo));\n    hilog.info(domain, TAG, `storeFormInfo, put form info successfully, formId: ${formId}`);\n    await storage.flush();\n  } catch (err) {\n    hilog.error(domain, TAG, `failed to storeFormInfo, err: ${JSON.stringify(err as Error)}`);\n  }\n};\n\nlet deleteFormInfo = async (formId: string, context: featureAbility.Context) => {\n  try {\n    const storage = await dataPreferences.getPreferences(context, DATA_STORAGE_PATH);\n    // del form info\n    await storage.delete(formId);\n    hilog.info(domain, TAG, `deleteFormInfo, del form info successfully, formId: ${formId}`);\n    await storage.flush();\n  } catch (err) {\n    hilog.error(domain, TAG, `failed to deleteFormInfo, err: ${JSON.stringify(err)}`);\n  }\n}\n\n// ...\n  onCreate(want: Want) {\n    hilog.info(domain, TAG, 'FormAbility onCreate');\n    if (want.parameters) {\n      let formId = String(want.parameters['ohos.extra.param.key.form_identity']);\n      let formName = String(want.parameters['ohos.extra.param.key.form_name']);\n      let tempFlag = Boolean(want.parameters['ohos.extra.param.key.form_temporary']);\n      // 将创建的卡片信息持久化，以便在下次获取/更新该卡片实例时进行使用\n      // 此接口请根据实际情况实现，具体请参考：FormExtAbility Stage模型卡片实例\n      hilog.info(domain, TAG, 'FormAbility onCreate' + formId);\n      storeFormInfo(formId, formName, tempFlag, this.context);\n    }\n\n    // 使用方创建卡片时触发，提供方需要返回卡片数据绑定类\n    let obj: Record<string, string> = {\n      'title': 'titleOnCreate',\n      'detail': 'detailOnCreate'\n    };\n    let formData: formBindingData.FormBindingData = formBindingData.createFormBindingData(obj);\n    return formData;\n  },\n// ...\n\nlet deleteFormInfo = async (formId: string, context: featureAbility.Context): Promise<void> => {\n  try {\n    const storage = await dataPreferences.getPreferences(context, DATA_STORAGE_PATH);\n    // del form info\n    await storage.delete(formId);\n    hilog.info(domain, TAG, `deleteFormInfo, del form info successfully, formId: ${formId}`);\n    await storage.flush();\n  } catch (err) {\n    hilog.error(domain, TAG, `failed to deleteFormInfo, err: ${JSON.stringify(err)}`);\n  }\n};\n\n// ...\n    // 适配onDestroy卡片删除通知接口，在其中实现卡片实例数据的删除。\n  onDestroy(formId: string) {\n    // 删除卡片实例数据\n    hilog.info(domain, TAG, 'FormAbility onDestroy');\n    // 删除之前持久化的卡片实例数据\n    // 此接口请根据实际情况实现，具体请参考：FormExtAbility Stage模型卡片实例\n    deleteFormInfo(formId, this.context);\n  }\n// ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体的持久化方法可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/app-data-persistence/app-data-persistence-overview",
        children: "应用数据持久化概述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，卡片使用方在请求卡片时传递给提供方应用的Want数据中存在临时标记字段，表示此次请求的卡片是否为临时卡片："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "常态卡片：卡片使用方会持久化的卡片。如添加到桌面的卡片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "临时卡片：卡片使用方不会持久化的卡片。当前卡片使用方不存在临时卡片场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "临时卡片转常态卡片：上划卡片应用后，此时会显示的卡片为临时卡片；点击卡片上的“图钉”按钮后添加到桌面，此时卡片转为常态卡片。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于临时卡片的数据具有非持久化的特殊性，某些场景例如卡片服务框架死亡重启，此时临时卡片数据在卡片管理服务中已经删除，且对应的卡片ID不会通知到提供方，所以卡片提供方需要自己负责清理长时间未删除的临时卡片数据。同时对应的卡片使用方可能会将之前请求的临时卡片转换为常态卡片。如果转换成功，卡片提供方也需要对对应的临时卡片ID进行处理，把卡片提供方记录的临时卡片数据转换为常态卡片数据，防止提供方在清理长时间未删除的临时卡片时，把已经转换为常态卡片的临时卡片信息删除，导致卡片信息丢失。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "卡片数据交互",
      children: "卡片数据交互"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当卡片应用需要更新数据时（如触发了定时更新或定点更新），卡片应用获取最新数据，并调用updateForm()接口更新主动触发卡片的更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const TAG: string = '[Sample_FAModelAbilityDevelop]';\nconst domain: number = 0xFF00;\n\nonUpdate(formId: string) {\n  // 若卡片支持定时更新/定点更新/卡片使用方主动请求更新功能，则提供方需要重写该方法以支持数据更新\n  hilog.info(domain, TAG, 'FormAbility onUpdate');\n  let obj: Record<string, string> = {\n    'title': 'titleOnUpdate',\n    'detail': 'detailOnUpdate'\n  };\n  let formData: formBindingData.FormBindingData = formBindingData.createFormBindingData(obj);\n  // 调用updateForm接口去更新对应的卡片，仅更新入参中携带的数据信息，其他信息保持不变\n  formProvider.updateForm(formId, formData).catch((error: Error) => {\n    hilog.error(domain, TAG, 'FormAbility updateForm, error:' + JSON.stringify(error));\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发卡片页面",
      children: "开发卡片页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以使用类Web范式（HML+CSS+JSON）开发JS卡片页面。生成如下卡片页面，可以这样配置卡片页面文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(203505)/* ["default"] */.A) + "",
        width: "360",
        height: "179"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(959216)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FA模型当前仅支持JS扩展的类Web开发范式来实现卡片的UI。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HML：使用类Web范式的组件描述卡片的页面信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<div class=\"container\">\n    <stack>\n        <div class=\"container-img\">\n            <image src=\"/common/widget.png\" class=\"bg-img\"></image>\n            <image src=\"/common/rect.png\" class=\"bottom-img\"></image>\n        </div>\n        <div class=\"container-inner\">\n            <text class=\"title\" onclick=\"routerEvent\">{{title}}</text>\n            <text class=\"detail_text\" onclick=\"messageEvent\">{{detail}}</text>\n        </div>\n    </stack>\n</div>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CSS：HML中类Web范式组件的样式信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".container {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.bg-img {\n    flex-shrink: 0;\n    height: 100%;\n    z-index: 1;\n}\n\n.bottom-img {\n    position: absolute;\n    width: 150px;\n    height: 56px;\n    top: 63%;\n    background-color: rgba(216, 216, 216, 0.15);\n    filter: blur(20px);\n    z-index: 2;\n}\n\n.container-inner {\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: flex-start;\n    height: 100%;\n    width: 100%;\n    padding: 12px;\n}\n\n.title {\n    font-family: HarmonyHeiTi-Medium;\n    font-size: 14px;\n    color: rgba(255,255,255,0.90);\n    letter-spacing: 0.6px;\n}\n\n.detail_text {\n    font-family: HarmonyHeiTi;\n    font-size: 12px;\n    color: rgba(255,255,255,0.60);\n    letter-spacing: 0.51px;\n    text-overflow: ellipsis;\n    max-lines: 1;\n    margin-top: 6px;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "JSON：卡片页面中的数据和事件交互。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"data\": {\n    \"title\": \"TitleDefault\",\n    \"detail\": \"TextDefault\"\n  },\n  \"actions\": {\n    \"routerEvent\": {\n      \"action\": \"router\",\n      \"abilityName\": \"com.samples.famodelabilitydevelop.MainAbility\",\n      \"params\": {\n        \"message\": \"add detail\"\n      }\n    },\n    \"messageEvent\": {\n      \"action\": \"message\",\n      \"params\": {\n        \"message\": \"add detail\"\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发卡片事件",
      children: "开发卡片事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡片支持为组件设置交互事件(action)，包括router事件和message事件，其中router事件用于Ability跳转，message事件用于卡片开发人员自定义点击事件。关键步骤说明如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在hml中为组件设置onclick属性，其值对应到json文件的actions字段中。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如何设置router事件："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "action属性值为\"router\"；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "abilityName为跳转目标的Ability名（支持跳转FA模型的PageAbility组件和Stage模型的UIAbility组件），如目前DevEco创建的FA模型的UIAbility默认名为com.example.entry.EntryAbility；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "params为传递给跳转目标Ability的自定义参数，可以按需填写。其值可以在目标Ability启动时的want中的parameters里获取。如FA模型EntryAbility的onCreate生命周期里可以通过featureAbility.getWant()获取到want，然后在其parameters字段下获取到配置的参数；"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如何设置message事件："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "action属性值为\"message\"；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "params为message事件的用户自定义参数，可以按需填写。其值可以在卡片生命周期函数onEvent中的message里获取；"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "hml文件"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<div class=\"container\">\n    <stack>\n        <div class=\"container-img\">\n            <image src=\"/common/widget.png\" class=\"bg-img\"></image>\n            <image src=\"/common/rect.png\" class=\"bottom-img\"></image>\n        </div>\n        <div class=\"container-inner\">\n            <text class=\"title\" onclick=\"routerEvent\">{{title}}</text>\n            <text class=\"detail_text\" onclick=\"messageEvent\">{{detail}}</text>\n        </div>\n    </stack>\n</div>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "css文件"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".container {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.bg-img {\n    flex-shrink: 0;\n    height: 100%;\n    z-index: 1;\n}\n\n.bottom-img {\n    position: absolute;\n    width: 150px;\n    height: 56px;\n    top: 63%;\n    background-color: rgba(216, 216, 216, 0.15);\n    filter: blur(20px);\n    z-index: 2;\n}\n\n.container-inner {\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: flex-start;\n    height: 100%;\n    width: 100%;\n    padding: 12px;\n}\n\n.title {\n    font-family: HarmonyHeiTi-Medium;\n    font-size: 14px;\n    color: rgba(255,255,255,0.90);\n    letter-spacing: 0.6px;\n}\n\n.detail_text {\n    font-family: HarmonyHeiTi;\n    font-size: 12px;\n    color: rgba(255,255,255,0.60);\n    letter-spacing: 0.51px;\n    text-overflow: ellipsis;\n    max-lines: 1;\n    margin-top: 6px;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "json文件"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"data\": {\n    \"title\": \"TitleDefault\",\n    \"detail\": \"TextDefault\"\n  },\n  \"actions\": {\n    \"routerEvent\": {\n      \"action\": \"router\",\n      \"abilityName\": \"com.samples.famodelabilitydevelop.MainAbility\",\n      \"params\": {\n        \"message\": \"add detail\"\n      }\n    },\n    \"messageEvent\": {\n      \"action\": \"message\",\n      \"params\": {\n        \"message\": \"add detail\"\n      }\n    }\n  }\n}\n"
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
203505(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
974651(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
959216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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