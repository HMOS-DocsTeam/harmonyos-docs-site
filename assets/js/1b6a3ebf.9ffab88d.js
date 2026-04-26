"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["810286"], {
447086(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_camera_rotation_native_camera_rotation_term_native_camera_rotation_term_native_md_1b6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-camera-rotation-native-camera-rotation-term-native-camera-rotation-term-native-md-1b6.json
var site_docs_camera_kit_camera_dev_native_camera_rotation_native_camera_rotation_term_native_camera_rotation_term_native_md_1b6_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-term-native/camera-rotation-term-native","title":"相机旋转角度的术语","description":"在适配相机旋转角度中涉及设备方向、镜头角度、屏幕显示角度等多个术语，开发者可以了解相关概念，帮助理解框架的运作机制。","source":"@site/docs/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-term-native/camera-rotation-term-native.md","sourceDirName":"camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-term-native","slug":"/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-term-native/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-term-native/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"相机旋转角度的术语","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-rotation-term-native","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"适配相机旋转角度(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-angle-adaptation-native/"},"next":{"title":"动态调整预览帧率(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/camera-setframerate-native/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-term-native/camera-rotation-term-native.md


const frontMatter = {
	title: '相机旋转角度的术语',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-rotation-term-native',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '相机旋转角度的术语';

const assets = {

};



const toc = [{
  "value": "设备自然方向",
  "id": "设备自然方向",
  "level": 2
}, {
  "value": "屏幕显示方向",
  "id": "屏幕显示方向",
  "level": 2
}, {
  "value": "屏幕旋转角度",
  "id": "屏幕旋转角度",
  "level": 2
}, {
  "value": "相机镜头安装角度",
  "id": "相机镜头安装角度",
  "level": 2
}, {
  "value": "预览旋转角度",
  "id": "预览旋转角度",
  "level": 2
}, {
  "value": "应用自绘制预览角度处理",
  "id": "应用自绘制预览角度处理",
  "level": 2
}, {
  "value": "拍照/录像角度",
  "id": "拍照录像角度",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "相机旋转角度的术语",
        children: "相机旋转角度的术语"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在适配相机旋转角度中涉及设备方向、镜头角度、屏幕显示角度等多个术语，开发者可以了解相关概念，帮助理解框架的运作机制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设备自然方向",
      children: "设备自然方向"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备自然方向"
        })
      }), "指设备默认的使用方向，以手机为例，如图所示，手机的自然方向为竖屏且充电口向下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(591788)/* ["default"] */.A) + "",
        width: "178",
        height: "202"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "屏幕显示方向",
      children: "屏幕显示方向"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "屏幕显示方向"
        })
      }), "指当前用户视角下，设备正确的显示方向。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(763290)/* ["default"] */.A) + "",
        width: "400",
        height: "269"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "屏幕旋转角度",
      children: "屏幕旋转角度"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["显示设备的屏幕顺时针旋转角度，简称为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "屏幕旋转角度"
        })
      }), "，即设备从自然方向到当前方向的顺时针夹角。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如图所示，图示夹角即为屏幕旋转角度，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_getdefaultdisplayrotation",
        children: "OH_NativeDisplayManager_GetDefaultDisplayRotation"
      }), "获取。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(42415)/* ["default"] */.A) + "",
        width: "400",
        height: "233"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "相机镜头安装角度",
      children: "相机镜头安装角度"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相机镜头安装角度"
        })
      }), "指相机采集图像方向到设备自然方向在顺时针方向的夹角。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以手机为例，手机后置相机传感器是横屏安装的，当手机在竖屏方向使用后置相机镜头拍摄时，相机采集到的原始图像方向如图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此时图像需要顺时针旋转90度，才能与设备自然方向保持一致，所以", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "后置相机的镜头角度为90度"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(255866)/* ["default"] */.A) + "",
        width: "400",
        height: "150"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["而手机前置镜头，是朝向使用者的，当手机在竖屏方向使用前置相机镜头拍摄时，出图方向与后置出图方向互为镜像，如下图所示，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "前置相机的镜头角度为270度"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(921090)/* ["default"] */.A) + "",
        width: "400",
        height: "146"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预览旋转角度",
      children: "预览旋转角度"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(982666)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可参考以下章节，了解框架实现的机制，在实际开发过程中，推荐通过接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-angle-adaptation-native#%E9%A2%84%E8%A7%88",
        children: "获取预览旋转角度"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在预览时，图像旋转角度与屏幕显示旋转角度相关。系统将以原始图像方向为基线，根据相机镜头角度和屏幕显示补偿角度，旋转图像。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "计算公式：图像旋转角度=镜头安装角度+屏幕显示补偿角度，屏幕显示补偿角度的值与屏幕旋转角度相等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以手机设备为例展示相机在预览下如何处理图像，计算的角度设置给系统侧，作用于直接送显场景，应用自绘制参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BA%94%E7%94%A8%E8%87%AA%E7%BB%98%E5%88%B6%E9%A2%84%E8%A7%88%E8%A7%92%E5%BA%A6%E5%A4%84%E7%90%86",
        children: "应用自绘制预览角度处理"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "设备和镜头方向"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "处理过程示意图"
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
            }), "  - 后置相机镜头角度 = 90°  - 屏幕旋转角度= 0°，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_rotation",
              children: "displayRotation"
            }), " = 0  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图像预览旋转角度 = 90°+0° = 90°"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "设备条件："
              })
            }), "  手机横屏、充电口向左。  使用后置相机拍摄。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "可得："
              })
            }), "  - 后置相机镜头角度 = 90°  - 屏幕旋转角度 = 90°，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_rotation",
              children: "displayRotation"
            }), " = 1  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图像预览旋转角度 = 90°+90° = 180°"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "设备条件："
              })
            }), "  手机竖屏、充电口向上。  使用后置相机拍摄。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "可得："
              })
            }), "  - 后置相机镜头角度 = 90°  - 屏幕旋转角度 = 180°，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_rotation",
              children: "displayRotation"
            }), " = 2  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图像预览旋转角度 = 90°+180° = 270°"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_rotation",
              children: "displayRotation"
            }), " = 3  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图像预览旋转角度 = 90°+270° = 0°"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "设备条件："
              })
            }), "  手机竖屏、充电口向下。  使用前置相机拍摄。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "可得："
              })
            }), "  - 前置相机镜头角度 = 270°  - 前置相机镜像出图  - 屏幕旋转角度= 0°，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_rotation",
              children: "displayRotation"
            }), " = 0  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图像预览旋转角度 = 270°+0° = 270°"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "设备条件："
              })
            }), "  手机横屏、充电口向左。  使用前置相机拍摄。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "可得："
              })
            }), "  - 前置相机镜头角度 = 270°  - 前置相机镜像出图  - 屏幕旋转角度 = 90°，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_rotation",
              children: "displayRotation"
            }), " = 1  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图像预览旋转角度 = 270°+90° =0°"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "设备条件："
              })
            }), "  手机竖屏、充电口向上。  使用前置相机拍摄。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "可得："
              })
            }), "  - 前置相机镜头角度 = 270°  - 前置相机镜像出图  - 屏幕旋转角度 = 180°，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_rotation",
              children: "displayRotation"
            }), " = 2  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图像预览旋转角度 = 270°+180° = 90°"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "设备条件："
              })
            }), "  手机横屏、充电口向右。  使用前置相机拍摄。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "可得："
              })
            }), "  - 前置相机镜头角度 = 270°  - 前置相机镜像出图  - 屏幕旋转角度 = 270°，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_rotation",
              children: "displayRotation"
            }), " = 3  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图像预览旋转角度 = 270°+270° = 180°"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用自绘制预览角度处理",
      children: "应用自绘制预览角度处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用自绘制场景是指应用获取图片后，通过libyuv、GL等图形处理库进行二次处理，生成新的图像数据并送到显示设备进行渲染绘制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["常见的实现方式是通过使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-receiver-native-h/capi-image-receiver-native-h",
        children: "image_receiver_native.h"
      }), "创建的回调流，应用层作为消费端，自行处理图片旋转等操作，以适应自绘制场景的预览角度需求。自绘制场景预览角度与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%A2%84%E8%A7%88%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
        children: "预览旋转角度"
      }), "中描述的场景存在细微差异。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主要差异体现在使用前置镜头拍摄预览的场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["自绘制场景可以按照", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E9%A2%84%E8%A7%88%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
          children: "预览旋转角度"
        }), "中的图示方式，先根据镜头的安装角度进行旋转，随后进行镜像处理，最后再次旋转以适应屏幕角度。然而，这种方式包含多个步骤，较为繁琐，不被推荐。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自绘制场景也可以采取先旋转再镜像的方式，这种方式需要考虑水平镜像和垂直镜像，具体的处理步骤如下图所示。"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "设备和镜头方向"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "处理过程示意图"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "设备条件："
              })
            }), "  手机竖屏、充电口向下。  使用前置相机拍摄。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "可得："
              })
            }), "  - 前置相机镜头角度 = 270°  - 前置相机镜像出图  - 屏幕旋转角度= 0°，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_rotation",
              children: "displayRotation"
            }), " = 0  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图像预览旋转角度 = 270°+0° = 270°"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "设备条件："
              })
            }), "  手机横屏、充电口向左。  使用前置相机拍摄。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "可得："
              })
            }), "  - 前置相机镜头角度 = 270°  - 前置相机镜像出图  - 屏幕旋转角度 = 90°，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_rotation",
              children: "displayRotation"
            }), " = 1  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图像预览旋转角度 = 270°+90° = 0°"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拍照录像角度",
      children: "拍照/录像角度"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在拍照、录像时，图像旋转角度与设备重力方向（即设备旋转角度）相关。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用后置相机拍摄时，图像旋转角度=", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%9B%B8%E6%9C%BA%E9%95%9C%E5%A4%B4%E5%AE%89%E8%A3%85%E8%A7%92%E5%BA%A6",
          children: "镜头安装角度"
        }), "+重力方向。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用前置相机拍摄时，图像旋转角度=", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%9B%B8%E6%9C%BA%E9%95%9C%E5%A4%B4%E5%AE%89%E8%A3%85%E8%A7%92%E5%BA%A6",
          children: "镜头安装角度"
        }), "-重力方向。"]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "设备和镜头方向"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "处理过程示意图"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "设备条件："
              })
            }), "  手机横屏、充电口向左。  使用后置相机拍摄。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "可得："
              })
            }), "  - 后置相机镜头角度 = 90°  - 设备旋转角度 = 90°  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图像预览旋转角度 = 90°+90° = 180°"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用需要监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-h/capi-oh-sensor-h#oh_sensor_subscribe",
        children: "OH_Sensor_Subscribe"
      }), "，获取重力传感器在x、y、z三个方向上的数据，计算得出设备旋转角度，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-angle-adaptation-native#%E8%AE%A1%E7%AE%97%E8%AE%BE%E5%A4%87%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
        children: "计算设备旋转角度"
      }), "。"]
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
763290(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438619-ff4bbeb35dfca95bc5aaaa971c39c62b.png");

},
982666(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
921090(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798926-10471b5382281ce7eae066b3e0f94f60.png");

},
42415(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958574-ea3fd719813478a8996936cb564e485a.png");

},
255866(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478575-d4adc371a78b8e27efa5396274c5ad47.png");

},
591788(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798924-f0deeacc180bdc08586a93bf480b0dc7.png");

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