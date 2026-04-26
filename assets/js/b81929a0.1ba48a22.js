"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["456808"], {
182333(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_import_sample_ide_import_sample_md_b81_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-import-sample-ide-import-sample-md-b81.json
var site_docs_ide_project_ide_module_management_ide_import_sample_ide_import_sample_md_b81_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-import-sample/ide-import-sample","title":"导入Sample工程","description":"DevEco Studio支持Sample工程的导入功能，通过对接Gitee开源社区中的Sample资源，可一键导入Sample工程到DevEco Studio中。下面介绍导入Sample的方法。","source":"@site/docs/ide-project/ide-module-management/ide-import-sample/ide-import-sample.md","sourceDirName":"ide-project/ide-module-management/ide-import-sample","slug":"/ide-project/ide-module-management/ide-import-sample/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-import-sample/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"导入Sample工程","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-import-sample","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"通用云开发模板","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-template/agc-harmonyos-clouddev-emptyability/"},"next":{"title":"创建意图框架","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-insight-intent/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-import-sample/ide-import-sample.md


const frontMatter = {
	title: '导入Sample工程',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-import-sample',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '导入Sample工程';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "操作步骤",
  "id": "操作步骤",
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
        id: "导入sample工程",
        children: "导入Sample工程"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio支持Sample工程的导入功能，通过对接Gitee开源社区中的Sample资源，可一键导入Sample工程到DevEco Studio中。下面介绍导入Sample的方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该功能仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在DevEco Studio的欢迎页，进入", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Customize"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "> All Settings... > Version Control > Git"
            })
          }), "界面，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Test"
            })
          }), "按钮检测是否安装Git工具。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(245872)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在打开工程的情况下，可以单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File > Settings"
            })
          }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DevEco Studio > Preferences/Settings"
            })
          }), "）进入设置界面。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["已安装，请根据", (0,jsx_runtime.jsx)(_components.a, {
                href: "#li1599692216194",
                children: "2"
              }), "开始导入Sample。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(563299)/* ["default"] */.A) + "",
                width: "800",
                height: "113"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["未安装，请单击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Download and Install"
                })
              }), "，DevEco Studio会自动下载并安装。安装完成后，请根据", (0,jsx_runtime.jsx)(_components.a, {
                href: "#li1599692216194",
                children: "2"
              }), "开始导入Sample。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(196960)/* ["default"] */.A) + "",
                width: "800",
                height: "137"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在DevEco Studio的欢迎页，在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Projects"
            })
          }), "页签下，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "M********ore Action >"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Import Sample"
            })
          }), "按钮，导入Sample工程。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(97239)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在打开工程的情况下，可以单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File > New > Import > Import Sample"
            })
          }), "来进行导入。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(791623)/* ["default"] */.A) + "",
            width: "773",
            height: "627"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["选择需要导入的Sample工程，然后单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Next"
            })
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Project name"
            })
          }), "和", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Project location"
            })
          }), "，然后单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finish"
            })
          }), "，等待Sample工程导入完成。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(29540)/* ["default"] */.A) + "",
            width: "967",
            height: "706"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入Sample后，等待工程同步完成即可。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(905606)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果网络受限，导入时会提示“Failed to connect to gitee.com port 443: Time out”连接超时错误，请", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-development-environment-2",
            children: "配置Git代理信息"
          }), "。"]
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
791623(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753260-ff0558ee4dd844af16253a89bc0d336a.png");

},
245872(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
29540(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002532477844-b2de0f3af3d3a4d55e01d2175f31f24b.png");

},
905606(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
97239(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
196960(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753254-365bb2dd718597e6e57e2b8b6fc64c92.png");

},
563299(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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