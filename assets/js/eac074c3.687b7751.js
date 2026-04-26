"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["998680"], {
601020(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_mechanic_kit_camera_tracking_guide_camera_tracking_guide_md_eac_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-mechanic-kit-camera-tracking-guide-camera-tracking-guide-md-eac.json
var site_docs_system_hardware_mechanic_kit_camera_tracking_guide_camera_tracking_guide_md_eac_namespaceObject = JSON.parse('{"id":"system-hardware/mechanic-kit/camera-tracking-guide/camera-tracking-guide","title":"目标拍摄跟踪开发指南","description":"从API version 20开始，支持使用机械体设备控制器，提供更丰富的拍摄体验，如目标跟踪和自动构图等专业功能，支持第三方应用。","source":"@site/docs/system-hardware/mechanic-kit/camera-tracking-guide/camera-tracking-guide.md","sourceDirName":"system-hardware/mechanic-kit/camera-tracking-guide","slug":"/system-hardware/mechanic-kit/camera-tracking-guide/","permalink":"/harmonyos-docs-site/system-hardware/mechanic-kit/camera-tracking-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"目标拍摄跟踪开发指南","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-tracking-guide","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Mechanic Kit简介","permalink":"/harmonyos-docs-site/system-hardware/mechanic-kit/mechanic-kit-intro/"},"next":{"title":"业务简介","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_introduction/we-business_introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/mechanic-kit/camera-tracking-guide/camera-tracking-guide.md


const frontMatter = {
	title: '目标拍摄跟踪开发指南',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-tracking-guide',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '目标拍摄跟踪开发指南';

const assets = {

};



const toc = [{
  "value": "接口介绍",
  "id": "接口介绍",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "开发准备",
  "id": "开发准备",
  "level": 3
}, {
  "value": "管理设备连接状态",
  "id": "管理设备连接状态",
  "level": 3
}, {
  "value": "控制设备目标跟踪拍摄",
  "id": "控制设备目标跟踪拍摄",
  "level": 3
}, {
  "value": "调试验证",
  "id": "调试验证",
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
        id: "目标拍摄跟踪开发指南",
        children: "目标拍摄跟踪开发指南"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持使用机械体设备控制器，提供更丰富的拍摄体验，如目标跟踪和自动构图等专业功能，支持第三方应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目标拍摄跟踪功能通过机械体设备实现人脸和物体的自动化跟踪，提升拍摄质量和用户体验，助力开发者构建更自动化、高效的拍摄解决方案。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口介绍",
      children: "接口介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["机械体设备控制器API的接口使用指导请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/mechanic-kit-api/mechanic-arkts/js-apis-mechanicmanager/js-apis-mechanicmanager",
        children: "MechanicManager API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "on(type: 'attachStateChange', callback: Callback<AttachStateChangeInfo>): void"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册attachStateChange事件的回调监听，等待连接状态变化。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'attachStateChange', callback?: Callback<AttachStateChangeInfo>): void"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["取消注册attachStateChange事件的回调监听。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getAttachedMechDevices(): MechInfo[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取已连接的机械体设备列表。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setCameraTrackingEnabled(isEnabled: boolean): void"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启用或禁用摄像头跟踪。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getCameraTrackingEnabled(): boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检查是否启用了摄像头跟踪。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'trackingStateChange', callback: Callback<TrackingEventInfo>): void"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册trackingStateChange事件的回调监听。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'trackingStateChange', callback?: Callback<TrackingEventInfo>): void"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["取消注册trackingStateChange事件的回调监听。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setCameraTrackingLayout(trackingLayout: CameraTrackingLayout): void"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置摄像头跟踪布局。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getCameraTrackingLayout(): CameraTrackingLayout"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取此机械设备摄像头跟踪布局。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'rotationAxesStatusChange', callback: Callback<RotationAxesStateChangeInfo>): void"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册rotationAxesStatusChange事件的回调监听。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'rotationAxesStatusChange', callback?: Callback<RotationAxesStateChangeInfo>): void"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["取消注册rotationAxesStatusChange事件的回调监听。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始支持。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发准备",
      children: "开发准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持Mechanic Kit协议的机械体设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若要验证目标跟踪功能，主设备的相机驱动必须支持人脸检测。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请将SDK更新到API 20或以上版本，具体操作参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-software-install",
          children: "更新指南"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请确保机械体设备已通过蓝牙与主设备连接。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "管理设备连接状态",
      children: "管理设备连接状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确保机械体设备连接或断开时，应用能及时响应，支持设备连接状态的动态管理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入机械体设备管理模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { mechanicManager } from '@kit.MechanicKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取已连接的机械体列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let savedMechanicIds: number[] = [];\n\ntry {\nconst devices = mechanicManager.getAttachedMechDevices();\nconsole.info('Connected devices:', devices);\n\ndevices.forEach(device => {\n    console.info(`Device ID: ${device.mechId}`);\n    console.info(`Device Name: ${device.mechName}`);\n    console.info(`Device Type: ${device.mechDeviceType}`);\n    \n//保存设备类型为GIMBAL_DEVICE的设备的MechId\n    if (device.mechDeviceType === mechanicManager.MechDeviceType.GIMBAL_DEVICE) {\n    savedMechanicIds.push(device.mechId);\n    console.info(`GIMBAL_TYPE device saved ID: ${device.mechId}`);\n    } else {\n    console.info(`Skip non-gimbal devices: ${device.mechId}`);\n    }\n});\n\nconsole.info('List of saved gimbal device IDs:', savedMechanicIds);\n} catch (err) {\nconsole.error('Error getting attached devices:', err);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "监听设备的连接状态变化，以便及时响应。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const attachStateChangeCallback = (info: mechanicManager.AttachStateChangeInfo) => {\nif (info.state === mechanicManager.AttachState.ATTACHED) {\n    console.info('Device attached:', info.mechInfo);\n    // 执行设备连接的相关操作\n    handleDeviceAttached(info.mechInfo);\n} else if (info.state === mechanicManager.AttachState.DETACHED) {\n    console.info('Device detached:', info.mechInfo);\n    // 执行设备断开的相关操作\n    handleDeviceDetached(info.mechInfo);\n}\n};\n\n// 注册监听\nmechanicManager.on('attachStateChange', attachStateChangeCallback);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "处理设备的连接与断开的事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function handleDeviceAttached(mechInfo: mechanicManager.MechInfo) {\nconsole.info(`New device is connected: ${mechInfo.mechName} (ID: ${mechInfo.mechId})`);\nsavedMechanicIds.push(mechInfo.mechId);\n// To do sth.\n}\n\nfunction handleDeviceDetached(mechInfo: mechanicManager.MechInfo) {\nconsole.info(`Device disconnected: ${mechInfo.mechName} (ID: ${mechInfo.mechId})`);\nsavedMechanicIds.filter(id => id !== mechInfo.mechId);\n// To do sth.\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消连接状态的监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 取消连接状态的监听\nmechanicManager.off('attachStateChange', attachStateChangeCallback);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "控制设备目标跟踪拍摄",
      children: "控制设备目标跟踪拍摄"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启用目标拍摄功能后，设备将自动识别人脸并进行跟踪拍摄。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启用摄像头的目标拍摄功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n//检查前判断savedMechIds不为空\n// 检查跟踪状态\nconst isEnabled = mechanicManager.getCameraTrackingEnabled();\n\nif (isEnabled == false) {\n    // 开启摄像头跟踪\n    mechanicManager.setCameraTrackingEnabled(true);\n    console.info('Camera tracking enabled');\n}\n\nconsole.info('Is tracking currently enabled:', isEnabled);\n} catch (err) {\nconsole.error('Failed to enable camera tracking:', err);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "监听相机跟踪状态的变化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const trackingStateCallback = (eventInfo : mechanicManager.TrackingEventInfo) => {\nswitch (eventInfo.event) {\n    case mechanicManager.TrackingEvent.CAMERA_TRACKING_USER_ENABLED:\n    console.info('The user has enabled camera tracking');\n    handleTrackingEnabled();\n    break;\n    case mechanicManager.TrackingEvent.CAMERA_TRACKING_USER_DISABLED:\n    console.info('The user has disabled camera tracking');\n    handleTrackingDisabled();\n    break;\n    case mechanicManager.TrackingEvent.CAMERA_TRACKING_LAYOUT_CHANGED:\n    console.info('Tracking layout has changed');\n    handleLayoutChanged();\n    break;\n}\n};\n\n// 注册跟踪状态监听\nmechanicManager.on('trackingStateChange', trackingStateCallback);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "处理跟踪状态变化事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function handleTrackingEnabled() {\nconsole.info('Handling camera tracking enable events');\n// 可以在此处更新UI状态\nupdateTrackingUI(true);\n}\n\nfunction handleTrackingDisabled() {\nconsole.info('Handling camera tracking disabled events');\n// 可以在此处更新UI状态\nupdateTrackingUI(false);\n}\n\nfunction handleLayoutChanged() {\ntry {\n    const newLayout = mechanicManager.getCameraTrackingLayout();\n    console.info('New Tracking Layout:', newLayout);\n    // 根据新布局更新UI\n    updateLayoutUI(newLayout);\n} catch (err) {\n    console.error('Failed to get new layout:', err);\n}\n}\n\nfunction updateTrackingUI(enabled: boolean) {\n// 更新UI显示跟踪状态\n// To do sth.\nconsole.info('Update tracking UI status:', enabled);\n}\n\nfunction updateLayoutUI(layout : mechanicManager.CameraTrackingLayout) {\n// 更新UI显示布局状态\n// To do sth.\nconsole.info('Update layout UI:', layout);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消跟踪状态变化的监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 取消跟踪状态监听\nmechanicManager.off('trackingStateChange', trackingStateCallback);\n\n// 或者取消所有跟踪状态监听\nmechanicManager.off('trackingStateChange');\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调试验证",
      children: "调试验证"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请按照以下步骤调试验证，确保机械体设备管理功能正常："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "建立连接"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保机械体与开发设备已通过蓝牙配对并连接。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将开发设备放置在机械体设备上。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "功能验证步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "设备列表查询"
          })
        }), "：调用 getAttachedMechDevices 接口查询当前已连接的机械体设备列表，验证设备是否正确识别。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "目标拍摄跟踪"
          })
        }), "：调用 setCameraTrackingEnabled 启用摄像头目标跟踪功能，使用 getCameraTrackingEnabled 验证状态，测试设备是否能跟随目标自动旋转。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "验证结果说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果 getAttachedMechDevices 返回设备列表，表示设备识别成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果 getCameraTrackingEnabled 返回真，目标拍摄跟踪启用成功。应用打开相机后，画面中出现人脸时，设备会跟随人脸转动。"
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