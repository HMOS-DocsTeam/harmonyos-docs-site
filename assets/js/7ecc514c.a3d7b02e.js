"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["850057"], {
730586(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_rotation_camera_rotation_angle_adaptation_camera_rotation_angle_adaptation_md_7ec_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-rotation-camera-rotation-angle-adaptation-camera-rotation-angle-adaptation-md-7ec.json
var site_docs_camera_kit_camera_dev_arkts_camera_rotation_camera_rotation_angle_adaptation_camera_rotation_angle_adaptation_md_7ec_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-rotation/camera-rotation-angle-adaptation/camera-rotation-angle-adaptation","title":"适配相机旋转角度(ArkTS)","description":"屏幕处于不同的屏幕状态时，原始图像需旋转不同的角度，以确保图像在合适的方向显示，效果如图所示。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-rotation/camera-rotation-angle-adaptation/camera-rotation-angle-adaptation.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-rotation/camera-rotation-angle-adaptation","slug":"/camera-kit/camera-dev-arkts/camera-rotation/camera-rotation-angle-adaptation/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-rotation/camera-rotation-angle-adaptation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"适配相机旋转角度(ArkTS)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-rotation-angle-adaptation","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"对焦(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-focus/"},"next":{"title":"相机旋转角度的术语","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-rotation/camera-rotation-term/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-rotation/camera-rotation-angle-adaptation/camera-rotation-angle-adaptation.md


const frontMatter = {
	title: '适配相机旋转角度(ArkTS)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-rotation-angle-adaptation',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '适配相机旋转角度(ArkTS)';

const assets = {

};



const toc = [{
  "value": "创建会话",
  "id": "创建会话",
  "level": 2
}, {
  "value": "预览",
  "id": "预览",
  "level": 2
}, {
  "value": "拍照",
  "id": "拍照",
  "level": 2
}, {
  "value": "录像",
  "id": "录像",
  "level": 2
}, {
  "value": "计算设备旋转角度",
  "id": "计算设备旋转角度",
  "level": 2
}, {
  "value": "视频通话送远端场景",
  "id": "视频通话送远端场景",
  "level": 2
}, {
  "value": "实现相机无损出图",
  "id": "实现相机无损出图",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "指定XComponent的大小，防止旋转后图像拉伸变形",
  "id": "指定xcomponent的大小防止旋转后图像拉伸变形",
  "level": 3
}, {
  "value": "自绘制场景预览角度的归一化处理",
  "id": "自绘制场景预览角度的归一化处理",
  "level": 3
}, {
  "value": "适配一多设备",
  "id": "适配一多设备",
  "level": 3
}, {
  "value": "拍照无法镜像",
  "id": "拍照无法镜像",
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
        id: "适配相机旋转角度arkts",
        children: "适配相机旋转角度(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "屏幕处于不同的屏幕状态时，原始图像需旋转不同的角度，以确保图像在合适的方向显示，效果如图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(654243)/* ["default"] */.A) + "",
        width: "400",
        height: "269"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本开发指导将指导开发者在预览、拍照、录像等不同场景下，如何适配相机的旋转角度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在预览时，图像旋转角度与屏幕显示旋转角度（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#%E5%B1%9E%E6%80%A7",
            children: "Display"
          }), ".rotation）相关。具体开发指导：", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%88%9B%E5%BB%BA%E4%BC%9A%E8%AF%9D",
            children: "创建会话"
          }), " > ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E9%A2%84%E8%A7%88",
            children: "预览"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在拍照、录像时，图像旋转角度与设备重力方向（即", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%AE%A1%E7%AE%97%E8%AE%BE%E5%A4%87%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
            children: "设备旋转角度"
          }), "）相关。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["拍照开发指导：", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%88%9B%E5%BB%BA%E4%BC%9A%E8%AF%9D",
            children: "创建会话"
          }), " > ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%AE%A1%E7%AE%97%E8%AE%BE%E5%A4%87%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
            children: "计算设备旋转角度"
          }), " > ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E6%8B%8D%E7%85%A7",
            children: "拍照"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["录像开发指导：", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%88%9B%E5%BB%BA%E4%BC%9A%E8%AF%9D",
            children: "创建会话"
          }), " > ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%AE%A1%E7%AE%97%E8%AE%BE%E5%A4%87%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
            children: "计算设备旋转角度"
          }), " > ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%BD%95%E5%83%8F",
            children: "录像"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API参考说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/js-apis-camera",
        children: "Camera API文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建会话",
      children: "创建会话"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相机等相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session",
            children: "Session"
          }), "会话。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["相机使用预览等功能前，均需创建相机会话，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager",
            children: "CameraManager"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#createsession11",
            children: "createSession"
          }), "方法创建一个会话，创建会话时需指定创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#scenemode11",
            children: "SceneMode"
          }), "为NORMAL_PHOTO或NORMAL_VIDEO，创建的session处于拍照或者录像模式。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function createPhotoSession(cameraManager: camera.CameraManager): camera.Session | undefined {\n  let session: camera.Session | undefined = undefined;\n  try {\n    session = cameraManager.createSession(camera.SceneMode.NORMAL_PHOTO) as camera.PhotoSession;\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to create the session instance. error: ${err}`);\n  }\n  return session;\n}\n\nfunction createVideoSession(cameraManager: camera.CameraManager): camera.Session | undefined {\n  let session: camera.Session | undefined = undefined;\n  try {\n    session = cameraManager.createSession(camera.SceneMode.NORMAL_VIDEO) as camera.VideoSession;\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to create the session instance. error: ${err}`);\n  }\n  return session;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预览",
      children: "预览"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完成", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%88%9B%E5%BB%BA%E4%BC%9A%E8%AF%9D",
        children: "会话创建"
      }), "后，开发者可根据实际需求，配置输出流。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-previewoutput/arkts-apis-camera-previewoutput",
            children: "PreviewOutput"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-previewoutput/arkts-apis-camera-previewoutput#getpreviewrotation12",
            children: "getPreviewRotation"
          }), "接口，获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts/camera-rotation/camera-rotation-term#%E9%A2%84%E8%A7%88%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
            children: "预览旋转角度"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["displayRotation：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts/camera-rotation/camera-rotation-term#%E5%B1%8F%E5%B9%95%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
            children: "显示设备的屏幕旋转角度"
          }), "，可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#displaygetdefaultdisplaysync9",
            children: "display.getDefaultDisplaySync"
          }), "获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#%E5%B1%9E%E6%80%A7",
            children: "Display"
          }), "对象并读取其rotation属性值，并将对应角度填入。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例：Display.rotation = 1，表示显示设备屏幕顺时针旋转为90°，此处displayRotation填入90。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { display } from '@kit.ArkUI';\n\nlet initDisplayRotation = display.getDefaultDisplaySync().rotation;\nlet imageRotation = initDisplayRotation * camera.ImageRotation.ROTATION_90;\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["该接口需要在session调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#commitconfig11",
            children: "commitConfig"
          }), "完成配流后调用，如果存在异步执行的情况，previewOutput未添加到session里或者已调用的session.release，导致两者关系未绑定，此时调用getPreviewRotation，则会调用失败，并抛出错误码", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts-errcode/errorcode-camera/errorcode-camera#section7400201-%E7%9B%B8%E6%9C%BA%E6%9C%8D%E5%8A%A1%E5%BC%82%E5%B8%B8",
            children: "CameraErrorCode.SERVICE_FATAL_ERROR"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getPreviewRotation(previewOutput: camera.PreviewOutput, imageRotation : camera.ImageRotation): camera.ImageRotation {\n  let previewRotation: camera.ImageRotation = camera.ImageRotation.ROTATION_0;\n  try {\n    previewRotation = previewOutput.getPreviewRotation(imageRotation);\n    console.info(`Preview rotation is: ${previewRotation}`);\n  } catch (error) {\n    // 失败返回错误码error.code并处理\n    let err = error as BusinessError;\n    console.error(`The previewOutput.getPreviewRotation call failed. error code: ${err.code}`);\n  }\n  return previewRotation;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-previewoutput/arkts-apis-camera-previewoutput",
            children: "PreviewOutput"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-previewoutput/arkts-apis-camera-previewoutput#setpreviewrotation12",
            children: "setPreviewRotation"
          }), "，设置图像的预览旋转角度。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["该接口需要在session调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#commitconfig11",
            children: "commitConfig"
          }), "完成配流后调用，如果多次调用，以最新调用设置的图像预览旋转角度为准。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["previewRotation：预览旋转角度，取上一步", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-previewoutput/arkts-apis-camera-previewoutput#getpreviewrotation12",
              children: "getPreviewRotation"
            }), "的返回值。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["isDisplayLocked：可选入参，默认为false。当设置为false，即屏幕方向未锁定，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/camera-kit/camera-dev-arkts/camera-rotation/camera-rotation-term#%E9%A2%84%E8%A7%88%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
              children: "预览旋转角度"
            }), "将根据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/camera-kit/camera-dev-arkts/camera-rotation/camera-rotation-term#%E7%9B%B8%E6%9C%BA%E9%95%9C%E5%A4%B4%E5%AE%89%E8%A3%85%E8%A7%92%E5%BA%A6",
              children: "相机镜头角度"
            }), "+", (0,jsx_runtime.jsx)(_components.a, {
              href: "/camera-kit/camera-dev-arkts/camera-rotation/camera-rotation-term#%E5%B1%8F%E5%B9%95%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
              children: "屏幕显示旋转角度"
            }), "的值计算；当设置为true，Surface旋转锁定，不跟随窗口变化，旋转角度仅取相机镜头角度计算。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function setPreviewRotation(previewOutput: camera.PreviewOutput, previewRotation : camera.ImageRotation, isDisplayLocked: boolean): void {\n  try {\n    previewOutput.setPreviewRotation(previewRotation, isDisplayLocked);\n  } catch (error) {\n    // 失败返回错误码error.code并处理\n    let err = error as BusinessError;\n    console.error(`The previewOutput.setPreviewRotation call failed. error code: ${err.code}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "预览流旋转接口适配场景及示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts-mandatory/camera-session-management",
            children: "会话配置"
          }), "过程中调用预览旋转接口，即：使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#commitconfig11",
            children: "commitConfig"
          }), "接口提交相关配置后调用，建议在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#start11",
            children: "Start"
          }), "起流前调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// previewOutput是创建的预览输出\ntry {\n  let initDisplayRotation = display.getDefaultDisplaySync().rotation;\n  let initPreviewRotation = previewOutput.getPreviewRotation(initDisplayRotation * camera.ImageRotation.ROTATION_90);\n  previewOutput.setPreviewRotation(initPreviewRotation, false);\n} catch (error) {\n  // 失败返回错误码error.code并处理\n  let err = error as BusinessError;\n  console.error(`PreviewRotation call failed. error code: ${err.code}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用使用相机时，通过监听", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#displayonaddremovechange",
            children: "Display对象变化"
          }), "，感知窗口当前状态，如当前相机窗口发生旋转时，需对预览流进行角度修正。推荐在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts-mandatory/camera-session-management",
            children: "会话配置"
          }), "中完成调用预览旋转接口后，直接创建监听。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { display } from '@kit.ArkUI';\n\n// previewOutput是创建的预览输出\ndisplay.off('change');\ndisplay.on('change', () => {\n  try {\n    let displayRotation = display.getDefaultDisplaySync().rotation;\n    let imageRotation = displayRotation * camera.ImageRotation.ROTATION_90;\n    let previewRotation = previewOutput.getPreviewRotation(imageRotation);\n    previewOutput.setPreviewRotation(previewRotation, false);\n  } catch (error) {\n    // 失败返回错误码error.code并处理\n    let err = error as BusinessError;\n    console.error(`display change PreviewRotation call failed. error code: ${err.code}`);\n  }\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拍照",
      children: "拍照"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完成", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%88%9B%E5%BB%BA%E4%BC%9A%E8%AF%9D",
        children: "会话创建"
      }), "后，开发者可根据实际需求，配置输出流。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photooutput/arkts-apis-camera-photooutput",
            children: "PhotoOutput"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-photooutput/arkts-apis-camera-photooutput#getphotorotation12",
            children: "getPhotoRotation"
          }), "可以获取到拍照旋转角度。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["该接口需要在session调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#commitconfig11",
            children: "commitConfig"
          }), "完成配流后调用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["deviceDegree：设备旋转角度。拍照的旋转角度与重力方向（即设备旋转角度）相关，获取方式请见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%AE%A1%E7%AE%97%E8%AE%BE%E5%A4%87%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
            children: "计算设备旋转角度"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getPhotoRotation(photoOutput: camera.PhotoOutput, deviceDegree: number): camera.ImageRotation {\n  let photoRotation: camera.ImageRotation = camera.ImageRotation.ROTATION_0;\n  try {\n    photoRotation = photoOutput.getPhotoRotation(deviceDegree);\n    console.info(`Photo rotation is: ${photoRotation}`);\n  } catch (error) {\n    // 失败返回错误码error.code并处理\n    let err = error as BusinessError;\n    console.error(`The photoOutput.getPhotoRotation call failed. error code: ${err.code}`);\n  }\n  return photoRotation;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用将拍照角度写入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#photocapturesetting",
            children: "PhotoCaptureSetting"
          }), ".rotation。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["其余参数的配置及拍照，可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts/camera-shooting",
            children: "拍照开发指导"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "录像",
      children: "录像"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完成", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%88%9B%E5%BB%BA%E4%BC%9A%E8%AF%9D",
        children: "会话创建"
      }), "后，开发者可根据实际需求，配置输出流。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-videooutput/arkts-apis-camera-videooutput",
            children: "VideoOutput"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-videooutput/arkts-apis-camera-videooutput#getvideorotation12",
            children: "getVideoRotation"
          }), "可以获取到录像的旋转角度。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["该接口需要在session调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#commitconfig11",
            children: "commitConfig"
          }), "完成配流后调用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["deviceDegree：设备旋转角度。录像的旋转角度与重力方向（即设备旋转角度）相关，获取方式请见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%AE%A1%E7%AE%97%E8%AE%BE%E5%A4%87%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
            children: "计算设备旋转角度"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getVideoRotation(videoOutput: camera.VideoOutput, deviceDegree: number): camera.ImageRotation {\n  let videoRotation: camera.ImageRotation = camera.ImageRotation.ROTATION_0;\n  try {\n    videoRotation = videoOutput.getVideoRotation(deviceDegree);\n    console.info(`Video rotation is: ${videoRotation}`);\n  } catch (error) {\n    // 失败返回错误码error.code并处理\n    let err = error as BusinessError;\n    console.error(`The videoOutput.getVideoRotation call failed. error code: ${err.code}`);\n  }\n  return videoRotation;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#prepare9",
            children: "AVRecorder.prepare"
          }), "后使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#updaterotation12",
            children: "updateRotation"
          }), "设置录像角度。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["其余参数的配置及启动录像，可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts/camera-recording",
            children: "录像开发指导"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "录像流旋转接口适配示例代码："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { camera } from '@kit.CameraKit';\nimport { media } from '@kit.MediaKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nasync function getVideoRotationAndUpdate(videoOutput: camera.VideoOutput, deviceDegree: number, avRecorder: media.AVRecorder) {\n  let videoRotation: camera.ImageRotation = camera.ImageRotation.ROTATION_0;\n  try {\n    videoRotation = videoOutput.getVideoRotation(deviceDegree);\n    console.info(`Video rotation is: ${videoRotation}`);\n    if (avRecorder.state === 'prepared') {\n      await avRecorder.updateRotation(videoRotation);\n    }\n  } catch (error) {\n    // 失败返回错误码error.code并处理\n    let err = error as BusinessError;\n    console.error(`getVideoRotationAndUpdate call failed. error code: ${err.code}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "计算设备旋转角度",
      children: "计算设备旋转角度"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前可通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-sensor/js-apis-sensor#gravity9-1",
        children: "once(type: SensorId.GRAVITY, callback: Callback<GravityResponse>)"
      }), "获取一次重力传感器在x、y、z三个方向上的数据，计算得出设备旋转角度deviceDegree，示例如下所示。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果无法获得重力传感器数据，需要申请重力传感器权限ohos.permission.ACCELEROMETER。权限申请请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "，如何获取传感器数据请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-hardware/sensor-service-kit/sensor/sensor-guidelines",
        children: "传感器开发指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Decimal } from '@kit.ArkTS';\nimport { sensor } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet isSupported: boolean = false;\nlet getDeviceDegree: number = -1;\nfunction getRealData(data: sensor.GravityResponse): number {\n  let getDeviceDegree: number = 0;\n  let x = data.x;\n  let y = data.y;\n  let z = data.z;\n  if ((x * x + y * y) * 3 < z * z) {\n    return getDeviceDegree;\n  } else {\n    try {\n      let sd: Decimal = Decimal.atan2(y, -x);\n      let sc: Decimal = Decimal.round(Number(sd) / 3.141592653589 * 180);\n      getDeviceDegree = 90 - Number(sc);\n      getDeviceDegree = getDeviceDegree >= 0 ? getDeviceDegree % 360 : getDeviceDegree % 360 + 360;\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(`decimal failed, error: ${err.code}`);\n    }\n  }\n  return getDeviceDegree;\n}\n\nasync function getGravity() : Promise<number> {\n  let data: sensor.Sensor[];\n  try {\n    data = await sensor.getSensorList();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`getSensorList failed, error: ${err.code}`);\n    return -1; // 异常场景下返回默认值\n  }\n\n  for (let i = 0; i < data.length; i++) {\n    if (data[i].sensorId === sensor.SensorId.GRAVITY) {\n      isSupported = true;\n      break;\n    }\n  }\n  try {\n    if (isSupported === true) {\n      const promise: Promise<number> = new Promise((resolve) => {\n        sensor.once(sensor.SensorId.GRAVITY, (data: sensor.GravityResponse) => {\n          resolve(getRealData(data));\n        });\n      })\n      return promise;\n    } else {\n      const promise: Promise<number> = new Promise((resolve) => {\n        sensor.once(sensor.SensorId.ACCELEROMETER, (data: sensor.AccelerometerResponse) => {\n          resolve(getRealData(data as sensor.GravityResponse));\n        });\n      })\n      return promise;\n    }\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`gePromise failed, error: ${err.code}`);\n    return -1; // 异常场景下返回默认值\n  }\n}\n\n// 获取当前设备旋转角度\nasync function getCurrentDeviceDegree() : Promise<number> {\n  getDeviceDegree = await getGravity(); // 调用使用await\n  return getDeviceDegree;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "视频通话送远端场景",
      children: "视频通话送远端场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["两个设备之间进行视频通话，存在设备间持握方向不一致问题，建议", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "在本端将画面转正"
        })
      }), "，再通过网络发送到对端，画面转正参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%87%AA%E7%BB%98%E5%88%B6%E5%9C%BA%E6%99%AF%E9%A2%84%E8%A7%88%E8%A7%92%E5%BA%A6%E7%9A%84%E5%BD%92%E4%B8%80%E5%8C%96%E5%A4%84%E7%90%86",
        children: "自绘制场景预览角度的归一化处理"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现相机无损出图",
      children: "实现相机无损出图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在部分折叠屏设备上，", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-foldable-guide#section152264061715",
        children: "不同折叠状态"
      }), "下的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts/camera-rotation/camera-rotation-term#%E8%AE%BE%E5%A4%87%E8%87%AA%E7%84%B6%E6%96%B9%E5%90%91",
        children: "设备自然方向"
      }), "会发生改变，导致不同折叠状态下真实的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts/camera-rotation/camera-rotation-term#%E7%9B%B8%E6%9C%BA%E9%95%9C%E5%A4%B4%E5%AE%89%E8%A3%85%E8%A7%92%E5%BA%A6",
        children: "相机镜头安装角度"
      }), "不同。为了屏蔽不同设备间的差异，使得不同折叠状态下的相机镜头安装角度一致，系统会自动调整部分折叠状态下的相机采集图像方向（通过旋转裁切的方式）和相机镜头安装角度，因此会存在视场角（Field of View, FOV）损失，可能会导致相机预览、拍照、录像可见范围降低，因此如果需要实现相机无损出图，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-camerainput/arkts-apis-camera-camerainput#usephysicalcameraorientation22",
        children: "usePhysicalCameraOrientation"
      }), "接口来实现相机无损出图。具体方式如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设备是否支持无损出图，首先需要确认设备的相机镜头安装角度是否可变，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-camerainput/arkts-apis-camera-camerainput#isphysicalcameraorientationvariable22",
        children: "isPhysicalCameraOrientationVariable"
      }), "接口查询。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当相机镜头安装角度不可变时，不同折叠状态下的相机出图均为无损出图。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当相机镜头安装角度可变时："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如应用需要实现相机无损出图，由于相机镜头安装角度与相机旋转相关，需要应用完成", (0,jsx_runtime.jsx)(_components.a, {
              href: "#top",
              children: "相机旋转的适配"
            }), "后，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-camerainput/arkts-apis-camera-camerainput#getphysicalcameraorientation22",
              children: "getPhysicalCameraOrientation"
            }), "接口获取设备当前折叠状态下真实的相机镜头安装角度，并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-camerainput/arkts-apis-camera-camerainput#usephysicalcameraorientation22",
              children: "usePhysicalCameraOrientation"
            }), "接口实现相机无损出图（相机镜头安装角度不可变时使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-camerainput/arkts-apis-camera-camerainput#usephysicalcameraorientation22",
              children: "usePhysicalCameraOrientation"
            }), "将会返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-arkts-errcode/errorcode-camera/errorcode-camera#section7400102-%E9%9D%9E%E6%B3%95%E6%93%8D%E4%BD%9C",
              children: "7400102"
            }), "错误码，未适配相机旋转时使用相机无损出图会导致预览、拍照、录像旋转异常），推荐在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#createcamerainput",
              children: "createCameraInput"
            }), "后直接使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-camerainput/arkts-apis-camera-camerainput#usephysicalcameraorientation22",
              children: "usePhysicalCameraOrientation"
            }), "接口实现相机无损出图。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { camera } from '@kit.CameraKit';\n\nfunction enablePhysicalCameraOrientation(cameraInput: camera.CameraInput) {\n  // 查询设备的相机镜头安装角度是否可变\n  let isVarialbe: boolean = cameraInput.isPhysicalCameraOrientationVariable();\n\n  if (isVarialbe) {\n    // 获取设备当前折叠状态下真实的相机镜头安装角度\n    let physicalOrientation: number = cameraInput.getPhysicalCameraOrientation();\n    console.info(`physical Orientation is ${physicalOrientation}`);\n\n    // 选择是否使用真实的相机镜头安装角度, 以实现无损出图\n    let isUsed: boolean = true;\n    cameraInput.usePhysicalCameraOrientation(isUsed);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "指定xcomponent的大小防止旋转后图像拉伸变形",
      children: "指定XComponent的大小，防止旋转后图像拉伸变形"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["图像显示出现拉伸或压缩等变形，是因为图像分辨率与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "的宽高比不匹配。以应用层下发的1920*1080(16:9)竖屏和横屏为例，器件出图均是按照4:3比例出一张RAW图，在此基础上，根据应用层下发的16:9比例进行裁切，提供数据给应用层。因此，无论手机持握方向如何变化，应用层接收的数据始终是16:9比例的图片。具体图示如下："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "设备和镜头方向"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "处理过程示意图"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "XComponent布局"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "设备条件："
              })
            }), "  手机竖屏、充电口向下。  使用后置相机拍摄。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "可得："
              })
            }), "  - 后置相机镜头角度 = 90°  - 屏幕旋转角度 = 0°，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#%E5%B1%9E%E6%80%A7",
              children: "Display.rotation"
            }), " = 0  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图像预览旋转角度 = 0°+90° = 90°"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "出图与最终成像有90度夹角，布局宽高与图像宽高交换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "设备条件："
              })
            }), "  手机横屏、充电口向右。  使用后置相机拍摄。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "可得："
              })
            }), "  - 后置相机镜头角度 = 90°  - 屏幕旋转角度 = 270°，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#%E5%B1%9E%E6%80%A7",
              children: "Display.rotation"
            }), " = 3  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图像预览旋转角度 = 270°+90° = 360° = 0°"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "出图与最终成像有0度夹角，布局与图像宽高比一致。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从上图可以看出，当手机从竖屏转换为横屏时，图像始终保持16:9的输出比例，但镜头与屏幕显示方向之间的夹角从90度变为0度。如果布局保持9:16不变，那么16:9的图像数据放置在9:16的空间内显示，会导致图像形变。因此，为确保图像显示正常，横屏时需要将布局的宽高比调整为16:9。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先，将XComponent的宽度和高度作为状态变量进行监听，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onwindowsizechange7",
        children: "Window.on('windowSizeChange')"
      }), "监听窗口的变化，根据屏幕旋转角度（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#%E5%B1%9E%E6%80%A7",
        children: "Display.rotation"
      }), " ）与相机镜头角度（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#orientation10",
        children: "CameraDevice.cameraOrientation"
      }), "）之间的角度来确定布局的宽高比，以确保布局能跟随窗口实时调整。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体的实现方法如下，在需要进行横竖屏切换的页面中，通常建议在aboutToAppear中执行窗口变化的监听。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { bundleManager } from '@kit.AbilityKit';\nimport { display } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\nimport { BusinessError, deviceInfo  } from '@kit.BasicServicesKit';\n\n// ....\nlet previewOutput : camera.PreviewOutput; // 根据具体使用场景创建的预览输出流\nlet cameraDevice : camera.CameraDevice; // 根据使用诉求选择符合的相机设备\n@Entry\n@Component\nstruct Index {\n  @State mXComponentWidth: number = 1280;\n  @State mXComponentHeight: number = 720;\n  @State mRotate: number = 0;\n  @State mConfigRatio: number = 16 / 9;\n  private targetVersion: number = 0;\n  private mWindowHeight = 0;\n  private mWindowWidth = 0;\n\n  private windowClass = (this.getUIContext().getHostContext() as common.UIAbilityContext).windowStage.getMainWindowSync();\n  getBundleInfoForSelf() { // 获取应用的编译版本\n    let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION | bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_METADATA;\n    try {\n      bundleManager.getBundleInfoForSelf(bundleFlags).then((data) => {\n        console.info(`getBundleInfoForSelf successfully. Data: ${data.targetVersion}`);\n        this.targetVersion = data.targetVersion;\n      }).catch((err: BusinessError) => {\n        console.error(`getBundleInfoForSelf failed ${err}`);\n      });\n    } catch (err) {\n      let message = (err as BusinessError).message;\n      console.error(`getBundleInfoForSelf failed ${message}`);\n    }\n  }\n\n  isIsolateForSpecialType(): boolean { // 兼容平板API14之前的设备\n    return deviceInfo.deviceType == \"tablet\" && this.targetVersion <= 50000013;\n  }\n\n  aboutToAppear(): void {\n    this.updateXComponentSize();\n    this.getBundleInfoForSelf();\n    this.windowClass.on('windowSizeChange', (size) => {\n      this.mWindowWidth = size.width;\n      this.mWindowHeight = size.height;\n      this.updateXComponentSize();\n    });\n    let rotation : number = 0;\n    try {\n      rotation = display.getDefaultDisplaySync().rotation;\n      this.mRotate = rotation * camera.ImageRotation.ROTATION_90;\n    } catch (error) {\n      const err = error as BusinessError;\n      console.error(`Failed to get display rotation: ${err.code}, ${err.message}`);\n      this.mRotate = 0;\n    }\n    display.on('change', () => {\n      if (this.mRotate!= rotation * camera.ImageRotation.ROTATION_90) {\n        this.mRotate= rotation * camera.ImageRotation.ROTATION_90; // 获取屏幕旋转角度\n        this.updateXComponentSize();\n        let imageRotation = this.getImageRotation();\n        if (!imageRotation) {\n          console.error(`current get image rotation is undefined`);\n          return;\n        }\n        let previewRotation = previewOutput.getPreviewRotation(imageRotation); // previewOutput是创建的预览流\n        previewOutput.setPreviewRotation(previewRotation, false);\n      }\n    });\n  }\n  getImageRotation() : camera.ImageRotation | undefined {\n    let displayRotation : number= 0;\n    try {\n      displayRotation = display.getDefaultDisplaySync().rotation\n    } catch (error) {\n      const err = error as BusinessError;\n      console.error(`Failed to get display rotation: ${err.code}, ${err.message}`);\n      return undefined;\n    }\n    let imageRotation = displayRotation * camera.ImageRotation.ROTATION_90;\n    return imageRotation;\n  }\n  updateXComponentSize(): void {\n    let angleDiff = (this.mRotate+ cameraDevice?.cameraOrientation) % 360;\n    if (this.isIsolateForSpecialType()) { // 如果设备为平板设备，且使用的API版本＜14，应进入此逻辑。\n    if (angleDiff === 90 || angleDiff=== 270) {\n    this.mXComponentWidth = this.mConfigRatio * this.mWindowHeight;\n    this.mXComponentHeight = this.mWindowHeight;\n  } else {\n    this.mXComponentWidth = this.mWindowWidth;\n    this.mXComponentHeight = this.mConfigRatio * this.mWindowWidth; // 1920 *1080\n  }\n  } else { // 如果使用API版本≥14，或是API14以下的非平板设备，应进入此逻辑。\n    if (angleDiff === 90 || angleDiff=== 270) {\n      this.mXComponentWidth = this.mWindowWidth;\n      this.mXComponentHeight = this.mConfigRatio * this.mWindowWidth; // 1920 *1080\n    } else {\n      this.mXComponentWidth = this.mConfigRatio * this.mWindowHeight;\n      this.mXComponentHeight = this.mWindowHeight;\n    }\n  }\n  }\n\n  async aboutToDisAppear(): Promise<void> {\n    display.off('change');\n    this.windowClass.off('windowSizeChange');\n    // 解注册\n  }\n  build() {\n    // 根据使用诉求补充界面处理逻辑。\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除了指定XComponent的宽高外，还可以通过设置XComponent的renderFit来实现图片的自适应大小显示、居中裁剪显示等效果。具体详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-renderfit/ts-universal-attributes-renderfit#renderfit",
        children: "RenderFit介绍"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自绘制场景预览角度的归一化处理",
      children: "自绘制场景预览角度的归一化处理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在自绘制场景中，对于后置摄像头，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-previewoutput/arkts-apis-camera-previewoutput#getpreviewrotation12",
        children: "getPreviewRotation"
      }), "获取旋转角度，将图像转正；对于前置摄像头，由于存在水平镜像和垂直镜像的差异，为了简化操作，需先对前置摄像头的图像角度进行归一化处理后，再将图像转正，并根据业务需求决定是否进行镜像处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pixelMap处理方式："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { image } from '@kit.ImageKit';\nimport { display } from '@kit.ArkUI';\n\nlet previewOutputReceiver: camera.PreviewOutput | undefined = undefined; // 回调流定义\nlet curCameraPosition = camera.CameraPosition.CAMERA_POSITION_FRONT; // 相机设备的位置定义，此处以前置为例。\n// .....\nfunction  onImageArrival(receiver: image.ImageReceiver): void {\n  receiver.on('imageArrival', () => { // imageRecevier回调\n    // 获取图像\n    receiver.readNextImage((err: BusinessError, nextImage: image.Image) => {\n      if (err || nextImage === undefined) {\n        console.error('readNextImage failed');\n        return;\n      }\n      // 解析图像内容\n      nextImage.getComponent(image.ComponentType.JPEG, async (err: BusinessError, imgComponent: image.Component) => {\n        if (err || imgComponent === undefined) {\n          console.error('getComponent failed');\n        }\n\n        if (imgComponent.byteBuffer) {\n          let width = nextImage.size.width; // 获取图片的宽\n          let height = nextImage.size.height; // 获取图片的高\n          let stride = imgComponent.rowStride; // 获取图片的stride\n          // stride与width一致\n          if (stride == width) {\n            let pixelMap = await image.createPixelMap(imgComponent.byteBuffer, {\n              size: { height: height, width: width },\n              srcPixelFormat: image.PixelMapFormat.NV21, // 此处以NV21为例\n            })\n            updatePixelMap(pixelMap);\n          } else {\n            // stride与width不一致\n            const dstBufferSize = width * height * 1.5 // 以NV21为例（YUV_420_SP格式的图片）YUV_420_SP内存计算公式：长x宽+(长x宽)/2\n            const dstArr = new Uint8Array(dstBufferSize)\n            for (let j = 0; j < height * 1.5; j++) {\n              const srcBuf = new Uint8Array(imgComponent.byteBuffer, j * stride, width)\n              dstArr.set(srcBuf, j * width)\n            }\n            let pixelMap = await image.createPixelMap(dstArr.buffer, {\n              size: { height: height, width: width },\n              srcPixelFormat: image.PixelMapFormat.NV21, // 此处以NV21为例\n            });\n            updatePixelMap(pixelMap);\n          }\n        } else {\n          console.error('byteBuffer is null');\n        }\n        // 确保当前buffer没有在使用的情况下，可进行资源释放。\n        // 如果对buffer进行异步操作，需要在异步操作结束后再释放该资源（nextImage.release()）。\n        nextImage.release();\n        console.info('image process done');\n      })\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async function  updatePixelMap(pixelMap: image.PixelMap): Promise<void> {\n  let rotation : number = 0;\n  try {\n    rotation = display.getDefaultDisplaySync().rotation * camera.ImageRotation.ROTATION_90;\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`Failed to get display rotation: ${err.code}, ${err.message}`);\n    return;\n  }\n  let angle = previewOutputReceiver?.getPreviewRotation(rotation);\n  if (angle === undefined) {\n    return;\n  }\n  // 在display.on中对该previewOutput设置过setPreviewRotation，此处可以不执行。\n  previewOutputReceiver?.setPreviewRotation(angle);\n  if (curCameraPosition === camera.CameraPosition.CAMERA_POSITION_FRONT) {\n    if (rotation ===90 || rotation === 270) {\n      angle = (angle + 180 ) % 360;\n    }\n    await pixelMap.rotate(angle);\n    await pixelMap.flip(true, false);\n  } else {\n    await pixelMap.rotate(angle);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "适配一多设备",
      children: "适配一多设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了适配一多设备，主要分为以下几步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据屏幕比例选择合适的预览分辨率。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据确定的预览分辨率，通过宽/高得到新的比例。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据上一步的比例计算XComponent宽高，可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E6%8C%87%E5%AE%9Axcomponent%E7%9A%84%E5%A4%A7%E5%B0%8F%E9%98%B2%E6%AD%A2%E6%97%8B%E8%BD%AC%E5%90%8E%E5%9B%BE%E5%83%8F%E6%8B%89%E4%BC%B8%E5%8F%98%E5%BD%A2",
            children: "指定XComponent的大小，防止旋转后图像拉伸变形"
          }), "，将mConfigRatio应用于布局宽高的计算。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(329118)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在适配折叠屏设备时，每次折叠屏镜头变化都需要重新获取屏幕比例。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let mConfigRatio: number = 16 / 9; // 设置分辨率比例初始值，此处以16:9宽高比为例。\nlet reConfigType : number = 720;\nlet previewProfileObj: camera.Profile = {\n  format: 1003,\n  size: {\n    width: 1280,\n    height: 720\n  }\n};\n// 根据屏幕初步计算比例，长边/短边\nfunction getConfigRation(cameraDevice: camera.CameraDevice, cameraManager: camera.CameraManager) : number {\n  let previewProfile = getSurfaceSize(cameraDevice, mConfigRatio, cameraManager); // 获取最接近的分辨率\n  if (previewProfile === undefined || previewProfile.size === undefined) {\n    return 0;\n  }\n  mConfigRatio = previewProfile.size.width / previewProfile.size.height; // 以新的比例重新计算显示宽高\n  return mConfigRatio;\n}\n\n// 获取最接近屏幕的分辨率\nfunction getSurfaceSize(cameraDevice: camera.CameraDevice, configRatio: number, cameraManager: camera.CameraManager): camera.Profile | undefined {\n  console.info(`previewProfiles is ${configRatio}`);\n  let cameraOutputCapability =\n    cameraManager.getSupportedOutputCapability(cameraDevice, camera.SceneMode.NORMAL_PHOTO); // 此处以NORMAL_PHOTO为例\n  return getPreviewProfile(cameraOutputCapability, configRatio);\n}\nfunction getPreviewProfile(cameraOutputCapability: camera.CameraOutputCapability, configRatio: number): camera.Profile | undefined {\n  let previewProfiles = cameraOutputCapability.previewProfiles;\n  if (previewProfiles.length < 1) {\n    return undefined;\n  }\n  console.info(`previewProfiles this.foramt: ${previewProfileObj.format} configRatio = ${configRatio}`);\n  let optimalSize: camera.Profile|undefined;\n  let minDiff = Number.MAX_VALUE;\n  // 计算屏幕的宽高比\n  for (let i = 0; i < previewProfiles.length; i++) {\n    if (previewProfiles[i].format !== previewProfileObj.format) {\n      continue;\n    }\n    let ratio = previewProfiles[i].size.width / previewProfiles[i].size.height; // 1088*1080\n    // 检查宽高比是否匹配\n    if (Math.abs(ratio - configRatio) > 0.2) continue; // 0.2的误差可自行调整\n    // 选择最接近的分辨率\n    if (Math.abs(previewProfiles[i].size.height - reConfigType) < minDiff) {\n      optimalSize = previewProfiles[i];\n      minDiff = Math.abs(previewProfiles[i].size.height - reConfigType);\n    }\n  }\n\n  // 如果没有找到合适的分辨率，选择第一个\n  if (optimalSize === undefined) {\n    minDiff = Number.MAX_VALUE;\n    for (let i = 0; i < previewProfiles.length; i++) {\n      if (previewProfiles[i].format !== previewProfileObj.format) {\n        continue;\n      }\n      if (Math.abs(previewProfiles[i].size.height - reConfigType) < minDiff) { // 720\n        optimalSize = previewProfiles[i];\n        minDiff = Math.abs(previewProfiles[i].size.height - reConfigType);\n      }\n    }\n  }\n  return optimalSize;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "拍照无法镜像",
      children: "拍照无法镜像"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#photocapturesetting",
        children: "PhotoCaptureSetting"
      }), "中的mirror属性改变拍照镜像。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// this.photoOutput是拍照输出output, this.getDeviceDegree是重力角度\nlet photoSettings: camera.PhotoCaptureSetting = {\n  quality: camera.QualityLevel.QUALITY_LEVEL_HIGH,\n  mirror: this.photoOutput?.isMirrorSupported() // 设置拍照镜像，true表示镜像，false表示非镜像\n};\n// ... 省略获取代码\nthis.photoRotation = getPhotoRotation(this.photoOutput!!,this.getDeviceDegree)\nphotoSettings.rotation = this.photoRotation // 指定拍照旋转角度\n"
      })
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
654243(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438617-ff4bbeb35dfca95bc5aaaa971c39c62b.png");

},
329118(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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