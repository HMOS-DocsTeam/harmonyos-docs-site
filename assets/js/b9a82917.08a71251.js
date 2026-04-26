"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["962689"], {
74915(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_secure_photo_camera_secure_photo_md_b9a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-secure-photo-camera-secure-photo-md-b9a.json
var site_docs_camera_kit_camera_dev_arkts_camera_secure_photo_camera_secure_photo_md_b9a_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-secure-photo/camera-secure-photo","title":"安全相机(ArkTS)","description":"安全相机主要为银行等有活体检测等安全诉求的应用提供，安全相机的使用需要加密算法框架及可信应用服务。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-secure-photo/camera-secure-photo.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-secure-photo","slug":"/camera-kit/camera-dev-arkts/camera-secure-photo/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-secure-photo/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":25,"frontMatter":{"title":"安全相机(ArkTS)","sidebar_position":25,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-secure-photo","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"相机旋转角度的术语","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-rotation/camera-rotation-term/"},"next":{"title":"动态调整预览帧率(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-framerate/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-secure-photo/camera-secure-photo.md


const frontMatter = {
	title: '安全相机(ArkTS)',
	sidebar_position: 25,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-secure-photo',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '安全相机(ArkTS)';

const assets = {

};



const toc = [{
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
        id: "安全相机arkts",
        children: "安全相机(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安全相机主要为银行等有活体检测等安全诉求的应用提供，安全相机的使用需要加密算法框架及可信应用服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用具体使用步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过Camera Kit打开安全摄像头，成功打开安全摄像头后，Camera Kit会返回给应用一个", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "安全摄像头序列号"
          })
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-security-kit-guide/devicesecurity-introduction",
          children: "Device Security Kit"
        }), "来创建证明密钥（安全摄像头序列号会作为入参）、初始化证明会话。Device Security Kit初始化证明会话完成后会返回给应用", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "匿名证书链"
          })
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过Camera Kit配置安全相机输入输出流，重点是配置", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "安全数据流"
          })
        }), "，注册安全数据流每帧安全图像回调监听。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "解析安全数据流每帧安全图像，在服务器侧完成安全图像的签名验证。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(780133)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前文档主要说明通过Camera Kit完成的步骤，证明会话相关步骤需通过Device Security Kit完成，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securecamera",
        children: "可信应用服务-安全摄像头"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(482642)/* ["default"] */.A) + "",
        width: "796",
        height: "739"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/js-apis-camera",
        children: "Camera API参考"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖，需要导入相机框架相关领域依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera } from '@kit.CameraKit';\nimport { image } from '@kit.ImageKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择支持安全相机的设备。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager",
            children: "CameraManager"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getsupportedscenemodes11",
            children: "getSupportedSceneModes"
          }), "方法，可以获取当前设备支持的所有模式，如果当前设备支持安全相机模式，即可使用该设备做后续安全相机操作。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前安全相机仅支持手机前置镜头。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function isSecureCamera(cameraManager: camera.CameraManager, cameraDevice: camera.CameraDevice): boolean {\n  let sceneModes: Array<camera.SceneMode> = cameraManager.getSupportedSceneModes(cameraDevice);\n  const secureMode = sceneModes.find(mode => mode === camera.SceneMode.SECURE_PHOTO);\n  if (secureMode) {\n    console.info('current device support secure camera!');\n    return true;\n  } else {\n    console.info('current device not support secure camera!');\n    return false;\n  }\n}\n\nlet secureCamera: camera.CameraDevice;\n\nfunction getSecureCamera(cameraManager: camera.CameraManager): void {\n  let cameraArray: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();\n  for (let index = 0; index < cameraArray.length; index++) {\n    if (isSecureCamera(cameraManager, cameraArray[index])) {\n      secureCamera = cameraArray[index];\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询相机设备在安全模式下支持的输出能力。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager",
            children: "CameraManager"
          }), "的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getsupportedoutputcapability11",
            children: "getSupportedOutputCapability"
          }), "方法，可获取设备在安全模式下支持的输出能力。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前安全相机仅支持输出预览流，推荐预览流使用640 * 480分辨率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getSupportedOutputCapability(cameraManager: camera.CameraManager, secureCamera: camera.CameraDevice): void {\n  let outputCap: camera.CameraOutputCapability =\n    cameraManager.getSupportedOutputCapability(secureCamera, camera.SceneMode.SECURE_PHOTO);\n  let previewProfilesArray: Array<camera.Profile> = outputCap.previewProfiles;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建设备输入输出。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安全相机需要创建两路输出流："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["一路是普通的预览流，用于界面显示，普通预览流的创建流程请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/camera-kit/camera-dev-arkts/camera-preview",
                children: "预览开发指导"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["一路是安全数据流，用于安全服务校验，安全数据流需要通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-f/arkts-apis-image-f#imagecreateimagereceiver11",
                children: "image.createImageReceiver"
              }), "创建图像接收类", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagereceiver/arkts-apis-image-imagereceiver",
                children: "ImageReceiver"
              }), "，再通过其", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagereceiver/arkts-apis-image-imagereceiver#getreceivingsurfaceid9",
                children: "getReceivingSurfaceId"
              }), "方法获取surfaceId。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(755863)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "安全数据流没有单独的数据类型，同属于预览流，输出能力与预览流保持一致，创建ImageReceiver仅支持JPEG格式。"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function createInputAndOutputs(cameraManager: camera.CameraManager,\n                                     secureCamera: camera.CameraDevice,\n                                     previewProfile: camera.Profile,\n                                     previewSurfaceId: string): Promise<void> {\n  // 创建输入流\n  let cameraInput: camera.CameraInput = cameraManager.createCameraInput(secureCamera);\n  // 创建普通预览输出流\n  let previewOutput: camera.PreviewOutput = cameraManager.createPreviewOutput(previewProfile, previewSurfaceId);\n  // 创建安全数据输出流\n  const receiver: image.ImageReceiver =\n    image.createImageReceiver({ width: previewProfile.size.width, height: previewProfile.size.height },\n                              image.ImageFormat.JPEG, 8);\n  const secureSurfaceId: string = await receiver.getReceivingSurfaceId();\n  let secureOutput: camera.PreviewOutput = cameraManager.createPreviewOutput(previewProfile, secureSurfaceId);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开安全设备。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-camerainput/arkts-apis-camera-camerainput",
            children: "CameraInput"
          }), "提供了", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-camerainput/arkts-apis-camera-camerainput#open12",
            children: "open(isSecureEnabled)"
          }), "方法用于打开安全相机并返回安全摄像头序列号，该序列号是安全模块创建证明会话的必需参数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "仅当isSecureEnabled为true时，才会打开安全相机，并有安全序列号返回。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function openCamera(cameraInput: camera.CameraInput) {\n  const seqId: bigint = await cameraInput.open(true);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用Device Security Kit的能力，创建证明密钥、打开证明会话。请参考Device Security Kit（设备安全服务）的开发指导：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-securecamera",
            children: "可信应用服务-安全摄像头"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建安全相机会话，配流启流。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建安全相机模式的会话，将输入流、输出流加入会话，需要将安全数据流通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-securesession/arkts-apis-camera-securesession",
            children: "SecureSession"
          }), "的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-securesession/arkts-apis-camera-securesession#addsecureoutput12",
            children: "addSecureOutput"
          }), "方法标记成安全输出。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function openSession(cameraManager: camera.CameraManager,\n                           cameraInput: camera.CameraInput,\n                           previewOutput: camera.PreviewOutput,\n                           secureOutput: camera.PreviewOutput): Promise<void> {\n  try {\n    let secureSession: camera.SecureSession = cameraManager.createSession(camera.SceneMode.SECURE_PHOTO);\n    if (secureSession === undefined) {\n      console.error('create secureSession failed!');\n    }\n    secureSession.beginConfig();\n    secureSession.addInput(cameraInput);\n    secureSession.addOutput(previewOutput);\n    secureSession.addOutput(secureOutput);\n    secureSession.addSecureOutput(secureOutput); // 把secureOutput标记成安全输出\n    await secureSession.commitConfig();\n    await secureSession.start();\n  } catch (err) {\n    console.error('openSession failed!');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["安全模式会话正常启动后，预览流和安全数据流数据逐帧上报，安全数据流每帧数据可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagereceiver/arkts-apis-image-imagereceiver",
            children: "ImageReceiver"
          }), "注册", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagereceiver/arkts-apis-image-imagereceiver#on9",
            children: "imageArrival"
          }), "回调获取。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function onBuffer(receiver: image.ImageReceiver): void {\n  receiver.on('imageArrival', () => {\n    // 从ImageReceiver读取下一张图片\n    receiver.readNextImage().then((img: image.Image) => {\n      // 从图像中获取组件缓存\n      img.getComponent(image.ComponentType.JPEG).then((component: image.Component) => {\n        // 安全数据流内容，应用通过解析该buffer内容完成签名认证\n        const buffer = component.byteBuffer;\n        console.info('Succeeded in getting component byteBuffer.');\n      })\n    })\n  })\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解析安全数据流每帧安全图像，在服务器侧完成安全图像的签名验证。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果有在端侧验证图像数据或地理位置数据签名的需求，可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/device-security-kit-guide/devicesecurity-taas-dev/devicesecurity-taas-verify/devicesecurity-taas-verifysignature",
            children: "验证签名"
          }), "中与安全图像相关的部分。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["释放安全相机，使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session",
            children: "Session"
          }), "的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#release11-1",
            children: "release"
          }), "方法。"]
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
755863(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
780133(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
482642(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798932-7ab1333e706acd1bea704b8a93a4af11.png");

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