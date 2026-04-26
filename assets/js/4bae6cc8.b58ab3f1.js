"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["656808"], {
908055(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_application_typical_scenarios_layered_image_layered_image_md_4ba_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-application-typical-scenarios-layered-image-layered-image-md-4ba.json
var site_docs_development_fundamentals_application_typical_scenarios_layered_image_layered_image_md_4ba_namespaceObject = JSON.parse('{"id":"development-fundamentals/application-typical-scenarios/layered-image/layered-image","title":"配置应用图标和名称","description":"本页面提供应用图标和名称的配置指导。应用图标分为单层图标和分层图标。单层图标包含一个图片，分层图标包含前景图和背景图。图标规范详见图标资源规范，图标和名称配置约束详见图标和名称配置。","source":"@site/docs/development-fundamentals/application-typical-scenarios/layered-image/layered-image.md","sourceDirName":"development-fundamentals/application-typical-scenarios/layered-image","slug":"/development-fundamentals/application-typical-scenarios/layered-image/","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/layered-image/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"配置应用图标和名称","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/layered-image","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建应用多实例","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/multiinstance/"},"next":{"title":"HAR转HSP指导","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/har-to-hsp/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/application-typical-scenarios/layered-image/layered-image.md


const frontMatter = {
	title: '配置应用图标和名称',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/layered-image',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = '配置应用图标和名称';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "配置优先级和生成策略",
  "id": "配置优先级和生成策略",
  "level": 2
}, {
  "value": "配置单层图标和应用名称",
  "id": "配置单层图标和应用名称",
  "level": 2
}, {
  "value": "配置分层图标和应用名称",
  "id": "配置分层图标和应用名称",
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
        id: "配置应用图标和名称",
        children: "配置应用图标和名称"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本页面提供应用图标和名称的配置指导。应用图标分为单层图标和分层图标。单层图标包含一个图片，分层图标包含前景图和背景图。图标规范详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/design-guides/application-icon-0000001953444009#section634668113212",
        children: "图标资源规范"
      }), "，图标和名称配置约束详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/application-component-configuration-stage#%E5%BA%94%E7%94%A8%E5%9B%BE%E6%A0%87%E5%92%8C%E5%90%8D%E7%A7%B0%E9%85%8D%E7%BD%AE",
        children: "图标和名称配置"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用于在设备桌面上展示当前应用。例如：桌面或者最近任务列表中显示应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用于在应用界面内展示当前应用。例如：在设置应用中展示应用列表。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用于在通知栏中展示发出通知消息的应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果图如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(745784)/* ["default"] */.A) + "",
        width: "1328",
        height: "602"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置优先级和生成策略",
      children: "配置优先级和生成策略"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HAP中包含UIAbility"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "入口UIAbility：skills标签中entities中包含\"entity.system.home\"、并且actions中包含\"ohos.want.action.home\"。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在module.json5配置了多个入口UIAbility："
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "如果module.json5中mainElement配置的为入口UIAbility，则返回mainElement对应的入口UIAbility配置的icon和label。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "如果module.json5中mainElement未配置或者配置的不为入口UIAbility，则返回module.json5中配置的第一个入口UIAbility对应的icon和label。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在module.json5配置文件中，出现以下任一情况时，系统将返回app.json5中的icon或label："
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "mainElement配置的为入口UIAbility，但是入口UIAbility未设置icon或label。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "mainElement未配置或者配置的不为入口UIAbility，且module.json5配置文件中第一个入口UIAbility未设置icon或label。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多HAP包的工程中，如果entry类型存在，以entry类型的HAP中module.json5配置文件为准。如果没有entry类型，此时用所有hap的moduleName以ASCII字典序排序，最终以排序为最后一个的feature包的module.json5配置文件为准。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HAP中不包含UIAbility，系统将返回app.json5中的icon和label。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(155672)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在编译构建时，AppScope目录下的资源文件会合入到模块下相同路径的资源目录中，如果两个目录下存在重名文件，编译打包后AppScope目录下的资源文件会覆盖模块下的资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，app.json5和module.json5中配置的分层图标的资源文件名称一致、图标不一致，AppScope目录下的资源文件会覆盖模块中的文件，最后的效果是app.json5中的配置图标生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果应用配置中未设置入口UIAbility，点击桌面图标将直接进入应用详情页（设置->应用和元服务下，点击任意应用即可进入该应用的应用详情页）。其他情况下，点击桌面图标将直接进入应用页面。应用未配置入口UIAbility包含2种场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用没有配置任何UIAbility。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "所有UIAbility中skills标签下的entities未配置或配置内容不包括 \"entity.system.home\"，并且actions未配置或配置内容不包括 \"ohos.want.action.home\"。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置单层图标和应用名称",
      children: "配置单层图标和应用名称"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式一：配置app.json5"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该配置仅当module.json5配置文件中无UIAbility、或者存在UIAbility但abilities标签中未设置icon和label（可手动删除icon和label配置）时生效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"app\": {\n    // ...\n    \"icon\": \"$media:app_icon\",\n    \"label\": \"$string:app_name\" // 需要在AppScope/resources/base/element/string.json配置name为app_name的资源，已存在可以忽略\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式二：配置module.json5"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "除了需要配置icon与label字段，还需要在skills标签下面的entities中添加\"entity.system.home\"、actions中添加\"ohos.want.action.home\"。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    // ...\n    \"abilities\": [\n      {\n        // ...\n        \"icon\": \"$media:icon\",\n        // 需要在entry/src/main/resources/base/element/string.json配置name为EntryAbility_label的资源，已存在可以忽略\n        \"label\": \"$string:EntryAbility_label\",\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              \"ohos.want.action.home\"\n            ]\n          }\n        ]\n      }\n    ],\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置分层图标和应用名称",
      children: "配置分层图标和应用名称"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式一：配置app.json5"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该配置仅当module.json5配置文件中无UIAbility、或者存在UIAbility但abilities标签中未设置icon和label（可手动删除icon和label配置）时生效。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "将前景资源和背景资源文件放在“AppScope\\resources\\base\\media”文件夹下。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "本例中，前景资源文件名为“foreground.png”，背景资源文件名为“background.png”。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在“AppScope\\resources\\base\\media”文件夹下app_layered_image.json分层图标资源文件中，配置分层图标的前景资源与背景资源信息。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"layered-image\":\n  {\n    \"background\" : \"$media:background\",\n    \"foreground\" : \"$media:foreground\"\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在", (0,jsx_runtime.jsx)(_components.a, {
                href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
                children: "app.json5配置文件"
              }), "中引用分层图标资源文件。示例如下："]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"app\": {\n    // ...\n    \"icon\": \"$media:layered_image\",\n    \"label\": \"$string:app_name\" // 需要在AppScope/resources/base/element/string.json配置name为app_name的资源，已存在可以忽略\n  }\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式二：配置module.json5"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "将前景资源和背景资源文件放在“entry\\src\\main\\resources\\base\\media”文件夹下。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "本例中采用的前景资源和背景资源的文件名分别为“foreground.png”和“background.png”。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在“entry\\src\\main\\resources\\base\\media”文件夹下layered_image.json分层图标资源文件中，配置分层图标的前景资源与背景资源信息。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"layered-image\":\n  {\n    \"background\" : \"$media:background\",\n    \"foreground\" : \"$media:foreground\"\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果需要在桌面显示UIAbility图标，除了需要配置icon与label字段，还需要在skills标签下面的entities中添加\"entity.system.home\"、actions中添加\"ohos.want.action.home\"。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"module\": {\n    // ...\n    \"abilities\": [\n      {\n        // ...\n        // icon配置为分层图标资源文件的索引\n        \"icon\": \"$media:layered_image\",\n        // 需要在entry/src/main/resources/base/element/string.json配置name为EntryAbility_label的资源，已存在可以忽略\n        \"label\": \"$string:EntryAbility_label\",\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              \"ohos.want.action.home\"\n            ]\n          }\n        ]\n      }\n    ],\n    // ...\n  }\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(858628)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio NEXT Beta1(5.0.3.814) 及之后的版本，创建应用时默认模板中包含分层图标的资源文件，不同版本生成的资源文件名称可能不同，文件名称支持手动修改。如果分层图标资源文件不存在则需要手动创建，文件名称需要符合资源命名规范，由数字、字母、点和下划线组成。"
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
745784(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957480-c35a712ceccb79699dd1497262a3ae9c.png");

},
858628(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
155672(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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