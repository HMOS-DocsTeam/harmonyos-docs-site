"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["504446"], {
782885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scenario_fusion_guide_scenario_fusion_intelligent_filling_scenario_fusion_intelligentfilling_autocomplete_scenario_fusion_intelligentfilling_autocomplete_md_658_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scenario-fusion-guide-scenario-fusion-intelligent-filling-scenario-fusion-intelligentfilling-autocomplete-scenario-fusion-intelligentfilling-autocomplete-md-658.json
var site_docs_scenario_fusion_guide_scenario_fusion_intelligent_filling_scenario_fusion_intelligentfilling_autocomplete_scenario_fusion_intelligentfilling_autocomplete_md_658_namespaceObject = JSON.parse('{"id":"scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-autocomplete/scenario-fusion-intelligentfilling-autocomplete","title":"自动补全地址表单所在地区","description":"在填写地址表单场景时，当应用使用了所在地区的省市区选择器，需要开发者对表单中的地址字段进行开发。","source":"@site/docs/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-autocomplete/scenario-fusion-intelligentfilling-autocomplete.md","sourceDirName":"scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-autocomplete","slug":"/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-autocomplete/","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-autocomplete/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"自动补全地址表单所在地区","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-intelligentfilling-autocomplete","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"动态修改ContentType值","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-amend/"},"next":{"title":"推荐车牌号场景","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-licenseplateno/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-autocomplete/scenario-fusion-intelligentfilling-autocomplete.md


const frontMatter = {
	title: '自动补全地址表单所在地区',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-intelligentfilling-autocomplete',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '自动补全地址表单所在地区';

const assets = {

};



const toc = [{
  "value": "效果图",
  "id": "效果图",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "自动补全地址表单所在地区",
        children: "自动补全地址表单所在地区"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在填写地址表单场景时，当应用使用了所在地区的省市区选择器，需要开发者对表单中的地址字段进行开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(321405)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需要在module.json5文件中设置模糊位置权限：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user#ohospermissionapproximately_location",
          children: "ohos.permission.APPROXIMATELY_LOCATION"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["所在地区地址选择器需要", (0,jsx_runtime.jsx)(_components.a, {
          href: "/map-kit-guide/map-config-agc#%E5%BC%80%E9%80%9A%E5%9C%B0%E5%9B%BE%E6%9C%8D%E5%8A%A1",
          children: "开通地图服务"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需要", (0,jsx_runtime.jsx)(_components.a, {
          href: "/account-kit-guide/account-preparations/account-sign-fingerprints",
          children: "配置签名和指纹"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "效果图",
      children: "效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "地址表单中的所在地区能根据详细地址内容自动补全，当补全内容不符合预期时，可通过地址选择器进行修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(545267)/* ["default"] */.A) + "",
        width: "2020",
        height: "792"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { util } from '@kit.ArkTS';\nimport { i18n } from '@kit.LocalizationKit';\nimport { sceneMap, site } from '@kit.MapKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { geoLocationManager } from '@kit.LocationKit';\nimport { abilityAccessCtrl, autoFillManager, common, PermissionRequestResult, Permissions } from '@kit.AbilityKit';\nimport { FunctionalInput, functionalInputComponentManager } from '@kit.ScenarioFusionKit';\nimport { TextInputModifier } from '@kit.ArkUI';\n\nconst AUTHED = 0;\nconst TIME_OUT = 100;\n// 默认经度和纬度。以下以北京天安门的经纬度为例。\nconst INIT_LAT = 39.5;\nconst INIT_LON = 116.2;\nconst ENGLISH = 'en';\nconst SIMPLIFIED_CHINESE = 'zh_CN';\nconst PERMISSIONS: Array<Permissions> = ['ohos.permission.APPROXIMATELY_LOCATION'];\nconst ADMINISTRATIVE_REGION: Array<string> =\n  ['countryName', 'adminLevel1', 'adminLevel2', 'adminLevel3', 'adminLevel4'];\n\ninterface PersonInfo {\n  name?: string;\n  phone?: string;\n  email?: string;\n  idCard?: string;\n  region?: string;\n  streetAddress?: string;\n}\n\ninterface RequestParam {\n  requestTag: string;\n  requestText: string;\n}\n\ninterface Location {\n  latitude: number;\n  longitude: number;\n}\n\n// 显示授权弹出窗口。\nasync function reqPermissionsFromUser(permissions: Array<Permissions>,\n  context: common.UIAbilityContext): Promise<PermissionRequestResult> {\n  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n  return await atManager.requestPermissionsFromUser(context, permissions);\n}\n\n// 节流函数。\nfunction debounce(func: () => void, wait: number = TIME_OUT): Function {\n  let timeout: number | null = null;\n  return () => {\n    timeout && clearTimeout(timeout);\n    timeout = setTimeout(() => {\n      func();\n      clearTimeout(timeout);\n    }, wait);\n  };\n}\n\n@Extend(Text)\nfunction textStyle() {\n  .width(64)\n  .textAlign(TextAlign.End)\n}\n\n@Entry\n@Component\nstruct Index {\n  @State personInfo: PersonInfo = {};\n  @State isClicked: boolean = false;\n  // 用户是否已触发信息输入。\n  private isUserInput: boolean = false;\n  private location: Location = {\n    latitude: INIT_LAT,\n    longitude: INIT_LON,\n  };\n  private currentRequestTag: string = '';\n  private handleAddressChange = (request: RequestParam) => {\n    return debounce(async () => {\n      this.autoCompleteAddress(request);\n    });\n  };\n\n  aboutToAppear() {\n    reqPermissionsFromUser(PERMISSIONS, this.getUIContext().getHostContext() as common.UIAbilityContext)\n      .then((permissionRequestResult: PermissionRequestResult) => {\n        if (permissionRequestResult.authResults[0] === AUTHED) {\n          // 获取位置信息的API只能在授权的情况下被调用。\n          geoLocationManager.getCurrentLocation((err, location: geoLocationManager.Location) => {\n            if (err) {\n              hilog.error(0x0000, 'testTag', `Failed to get location, code: ${err?.code}, message: ${err?.message}`);\n              return;\n            }\n            hilog.info(0x0000, 'testTag', `Succeeded in obtaining the current location of the user`);\n            this.location.latitude = location.latitude;\n            this.location.longitude = location.longitude;\n          })\n        }\n      })\n      .catch((err: BusinessError) => {\n        hilog.error(0x0000, 'testTag', `Failed request permissions, code: ${err?.code}, message: ${err?.message}`);\n      })\n  }\n\n  public isUsLanguage(): boolean {\n    let result: string = '';\n    try {\n      result = i18n.System.getSystemLanguage();\n    } catch (error) {\n      hilog.error(0x0000, 'testTag', 'Failed to get system language');\n    }\n    return result.toLowerCase() === 'en-latn-us';\n  }\n\n  async autoCompleteAddress(request: RequestParam): Promise<void> {\n    try {\n      let params: site.SearchByTextParams = {\n        query: request.requestText,\n        // 搜索结果需要偏向的经纬度。\n        location: {\n          latitude: this.location.latitude,\n          longitude: this.location.longitude\n        },\n        language: this.isUsLanguage() ? ENGLISH : SIMPLIFIED_CHINESE,\n        isChildren: true\n      };\n      const result = await site.searchByText(params);\n      if (result.sites) {\n        let region: string = '';\n        let addressComponent = result.sites[0].addressComponent;\n        // 遍历当前地址的行政区划层级。\n        for (let item of ADMINISTRATIVE_REGION) {\n          if (addressComponent[item] === undefined) {\n            break;\n          }\n          region += addressComponent[item];\n        }\n        // 防止可能导致结果不一致的重复搜索。\n        if (request.requestTag === this.currentRequestTag) {\n          this.personInfo.region = region;\n        }\n      }\n    } catch (error) {\n      hilog.error(0x0000, 'testTag', `Failed to search location, code: ${error.code}, message: ${error.message}`);\n    }\n    hilog.info(0x0000, 'testTag', 'Succeeded in searching location');\n  }\n\n  onRegionClick(): void {\n    // 用户选择行政区域后，仅显示该区域的搜索结果，以防止查询时间过长。\n    this.currentRequestTag = util.generateRandomUUID();\n    let districtSelectOptions: sceneMap.DistrictSelectOptions = {\n      countryCode: 'CN',\n    };\n    sceneMap.selectDistrict(this.getUIContext().getHostContext(), districtSelectOptions).then((data) => {\n      hilog.info(0x0000, 'testTag', 'SelectDistrict', 'Succeeded  in selecting district.');\n      let region = '';\n      for (let i = 0; i < data?.districts?.length; i++) {\n        region += data.districts[i].name;\n      }\n      this.personInfo.region = region;\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'testTag', `Failed to select district, code: ${err.code}, message: ${err.message}`);\n    });\n  }\n\n  searchRegionByAddress(val: string): void {\n    let tag: string = util.generateRandomUUID();\n    this.currentRequestTag = tag;\n    let param: RequestParam = {\n      requestTag: tag,\n      requestText: val\n    }\n    // 用户输入的场景需要加做抖动处理, 智能填充回填场景直接查询即可。\n    if (this.personInfo.region && this.personInfo.region !== '') {\n      return;\n    }\n    if (this.isUserInput) {\n      this.handleAddressChange(param)();\n    } else {\n      this.autoCompleteAddress(param);\n    }\n  }\n\n  build() {\n    Column({ space: 8 }) {\n      Row({ space: 8 }) {\n        Text('姓名').textStyle()\n        TextInput({ text: this.personInfo.name, placeholder: '姓名' })\n          .layoutWeight(1)\n          .contentType(ContentType.PERSON_FULL_NAME)\n          .onChange((val: string) => {\n            this.personInfo.name = val;\n          })\n      }\n\n      Row({ space: 8 }) {\n        Text('联系电话').textStyle()\n        TextInput({ text: this.personInfo.phone, placeholder: '手机号码' })\n          .layoutWeight(1)\n          .contentType(ContentType.PHONE_NUMBER)\n          .onChange((val: string) => {\n            this.personInfo.phone = val;\n          })\n      }\n\n      Row({ space: 8 }) {\n        Text('身份证号').textStyle()\n        TextInput({ text: this.personInfo.idCard, placeholder: '身份证信息' })\n          .layoutWeight(1)\n          .contentType(ContentType.ID_CARD_NUMBER)\n          .onChange((val: string) => {\n            this.personInfo.idCard = val;\n          })\n      }\n\n      Row({ space: 8 }) {\n        Text('邮件地址').textStyle()\n        TextInput({ text: this.personInfo.email, placeholder: '电子邮件信息' })\n          .layoutWeight(1)\n          .contentType(ContentType.EMAIL_ADDRESS)\n          .onChange((val: string) => {\n            this.personInfo.email = val;\n          })\n      }\n\n      Row({ space: 8 }) {\n        Text('所在地区').textStyle()\n        FunctionalInput({\n          params: {\n            // InputType.SELECT_DISTRICT表示输入类型为省/市/区选择器类型。\n            inputType: functionalInputComponentManager.InputType.SELECT_DISTRICT,\n            textInputValue: {\n              text: this.personInfo.region,\n              placeholder: '省、市、区、街道地址',\n            },\n            // 调整TextInput样式。\n            inputAttributeModifier: new TextInputModifier()\n              .backgroundColor(Color.Transparent)\n              .onChange((value) => {\n                if (value !== this.personInfo.region) {\n                  this.personInfo.region = value;\n                }\n              })\n          },\n          // 当InputType为SELECT_DISTRICT时，回调必须为onSelectDistrict。\n          controller: new functionalInputComponentManager.FunctionalInputController().onSelectDistrict((err,\n            data: functionalInputComponentManager.DistrictSelectResult) => {\n            if (err) {\n              // 错误日志处理。\n              hilog.error(0x0000, \"testTag\", \"error: %{public}d %{public}s\", err.code, err.message);\n              return;\n            }\n            // 成功日志处理。\n            hilog.info(0x0000, \"testTag\", \"succeeded in selecting district\");\n            this.personInfo.region = data.inputContent;\n          })\n        })\n      }\n\n      Row({ space: 8 }) {\n        Text('详细地址').textStyle()\n        TextInput({ text: this.personInfo.streetAddress, placeholder: '小区门牌信息' })\n          .layoutWeight(1)\n          .contentType(ContentType.DETAIL_INFO_WITHOUT_STREET)\n          .onDidInsert(() => {\n            // 当用户通过输入方法输入数据时触发。\n            this.isUserInput = true;\n          })\n          .onDidDelete((val: DeleteValue) => {\n            // 当用户通过输入方法删除数据时触发。\n            if (val?.deleteValue?.length > 0) {\n              this.isUserInput = true;\n            }\n          })\n          .onChange((val: string) => {\n            this.personInfo.streetAddress = val;\n            if (val && val.trim().length > 0) {\n              this.searchRegionByAddress(val);\n            } else {\n              this.currentRequestTag = util.generateRandomUUID();\n              this.personInfo.region = '';\n            }\n            this.isUserInput = false;\n          })\n      }\n\n      Button('保存')\n        .width('50%')\n        .onClick(() => {\n          if (!this.isClicked) {\n            this.isClicked = true;\n            autoFillManager.requestAutoSave(this.getUIContext(), {\n              onSuccess: () => {\n                hilog.info(0x0000, 'testTag', 'Succeeded in saving request');\n              },\n              onFailure: () => {\n                hilog.info(0x0000, 'testTag', 'Failed to save request');\n              }\n            });\n            setTimeout(() => {\n              this.isClicked = false;\n            }, 2000);\n          }\n        })\n    }\n    .padding({ left: 16, right: 16 })\n    .backgroundColor($r('sys.color.ohos_id_color_list_card_bg'))\n    .alignItems(HorizontalAlign.Center)\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(500040)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例中，使用了场景化Input作为所在地区的地址选择器，智能填充支持对该地址选择器进行填充。"
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
545267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439203-ba5ab4e05af379faa7e546d8663e9bb9.png");

},
321405(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
500040(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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