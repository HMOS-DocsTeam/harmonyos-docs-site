"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["827542"], {
607534(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_interaction_arkts_ui_widget_passive_refresh_arkts_ui_widget_passive_refresh_md_636_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-arkts-ui-widget-interaction-arkts-ui-widget-passive-refresh-arkts-ui-widget-passive-refresh-md-636.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_interaction_arkts_ui_widget_passive_refresh_arkts_ui_widget_passive_refresh_md_636_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-passive-refresh/arkts-ui-widget-passive-refresh","title":"ArkTS卡片被动刷新","description":"本文主要提供被动刷新的开发指导，刷新流程请参考被动刷新概述。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-passive-refresh/arkts-ui-widget-passive-refresh.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-passive-refresh","slug":"/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-passive-refresh/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-passive-refresh/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"ArkTS卡片被动刷新","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-passive-refresh","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS卡片主动刷新","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-active-refresh/"},"next":{"title":"刷新本地图片和网络图片","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-image-update/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-passive-refresh/arkts-ui-widget-passive-refresh.md


const frontMatter = {
	title: 'ArkTS卡片被动刷新',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-passive-refresh',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS卡片被动刷新';

const assets = {

};



const toc = [{
  "value": "卡片定时刷新",
  "id": "卡片定时刷新",
  "level": 2
}, {
  "value": "卡片定点刷新",
  "id": "卡片定点刷新",
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
        id: "arkts卡片被动刷新",
        children: "ArkTS卡片被动刷新"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文主要提供被动刷新的开发指导，刷新流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-interaction-overview#%E8%A2%AB%E5%8A%A8%E5%88%B7%E6%96%B0",
        children: "被动刷新概述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "卡片定时刷新",
      children: "卡片定时刷新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前卡片框架提供了如下两种按时间刷新卡片的方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["定时刷新：表示在一定时间间隔内调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability#formextensionabilityonupdateform",
            children: "onUpdateForm"
          }), "的生命周期回调函数自动刷新卡片内容。可以在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
            children: "form_config.json"
          }), "配置文件的updateDuration字段中进行设置。例如，可以将updateDuration字段的值设置为2，表示刷新时间间隔为2个30分钟，即1小时。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"forms\": [\n    {\n      \"name\": \"UpdateDuration\",\n      \"description\": \"$string:widget_updateduration_desc\",\n      \"src\": \"./ets/updateduration/pages/UpdateDurationCard.ets\",\n      \"uiSyntax\": \"arkts\",\n      \"window\": {\n        \"designWidth\": 720,\n        \"autoDesignWidth\": true\n      },\n      \"isDefault\": true,\n      \"updateEnabled\": true,\n      \"scheduledUpdateTime\": \"10:30\",\n      \"updateDuration\": 2,\n      \"defaultDimension\": \"2*2\",\n      \"supportDimensions\": [\n        \"2*2\"\n      ]\n    }\n  ]\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(476492)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用定时刷新时，需要在form_config.json配置文件中设置updateEnabled字段为true，以启用周期性刷新功能。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["下次刷新：表示指定卡片的下一次刷新时间。可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formprovidersetformnextrefreshtime",
            children: "setFormNextRefreshTime"
          }), "接口来实现。最短刷新时间为5分钟。例如，可以在接口调用后的5分钟内刷新卡片内容。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/updatebytimeformability/UpdateByTimeFormAbility.ts\nimport { formBindingData, FormExtensionAbility, formInfo, formProvider } from '@kit.FormKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { Want } from '@kit.AbilityKit';\n\nconst TAG: string = 'UpdateByTimeFormAbility';\nconst FIVE_MINUTE: number = 5;\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nexport default class UpdateByTimeFormAbility extends FormExtensionAbility {\n  onAddForm(want: Want): formBindingData.FormBindingData {\n    // 卡片使用方创建卡片时触发，返回卡片数据绑定类\n    let formData: Record<string, Object | string> = {};\n    return formBindingData.createFormBindingData(formData);\n  }\n\n  // ...\n  onFormEvent(formId: string, message: string): void {\n    // 当卡片提供方的postCardAction接口的message事件被触发时调用\n    hilog.info(DOMAIN_NUMBER, TAG, `FormAbility onFormEvent, formId = ${formId}, message: ${JSON.stringify(message)}`);\n    try {\n      // 设置过5分钟后更新卡片内容\n      formProvider.setFormNextRefreshTime(formId, FIVE_MINUTE, (err: BusinessError) => {\n        if (err) {\n          hilog.error(DOMAIN_NUMBER, TAG,\n            `Failed to setFormNextRefreshTime. Code: ${err.code}, message: ${err.message}`);\n          return;\n        } else {\n          hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in setFormNextRefreshTiming.');\n        }\n      });\n    } catch (err) {\n      hilog.error(DOMAIN_NUMBER, TAG,\n        `Failed to setFormNextRefreshTime. Code: ${(err as BusinessError).code},\n         message: ${(err as BusinessError).message}`);\n    }\n  }\n\n  onAcquireFormState(want: Want): formInfo.FormState {\n    // 卡片使用方查询卡片状态时触发该回调，默认返回初始状态。\n    return formInfo.FormState.READY;\n  }\n\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在触发定时、下次刷新后，系统会调用FormExtensionAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability#formextensionabilityonupdateform",
        children: "onUpdateForm"
      }), "生命周期回调，在回调中，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formproviderupdateform",
        children: "updateForm"
      }), "进行提供方刷新卡片。onUpdateForm生命周期回调的使用请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-widget-lifecycle",
        children: "卡片生命周期管理"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "约束限制："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["定时刷新有配额限制，每张卡片每天最多通过定时方式触发刷新50次，定时刷新次数可以通过修改", (0,jsx_runtime.jsx)(_components.a, {
          href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
          children: "卡片配置项updateDuration字段"
        }), "、或调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formprovidersetformnextrefreshtime",
          children: "setFormNextRefreshTime"
        }), "接口两种方式进行设置，当达到50次配额后，无法通过定时方式再次触发刷新，刷新次数会在每天的0点重置。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前定时刷新使用同一个计时器进行计时，因此卡片定时刷新的第一次刷新会有最多30分钟的偏差。比如第一张卡片A（每隔半小时刷新一次）在3点20分添加成功，定时器启动并每隔半小时触发一次事件，第二张卡片B(每隔半小时刷新一次)在3点40分添加成功，在3点50分定时器事件触发时，卡片A触发定时刷新，卡片B会在下次事件（4点20分）中才会触发。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "定时刷新在卡片可见情况下才会触发，在卡片不可见时仅会记录刷新动作和刷新数据，待可见时统一刷新布局。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果使能了卡片代理刷新，定时刷新和下次刷新不生效。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "卡片定点刷新",
      children: "卡片定点刷新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前卡片框架提供了如下两种定点刷新卡片的方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单定点刷新：表示在每天的某个特定时间点自动刷新卡片内容。可以在form_config.json配置文件中的scheduledUpdateTime字段中进行设置。例如，可以将刷新时间设置为每天的上午10点30分。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"forms\": [\n    {\n      \"name\": \"ScheduledUpdateTime\",\n      \"description\": \"$string:widget_scheduledUpdateTime_desc\",\n      \"src\": \"./ets/scheduledupdatetime/pages/ScheduledUpdateTimeCard.ets\",\n      \"uiSyntax\": \"arkts\",\n      \"window\": {\n        \"designWidth\": 720,\n        \"autoDesignWidth\": true\n      },\n      \"isDefault\": true,\n      \"updateEnabled\": true,\n      \"scheduledUpdateTime\": \"10:30\",\n      \"updateDuration\": 0,\n      \"defaultDimension\": \"2*2\",\n      \"supportDimensions\": [\n        \"2*2\"\n      ]\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多定点刷新：表示在每天的多个特定时间点自动刷新卡片内容。可以在form_config.json配置文件中的multiScheduledUpdateTime字段中进行设置，例如，可以将刷新时间设置为每天的上午11点30分和下午4点30分。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"forms\": [\n  {\n      \"name\": \"ScheduledUpdateTime\",\n      \"description\": \"$string:widget_scheduledUpdateTime_desc\",\n      \"src\": \"./ets/scheduledupdatetime/pages/ScheduledUpdateTimeCard.ets\",\n      \"uiSyntax\": \"arkts\",\n      \"window\": {\n        \"designWidth\": 720,\n        \"autoDesignWidth\": true\n      },\n      \"isDefault\": true,\n      \"updateEnabled\": true,\n      \"scheduledUpdateTime\": \"10:30\",\n      \"multiScheduledUpdateTime\": \"11:30,16:30\",\n      \"updateDuration\": 0,\n      \"defaultDimension\": \"2*2\",\n      \"supportDimensions\": [\n        \"2*2\"\n      ]\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在触发定点刷新后，系统会调用FormExtensionAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability#formextensionabilityonupdateform",
        children: "onUpdateForm"
      }), "生命周期回调，在回调中，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formproviderupdateform",
        children: "updateForm"
      }), "进行提供方刷新卡片。onUpdateForm生命周期回调的使用请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-widget-lifecycle",
        children: "卡片生命周期管理"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(219926)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当同时配置了定时刷新updateDuration和定点刷新scheduledUpdateTime时，定时刷新的优先级更高且定点刷新不会执行。如果想要配置定点刷新，则需要将updateDuration配置为0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "multiScheduledUpdateTime的配置最多可设置24个时间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同时配置了单定点和多定点刷新，多定点刷新配置生效，单定点刷新配置不生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "考虑到向前兼容的问题，尽量保留scheduledUpdateTime字段，不要直接删除。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "约束限制："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "定点刷新在卡片可见情况下才会触发，在卡片不可见时仅会记录刷新动作和刷新数据，待可见时统一刷新布局。"
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
219926(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
476492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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