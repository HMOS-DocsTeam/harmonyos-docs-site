"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["957257"], {
808444(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_creating_har_api_9_ide_hsp_ide_hsp_md_98c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-creating-har-api-9-ide-hsp-ide-hsp-md-98c.json
var site_docs_ide_project_ide_module_management_ide_creating_har_api_9_ide_hsp_ide_hsp_md_98c_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-creating-har-api9/ide-hsp/ide-hsp","title":"开发动态共享包","description":"DevEco Studio支持开发动态共享包HSP（Harmony Shared Package）。在应用/元服务开发过程中部分功能按需动态下载，或开发元服务场景时需要分包加载，可使用HSP实现相应功能。当有多个安装包需要资源共享时，也可利用HSP减少公共资源和代码重复打包。","source":"@site/docs/ide-project/ide-module-management/ide-creating-har-api9/ide-hsp/ide-hsp.md","sourceDirName":"ide-project/ide-module-management/ide-creating-har-api9/ide-hsp","slug":"/ide-project/ide-module-management/ide-creating-har-api9/ide-hsp/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-creating-har-api9/ide-hsp/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"开发动态共享包","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hsp","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"开发静态共享包","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-creating-har-api9/ide-har/"},"next":{"title":"发布共享包","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-creating-har-api9/ide-har-publish/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-creating-har-api9/ide-hsp/ide-hsp.md


const frontMatter = {
	title: '开发动态共享包',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hsp',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '开发动态共享包';

const assets = {

};



const toc = [{
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "开发动态共享包",
  "id": "开发动态共享包-1",
  "level": 2
}, {
  "value": "创建HSP模块",
  "id": "创建hsp模块",
  "level": 3
}, {
  "value": "编译HSP模块",
  "id": "编译hsp模块",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "开发动态共享包",
        children: "开发动态共享包"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio支持开发动态共享包", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
        children: "HSP（Harmony Shared Package）"
      }), "。在应用/元服务开发过程中部分功能按需动态下载，或开发元服务场景时需要分包加载，可使用HSP实现相应功能。当有多个安装包需要资源共享时，也可利用HSP减少公共资源和代码重复打包。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(956074)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用内HSP：在编译过程中与应用包名（bundleName）强耦合，只能给某个特定的应用使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "集成态HSP：构建、发布过程中，不与特定的应用包名耦合；使用时，工具链支持自动将集成态HSP的包名替换成宿主应用包名。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HSP及其使用方都必须是API 10及以上版本Stage模型。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HSP及其使用方都必须使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-build-optimized/ide-hvigor-esmodule-compile",
          children: "模块化编译"
        }), "模式。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从DevEco Studio 6.0.1 Beta1开始，创建HSP模块时支持选择C++版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发动态共享包-1",
      children: "开发动态共享包"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建hsp模块",
      children: "创建HSP模块"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过如下两种方法，在工程中添加新的Module。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["方法1：鼠标移到工程目录顶部，单击鼠标右键，选择", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "New > Module"
              })
            }), "，开始创建新的Module。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["方法2：选中工程目录中任意文件，然后在菜单栏选择", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "File > New > Module"
              })
            }), "，开始创建新的Module。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["模板类型选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shared Library"
            })
          }), "，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Next"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(730037)/* ["default"] */.A) + "",
            width: "957",
            height: "611"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Configure New Module"
            })
          }), "界面中，设置新添加的模块信息，设置完成后，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finish"
            })
          }), "完成创建。从DevEco Studio 6.0.1 Beta1开始，支持选择C++版本。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Module name"
              })
            }), "：新增模块的名称，如设置为library。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device type"
              })
            }), "：支持的设备类型。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Enable native"
              })
            }), "：是否创建一个用于调用C++代码的模块。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "****C++ Standard：****C++标准库，取值包括：Toolchain Default、C++11、C++14。仅打开Enable native时需要配置。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(578156)/* ["default"] */.A) + "",
            width: "941",
            height: "604"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建完成后，会在工程目录中生成HSP模块及相关文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(859855)/* ["default"] */.A) + "",
            width: "327",
            height: "339"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "编译hsp模块",
      children: "编译HSP模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(711971)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果HSP未开启", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-obfuscation",
        children: "混淆"
      }), "，则后续HSP被集成使用时，将不会再对HSP包进行混淆。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
        children: "应用内HSP开发指导"
      }), "开发完HSP模块后，选中模块名，然后通过DevEco Studio菜单栏的****Build > Make Module ${libraryName}****进行编译构建，生成HSP。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(562695)/* ["default"] */.A) + "",
        width: "214",
        height: "111"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包HSP时，会同时默认打包出HAR，在模块下build目录下可以看到*.har和*.hsp。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(575954)/* ["default"] */.A) + "",
        width: "325",
        height: "260"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如需在应用内共享HSP，请将HSP共享包上传至私仓（请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-quickstart#zh-cn_topic_0000001792256157_%E4%BB%8Eohpm-repo%E8%8E%B7%E5%8F%96%E4%B8%89%E6%96%B9%E5%BA%93",
        children: "将三方库发布到 ohpm-repo"
      }), "），请先按以下操作编译生成*.tgz包。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击工具栏", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(186057)/* ["default"] */.A) + "",
            width: "19",
            height: "16"
          }), "图标将编译模式切换成release模式。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(773773)/* ["default"] */.A) + "",
            width: "536",
            height: "351"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选中HSP模块的根目录，点击****Build > Make Module ${libraryName}****启动构建。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(429501)/* ["default"] */.A) + "",
            width: "214",
            height: "111"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构建完成后，build目录下生成HSP包产物，其中.tgz用来上传至私仓。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(483290)/* ["default"] */.A) + "",
            width: "344",
            height: "277"
          })
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
578156(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912920-7fb9a52d7820d072a3c94d2f179cf90e.png");

},
429501(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832835-a86d5ea8ad42de366d003bc06afc5fbd.png");

},
773773(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752914-01db4eff2128b105c8f1ed07095ae5e4.png");

},
562695(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912916-a86d5ea8ad42de366d003bc06afc5fbd.png");

},
186057(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAIAAAB7ptM1AAAArElEQVQ4EbWSMQ7DMAhFc2LL8sjGCdxzcIJ68YxY6WyuUslEiZu0VeSqf/qyePqAWWxWyyxofyDvXV86ep/JzLcuZv4EH0kRQcQwCBFF5My/kCKSUhqo1aaUzvBOttY8LcZIRI8uIooxhhAQsbU2Ju8kM3sEEdVaoavWSkT+fph5JUspOWevUFUAcA8Aquo+51xK2WJ/Js1sslszm9+QmU3+io8+eQnb3q5c3xNhS63JyFFCKQAAAABJRU5ErkJggg==");

},
575954(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
483290(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752934-6af1d5c502e1e2c5317b98b929e77ca2.png");

},
711971(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
859855(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAAFTCAIAAAAlbFmxAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAgAElEQVR4nO3df2wc9d0n8M8kUELWlZ2G+HCPFDthlk1gSSUert1t+pDUvcBOLTCPsJ5C1WdVVezoeMoDu3W5Eimn0+WUp+Qxs22fCrRLf2h7KNJzpsLlzCzQx8QWebwnECrgPs5mJzm7NEpcB4hdcEiInbk/ZnZ3dmd2vWvvj5mv3y9Vqhl/Z+YbiTffmdmdd7jR0VECAIZcRUShl9RmTwMAaiP+DW5ds+cAADWGVAOwBqkGYM1VjTnNj+6+Jvfz3EX1tVOLb/zpSmNODbDWNGGtbtvA/c0tV39t+/L/QblyfefLh/ecOLzzXlW9om55Oveztr2/c6eK53wAxapeqz+/acOly1c++PhT48bNLZ+55up1Z85frPw4+/j1+/j15u0/fPlStVOqkyu7dirfaidaeFZ6Y2CGa/Z0ACpVdar/+3385zdtCMbeyQV7c8tnEuKuM+cvhn45Uevp5a3jzj38+CgREVf3gF1RXY//4I6H2ut9HoC6qPoK/In/fYKIEuKuzS2foWykc9vrx3gFnt/6xVtOHN5z4vCel+9yUe6K/dtb7v32nhOHd95zZWN//x5twInDd/Rfr5rGeJ/uN/xKdfX37zlx+I4fXK8SzT7+gzefna3rnwmgLqpO9QcffxqMvUNECXEXf71Li7Rx6W6c9s4XvqWvp13dO7VkEhH9h87/4tV+2rgtv966Horckv8vgj5m6Z2JBSLX13e1EBF1bPl6O9HE9FN/vjAwMPlCY/4UALW2kqdluWD/n/Ad1KxIExHNPv6Dozc/Pvr4BOWTSUTt9K/S0Zsfn3xx3fsPPz568+OjuTF8BxWNeeadc1NEXd4tO1X11l1buohG3sUCDc62wk+2tGD/t17+fwwpq4n0qp6NzV5QiIhImV0gcuW3T0xrD7fK3R5nx6ybmX5movOwdyNPLbzXRTT7yttEeDQGTrbyz6s/+PjTR5/799XP4PN7u4q2nDk6VdGe7Rt5oj+oLsHrIqL/N/Mx0Rbj72+9e+dD7foT7Hu/veew1/owL7w7e9jbftfdF7a1E02c+239n8YB1FWDvoVSH+2H/6n9sP7z7CtvE3WYx7geiux9qPxh3j438q32bd4tXbTw7O9msVKD0zn5G6Oz08/qH6UtPCv9u3mN/cPL0yPFIy2s4869MkFd7S6aPSefrc9UARqIGx0dbe6bmCu/Aq+dnXfd8UK3a2rkzbtfWWjwqQFqC29iEhFd0e/MF/71nY+bPReAGnD0fXUN5J+iZZ+KAzhd81Pd+OttC7PT9/16tgHfRQVogOanurl++79Gf6v9hEgDK64iohOH9zR7GgBQG2NjY3haBsAapBqANUg1AGts/bTshVfHcj9v3HDNzdtu7LzB4kuhAGDkmLX6wsVLv5/MnJh6r9kTAbC7Bq3V8/PzV111lcvlMm5cWFhYXFxsbW2t/DiTytSkYvH59n377lztFAFY0aC1+qWXXkokEgsL+W9ZLywsJBKJl156qTETAFg7GpTqe++9l4hywdYindsOADXUoFS7XK5gMEhEiURidnZWi3QwGCy6Jq8VJerndGIyu0FMJkWO4/xRhYgoKWZH6BsAWNG4p2W5YD/zzDNUz0iTEg1GvLKqiQWym+PCUK+qquNhnpIiJ0xIGW3EeJivyzQAmqShz8C1YO/cubOOkSYi3uOluGBag0NyNuHJobhPSiDMwKhGf7Llcrn6+vrqGGkiokBMVVU1QUFcX8Na5JjPq6ugRKNJIuLD4xnJl0qfNA0I9IZSkYGk9g/JKHIPbLH1d8tWiA97BjhOICKikKwGzCMCsYzkd2vvXoZkNdbQ6QHUGTc6OnrnnfgKBwAj8CYmAIOQagDWINUArEGqAViDVAOwBqkGYA1SDcAapBqANQx+twxtZ7DGMb5W173tTIn68QIJ2Iyt12q0nQGsgK3Xage0nfHhcdQugM3YOtVoOwNYAVunurFtZ0mR80eTeuOZmMxXm+Xvm019aHohWm73qGkXgIazdaqpkW1nRESpyEFKqKoqh+ICxw31qqqqZiTSGxaU6AAltK4zORQX9FwX7J7O7RJErqFZ7J5qaljbGRFRts0s0Bsin9QfINJa0CbSChHx4ViYtNVaiFvvru/S0+er5zQBynJAqqlBbWfLUaJ+jgtqq3VGQmzBtmz9yZa9nEynfFImzBORMjyYIm+zJwRgzRlrtS0E+iWKuDmO47hg2ou1GmwLvWUATEFvGQCDkGoA1iDVAKxBqgFYg1QDsAapBmANUg3AGqQagDX4xqjuqT98kPv5s1ev+/KWa2/73IYmzgdgxbBWW/jo8pXfnVn4v+c+afZEAFaCwbW6Vm1n//bnC//25wvm7d+/dfNqpwhQTwyu1TZoO8s3pAA0HoOpRtsZrHEMprqxbWeU7zfT68qSIueOpCgu6P9sLjsDqCsGU00NbTtLitxBT0ZrM8v0DbrFZCCmZiQfhWRVHQ/zSjQY8cra79VYoD6TADBiM9XUsLaz5FCcUnqXAueOpPSKszze46W4gNJRaCBmU00NazvzSfpSraqqaq78D8RUVVUTFEShMDQIy6luhEBvKKUXCxNRUjTdOSvRaJKI+PB4RvKl0icbPD9Yixj8vLqxArGM5HdzHBERhWQ1RqRVB0cELu6TMuNhzwDHCdlf48Ya6g+9ZQBMQW8ZAIOQagDWINUArEGqAViDVAOwBqkGYA1SDcAapBqANfhu2aq88OpY7ueNG665eduNnTd0NHE+AIS1uoYuXLz0+8nMian3mj0RWOuwVutq1XY2qUxNKlPm7fftw9dyoUGwVuts0HYGUBtItQ5tZ8AMpFrX2LYzrYQ0X3iWfy3buuUsN9IfjYqG8oWiyrTSB4C1BKnOa2DbGRFRXBjq1fpT5FBc0BKoRAcoUbwxKXIC6dVnCRqMZw9grkwjQk0aINVFGtR2RkREITmbukC/5IsPaZUpsTBpi62QTW9yKO6T+vWhfPhAKL/dXJmGmjRAqs0a1HZmSYn6OS6ordYZybfseIvKNNSkAVLdPNrqTNpVcyrUGyA6mU75pESYJyJleDCl/bqgGk2JHsyu4ZaVaahJA6S6iUI0lL169sraPXCgXyL9mjqY9mbX6kAsI00I2tgg9WWvwAu2c0O9sQAR8WGP4ai4sV6b0FvWFErU704fWNHjLO0ZmamgGECD3jJHUKJ+MX+hLcR9fT2INJSBb4zaHx9OePzZ9mGfhHUaloFUNwUfHlerHB6u22SANbgCB2ANUg3AGqQagDVINQBr8LSs+Y6fmt6xvdNYlkRoWYBVwFrdZMdPTadP/bHZswCmINXNVN9IJ0W837E2IdVNs4JII6dQCdxXN82O7Z07tnc2exaVW8V316GxkOqmKXo8BlAruAJ3qKSodZgVlpYZm8zybSqF27XBStSfKzZLiuaOs6LxSZFzR1IUF/R/RjuarY2OjqrgEHIoV38ih4goJKuq1pqibZZD2W36P+ijDfupGcmnj9G3Gn9pPk9+fH5H449gN6Ojo7gCb4L9b81WOPLQ7e2lf5ltM+N7+nyDRHrDWSZ73xvoDdEE6dspRW4uktszrVCAD8TkIc7NkU/KxAreArMebxjAe7wUEbgJvD9mT0h1cxw7lIsMbf3ru//0+iv6z1+9S11aPPvm60uXP939xFM1O1+1L3BajDc+ew/EVDWmXYan8G6o7eC+uml275e0/924e58W4N1PPHXj7n1n33zd+3f/sJJIV9VwRpQUhQkpk5EoEszdavujSsnxeWhHszes1U2jLde790tF27d+5evH/yXu6tjKf+NvqzxkICaHOIGLExH5JClEg9ntGcnv5jgiIgrJakwrGZ+QMjGep4Q06HaLHrXfcBzTeO1CPyJwcZ+UGQ97BrI1DiFZxWddNoPesibY/9bssUORojwf+8fv59bnK0tLx3/zy9Yv3PTrv6822LDWjY2NYa1umtytdVG8Jwd/cf7U8Wuvu75tm6cZ8wLHQ6qbw3zhnVuod/Z9t+HTAaYg1U1Q9vMqgNXCM3AA1iDVAKxBqgFYg1QDsAapBmANnoGvivEd6Y0brrl5242dN3Q0cT4AhLXaaG5u7siRIwsLCyvb/cLFS7+fzJyYeq8GU8l9JZuSIl5ghiphrc67+uqr5+bmEolEMBh0uVwrO8ikMjWpTJm3owkYGgZrdZ7L5QoGg0SUSCRWvGKvghL1Z9dlPjyu4vVGWCGkukCzgw1QA0h1MZfLdf/99587d06W5Xqdw7Aqaz/LhcVgGeMA406oCoMKINXFFhYWnn/++S1btgiC0LCTchSI5drAxsNu8wglGox4s1VhaO+FcpDqAgsLC4lEgohW88CsLniPl+ICSv6hAkh1nn0jTaRVhalqgoKFTcEAJkh13uXLl9va2hoV6Ym0QkSkDA+mKhmOqjCoGFKd19bW9uCDDzYi0nw4IVHEzXEcF0x7fdmtPX0+/WmZ1S6eIe1RmTvilXFjDWWgtwyAKWNjY1irAViDVAOwBqkGYA1SDcAapBqANUg1AGuQagDWINUArEEXig4NZMAMNtdqGzWQATQcm2s1GshgLWNzrUZREaxlbKaaEGxYw5hNNTWmgUyvIEuK+S6DpJitF8uVG1hVjuWHcYUdZqafKzlFhSeFNYHlVDesgSwuDPWqqjoe5ikpcgc9Ga1dLNM36BaTlpVjSZETJiR9nCqTsFzwCk+R33c8zFOlJ4W1gtlUN7KuKJRrMUgOxSml1SFwnDuSoom0YlE5lhyK+6REru870C/54kNlY11wCuO+lZ8U1gw2U93MBjJfbgnOraWVVI75PDc1/qTAJjZT3dgGMoNAbygVGcjfOotJsqocC/SGUpFgLmrJgQj19eir73J9ZgWnSEajSqUnhTWDzc+rtQayZpw5EMtIfjfHERFRSFZjRMSHPQMcJ2Q3BYgoEFNlkXNzEcpuDfOk9ZkNut1chMgXCvksz1BwCu0MfGUnhbUCvWUATEFvGQCDkGoA1iDVAKxBqgFYg1QDsAapBmANUg3AGja/hbJ6x09N79jeaaw9IvQlgENgrbZw/NR0+tQfmz0LgBVCqos1J9JJsewrGEmxkneklagfL3IAUl0Eq7TG0LiAzgXnwX11gR3bO3ds7zRv33jthgufXGz4dKrEh8fVcE2OdDKd8kmZceNb3OAcSHWBosdjrZ91ebZ3tm/edNX69YuLS82aVVN4PYi0U+EKvKQW18Yv3bZz9NWXB558kogGDj955LnnLl26VDgqKXL+aFK/YBWT+QYxY/WJRUVZ0XYhrm+zri4rOmNxRZl530qb0rT5R4vmrKQnKC7g+tupkOqSOrZsfn1sdHpq6pHHHpv/6ONHHn10emrq6MiIaWAqcpASqqrKobjAcUO9qqqqGYn0IoNSFWVJkRMoWywmhyqclFVFmVl1TWmpSDo3Z63KgQ+P6wMz0oSAB3BOg1SXtPHaDXPz851dXbMfzL2Wemv2/F86u7rm5udNA7M1YoHeEPmk/gAREe/xaq0mpSrKkkPx7Fh910pYVpSZVdeUlptzT5+pqIEPHwilBocRa0dBqq3dt+/OL3S0nzl9uqWlZXFpiYgWFxdbWlrOnD69uLi4umPXvKLMrP5NaWBjSHVJD4vi2ZmZvd3d75+fJ6L3z8/v7e4+OzPzsChWcZRSFWUFZWNK9GDcsE/p6rISFWXFH1NX15Rmpii5gaIQ95UZCXaEVJf0dCzW0dFxdGTkuk2tRHTdptajIyMdHR1Px2LVHCYQU2Vv9qKZE0jWl9dATLsP5ziOC1Jf9gqcDyck0oYH017TFXEglpEm9L24od4SRd982DOUvUr3ap3DpaZhbTiYHTiBD7icB71lBYyfbO3awb9xbOzK0pJvT/fbk5kv7uBTY6+tW7/+mw880MQZlqNE/e70AXT6r23oLSvn4qVP21pbp6em2j/X+jXf7e2b26anp9taW5s9r5KU4cEUbpYB30IpUvRW1vatHR9++OE///jHP9y//0eHDnV2du7t7m7W3MpJipwQzzcQw9qGK3AApuAKHIBBSDUAa5BqANYg1QCsQaoBWMPgJ1vGb5Js3HDNzdtu7Lyho4nzAWgwu6/Vc3NzR44cWVhYWNnuFy5e+v1k5sTUe6uYwjKVYgB2Y/e1+uqrr56bm0skEqv5K+YnlalJZcq8vQFNwPrXQ4xCMr7TCXVl97Xa5XIFg0EiSiQSK16xm0h7JVJV5RCFZGOLQUWsy1AAyrN7qsn5wQZoMAekmohcLtf9999/7tw5WZbreZ5SBWNEw6Jps/Vgq8KwZc6Vu2s37itTUuTckRTFhdLFBwBWnJHqhYWF559/fsuWLYIg1O0kFTV7+eIHo0rpwRaFYaXOZaofK9xXoEBMzUg+CsklG08ALDkg1QsLC4lEgohW88BseVU1e5UabC4MK3Uuc/1YhfsCLMfuqW5QpK1V9bKyNriSwjBtuLl+rOJ9Acqye6ovX77c1tbWiEhX1exVarC5MKz07ub6sYr2BViO3VPd1tb24IMPNmSVrqrZq8Rgi8KwErub68cs9uV7+nx4WgbVQmsCAFPQmgDAIKQagDVINQBrkGoA1iDVAKxBqgFYg1QDsAapBmCN3btQVgC9ZbDG2X2ttkFvGYDD2H2tdnpvGUDj2X2tbmC90QpKwtArBnZk91QTessAquSAVFMjesvMJWHoFQOnsvt9tab+vWWBmJrx+N3pA1rbWLZXjCciJep3ix41dpPWKzaee2laKNgFwC4csFY3oeQIvWLgZHZPddN6y9ArBo5l91Q3rrfMCL1i4GR2T3UDe8uMJWHoFQMHQ28ZAFPQWwbAIKQagDVINQBrkGoA1iDVAKxBqgFYg1QDsMYZb3dojp+a3rG901hgRGg+ADBxzFp9/NR0+tQfmz0LAAdwRqprHGkl6jd/ydNyI4ADOSDVWKUBquKA++od2zt3bO+s5RH58LgaJiKtEUGvPchvBHA2B6S66PEYAJTngCvw1cnVj/mjUVG/cVaiflPxWKagL9RqL0qK2j8WlpkZG864/BG0wyVFrlwRGkA9OC/VHMe5u7bu/fLt93R/tdv/V2XHJkVOIFmrM0nQYLzgOBSIqRnJRyFZVcfD7or2SkXSvaqqqhmJIsGoog+eyPWmyCQYqoTjwlCvXqSSLUJTVVXN9A260TcM9eOwVHMct/uvdi1d+Ojpn0Qfe+R7P4tK777zTsnRyaG4T+rXqwL58IFQRecot1f2F3xPny8/OBHm9d8H+iVffCib2JCc7Sm0LEIDqA+HpZq/8YYz700fee65v+nrk37yk5233PKzn/60XLCbwOe5yXKzuQgNoC4clur/eP2W4RdfDH7nOx6PJ338+OjRo9/o6Rl+8cWCQblPngvqx5TowbjFEc2q2ivQG0rp1+JERMmBCPX1mANrWYQGUB8OS3WLa+PMzMy27dsn3n33F88++92HHrpbEGZmZkoMN9aPBanPfAWeLx7LVLFX4SlU2Zu9tuYEkq1XYasiNID6cEBvmfGTrf/8lf/0U2nglltvPfraa9996CHvbbcdn5x84Te/2X/gwPIH0p5YVXvtu7K9AJrEeb1l752Z6bnnnpeGh/fs3evZsSOdTid+9auee+4pMVyJ+g0fVglxn9XVcY32ArALB6zVZu++887wiy+ePXu2o6Oj5557btu1q+RQJep3R1JEROSTKl5xV7YXgA2MjY05MtUAUIrzrsABYFlINQBrkGoA1iDVAKxxwJuYOegtA6iEY9ZqNKIAVMgZqa4y0gWvSlcw1p99p9Jqp6RYt/ehlaif4zgu9PPl5mCxH97RhpIckGpWV2klGox4ZVVV4827h9D/u1LU+AAO54D76lK9ZRuv3XDhk4urPXrz6spOplP6S5vVzqF2cz6ZTuHLc+xxQKqLHo+1ftbl2d7ZvnnTVevXLy4uNWtWzPB6EGnWOOAK3KjFtfFLt+0cffXlgSefJKKBw08eee65S5cuWY3N94Tpl5bG2+3cz9b34IYqMqHU+9WGZrKCC9hyjWW5UUmRE/R6FFFebg7F99CG8YZLaHPpWtFGc+makp6guIDrb9Y4LNUdWza/PjY6PTX1yGOPzX/08SOPPjo9NXV0ZMQ8Uu8MU1VVDsWFqv6VNfaWqXLZ16tLnaWwscyi2CwQU+WQ1o8SE6znUEHPWe7WXFVVVXtnu0yPmrl0jQ+P6wMz0oSAB3CscFiqN167YW5+vrOra/aDuddSb82e/0tnV9fc/Lx5ZL4zrLBLbHkFvWUU6M3F2lA8mv3Xv9RZChrLSheblZtDJT1nvMdLcaGg77TM6Uyla8YjhQ+EUoPDiDUTnJTq+/bd+YWO9jOnT7e0tCwuLRHR4uJiS0vLmdOnFxcX63/+QKw2pWMlis2KR1XSc6ZNKUHBMn3ElZ0OGOKkVBPRw6J4dmZmb3f3++fniej98/N7u7vPzsw8LIpFI3MrlBINRlKhXn3p1Nc8ZXgwVeoc1fSWlThL8dGWLzYrN4dsz5n5Y2olGk0SER8ez0i+VPpktadTlNxAtEMwxGGpfjoW6+joODoyct2mViK6blPr0ZGRjo6Op2OxopEhGspev3pl7Z6TDyck0i5rg2mv6SI0JxCTQ/HKessszmI+WkXFZqa9Kuk548Mew/ljgapPNxzMDpzAB1zscEBrgvGTrV07+DeOjV1ZWvLt6X57MvPFHXxq7LV169d/84EHGj4vw9/RtWbODPbnvNaEi5c+bWttnZ6aav9c69d8t7dvbpuenm5rbW32vBpKGR5M4WYZSnPAt1CK3sravrXjww8//Ocf//iH+/f/6NChzs7Ovd3dzZpbo2kfc1NIVnG1DCU54AocACrnvCtwAFgWUg3AGqQagDVINQBrHPAMPAe9ZQCVcMxazWojCkDNOSPVVUa6sqqxWrZ/rbSBDKAOHJBq+6/SdmggA8hxwH11qd6y1apt+9fKGsjwlW6oAwekuujxGACU54Ar8BUazjaXiMmie2jtHzIFbWGGnpOo8a7csgOsoJns5ytvIEuKnDuSorig/8KqhAygeqOjoypr5BARhWRVVdWM5NNaRbItYdqmkJz/f218SK//yki+XA+JHDJWkuRHZSQf5fewOraqyqH8D7lj5H+dZdhi/iVA9UZHR219Bb7/rdnKBx+6vd3wT8aOrkEiokBvSDg4rITDNDyYCh0IEBV2fWX0O1s+fCAUOWjYXtAB5h5KxgIBImMzWXnJoTilyM1FcjNLKxSweuGK93gpInCoL4DVsnWqieiPx1790+uvaD9v/epd6tLi2TdfX7r86e4nnqrySHqse2iQpMRKH06t6LXmSnv0AzFVjWmX4ejeh1Ww+331jbv3aQHe/cRTN+7ed/bN171/9w/VR5qIKNAv0eDAwKCpyKtUUdnKKseKz1pZAxlZlZABrIjdU11k61e+fvxf4pPP//LyJwtV78z39FE87j1gWgONJWHGorKVVY6VObi5gYzv6fPpT8ssSsgAVsLWrQm5++pj//j93Pp8ZWnp+G9+2fqFm2748l7j4ML76lXQCvZx/QvO5LzWhMnBX6T+6b9e+st82zZP7Y6qRP2Gj7hQoQsOZ/enZZrcQr2z77t1ODwfTnj8HKf9zTh4TgVOZ+tU1+yielnN+/tuAWrOYVfgALAspBqANUg1AGuQagDW2PppWRH0lgFUwjFrtf0bUQBswhmprm+kK6s5A3AKB6R6BZFGTmEtc8B9db16y+oFVWTQZA5INXrLAKrigCvw1UmKWhVZcW2YoZBMiBeOL+gYU6L+XItYUjQXihWNRxUZ2ACLvWXGrjCrDrOCojJjO5l1x5i+1fhL83ny41FFBs3ETm9Z2fdATB1mBUVlFOgN0QTp2606xgIxeYhzc+STMrGCl7msxxsGoIoMmsHWqSaiY4dykaGtf313jTrMSqv2PUyL8cZn76gigyZwwH317v2S9r+adZiVLSor7hgjSorChJTJSKSXmOVax0qMz0MVGTSD3ddqyi7Xu/dLRdu1DjNXx1b+G39b5SEDMTnECVyciMgnSSEazG7PSH43xxERUUhWY0RJkRMmpEyM5ykhDbrdokftNxzHNF670I8IXNwnZcbDnoFsG0NIVvFZFzSE3XvLjh2KFOXZssPs139fbbAB2DQ2NuaYtZpMy/Xk4C/Onzp+7XXX17TDDMDx7J5q84V3nTvMABzP1qluXG8ZAEMc8AwcAKqCVAOwBqkGYA1SDcAaWz8tK4LeMoBKOGatRm8ZQIWckeoaRVqJ+ku95ay/B13Hd6At/87qukiKeJd7bXPAFXgDVmklGox4ZXUcX9QGFjgg1Q3oLTuZTvk8N9XhwIYOMwf8BX3lG9fQx+YYDkg1essAquKM+2oi+tXPokX/KzvcUEtWfJOZ/5X2i6TICXFKRdwcJ8rGW2/Dz1b1Y8UNZ6ZBBR1mmYKbesvplapYM9KOkhQ50zGtHxqYJlmySq1gtr8ramsLHSzqYwM7c8BarfnO9yq/fNXfiVa15pGkyHGinL1yjAtDsqrG9FFirxoLxFSZuIOezHiYJyX6P83Hs7jtLjyFNmiAEqrKG44cUzOe3FWrErXet2B6qUj6gN6e4g5Ge6y7U/J/BGXZ/7Qd9GS0OSlRv1v0qLGbSj1CCBTMlsJymjsY7Q94BgStoCn+TQ+uwB3CMak2L84lc67VkuUCEeiXfO6hZCwQICIKydl/LQu3l2OuHys6BRERH46Flaifi6SIiChU8mjlpmeqWNOvJMjYpZT/I5RnXatWaZVaybY2sD3HpLqatdpslc/CTPVj5iFK1O+OkJRRVV57rlSj6WmnXimLrjQeVWrMc+R99TJDA72hlF4xRkSUHIhQX0/23934UO4+NBhJhXotVr2JtHabPDyYyg4trh8raCxLRqMKnUynfFIizBfsWP30qmeabeGJimvVzH+WEh+kF7e1gXM4JtXf+V4497/lxgZiquyNuLMl/jIPQz4AAAO+SURBVCQbFqQQDWmb3RGvbL5J5MMJibRdg2mvL7vRY9gpFiCtsWxC0DYOecI8Bfqz+xl2JL6nz6c/LatsetWxnK3xRPlJckO9sYD1nyV/uNxsfy5ywoSUCPP6GcSk8bcIuc3ZurdMU/6TLXwPHMBobGzMMWs1AFTIAU/LsBoDVAVrNQBrkGoA1iDVAKxBqgFYg1QDsMYBz8Bz0FsGUAnHrNXoLQOokDNSXaNIJ8W6f92xTDVarQ6Pb2zCMhyQaqzS9WDoTqhrCSM0gQPuq0v1lm28dsOFTy42fDpNVbvys5NpvIfJLAekuujxWOtnXZ7tne2bN121fv3i4lKzZsUArweRZpMDrsCNWlwbv3TbztFXXx548kkiGjj85JHnnrt06ZJpYOnesmGx7GWnoRisaJR135dFMVjBeG3oMvv6o1HjLX/5Y1ZUpbZcHZqSnqC4gOtvNjks1R1bNr8+Njo9NfXIY4/Nf/TxI48+Oj01dXRkpHBUthhMI5OQ/xc3FUn3qqqqZiRf/GCpx05xYahX3zcUF7K5HKBE8caCExVczSZFzj3Yl1H1yrIS+5KsbU3QYNyw50GPfshM36C71H98ghGvvrf+lnhFf+psBwIfHtcHZqQJAQ/g2OKwVG+8dsPc/HxnV9fsB3Ovpd6aPf+Xzq6uufn5gkHJoXi2loRIKwbLNaAYi8H00aJpXSzsNtP25cOxMGnLoxC3PlHOkBbYXMxL7tsfyA44EMpv1/pOtWKDVLbrpAjv8VJcMK7l1f2pDUcKHwilBocRa4Y4KdX37bvzCx3tZ06fbmlpWVxaIqLFxcWWlpYzp08vLi6W3XWZYjDzWltMifo5LqituBnJFI0C8YkJnzGM1exLROTLLbhlpqVNO0FBi+v03IHq8jcXgO05KdVE9LAonp2Z2dvd/f75eSJ6//z83u7uszMzD4tiftCqi8Esus0sa8nM7WVERBQ6MD6e6Rt0Z6+Al99XiR7MruElysaKP6YuUaVW8Z9aUfI38ULct5riNLAdh6X66Viso6Pj6MjIdZtaiei6Ta1HR0Y6Ojqejhl7OFdbDGbRbWZdS2ZqL8vhw+OqTALHcaK8/L5B6ss1DVuVjZlZVqlV86ceDmYHLl8iDA7jsN6yXTv4N46NXVla8u3pfnsy88UdfGrstXXr13/zgQdqdLYm/W1S2jOyZdOFv+sKluO83rKLlz5ta22dnppq/1zr13y3t29um56ebmttbfa8VkCJ+g0fPlV2FawMD9bpr/kDlnCjo6PNngMA1NL/B4vDOdTSUhu3AAAAAElFTkSuQmCC");

},
956074(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
730037(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832851-a7ddea4dcc5bd24b6c347b44ffa9aad6.png");

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