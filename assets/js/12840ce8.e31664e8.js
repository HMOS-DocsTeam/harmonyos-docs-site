"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["849415"], {
753016(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_implementation_cannkit_project_based_operator_development_cannkit_compilation_and_deployment_cannkit_operator_project_compilation_128_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-operator-implementation-cannkit-project-based-operator-development-cannkit-compilation-and-deployment-cannkit-operator-project-compilation-128.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_implementation_cannkit_project_based_operator_development_cannkit_compilation_and_deployment_cannkit_operator_project_compilation_128_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-project-compilation/cannkit-operator-project-compilation","title":"算子工程编译","description":"算子kernel侧和host侧实现开发完成后，需要对算子工程进行编译，将自定义算子部署到omg工具中，详细的编译操作包括：","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-project-compilation/cannkit-operator-project-compilation.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-project-compilation","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-project-compilation/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-project-compilation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"算子工程编译","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operator-project-compilation","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Host侧Tiling实现","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-tiling-implementation-on-the-host/"},"next":{"title":"算子包安装","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-package-deployment/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-project-compilation/cannkit-operator-project-compilation.md


const frontMatter = {
	title: '算子工程编译',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operator-project-compilation',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '算子工程编译';

const assets = {

};



const toc = [{
  "value": "编译步骤",
  "id": "编译步骤",
  "level": 2
}, {
  "value": "支持自定义编译选项",
  "id": "支持自定义编译选项",
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
        id: "算子工程编译",
        children: "算子工程编译"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "算子kernel侧和host侧实现开发完成后，需要对算子工程进行编译，将自定义算子部署到omg工具中，详细的编译操作包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译AscendC算子kernel侧代码实现文件*.cpp，分为源码发布和二进制发布两种方式。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "源码发布："
              })
            }), " 不对算子kernel侧实现进行编译，保留算子kernel源码文件*.cpp。该方式可以支持模型的离线编译场景。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "二进制发布："
              })
            }), " 对算子kernel侧实现进行编译，生成描述算子相关信息的json文件*.json和算子二进制文件*.o。算子调用时，如果需要直接调用算子二进制，则使用该编译方式，当前暂不支持该方式进行部署。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译AscendC算子host侧代码实现文件*.cpp、*.h。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "将原型定义和shape推导实现编译成算子原型定义动态库libcustom_op.so，并生成算子原型对外接口op_proto.h。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "将算子信息库定义编译成信息库定义文件*.json。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述编译过程示意图如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 算子工程编译示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(515342)/* ["default"] */.A) + "",
        width: "773",
        height: "442"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编译步骤",
      children: "编译步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完成工程编译相关配置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["修改工程目录下的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CMakePresets.json"
            })
          }), " cacheVariables的配置项。", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CMakePresets.json"
            })
          }), "文件内容如下。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"version\": 1,\n    \"cmakeMinimumRequired\": {\n        \"major\": 3,\n        \"minor\": 19,\n        \"patch\": 0\n    },\n    \"configurePresets\": [\n        {\n            \"name\": \"default\",\n            \"displayName\": \"Default Config\",\n            \"description\": \"Default build using Unix Makefiles generator\",\n            \"generator\": \"Unix Makefiles\",\n            \"binaryDir\": \"${sourceDir}/build_out\",\n            \"cacheVariables\": {\n                \"CMAKE_BUILD_TYPE\": {\n                    \"type\": \"STRING\",\n                    \"value\": \"Release\"\n                },\n                \"ASCEND_COMPUTE_UNIT\": {\n                    \"type\": \"STRING\",\n                    \"value\": \"kirin9020\"\n                },\n                \"vendor_name\": {\n                    \"type\": \"STRING\",\n                    \"value\": \"customize\"\n                },\n                \"ASCEND_PYTHON_EXECUTABLE\": {\n                    \"type\": \"STRING\",\n                    \"value\": \"python3\"\n                },\n                \"CMAKE_INSTALL_PREFIX\": {\n                    \"type\": \"PATH\",\n                    \"value\": \"${sourceDir}/build_out\"\n                }\n            }\n        }\n    ]\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表1"
            })
          }), " 需要开发者配置的常用参数列表"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数描述"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "默认值"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "CMAKE_BUILD_TYPE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "编译模式选项，可配置为：  - “Release”，Release版本，不包含调试信息，编译最终发布的版本。  - “Debug”，“Debug”版本，包含调试信息，便于开发者开发和调试。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Release"
              })]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在算子工程目录下执行如下命令，进行算子工程编译。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "./build.sh\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译成功后，会在当前目录下创建build_out目录，并将build_out目录下生成的自定义算子交付件安装到tools_omg中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果想单独编译算子kernel，可以在算子工程下执行如下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "./build_devices.sh\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者如果需要该编译过程日志存盘，可以使用环境变量ASCENDC_BUILD_LOG_DIR来控制存储路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 如希望编译日志存储在/home/build_log/，则可以按照如下设置，默认不打开日志存储\nexport ASCENDC_BUILD_LOG_DIR=/home/build_log/\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持自定义编译选项",
      children: "支持自定义编译选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在算子工程中，如果开发者想对算子kernel侧代码增加一些自定义的编译选项，可以参考如下内容进行编译选项的定制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改算子工程op_kernel目录下的CMakeLists.txt，使用add_ops_compile_options来增加编译选项，方法如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "add_ops_compile_options(OpType COMPUTE_UNIT soc_version1 soc_version2 ... OPTIONS option1 option2 ...)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 具体参数介绍"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpType（算子类型）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第一个参数应传入算子类型，如果需要对算子工程中的所有算子生效，需要配置为ALL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMPUTE_UNIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识编译选项在哪些AI处理器型号上生效，多个型号之间通过空格间隔。不配置时表示对所有AI处理器型号生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " COMPUTE_UNIT具体配置如下。  - kirin9020  - kirinx90"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPTIONS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义的编译选项。多个编译选项之间通过空格间隔。  - 增加-D编译选项，用于在编译时定义宏。  OPTIONS -Dname=definition  - 增加-g -O0等调试用编译选项。  - 增加AscendC框架提供的调试用编译选项-DASCENDC_DUMP、-DASCENDC_DEBUG  - -DASCENDC_DUMP用于控制Dump开关，默认开关打开，开发者调用printf/DumpTensor/assert后会有信息打印；设置为0后，表示开关关闭。  OPTIONS -DASCENDC_DUMP=0  - -DASCENDC_DEBUG用于控制AscendC API的调测开关，默认开关关闭；增加该编译选项后，表示开关打开，此时接口内部的assert校验生效，校验不通过会有assert日志打屏。开启该功能会对算子实际运行的性能带来一定影响，通常在调测阶段使用。  OPTIONS -DASCENDC_DEBUG  当前-DASCENDC_DEBUG功能支持的产品型号为：Kirin9020/KirinX90。  - --tiling_key，设置该选项后，只编译指定的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-tiling-implementation-on-the-host#tilingkey%E5%8F%AF%E9%80%89",
              children: "TilingKey"
            }), "相关的kernel代码，用于加速编译过程。若不指定TilingKey编译，则默认编译所有的TilingKey。配置多个TilingKey时，TilingKey之间不能有空格。示例如下，其中1、2为tiling_key。  --tiling_key=1,2"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "简要说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译选项是基于“算子类型+AI处理器型号系列”进行配置的，也就是说不同的“算子类型+AI处理器型号系列”可以配置不同的编译选项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "add_ops_compile_options(AddCustom COMPUTE_UNIT kirin9020 ... OPTIONS -DNEW_MACRO1=xx)\nadd_ops_compile_options(AddCustom COMPUTE_UNIT kirin9020 ... OPTIONS -DNEW_MACRO2=xx)\nadd_ops_compile_options(AddCustom COMPUTE_UNIT kirin9020 ... OPTIONS -DNEW_MACRO3=xx)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对相同算子类型+AI处理器型号系列，做多次编译选项配置，以后配置的为准。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对ALL生效的编译选项和对单一算子生效的编译选项如果没有冲突，同时生效，如果有冲突，以单一算子的编译选项为准。"
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
515342(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479249-a22147c6dabe4b465b16fa919eac06cf.png");

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