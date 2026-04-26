"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["711780"], {
778361(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_screen_recording_ide_screen_recording_md_0ee_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-screen-recording-ide-screen-recording-md-0ee.json
var site_docs_ide_debug_app_ide_screen_recording_ide_screen_recording_md_0ee_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-screen-recording/ide-screen-recording","title":"录屏","description":"在应用开发过程中，可以使用录屏功能录制应用的运行状态，并通过录屏文件向他人展示正在开发的应用的各种功能效果。","source":"@site/docs/ide-debug-app/ide-screen-recording/ide-screen-recording.md","sourceDirName":"ide-debug-app/ide-screen-recording","slug":"/ide-debug-app/ide-screen-recording/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-screen-recording/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"录屏","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-screen-recording","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"截屏","permalink":"/harmonyos-docs-site/ide-debug-app/ide-screenshot/"},"next":{"title":"运行配置错误码","permalink":"/harmonyos-docs-site/ide-debug-app/ide-debug-errorcode/ide-debug-errorcode-00401/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-screen-recording/ide-screen-recording.md


const frontMatter = {
	title: '录屏',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-screen-recording',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '录屏';

const assets = {

};



const toc = [{
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "通过DevEco Studio录屏",
  "id": "通过deveco-studio录屏",
  "level": 2
}, {
  "value": "设置录屏自定义路径",
  "id": "设置录屏自定义路径",
  "level": 2
}, {
  "value": "通过命令行方式录屏",
  "id": "通过命令行方式录屏",
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
        id: "录屏",
        children: "录屏"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发过程中，可以使用录屏功能录制应用的运行状态，并通过录屏文件向他人展示正在开发的应用的各种功能效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果设置了锁屏密码，录屏开始前请解锁设备屏幕，锁屏状态下录屏应用无法正常拉起。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果设置了锁屏密码，录屏时请保持设备的屏幕解锁状态，若录屏过程中锁屏将导致录屏应用退出。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模拟器不支持录屏。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过deveco-studio录屏",
      children: "通过DevEco Studio录屏"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "连接真机设备，并在其中运行应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在DevEco Studio底部切换到", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Log"
            })
          }), "页签。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击左侧工具栏中", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(132191)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "20",
            height: "18"
          }), "，即可开始录屏。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(213304)/* ["default"] */.A) + "",
            width: "588",
            height: "292"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["录屏时，需要先选择录屏文件的保存路径，开发者可使用默认路径或", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section89111791511",
            children: "设置自定义路径"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(113848)/* ["default"] */.A) + "",
            width: "602",
            height: "422"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["路径选择完毕后，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Start Recording"
            })
          }), "开始录屏。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(24369)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "656",
            height: "300"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["录制完操作流程之后，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stop Recording"
            })
          }), "结束录屏。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(938982)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "661",
            height: "302"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "结束录屏后，录屏文件将会保存到之前选择的路径下，可以选择调用系统播放器播放视频文件或打开文件所在的文件夹。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(363515)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "659",
            height: "235"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置录屏自定义路径",
      children: "设置录屏自定义路径"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击DevEco Studio底部", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Log"
            })
          }), "页签，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HiLog >"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: ">"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Record Screen"
            })
          }), "选项。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(972473)/* ["default"] */.A) + "",
            width: "809",
            height: "337"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在弹出的界面选择自定义路径，当设置好路径并勾选“Use the selected path and auto-generated file name as defaults and don't ask again”选项后，录屏时将自动使用此时设置的路径以及以录屏时的时间戳构造的文件名作为录屏文件的保存地址及文件名。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(879432)/* ["default"] */.A) + "",
            width: "708",
            height: "475"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过命令行方式录屏",
      children: "通过命令行方式录屏"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["hdc是可以用于调试的命令行工具，通过该工具可以实现录屏功能。更多关于命令行工具hdc的说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hdc",
        children: "hdc工具使用指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动录屏。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell aa start -b com.huawei.hmos.screenrecorder -a com.huawei.hmos.screenrecorder.ServiceExtAbility --ps \"CustomizedFileName\" \"test.mp4\"   // 指定录屏文件名称为test.mp4\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止录屏。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell aa start -b com.huawei.hmos.screenrecorder -a com.huawei.hmos.screenrecorder.ServiceExtAbility\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取录屏文件位置，记录为{RecordFile}。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell mediatool query test.mp4 -u\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果查询的结果中包含uri字段，则返回值第三行对应的录屏文件路径不允许直接下载。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(9190)/* ["default"] */.A) + "",
                width: "674",
                height: "87"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "需要再执行如下命令，指定该uri，将录屏文件复制到有下载权限的路径中（如/data/local/tmp）。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hdc shell mediatool recv \"file://media/Photo/2/VID_1736853237_001/test.mp4\" /data/local/tmp\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "命令返回值第二行即为录屏文件路径{RecordFile}。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(630580)/* ["default"] */.A) + "",
                width: "1039",
                height: "68"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果查询结果不包含uri字段，则返回值第二行即为录屏文件路径{RecordFile}。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(323235)/* ["default"] */.A) + "",
                width: "621",
                height: "66"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指定上一个步骤中获取到的录屏文件路径{RecordFile}，下载录屏文件到本地。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc file recv {RecordFile} d:\\test.mp4\n"
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
213304(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753699-a7fcc777327bdfe1e52b7a00a59e70d8.png");

},
363515(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913752-57342b73a8ca3b79296ff392ea86a6ce.png");

},
113848(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753762-24263644e032e6ff912c79c3ad79512e.png");

},
972473(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753693-d98e9f674ad85f552916ca3c50848bb5.png");

},
938982(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753689-d066ab3a704aa827ba054c75b0d8000a.png");

},
132191(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAMAAAEbCT60AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAhUExURfLy8o2NjW5ubtTU1ICAgIeHh7CwsHBwcNHR0Y+PjwAAACrF4LAAAAALdFJOU/////////////8ASk8B8gAAAAlwSFlzAAAXEQAAFxEByibzPwAAAF5JREFUGFedj1EKwDAIQ4Niy+5/4Wl0tWMfG3tQjGkQBRHJuitHnJKF0njYReRFjTKiGYtK752ICnKAGBtKHEs6g3J9/8Ymx923K8sZ/tr02698m8olSJsFdH68mgAn458BP2T0GIMAAAAASUVORK5CYII=");

},
9190(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753695-bebafcba8be800d8ccf40e4d1a28fff4.png");

},
879432(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753752-ba38870c0167e923fbb1a12825dc48ec.png");

},
630580(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913756-39903588730ac1aa5fcc77796c56e7a1.png");

},
24369(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833673-74b0bed0fd53c4810c311debdf0fed5b.png");

},
323235(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753758-d5a67143aa2171dd26348a606d3326df.png");

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