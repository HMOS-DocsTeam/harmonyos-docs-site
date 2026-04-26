"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["256262"], {
407745(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_interaction_arkts_ui_widget_image_update_arkts_ui_widget_image_update_md_9f2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-arkts-ui-widget-interaction-arkts-ui-widget-image-update-arkts-ui-widget-image-update-md-9f2.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_interaction_arkts_ui_widget_image_update_arkts_ui_widget_image_update_md_9f2_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-image-update/arkts-ui-widget-image-update","title":"刷新本地图片和网络图片","description":"在卡片上需要展示本地图片或从网络上下载的图片，获取本地图片和网络图片需要通过FormExtensionAbility来实现，如下示例代码介绍了如何在卡片上显示本地图片和网络图片。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-image-update/arkts-ui-widget-image-update.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-image-update","slug":"/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-image-update/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-image-update/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"刷新本地图片和网络图片","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-image-update","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS卡片被动刷新","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-passive-refresh/"},"next":{"title":"根据卡片状态刷新不同内容","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-update-by-status/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-image-update/arkts-ui-widget-image-update.md


const frontMatter = {
	title: '刷新本地图片和网络图片',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-image-update',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '刷新本地图片和网络图片';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "刷新本地图片和网络图片",
        children: "刷新本地图片和网络图片"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在卡片上需要展示本地图片或从网络上下载的图片，获取本地图片和网络图片需要通过FormExtensionAbility来实现，如下示例代码介绍了如何在卡片上显示本地图片和网络图片。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["下载网络图片需要使用到网络能力，需要申请ohos.permission.INTERNET权限，配置方式请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在WgtImgUpdateEntryFormAbility.ts文件中导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/wgtimgupdateentryformability/WgtImgUpdateEntryFormAbility.ts\nimport { Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { formBindingData, FormExtensionAbility, formInfo, formProvider } from '@kit.FormKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { http } from '@kit.NetworkKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在EntryFormAbility中的onAddForm生命周期回调中实现本地文件的刷新。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/wgtimgupdateentryformability/WgtImgUpdateEntryFormAbility.ts\nconst TAG: string = 'WgtImgUpdateEntryFormAbility';\nconst DOMAIN_NUMBER: number = 0xFF00;\n// ...\n\nexport default class WgtImgUpdateEntryFormAbility extends FormExtensionAbility {\n  // 在添加卡片时，打开一个本地图片并将图片内容传递给卡片页面显示\n  onAddForm(want: Want): formBindingData.FormBindingData {\n    // 假设在当前卡片应用的tmp目录下有一个本地图片：head.PNG\n    let tempDir = this.context.getApplicationContext().tempDir;\n    hilog.info(DOMAIN_NUMBER, TAG, `tempDir: ${tempDir}`);\n    let imgMap: Record<string, number> = {};\n    try {\n      // 打开本地图片并获取其打开后的fd, FormExtensionAbility进程销毁时释放\n      let file = fileIo.openSync(tempDir + '/' + 'head.PNG');\n      imgMap['imgBear'] = file.fd;\n    } catch (e) {\n      hilog.error(DOMAIN_NUMBER, TAG, `openSync failed: ${JSON.stringify(e as BusinessError)}`);\n    }\n\n    class FormDataClass {\n      text: string = 'Image: Bear';\n      loaded: boolean = true;\n      // 卡片需要显示图片场景,必须和下列字段formImages中的key 'imgBear'相同。\n      imgName: string = 'imgBear';\n      // 卡片需要显示图片场景,必填字段(formImages不可缺省或改名), 'imgBear'对应fd\n      formImages: Record<string, number> = imgMap;\n    }\n\n    let formData = new FormDataClass();\n    // 将fd封装在formData中并返回至卡片页面\n    return formBindingData.createFormBindingData(formData);\n  }\n\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在EntryFormAbility中的onFormEvent生命周期回调中实现网络文件的刷新。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/wgtimgupdateentryformability/WgtImgUpdateEntryFormAbility.ts\nconst TAG: string = 'WgtImgUpdateEntryFormAbility';\nconst DOMAIN_NUMBER: number = 0xFF00;\nconst TEXT1: string = '刷新中...'\nconst TEXT2: string = '刷新失败'\n\n\nexport default class WgtImgUpdateEntryFormAbility extends FormExtensionAbility {\n  // ...\n  async onFormEvent(formId: string, message: string): Promise<void> {\n    let param: Record<string, string> = {\n      'text': TEXT1\n    };\n    let formInfo: formBindingData.FormBindingData = formBindingData.createFormBindingData(param);\n    formProvider.updateForm(formId, formInfo);\n\n    // 注意：FormExtensionAbility在触发生命周期回调时被拉起，仅能在后台存在5秒\n    // 建议下载能快速下载完成的小文件，如在5秒内未下载完成，则此次网络图片无法刷新至卡片页面上\n    let netFile =\n      'https://cn-assets.gitee.com/assets/mini_app-e5eee5a21c552b69ae6bf2cf87406b59.jpg';\n    // 需要在此处使用真实的网络图片下载链接\n    let tempDir = this.context.getApplicationContext().tempDir;\n    let fileName = 'file' + Date.now();\n    let tmpFile = tempDir + '/' + fileName;\n    let imgMap: Record<string, number> = {};\n\n    class FormDataClass {\n      text: string = 'Image: Bear' + fileName;\n      loaded: boolean = true;\n      // 卡片需要显示图片场景,必须和下列字段formImages中的key fileName相同。\n      imgName: string = fileName;\n      // 卡片需要显示图片场景,必填字段(formImages不可缺省或改名), fileName对应fd\n      formImages: Record<string, number> = imgMap;\n    }\n\n    let httpRequest = http.createHttp()\n    let data = await httpRequest.request(netFile);\n    if (data?.responseCode == http.ResponseCode.OK) {\n      try {\n        let imgFile = fileIo.openSync(tmpFile, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n        imgMap[fileName] = imgFile.fd;\n        try {\n          let writeLen: number = await fileIo.write(imgFile.fd, data.result as ArrayBuffer);\n          hilog.info(DOMAIN_NUMBER, TAG, \"write data to file succeed and size is:\" + writeLen);\n          hilog.info(DOMAIN_NUMBER, TAG, 'ArkTSCard download complete: %{public}s', tmpFile);\n          try {\n            let formData = new FormDataClass();\n            let formInfo = formBindingData.createFormBindingData(formData);\n            await formProvider.updateForm(formId, formInfo);\n            hilog.info(DOMAIN_NUMBER, TAG, '%{public}s', 'FormAbility updateForm success.');\n          } catch (error) {\n            hilog.error(DOMAIN_NUMBER, TAG, `FormAbility updateForm failed: ${JSON.stringify(error)}`);\n          }\n        } catch (err) {\n          hilog.error(DOMAIN_NUMBER, TAG,\n            \"write data to file failed with error message: \" + err.message + \", error code: \" + err.code);\n        } finally {\n          fileIo.closeSync(imgFile);\n        }\n      } catch (e) {\n        hilog.error(DOMAIN_NUMBER, TAG, `openSync failed: ${JSON.stringify(e as BusinessError)}`);\n      }\n\n    } else {\n      hilog.error(DOMAIN_NUMBER, TAG, `ArkTSCard download task failed`);\n      let param: Record<string, string> = {\n        'text': TEXT2\n      };\n      let formInfo: formBindingData.FormBindingData = formBindingData.createFormBindingData(param);\n      formProvider.updateForm(formId, formInfo);\n    }\n    httpRequest.destroy();\n  }\n\n  onAcquireFormState(want: Want): formInfo.FormState {\n    // 卡片使用方查询卡片状态时触发该回调，默认返回初始状态。\n    return formInfo.FormState.READY;\n  }\n\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在卡片页面通过backgroundImage属性展示EntryFormAbility传递过来的卡片内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/widgetimageupdate/pages/WidgetImageUpdateCard.ets\nlet storageWidgetImageUpdate = new LocalStorage();\n\n@Entry(storageWidgetImageUpdate)\n@Component\nstruct WidgetImageUpdateCard {\n  // $r('app.string.loading')需要替换为开发者所需的资源文件\n  @LocalStorageProp('text') text: ResourceStr = $r('app.string.loading');\n  @LocalStorageProp('loaded') loaded: boolean = false;\n  // $r('app.string.imgName')需要替换为开发者所需的资源文件\n  @LocalStorageProp('imgName') imgName: ResourceStr = $r('app.string.imgName');\n\n  build() {\n    Column() {\n      Column() {\n        Text(this.text)\n          .fontColor('#FFFFFF')\n          .opacity(0.9)\n          .fontSize(12)\n          .textOverflow({ overflow: TextOverflow.Ellipsis })\n          .maxLines(1)\n          .margin({ top: '8%', left: '10%' })\n      }.width('100%').height('50%')\n      .alignItems(HorizontalAlign.Start)\n\n      Row() {\n        Button() {\n          // $r('app.string.update')需要替换为开发者所需的资源文件\n          Text($r('app.string.update'))\n            .fontColor('#45A6F4')\n            .fontSize(12)\n        }\n        .width(120)\n        .height(32)\n        .margin({ top: '30%', bottom: '10%' })\n        .backgroundColor('#FFFFFF')\n        .borderRadius(16)\n        .onClick(() => {\n          postCardAction(this, {\n            action: 'message',\n            params: {\n              info: 'refreshImage'\n            }\n          });\n        })\n      }.width('100%').height('40%')\n      .justifyContent(FlexAlign.Center)\n    }\n    .width('100%').height('100%')\n    // $r('app.media.ImageDisp')需要替换为开发者所需的资源文件\n    .backgroundImage(this.loaded ? 'memory://' + this.imgName : $r('app.media.ImageDisp'))\n    .backgroundImageSize(ImageSize.Cover)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(636866)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Image组件入参格式为memory://fileName时表示进行远端内存图片显示，fileName来自EntryFormAbility传递对象('formImages': {key: fd})中的key。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Image组件通过传入的参数是否有变化来决定是否刷新图片，因此EntryFormAbility每次传递过来的imgName都需要不同，连续传递两个相同的imgName时，图片不会刷新。"
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
636866(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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