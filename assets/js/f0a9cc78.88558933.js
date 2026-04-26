"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["184501"], {
329896(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_service_collaboration_api_servicecollaboration_arkts_servicecollaboration_devicepicker_servicecollaboration_devicepicker_md_f0a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-service-collaboration-api-servicecollaboration-arkts-servicecollaboration-devicepicker-servicecollaboration-devicepicker-md-f0a.json
var site_docs_ref_system_network_api_service_collaboration_api_servicecollaboration_arkts_servicecollaboration_devicepicker_servicecollaboration_devicepicker_md_f0a_namespaceObject = JSON.parse('{"id":"system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-devicepicker/servicecollaboration-devicepicker","title":"devicePicker (设备选择控制器)","description":"该模块提供设备选择控制器和设备选择面板的能力。设备选择面板没有对外提供直接显示的接口，需要结合CollaborationDevicePicker (流转控件)组件一起使用，点击CollaborationDevicePicker (流转控件)组件后该面板会自动显示。通过设备选择控制器可以和设备选择面板进行交互，设备选择面板中包括：应用的描述信息和发现的已组网设备列表（当前设备列表中只支持显示已组网的可信设备）。","source":"@site/docs-ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-devicepicker/servicecollaboration-devicepicker.md","sourceDirName":"system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-devicepicker","slug":"/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-devicepicker/servicecollaboration-devicepicker","permalink":"/harmonyos-docs-site/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-devicepicker/servicecollaboration-devicepicker","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"devicePicker (设备选择控制器)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-devicepicker","kit":"系统","last_updated":"2026-04-22","slug":"servicecollaboration-devicepicker"},"sidebar":"ref","previous":{"title":"CollaborationDevicePicker (流转控件)","permalink":"/harmonyos-docs-site/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationdevicepicker/servicecollaboration-collaborationdevicepicker"},"next":{"title":"ArkTS 错误码","permalink":"/harmonyos-docs-site/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-error-code/servicecollaboration-error-code"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-devicepicker/servicecollaboration-devicepicker.md


const frontMatter = {
	title: 'devicePicker (设备选择控制器)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-devicepicker',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'servicecollaboration-devicepicker'
};
const contentTitle = 'devicePicker (设备选择控制器)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "DeviceEvent",
  "id": "deviceevent",
  "level": 2
}, {
  "value": "createDevicePickerController",
  "id": "createdevicepickercontroller",
  "level": 2
}, {
  "value": "DevicePickerController",
  "id": "devicepickercontroller",
  "level": 2
}, {
  "value": "on(&#39;deviceSelected&#39; | &#39;deviceUnselected&#39; | &#39;selectedDeviceOffline&#39;)",
  "id": "ondeviceselected--deviceunselected--selecteddeviceoffline",
  "level": 3
}, {
  "value": "off(&#39;deviceSelected&#39; | &#39;deviceUnselected&#39; | &#39;selectedDeviceOffline&#39;)",
  "id": "offdeviceselected--deviceunselected--selecteddeviceoffline",
  "level": 3
}, {
  "value": "updateState",
  "id": "updatestate",
  "level": 3
}, {
  "value": "release",
  "id": "release",
  "level": 3
}, {
  "value": "DevicePickerAttribute",
  "id": "devicepickerattribute",
  "level": 2
}, {
  "value": "BusinessState",
  "id": "businessstate",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "devicepicker-设备选择控制器",
        children: "devicePicker (设备选择控制器)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该模块提供设备选择控制器和设备选择面板的能力。设备选择面板没有对外提供直接显示的接口，需要结合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationdevicepicker/servicecollaboration-collaborationdevicepicker",
        children: "CollaborationDevicePicker (流转控件)"
      }), "组件一起使用，点击", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationdevicepicker/servicecollaboration-collaborationdevicepicker",
        children: "CollaborationDevicePicker (流转控件)"
      }), "组件后该面板会自动显示。通过设备选择控制器可以和设备选择面板进行交互，设备选择面板中包括：应用的描述信息和发现的已组网设备列表（当前设备列表中只支持显示已组网的可信设备）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用户点击设备后，会触发设备选择控制器对应的接口回调，并返回已选择的设备信息；应用可以通过获取到的设备信息处理分布式业务，比如通过startAbility启动远端UIAbility；待启动远端ability成功后，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#updatestate",
        children: "updateState"
      }), "接口更新业务状态，界面上将会显示指定的状态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { devicePicker } from '@kit.ServiceCollaborationKit'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deviceevent",
      children: "DeviceEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type DeviceEvent = 'deviceSelected' | 'deviceUnselected' | 'selectedDeviceOffline'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备事件类型，支持设备选择事件、设备取消事件、已选择设备的下线事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.DevicePicker"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'deviceSelected'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备选择事件。  当设备处于空闲状态时，点击设备会触发该事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'deviceUnselected'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备取消选择事件。  当设备处于成功状态时，点击该设备会触发该事件；在设备A处于成功状态时，点击设备B也会触发设备A的deviceUnselected事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'selectedDeviceOffline'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已选择设备的下线事件。  当已经处于成功状态的设备下线后，会触发该事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "createdevicepickercontroller",
      children: "createDevicePickerController"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createDevicePickerController(): DevicePickerController"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建设备选择控制器，通过该控制器提供的接口可以与设备选择面板进行交互。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.DevicePicker"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#devicepickercontroller",
              children: "DevicePickerController"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回设备选择控制器实例，可以与流转控件", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationdevicepicker/servicecollaboration-collaborationdevicepicker",
              children: "CollaborationDevicePicker (流转控件)"
            }), "配合使用。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { devicePicker, CollaborationDevicePicker } from '@kit.ServiceCollaborationKit'\n\n@Entry\n@Component\nstruct Index {\n  controller: devicePicker.DevicePickerController = devicePicker.createDevicePickerController()\n\n  build() {\n    Column() {\n      // 流转控件，应用流转的入口\n      CollaborationDevicePicker({\n        controller: this.controller, attribute: {\n          abilityName: '流转测试',\n          abilityDesc: '这是一个流转测试的控件',\n          abilityIcon: $r('sys.media.ohos_app_icon'),\n          businessDesc: '流转到'\n        }\n      })\n    }.width('100%').alignItems(HorizontalAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "devicepickercontroller",
      children: "DevicePickerController"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevicePickerController类提供了与设备选择面板交互的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.DevicePicker"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondeviceselected--deviceunselected--selecteddeviceoffline",
      children: "on('deviceSelected' | 'deviceUnselected' | 'selectedDeviceOffline')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(event: DeviceEvent, callback: Callback<distributedDeviceManager.DeviceBasicInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册设备相关的事件回调，目前支持：设备选择、设备取消选择、已选择设备的下线事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.DevicePicker"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#deviceevent",
              children: "DeviceEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备相关的事件，目前支持：设备选择、设备取消选择、已选择设备的下线事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/distributed-service-api/distributed-service-arkts/js-apis-distributeddevicemanager/js-apis-distributeddevicemanager#devicebasicinfo",
              children: "distributedDeviceManager.DeviceBasicInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回发生对应事件的设备信息，可以在callback中使用返回的设备信息进行跨设备应用ability组件启动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common, Want } from '@kit.AbilityKit'\nimport { CollaborationDevicePicker, devicePicker } from '@kit.ServiceCollaborationKit'\nimport { distributedDeviceManager } from '@kit.DistributedServiceKit'\nimport { hilog } from '@kit.PerformanceAnalysisKit'\n\n@Entry\n@Component\nstruct CustomControls {\n  // 创建设备选择控制器\n  controller: devicePicker.DevicePickerController = devicePicker.createDevicePickerController()\n  // 获取所属ability的context\n  context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext\n  abilityId: number = 0\n\n  aboutToAppear() {\n    // 注册设备选择事件\n    this.controller.on('deviceSelected', (device: distributedDeviceManager.DeviceBasicInfo) => {\n      let want: Want = {\n        // 通过device获取设备的id\n        deviceId: device.networkId,\n        // 此处bundleName和abilityName是示例，实际使用必须传递远端设备真实存在的bundleName和abilityName才能拉起指定服务\n        bundleName: 'com.example.myapplication',\n        abilityName: 'ExtensionAbility'\n      }\n      this.getUIContext().getPromptAction().showToast({ message: 'device selected' })\n      this.context.startAbility(want).then(() => {\n        hilog.info(0x0000, 'testTag', '%{public}s', 'Succeeded in starting Ability')\n        // 更新设备状态\n        this.controller.updateState(device.networkId, devicePicker.BusinessState.SUCCESSFUL)\n      }).catch(() => {\n        hilog.error(0x0000, 'testTag', '%{public}s', 'Failed to startAbility')\n        // 更新设备状态，同时添加失败的原因，这个原因会展示在设备下方\n        this.controller.updateState(device.networkId, devicePicker.BusinessState.FAILED, 'the remote device is busy')\n      })\n    })\n\n    // 注册设备取消选择事件\n    this.controller.on('deviceUnselected', (device: distributedDeviceManager.DeviceBasicInfo) => {\n      this.getUIContext().getPromptAction().showToast({ message: 'device unselected' })\n    })\n  }\n\n  build() {\n    Column() {\n      CollaborationDevicePicker({\n        controller: this.controller, attribute: {\n          abilityName: '流转测试',\n          abilityDesc: '这是一个流转测试的控件',\n          abilityIcon: $r('sys.media.ohos_app_icon'),\n          businessDesc: '流转到'\n        }\n      })\n    }.width('100%').alignItems(HorizontalAlign.Center);\n  }\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图1"
              })
            }), " 设备空闲状态效果图"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图2"
              })
            }), " 设备成功状态效果图"]
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "下图中my phone处于空闲状态，点击该设备后会触发deviceSelected事件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下图中my phone处于成功状态，点击该设备后会触发deviceUnselected事件"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "offdeviceselected--deviceunselected--selecteddeviceoffline",
      children: "off('deviceSelected' | 'deviceUnselected' | 'selectedDeviceOffline')"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(event: DeviceEvent, callback?: Callback<distributedDeviceManager.DeviceBasicInfo>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册设备相关的事件回调，目前支持的事件：设备选择、设备取消选择、已选择设备的下线事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.DevicePicker"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#deviceevent",
              children: "DeviceEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备相关的事件，目前支持：设备选择、设备取消选择、已选择设备的下线事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/distributed-service-api/distributed-service-arkts/js-apis-distributeddevicemanager/js-apis-distributeddevicemanager#devicebasicinfo",
              children: "distributedDeviceManager.DeviceBasicInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回发生指定事件的设备信息，与[on('deviceSelected'"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit'\nimport { distributedDeviceManager } from '@kit.DistributedServiceKit'\nimport { CollaborationDevicePicker, devicePicker } from '@kit.ServiceCollaborationKit'\n\n@Entry\n@Component\nstruct CustomControls {\n  // 创建设备选择控制器\n  controller: devicePicker.DevicePickerController = devicePicker.createDevicePickerController()\n  // 获取所属ability的context\n  context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext\n\n  aboutToDisappear() {\n    // 取消注册设备选择事件\n    this.controller.off('deviceSelected', (device: distributedDeviceManager.DeviceBasicInfo) => {\n      this.getUIContext().getPromptAction().showToast({ message: 'off device selected' })\n    })\n\n    // 取消注册设备取消选择事件\n    this.controller.off('deviceUnselected', (device: distributedDeviceManager.DeviceBasicInfo) => {\n      this.getUIContext().getPromptAction().showToast({ message: 'device unselected' })\n    })\n  }\n\n  build() {\n    Column() {\n      CollaborationDevicePicker({\n        controller: this.controller, attribute: {\n          abilityName: '流转测试',\n          abilityDesc: '这是一个流转测试的控件',\n          abilityIcon: $r('sys.media.ohos_app_icon'),\n          businessDesc: '流转到'\n        }\n      })\n    }.width('100%').alignItems(HorizontalAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "updatestate",
      children: "updateState"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateState(networkId: string, state: BusinessState, desc?: ResourceStr): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新设备的业务状态，在设备选择面板上会显示更新后的状态。业务失败情况下，可以传入失败的描述信息，会随着状态一起显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.DevicePicker"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "networkId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的networkId信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#businessstate",
              children: "BusinessState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "业务状态，当前支持IDLE、SUCCESSFUL、FAILED三种状态类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "desc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导致业务失败的具体描述信息。在业务失败情况下，可以传入该参数，会将该信息显示在指定设备名字下方。长度限制1-128。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common, Want } from '@kit.AbilityKit'\nimport { CollaborationDevicePicker, devicePicker } from '@kit.ServiceCollaborationKit'\nimport { distributedDeviceManager } from '@kit.DistributedServiceKit'\nimport { hilog } from '@kit.PerformanceAnalysisKit'\n\n@Entry\n@Component\nstruct CustomControls {\n  // 创建设备选择控制器\n  controller: devicePicker.DevicePickerController = devicePicker.createDevicePickerController()\n  // 获取所属ability的context\n  context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext\n  abilityId: number = 0\n\n  aboutToAppear() {\n    // 注册设备选择事件\n    this.controller.on('deviceSelected', (device: distributedDeviceManager.DeviceBasicInfo) => {\n      let want: Want = {\n        // 通过device获取设备的id\n        deviceId: device.networkId,\n        // 此处bundleName和abilityName是示例，实际使用必须传递远端设备真实存在的bundleName和abilityName才能拉起指定服务\n        bundleName: 'com.example.myapplication',\n        abilityName: 'ExtensionAbility'\n      }\n      this.getUIContext().getPromptAction().showToast({ message: 'device selected' })\n      this.context.startAbility(want).then(() => {\n        hilog.info(0x0000, 'testTag', '%{public}s', 'Succeeded in starting Ability')\n        // 更新设备状态\n        this.controller.updateState(device.networkId, devicePicker.BusinessState.SUCCESSFUL)\n      }).catch(() => {\n        hilog.error(0x0000, 'testTag', '%{public}s', 'Failed to startAbility')\n        // 更新设备状态，同时添加失败的原因，这个原因会展示在设备下方\n        this.controller.updateState(device.networkId, devicePicker.BusinessState.FAILED, 'the remote device is busy')\n      })\n    })\n\n    // 注册设备取消选择事件\n    this.controller.on('deviceUnselected', (device: distributedDeviceManager.DeviceBasicInfo) => {\n      this.getUIContext().getPromptAction().showToast({ message: 'device unselected' })\n    })\n  }\n\n  build() {\n    Column() {\n      CollaborationDevicePicker({\n        controller: this.controller, attribute: {\n          abilityName: '流转测试',\n          abilityDesc: '这是一个流转测试的控件',\n          abilityIcon: $r('sys.media.ohos_app_icon'),\n          businessDesc: '流转到'\n        }\n      })\n    }.width('100%').alignItems(HorizontalAlign.Center);\n  }\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图3"
              })
            }), " 设备流转过程效果图"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图4"
              })
            }), " 设备流转成功效果图"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图5"
              })
            }), " 设备流转失败效果图"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图6"
              })
            }), " 应用描述信息效果图"]
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "下图中my phone处于流转中，设备名称右侧会有流转过程动画"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下图中my phone流转成功"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下图中my phone流转失败，失败原因是对端设备忙"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在设备选择面板的最上方显示应用的相关信息，包括应用图标、应用名称、应用描述信息"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release",
      children: "release"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "release(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放设备选择控制器，与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createdevicepickercontroller",
        children: "createDevicePickerController"
      }), "方法对应。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在应用不需要设备选择控制器的时候需要调用release()接口进行释放，比如在应用onCreate()生命周期回调中通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#createdevicepickercontroller",
        children: "createDevicePickerController"
      }), "创建了设备选择控制器，可以在onDestroy()生命周期回调中通过release()进行释放。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.DevicePicker"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit'\nimport { UIAbility, AbilityConstant, Want } from '@kit.AbilityKit'\nimport { devicePicker } from '@kit.ServiceCollaborationKit'\n\nexport default class EntryAbility extends UIAbility {\n  // 创建设备选择控制器\n  controller: devicePicker.DevicePickerController = devicePicker.createDevicePickerController()\n\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate')\n  }\n\n  onDestroy() {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy')\n    // 释放设备选择控制器\n    this.controller.release()\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "devicepickerattribute",
      children: "DevicePickerAttribute"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设备选择器属性类，在设备选择面板的应用描述部分会显示该属性配置的信息；如果未设置则使用调用者对应的ability配置文件中的标签信息。该属性与流转组件接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationdevicepicker/servicecollaboration-collaborationdevicepicker",
        children: "CollaborationDevicePicker"
      }), "配合使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.DevicePicker"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "abilityIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ability对用户显示的图标，在设备选择面板的应用描述部分显示；如果不设置该属性，默认使用module.json5中的icon标签配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "abilityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ability对用户显示的名称，在设备选择面板的应用描述部分显示；如果不设置该属性，默认使用module.json5中的label标签配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "abilityDesc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ability的描述信息，在设备选择面板的应用描述部分显示；如果不设置该属性，默认使用module.json5中的description标签配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "businessDesc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分布式业务描述信息，比如流转业务：“流转到”，投屏业务：“投屏到”；如果不设置该属性，对于流转业务默认使用“流转到”。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "businessstate",
      children: "BusinessState"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "业务状态枚举类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.DevicePicker"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "业务空闲状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUCCESSFUL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "业务成功状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "业务失败状态。"
          })]
        })]
      })]
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