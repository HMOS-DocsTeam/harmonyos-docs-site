"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["209672"], {
222547(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_implementation_cannkit_project_based_operator_development_cannkit_creating_an_operator_project_cannkit_creating_an_operator_proje_488_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-operator-implementation-cannkit-project-based-operator-development-cannkit-creating-an-operator-project-cannkit-creating-an-operator-proje-488.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_implementation_cannkit_project_based_operator_development_cannkit_creating_an_operator_project_cannkit_creating_an_operator_proje_488_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-creating-an-operator-project/cannkit-creating-an-operator-project","title":"创建算子工程","description":"DDK开发套件包中提供了自定义算子工程生成工具msOpGen，可基于算子原型定义输出算子工程：包括*算子host侧代码实现文件、算子kernel侧实现文件以及工程编译配置文件等*。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-creating-an-operator-project/cannkit-creating-an-operator-project.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-creating-an-operator-project","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-creating-an-operator-project/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-creating-an-operator-project/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"创建算子工程","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-creating-an-operator-project","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"工程化算子开发概述","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-overview-of-engineering-operator/"},"next":{"title":"算子原型定义实现","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-operator-prototype-definition/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-creating-an-operator-project/cannkit-creating-an-operator-project.md


const frontMatter = {
	title: '创建算子工程',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-creating-an-operator-project',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '创建算子工程';

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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "创建算子工程",
        children: "创建算子工程"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DDK开发套件包中提供了自定义算子工程生成工具msOpGen，可基于算子原型定义输出算子工程：包括", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "算子host侧代码实现文件"
        })
      }), "、", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "算子kernel侧实现文件"
        })
      }), "以及", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "工程编译配置文件等"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "简要说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用msOpGen工具创建算子工程之前，需要参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-environment-preparation",
        children: "环境准备"
      }), "章节安装驱动固件和DDK软件包，完成开发环境和运行环境的准备。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时需要配置ascendc环境变量，示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "source ddk/tools/tools_ascendc/set_ascendc_env.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用msOpGen工具创建算子开发工程的步骤如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写算子的原型定义json文件，用于生成算子开发工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，AddCustom算子的json文件命名为add_custom.json，文件内容如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "[\n    {\n        \"op\": \"AddCustom\",\n        \"input_desc\": [\n            {\n                \"name\": \"x\",\n                \"param_type\": \"required\",\n                \"format\": [\n                    \"ND\",\n                    \"ND\",\n                    \"ND\"\n                ],\n                \"type\": [\n                    \"fp16\",\n                    \"float\",\n                    \"int32\"\n                ]\n            },\n            {\n                \"name\": \"y\",\n                \"param_type\": \"required\",\n                \"format\": [\n                    \"ND\",\n                    \"ND\",\n                    \"ND\"\n                ],\n                \"type\": [\n                    \"fp16\",\n                    \"float\",\n                    \"int32\"\n                ]\n            }\n        ],\n        \"output_desc\": [\n            {\n                \"name\": \"z\",\n                \"param_type\": \"required\",\n                \"format\": [\n                    \"ND\",\n                    \"ND\",\n                    \"ND\"\n                ],\n                \"type\": [\n                    \"fp16\",\n                    \"float\",\n                    \"int32\"\n                ]\n            }\n        ]\n    }\n]\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，ReduceMaxCustom算子（包含属性）的json文件命名为reduce_max_custom.json，文件内容如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "[\n    {\n        \"op\": \"ReduceMaxCustom\",\n         \"input_desc\": [\n            {\n                \"name\": \"x\",\n                \"param_type\": \"required\",\n                \"format\": [\"ND\"],\n                \"type\": [\"float16\"]\n            }\n        ],\n        \"output_desc\": [\n            {\n                \"name\": \"y\",\n                \"param_type\": \"required\",\n                \"format\": [\"ND\"],\n                \"type\": [\"float16\"]\n            },\n            {\n                \"name\": \"idx\",\n                \"param_type\": \"required\",\n                \"format\": [\"ND\"],\n                \"type\": [\"int32\"]\n            }\n        ],\n        \"attr\": [\n            {\n                \"name\": \"reduceDim\",\n                \"param_type\": \"required\",\n                \"type\": \"int\"\n            },\n            {\n                \"name\": \"isKeepDim\",\n                \"param_type\": \"optional\",\n                \"type\": \"int\",\n                \"default_value\": 1\n            }\n        ]\n    }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用msOpGen工具生成算子的开发工程。以生成AddCustom的算子工程为例，下文仅针对关键参数进行解释，详细参数说明请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-creating-operator-project-msopgen",
            children: "算子工程创建工具参数说明"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "msopgen gen -i ./add_custom.json -c ai_core-kirin9020 -f ONNX -out ./AddCustom\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "-i：指定算子原型定义文件add_custom.json所在路径，请根据实际情况修改。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "-c：ai_core-<soc_version>代表算子在AI Core上执行，<soc_version>为AI处理器的型号，当前支持ai_core-kirin9020。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(885859)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AI处理器的型号<soc_version>请在运行环境上通过命令行获取："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "hdc -t {target} shell param get ohos.boot.chiptype"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "target：设备的SN码，可以通过hdc list targets获取当前环境上所有设备的SN码。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "-f：第三方算子平台，目前支持TF、ONNX。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "-out：生成文件所在路径，可配置为绝对路径或者相对路径，并且工具执行开发者对路径具有可读写权限。若不配置，则默认生成在执行命令的当前路径。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "命令执行完后，会在-out指定目录或者默认路径下生成算子工程目录，工程中包含算子实现的模板文件，编译脚本等，以AddCustom算子为例，目录结构如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AddCustom\n├── build_devices.sh    // 编译kernel动态库入口脚本\n├── build.sh            // 编译入口脚本\n├── cmake\n│   ├── config.cmake\n│   ├── func.cmake\n│   ├── intf.cmake\n│   ├── makeself.cmake\n│   └── util           // 算子工程编译所需脚本及公共编译文件存放目录\n├── CMakeLists.txt     // 算子工程的CMakeLists.txt\n├── CMakePresets.json  // 编译配置项\n├── framework          // 算子插件实现文件目录，单算子模型文件的生成不依赖算子适配插件，无需关注\n├── op_host                    // host侧实现文件\n│   ├── add_custom_tiling.h    // 算子tiling定义文件\n│   ├── add_custom.cpp         // 算子原型注册、shape推导、信息库、tiling实现等内容文件\n│   ├── CMakeLists.txt\n├── op_kernel                  // kernel侧实现文件\n│   ├── CMakeLists.txt\n│   ├── add_custom.cpp         // 算子代码实现文件\n└── scripts                    // 自定义算子工程打包相关脚本所在目录\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(962067)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上述目录结构中的粗体文件为后续算子开发过程中需要修改的文件，其他文件无需修改。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["工程目录中的op_kernel和op_host包含了算子的核心实现文件。op_kernel下存放", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-operator-implementation-on-the",
        children: "Kernel侧算子实现"
      }), "。op_host下存放host侧代码实现，包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-operator-prototype-definition",
        children: "算子原型定义实现"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-tiling-implementation-on-the-host",
        children: "Host侧Tiling实现"
      }), "。其中kernel侧算子实现和host侧tiling实现在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-operator-implementation-overview",
        children: "算子实现"
      }), "章节已经介绍了其核心的实现方法，在该章节会侧重于介绍接入DDK框架后的编程模式和API的使用。工程目录中的CMakePresets.json，用于开发者完成工程编译相关配置，之后即可进行编译部署。"]
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
962067(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
885859(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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