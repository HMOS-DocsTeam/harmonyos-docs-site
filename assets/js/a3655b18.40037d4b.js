"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["347227"], {
51770(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_introduction_arengine_ability_arengine_ability_md_a36_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-introduction-arengine-ability-arengine-ability-md-a36.json
var site_docs_ar_engine_kit_guide_arengine_introduction_arengine_ability_arengine_ability_md_a36_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-introduction/arengine-ability/arengine-ability","title":"能力介绍","description":"AR Engine（AR引擎服务）是一个用于在HarmonyOS上构建增强现实应用的引擎，提供了运动跟踪、环境跟踪和命中检测等空间计算能力。","source":"@site/docs/ar-engine-kit-guide/arengine-introduction/arengine-ability/arengine-ability.md","sourceDirName":"ar-engine-kit-guide/arengine-introduction/arengine-ability","slug":"/ar-engine-kit-guide/arengine-introduction/arengine-ability/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-introduction/arengine-ability/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"能力介绍","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-ability","kit":"graphics","last_updated":"2026-04-20"},"sidebar":"docs","previous":{"title":"个人数据处理说明","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-personal-data/"},"next":{"title":"坐标系说明","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-introduction/arengine-coordinate/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-introduction/arengine-ability/arengine-ability.md


const frontMatter = {
	title: '能力介绍',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-ability',
	kit: 'graphics',
	last_updated: '2026-04-20'
};
const contentTitle = '能力介绍';

const assets = {

};



const toc = [{
  "value": "运动跟踪能力",
  "id": "运动跟踪能力",
  "level": 2
}, {
  "value": "环境跟踪能力",
  "id": "环境跟踪能力",
  "level": 2
}, {
  "value": "命中检测能力",
  "id": "命中检测能力",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "能力介绍",
        children: "能力介绍"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AR Engine（AR引擎服务）是一个用于在HarmonyOS上构建增强现实应用的引擎，提供了运动跟踪、环境跟踪和命中检测等空间计算能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过这些能力，应用可以实现虚拟世界与现实世界的融合，给用户提供全新的视觉体验和交互方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AR Engine包含三大能力，分别是运动跟踪能力、环境跟踪能力和命中检测能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运动跟踪能力",
      children: "运动跟踪能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AR Engine通过获取终端设备摄像头数据，结合图像特征和惯性传感器（IMU），计算设备位置（沿x、y、z轴方向位移）和姿态（绕x、y、z轴旋转），实现6自由度（6DoF）运动跟踪能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 6DoF运动跟踪能力示意图（红色线代表设备运动方向）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/QCKTRfE8RwKNyKDtP1TSrA/zh-cn_image_0000002573974537.png?HW-CC-KV=V1&HW-CC-Date=20260423T051603Z&HW-CC-Expire=86400&HW-CC-Sign=DAEB991E61486CB50403190D7924F9435F2A0FD37700BDAFCB59865094D6CB9B",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境跟踪能力",
      children: "环境跟踪能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AR Engine通过检测和跟踪设备周围的平面及语义，实现环境跟踪能力。环境跟踪能力包括：平面检测、平面语义、目标语义、深度估计、环境网格扫描、图像跟踪和高精几何重建。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "平面检测"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检测水平和竖直平面（如地面、墙面等），并识别平面边界。应用可使用这些平面来放置虚拟物体。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图2"
            })
          }), " 平面检测示意图（左图为水平平面，右图为竖直平面）"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/iu5Mm9JuRlmIrfe1AVHjQA/zh-cn_image_0000002543374310.jpg?HW-CC-KV=V1&HW-CC-Date=20260423T051603Z&HW-CC-Expire=86400&HW-CC-Sign=EE5ED9132FBCFCBDD1A2244A7EC978A7DE7FB45263713B6652522528AC513B2D",
            alt: ""
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "平面语义"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检测不同的平面类型。当前支持的平面类型共11种，分别为：墙面、地面、座椅面、桌面、天花板、门面、窗面、床面、平面空间、立方体体积、立方体空间容积（平面空间、立方体体积和立方体空间容积仅在高精几何重建模式下支持）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图3"
            })
          }), " 平面语义示意图（蓝色表示地面，绿色表示桌面）"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/pFiTgzX3TCSTledrPIg7UA/zh-cn_image_0000002543214648.jpg?HW-CC-KV=V1&HW-CC-Date=20260423T051603Z&HW-CC-Expire=86400&HW-CC-Sign=74352463E186D75AD00BCE8F81FBDDAB01B5AF04971E3FD1D3821C32F1BEBA9E",
            alt: ""
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目标语义"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当目标物体位于平面上时，检测目标物体的形状，当前包括矩形和圆形。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图4"
            })
          }), " 目标语义示意图 (左图为矩形检测，右图为圆形检测）"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/15TIyuULTHahpWz3h8xo9w/zh-cn_image_0000002573854563.jpg?HW-CC-KV=V1&HW-CC-Date=20260423T051603Z&HW-CC-Expire=86400&HW-CC-Sign=078FC2C5E7A1E4CE81E4388A914E3162EF9CFB269FF5C3DAABD964A561B1F075",
            alt: ""
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "深度估计"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持持续输出周围环境相对终端设备的深度信息，利用这些深度信息，可以实现更加自然、无缝的虚实体验。本功能提供的深度信息是指从终端设备摄像头到显示场景中各点的深度值，每个像素点都有该深度值。同时输出置信度信息，开发者可自行根据应用需求根据置信度选择更稠密或者更精确的深度信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图5"
            })
          }), " 深度渲染示意图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/22/v3/rBLQ4hY2RSe_IxkrEnXOXg/zh-cn_image_0000002573974539.png?HW-CC-KV=V1&HW-CC-Date=20260423T051603Z&HW-CC-Expire=86400&HW-CC-Sign=81D0E1BF887E9442BF0DBA06A6B7073222AE80D8D2AFC0F360419D63406A8F51",
            alt: ""
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "环境网格扫描"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实时计算并输出当前画面中的环境网格数据，可用于处理虚实遮挡等应用场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过环境网格能力，可将虚拟物体放置在任意可重建的曲面上，而不再受限于水平面和垂直面。同时可利用重建的环境网格实现虚实遮挡和碰撞检测，使得虚拟角色能够准确的知道当前所在的周围三维空间情况，实现更好的沉浸式AR体验。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图6"
            })
          }), " 环境网格扫描示意图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/t-I34XliSfuX6f90K4geww/zh-cn_image_0000002543374312.png?HW-CC-KV=V1&HW-CC-Date=20260423T051603Z&HW-CC-Expire=86400&HW-CC-Sign=A16FB4C941658D7F678010DCE8C8929B0932030F0B2CBCB8C84DDE6ED10F4362",
            alt: ""
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图像跟踪"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AR Engine提供图像识别与跟踪的能力，检测场景中是否存在用户提供的图像，识别之后输出图像的位姿。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过图像识别与跟踪功能，可实现基于现实世界场景中图像（海报或封面等）的增强现实。可提供一组参考图像，当这些图像出现在终端设备的相机视野范围内时，AR Engine可为AR应用实时跟踪图像，丰富场景理解及交互体验。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图7"
            })
          }), " 图像跟踪示意图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/5pGXyoMeTg6Yonk1Qfo_3Q/zh-cn_image_0000002543214650.png?HW-CC-KV=V1&HW-CC-Date=20260423T051603Z&HW-CC-Expire=86400&HW-CC-Sign=C0721668A8538C4CC7A3397270AAFF1952B00FCBBC0C45C74767B545DE106022",
            alt: ""
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "高精几何重建"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AR Engine高精几何重建用于识别空间中的立方体物体或者嵌入式立方体空间，计算出被识别物体或空间的长、宽、高以及体积。体积测量可以用于测量立方体体积以及嵌入式空间的大小。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "高精几何重建主要包含稠密点云绘制、体积测量、空间识别三大能力。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图8"
            })
          }), " 稠密点云绘制示意图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/U9gyRl20SF6Z2QRRk7uvPA/zh-cn_image_0000002573854565.png?HW-CC-KV=V1&HW-CC-Date=20260423T051603Z&HW-CC-Expire=86400&HW-CC-Sign=B77F322E4B75DFE46C253E423F9A46A376105450DDF7284FE56A521902B61152",
            alt: ""
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图9"
            })
          }), " 体积测量示意图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/LROUtqBSQDag6-WaYfpqWA/zh-cn_image_0000002573974541.png?HW-CC-KV=V1&HW-CC-Date=20260423T051603Z&HW-CC-Expire=86400&HW-CC-Sign=9835DE1C9E5D69EFF7A71ADEB8E3944130F44229B850271F5087A3A120AD1846",
            alt: ""
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图10"
            })
          }), " 空间识别示意图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/3CTkyy7uQfeuaZrCN6RMdw/zh-cn_image_0000002543374314.png?HW-CC-KV=V1&HW-CC-Date=20260423T051603Z&HW-CC-Expire=86400&HW-CC-Sign=3ABD3E6BA0A7ED0B83E912D63E540156E694D48025FF9511E88FE5ED151D2793",
            alt: ""
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命中检测能力",
      children: "命中检测能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AR Engine通过命中检测（Hit Testing）技术，将终端设备屏幕上的兴趣点映射为现实环境中的兴趣点。命中检测以现实环境中的兴趣点为源，发出一条射线连接到摄像头所在位置，返回射线与平面（或特征点）的交点。通过命中检测能力，用户可以通过点击终端设备屏幕，选中现实环境中的兴趣点，与虚拟物体进行交互。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图11"
        })
      }), " 命中检测示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/8B_HzJY2TEmScgx6z1l1pg/zh-cn_image_0000002543214652.jpg?HW-CC-KV=V1&HW-CC-Date=20260423T051603Z&HW-CC-Expire=86400&HW-CC-Sign=AD097BBDCF0808C626522CE35251FA68A204EBC2B91B36BD69BEF0744382F359",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过以上能力，可以实现AR场景的应用开发，如AR物体摆放等，为用户提供虚实融合的全新交互体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AR物体摆放：通过摄像头构建AR虚拟世界，支持用户在虚拟世界中放置虚拟物体。AR物体摆放可用于虚拟家具试用等，实现虚拟与现实世界融合。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "平面语义识别：对于检测到的平面，开发者可以对平面进行平面的语义识别，包括墙面、地面、座椅面、桌面、天花板、门面、窗面、床面等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目标形状识别：对于检测到的目标物体，开发者可以对目标物体进行形状识别，可识别的形状包括矩形和圆形。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "网格扫描：通过摄像头构建AR虚拟世界，通过重建周围环境网格实现虚实遮挡和碰撞检测，支持用户在虚拟世界中放置虚拟物体。通过感知当前所在的周围三维空间情况，实现更好的沉浸式AR体验。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "深度估计：通过摄像头获取周围环境信息，持续输出周围环境的深度信息，为用户提供环境三维感知能力。该技术可应用于测量、体积估算、场景重建等获取空间物体深度信息，基于此信息完成一些空间计算任务，比如计算物体体积等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图像跟踪：通过摄像头获取周围环境信息，持续检测场景中是否存在输入的图像，识别之后输出图像的位姿。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AR Engine提供图像识别与跟踪的能力，检测场景中是否存在用户提供的图像，识别之后输出图像的位姿。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过图像识别与跟踪功能，可实现基于现实世界场景中图像（海报或封面等）的增强现实。可提供一组参考图像，当这些图像出现在终端设备的相机视野范围内时，AR Engine可为AR应用实时跟踪图像，丰富场景理解及交互体验。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "高精几何重建：通过摄像头获取周围环境信息，识别空间中的立方体物体或者嵌入式立方体空间，计算出被识别物体或空间的长、宽、高以及体积。体积测量可以用于测量立方体体积以及嵌入式空间的大小。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit当前仅支持在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）接入使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
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