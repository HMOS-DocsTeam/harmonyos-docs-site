"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["887450"], {
396278(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_accessibility_kit_test_app_accessibility_test_screen_reader_test_screen_reader_md_58e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-accessibility-kit-test-app-accessibility-test-screen-reader-test-screen-reader-md-58e.json
var site_docs_accessibility_kit_test_app_accessibility_test_screen_reader_test_screen_reader_md_58e_namespaceObject = JSON.parse('{"id":"accessibility-kit/test-app-accessibility/test-screen-reader/test-screen-reader","title":"测试屏幕朗读功能","description":"屏幕朗读可以使用户无需查看屏幕即可与设备进行互动，视障用户在使用设备时可能需要依赖屏幕朗读来获取更便捷的操作体验。","source":"@site/docs/accessibility-kit/test-app-accessibility/test-screen-reader/test-screen-reader.md","sourceDirName":"accessibility-kit/test-app-accessibility/test-screen-reader","slug":"/accessibility-kit/test-app-accessibility/test-screen-reader/","permalink":"/harmonyos-docs-site/accessibility-kit/test-app-accessibility/test-screen-reader/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"测试屏幕朗读功能","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/test-screen-reader","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"卡片自动居中的场景","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-card-automatically-centered/"},"next":{"title":"ArkData简介","permalink":"/harmonyos-docs-site/arkdata/data-mgmt-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/accessibility-kit/test-app-accessibility/test-screen-reader/test-screen-reader.md


const frontMatter = {
	title: '测试屏幕朗读功能',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/test-screen-reader',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '测试屏幕朗读功能';

const assets = {

};



const toc = [{
  "value": "启用操作验证",
  "id": "启用操作验证",
  "level": 2
}, {
  "value": "常规开启屏幕朗读",
  "id": "常规开启屏幕朗读",
  "level": 3
}, {
  "value": "快捷开启屏幕朗读",
  "id": "快捷开启屏幕朗读",
  "level": 3
}, {
  "value": "屏幕朗读效果验证",
  "id": "屏幕朗读效果验证",
  "level": 2
}, {
  "value": "屏幕朗读常用手势",
  "id": "屏幕朗读常用手势",
  "level": 3
}, {
  "value": "使用屏幕朗读浏览应用",
  "id": "使用屏幕朗读浏览应用",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "测试屏幕朗读功能",
        children: "测试屏幕朗读功能"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "屏幕朗读可以使用户无需查看屏幕即可与设备进行互动，视障用户在使用设备时可能需要依赖屏幕朗读来获取更便捷的操作体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在完成屏幕朗读相关开发后，可以按照如下方式来进行功能验证。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启用操作验证",
      children: "启用操作验证"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此操作为使用屏幕朗读功能的前提条件，可用于验证屏幕朗读开关的启停状态是否正常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常规开启屏幕朗读",
      children: "常规开启屏幕朗读"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打开设备的“设置”应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单击“辅助功能”选项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单击“屏幕朗读”选项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打开“屏幕朗读”开关。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在安全提醒对话框中，选择知晓风险后，开启屏幕朗读。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "快捷开启屏幕朗读",
      children: "快捷开启屏幕朗读"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了常规方式外，提供了辅助功能快捷键帮助用户快捷打开/关闭屏幕朗读。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打开设备的“设置”应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单击“辅助功能”选项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单击“辅助功能快捷键”选项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打开“辅助功能快捷键”开关，选择功能为“屏幕朗读”，同时可按需开启“屏幕锁定时可用”开关。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过同时按下音量上下键3秒的方式，验证是否可以快捷开启/关闭屏幕朗读。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "屏幕朗读效果验证",
      children: "屏幕朗读效果验证"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启屏幕朗读后，您可以通过以下两种常见方式导航："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "触摸浏览：用户在屏幕上移动手指触摸相应界面，可以听到手指正下方触摸选中内容的播报。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "线性浏览：用户在屏幕上滑动手指来移动焦点，从上到下线性地阅读获取焦点元素的播报内容。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "屏幕朗读常用手势",
      children: "屏幕朗读常用手势"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(50775)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下述列举了屏幕朗读常用的手势及对应的操作，更多操作手势可通过“设置 > 辅助功能 > 屏幕朗读 > 更多设置 > 自定义快捷手势”进行查看和设置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 屏幕朗读基本手势"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "操作"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "手势"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "移至屏幕的下一项内容"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向右滑动/向下滑动"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "移至屏幕的上一项内容"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向左滑动/向上滑动"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "点击/选择所在项"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点按两次"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "长按"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点按两次后长按"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "横滑"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "双指滑动"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 屏幕朗读往复手势"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "操作"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "手势"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "上一个导航设置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先向上再向下"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "下一个导航设置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先向下再向上"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "向下（后）滚动一个页面"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先向右再向左"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "向上（前）滚动一个页面"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先向左再向右"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " 屏幕朗读角度手势"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "操作"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "手势"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "主屏幕"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先向上再向左"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "返回"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先向下再向左"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "通知栏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先向上再向右"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "最近运行过的应用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先向下再向右"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "快捷菜单"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先向右再向下"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "打开控制中心"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先向左再向下"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "操作编辑框"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先向左再向上"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(143754)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了更便捷地使用屏幕朗读，可通过“设置 -> 辅助功能 -> 屏幕朗读 -> 更多设置”进行更多选项（如语速、语调等）的设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用屏幕朗读浏览应用",
      children: "使用屏幕朗读浏览应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在完成屏幕朗读与应用的适配后，可参照以下步骤来验证朗读功能是否正确实现。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按顺序滑动浏览各个元素。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在浏览过程中，可注意以下几个问题："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "每个元素的语音反馈是否恰当地传达了其内容或用途？"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "您能否轻松完成主要工作流程？"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "您能否通过滑动浏览每个元素？"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果出现提醒或其他临时消息，屏幕朗读能否读出来？"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参考开发指南解决适配导致的问题。"
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
143754(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
50775(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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