"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["326520"], {
765110(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_3_d_arkgraphics_editor_arkgraphics_editor_md_ef4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-3-d-arkgraphics-editor-arkgraphics-editor-md-ef4.json
var site_docs_arkgraphics_3_d_arkgraphics_editor_arkgraphics_editor_md_ef4_namespaceObject = JSON.parse('{"id":"arkgraphics-3d/arkgraphics-editor/arkgraphics-editor","title":"ArkGraphics Editor插件及编辑器的下载与安装","description":"3D编辑器ArkGraphics Editor提供3D模型、动画、ShaderGraph等核心编辑能力，可供设计师、开发者快速接入使用。支持通过拖拽等操作，利用3D编辑器可视化能力，完成3D场景开发，3D设计效果所见即所得。无需代码编写，支持从PC到移动端设备的快速流转， 可大幅提升3D应用开发效率。","source":"@site/docs/arkgraphics-3d/arkgraphics-editor/arkgraphics-editor.md","sourceDirName":"arkgraphics-3d/arkgraphics-editor","slug":"/arkgraphics-3d/arkgraphics-editor/","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics-editor/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"ArkGraphics Editor插件及编辑器的下载与安装","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkgraphics-editor","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkGraphics 3D场景动画控制以及管理","permalink":"/harmonyos-docs-site/arkgraphics-3d/arkgraphics3d-animation/"},"next":{"title":"Graphics Accelerate Kit简介","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-3d/arkgraphics-editor/arkgraphics-editor.md


const frontMatter = {
	title: 'ArkGraphics Editor插件及编辑器的下载与安装',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkgraphics-editor',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkGraphics Editor插件及编辑器的下载与安装';

const assets = {

};



const toc = [{
  "value": "主要功能",
  "id": "主要功能",
  "level": 2
}, {
  "value": "插件的安装及编辑器的使用",
  "id": "插件的安装及编辑器的使用",
  "level": 2
}, {
  "value": "创建使用3D编辑器资源的工程",
  "id": "创建使用3d编辑器资源的工程",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkgraphics-editor插件及编辑器的下载与安装",
        children: "ArkGraphics Editor插件及编辑器的下载与安装"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3D编辑器ArkGraphics Editor提供3D模型、动画、ShaderGraph等核心编辑能力，可供设计师、开发者快速接入使用。支持通过拖拽等操作，利用3D编辑器可视化能力，完成3D场景开发，3D设计效果所见即所得。无需代码编写，支持从PC到移动端设备的快速流转， 可大幅提升3D应用开发效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "主要功能",
      children: "主要功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkGraphics Editor编辑器当前主要支持功能如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "编辑器工程的新建、打开、保存功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持导入gltf格式的3D模型和image图片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持相机新增、修改、删除。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持3D场景里模型的缩放、移动、旋转等拖动操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持3D场景节点新增、修改、删除功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持3D场景节点的属性设置，包括位置、颜色，旋转、缩放功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持3D模型的动画新增、修改、删除功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持3D模型的材质新增、修改、删除功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持3D模型的ShaderGraph新增、修改、删除功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持环境光的添加和设置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkGraphics Editor插件支持的主要功能如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持在DevEco中预览3D场景文件(.Scene)。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可点击“Open ArkGraphicsEditor”打开编辑器程序编辑3D资源。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "插件的安装及编辑器的使用",
      children: "插件的安装及编辑器的使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["前往", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/download/",
            children: "下载中心"
          }), "下载最新版本ArkGraphics Editor插件。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击DevEco Studio菜单项的File，选择Settings，选择左边列表的Plugins。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击Plugins窗口的顶部设置按钮，选择Install Plugin from Disk...。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(659252)/* ["default"] */.A) + "",
            width: "532",
            height: "384"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择下载的插件，进行安装。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装成功后，关闭DevEco Studio，再重新打开，选择3D工程里的*.scene文件，可在DevEco Studio里打开显示3D场景内容。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["前往", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/download/",
            children: "下载中心"
          }), "下载最新版本ArkGraphics Editor编辑器，并进行安装。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "插件主要用来预览，当开发者需要进行3D编辑开发时，可点击“Open Ark Graphics Editor”打开3D编辑器对3D模型进行编辑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(959897)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "要使用ArkGraphics Editor编辑器，需要满足以下条件："
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "对应设备已安装Visual Studio 2022 Community。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Visual Studio 2022 Community已安装使用C++ 进行桌面开发的选项。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "编辑器生成的3D资源文件，目前只支持在HarmonyOS 6.0.0及以上版本的设备上加载呈现。"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(780024)/* ["default"] */.A) + "",
            width: "539",
            height: "271"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建使用3d编辑器资源的工程",
      children: "创建使用3D编辑器资源的工程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个新工程或在已有工程下，右键工程名，选择New，选择Ark Graphics Editor Project。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(860428)/* ["default"] */.A) + "",
            width: "552",
            height: "367"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入3D资源工程名。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(754415)/* ["default"] */.A) + "",
            width: "554",
            height: "389"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "双击default.scene，可显示创建的3D场景资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(148772)/* ["default"] */.A) + "",
            width: "548",
            height: "374"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击右下角Editor，可打开编辑器编辑3D资源，编辑保存后，可显示编辑后的资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(683596)/* ["default"] */.A) + "",
            width: "553",
            height: "382"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改复制资源脚本文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "脚本文件路径：xxx/MyApplication/entry/hvigorfile.ts"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行工程时会执行该脚本将3D资源复制到assets目录下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/hvigorfile.ts\nimport { hapTasks } from '@ohos/hvigor-ohos-plugin';\n \nimport { getNode } from '@ohos/hvigor';\nimport * as MyEditorProject  from '../ArkGraphics/package-assets';\nMyEditorProject.packageAssetsToModule(getNode(__filename));\n \nexport default {\n    system: hapTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改Index.ets，加载3D资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注意Index.ets代码内容中加载的目录名与3D资源工程名保持一致。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport * as scene3d from '@ohos.graphics.scene'\n \n@Entry\n@Component\nstruct Index {\n  scene: scene3d.Scene | null = null;\n  cam: scene3d.Camera | null = null;\n  @State sceneOpts: SceneOptions | null = null;\n  @State statusText: string = \"\";\n \n  onPageShow(): void {\n    this.Init();\n  }\n \n  Init(): void {\n    if (this.scene == null) {\n      this.statusText = 'Loading scene. Please wait.'\n      const resource = $rawfile('ArkGraphics/assets/default.scene');\n \n      scene3d.Scene.load(resource).then(async (scene: Scene) => {\n        this.scene = scene;\n \n        this.cam = this.scene.root?.getNodeByPath(\"Perspective Camera\") as scene3d.Camera;\n        this.cam.enabled = true;\n \n        this.sceneOpts = { scene: this.scene, modelType: ModelType.SURFACE };\n        this.statusText = 'Done.'\n      }).catch(() => {\n        this.statusText = 'Failed to load scene.'\n      })\n    }\n  }\n \n  build() {\n    Row() {\n      Column() {\n        Text('Ark Graphics Scene Example 3')\n        if (this.sceneOpts) {\n          Component3D(this.sceneOpts).width('70%').height('70%')\n        }\n        if (this.statusText) {\n          Text(this.statusText)\n        }\n      }.width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完成以上操作后，可在真机运行工程，观察3D资源加载效果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(117007)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑器生成的3D资源文件，目前只支持在HarmonyOS 6.0.0及以上版本的设备上加载呈现。"
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
117007(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
659252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438749-5dbfdd36aecbdf7bf99fd513a548842e.png");

},
780024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958704-54cfdc87ec4c38d0930ad4a785e7c738.png");

},
683596(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958706-48c6da08540e5a31ae32285d81b08460.png");

},
754415(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799056-4e9dd0203a6118c497ef9a567daccc18.png");

},
148772(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438751-23c99e3ccb98fdc6a1c36bd4e3efb0f5.png");

},
860428(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478705-af035931609a88066711f4a4c3cbb28e.png");

},
959897(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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