"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["927950"], {
933570(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_add_new_module_ide_add_new_module_md_b6f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-add-new-module-ide-add-new-module-md-b6f.json
var site_docs_ide_project_ide_module_management_ide_add_new_module_ide_add_new_module_md_b6f_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-add-new-module/ide-add-new-module","title":"添加/删除模块","description":"模块（Module）是应用/元服务的基本功能单元，包含了源代码、资源文件、第三方库及应用/元服务配置文件。一个应用/元服务通常会包含一个或多个模块，因此，可以在工程中创建多个模块。模块支持entry、feature（仅应用工程支持创建）、har、shared四种类型，具体请参考module.json5配置文件。","source":"@site/docs/ide-project/ide-module-management/ide-add-new-module/ide-add-new-module.md","sourceDirName":"ide-project/ide-module-management/ide-add-new-module","slug":"/ide-project/ide-module-management/ide-add-new-module/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-add-new-module/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"添加/删除模块","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-add-new-module","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"生成单层图标","permalink":"/harmonyos-docs-site/ide-project/ide-apply-generated-icon/"},"next":{"title":"开发静态共享包","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-creating-har-api9/ide-har/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-add-new-module/ide-add-new-module.md


const frontMatter = {
	title: '添加/删除模块',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-add-new-module',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '添加/删除模块';

const assets = {

};



const toc = [{
  "value": "创建新的模块",
  "id": "创建新的模块",
  "level": 2
}, {
  "value": "导入/引用模块",
  "id": "导入引用模块",
  "level": 2
}, {
  "value": "Import Module",
  "id": "import-module",
  "level": 3
}, {
  "value": "srcPath方式引用模块",
  "id": "srcpath方式引用模块",
  "level": 3
}, {
  "value": "删除Module",
  "id": "删除module",
  "level": 2
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
        id: "添加删除模块",
        children: "添加/删除模块"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模块（Module）是应用/元服务的基本功能单元，包含了源代码、资源文件、第三方库及应用/元服务配置文件。一个应用/元服务通常会包含一个或多个模块，因此，可以在工程中创建多个模块。模块支持entry、feature（仅应用工程支持创建）、har、shared四种类型，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
        children: "module.json5配置文件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.1 Beta1开始，创建Native C++模块或Library模板时支持选择C++版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建新的模块",
      children: "创建新的模块"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过如下三种方法，在工程中添加新的模块。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["方法1：鼠标移到工程目录顶部，单击鼠标右键，选择", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "New > Module"
                })
              }), "...，开始创建新的Module，此时该模块将创建在工程根目录下。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["方法2：选中工程目录中任意文件，然后在菜单栏选择", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "File > New > Module"
                })
              }), "...，开始创建新的Module，此时该模块将创建在工程根目录下。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["方法3：在工程根目录下创建一个新的Directory，可在该目录下单击鼠标右键，选择", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "New > Module"
                })
              }), "...，创建新的模块，此时模块将创建在该文件目录下，方便开发者对模块进行分类管理。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(441478)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "当前暂不支持在AppScope、hvigor、oh_modules、build、以点开头的目录（如：.hvigor、.idea）下通过单击鼠标右键创建模块。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New Project Module"
            })
          }), "界面中，选择需要创建的模板，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Next"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(693373)/* ["default"] */.A) + "",
            width: "959",
            height: "612"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在模块配置页面，设置新增模块的基本信息，然后单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Next"
            })
          }), "。从DevEco Studio 6.0.1 Beta1开始，支持选择C++版本。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Module name"
                })
              }), "：新增模块的名称，", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Module name"
                })
              }), "不可与工程名称/工程中其他模块名称相同。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Module type"
                })
              }), "：仅在Ability模板存在该字段，可以选择Feature和Entry类型。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(131999)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "同一工程通过新增模块仅支持创建一个Entry模块。如需构建Entry类型模块，可在module.json5文件中修改相应module下的type字段。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["如果同一类型的设备已经存在Entry模块，出现新的Entry模块后，还需要", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#distributionfilter%E6%A0%87%E7%AD%BE",
                  children: "配置分发策略"
                }), "。"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Device type"
                })
              }), "：选择模块的设备类型，如果新建模块的Module type为feature，则只能选择该工程原有的设备类型；如果Module type为entry，可以选择该模块支持的其他设备类型。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Enable native"
                })
              }), "：仅Library模板存在，将创建一个可以调用C/C++的共享包。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "****C++ Standard：****C++标准库，取值包括：Toolchain Default、C++11、C++14。"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(778823)/* ["default"] */.A) + "",
            width: "950",
            height: "606"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若该模块的模板类型为Ability，还需要设置新增Ability的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ability name"
            })
          }), "和", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "E"
                })
              })
            })
          }), "xported", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "参数，****E"
                })
              })
            })
          }), "xported****参数表示该Ability是否可以被其它应用/元服务所调用（FA模型下为Visible参数)。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "勾选（true）：可以被其它应用/元服务调用。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不勾选（false）：不能被其它应用/元服务调用。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finish"
            })
          }), "，等待创建完成后，可以在工程目录中查看和编辑新增的模块。工程中所包含模块的信息可以在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app",
            children: "build-profile.json5"
          }), "中modules字段进行配置。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入引用模块",
      children: "导入/引用模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio支持通过以下两种方式导入其他工程下的模块："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section13771399184",
          children: "Import Module"
        }), "功能，将其它HarmonyOS模块的功能代码复制到当前工程中；当前仅支持FA模型的模块导入到FA模型，Stage模型的模块导入到Stage模型。不支持FA模型的模块导入到Stage模型，或Stage模型的模块导入到FA模型。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过在", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section12961144312265",
          children: "srcPath字段下配置相对路径"
        }), "的方式引用其他工程下的模块，该方式仅引用模块相关信息，不会将模块代码完全复制至本地。当前支持引用其他工程下的HAR和HSP模块。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "import-module",
      children: "Import Module"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在菜单栏单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File > New > Import... > Import Module。"
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(769994)/* ["default"] */.A) + "",
            width: "736",
            height: "274"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择导入的模块。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在指定路径下，选择导入的模块，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            })
          }), "。导入的模块可以为文件夹，也可以为zip格式。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(957137)/* ["default"] */.A) + "",
            width: "421",
            height: "481"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "srcpath方式引用模块",
      children: "srcPath方式引用模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程级build-profile.json5文件中，如下图所示在modules > srcPath字段下配置工程外模块的相对路径，即可引用模块相关信息，不会将模块代码完全复制至本工程中。当前支持引用其他工程下的HAR和HSP模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(49284)/* ["default"] */.A) + "",
        width: "711",
        height: "558"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "删除module",
      children: "删除Module"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在工程目录中选中要删除的模块，单击鼠标右键，选中", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete"
        })
      }), "，并在弹出的对话框中单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete"
        })
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
131999(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
693373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752976-0642446ff2fe698546b85e13bedfc97f.png");

},
778823(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832893-c1d62eab042fa47d9eaecce82c01675d.png");

},
769994(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912964-2805d9083d8725081a6a5769caa4a8fe.png");

},
957137(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752972-aa40ba48531dc19618c0f1b6612ee5b8.png");

},
441478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
49284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752974-6cb11f2b5e38a7ae64cb87de74680cd0.png");

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