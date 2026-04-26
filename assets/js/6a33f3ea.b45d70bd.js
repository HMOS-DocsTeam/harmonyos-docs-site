"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["650670"], {
60268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_reverse_ide_debug_native_reverse_md_6a3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-debug-native-ide-debug-native-reverse-ide-debug-native-reverse-md-6a3.json
var site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_reverse_ide_debug_native_reverse_md_6a3_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-reverse/ide-debug-native-reverse","title":"反向调试","description":"针对C/C++开发场景，DevEco Studio在提供基础调试能力的基础上，同时提供反向调试能力，帮助开发者更好地理解代码和更迅速定位问题。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-reverse/ide-debug-native-reverse.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-reverse","slug":"/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-reverse/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-reverse/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"反向调试","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-reverse","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"使用LLDB调试命令","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-lldb/"},"next":{"title":"堆栈可视化","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-parallel-stacks/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-reverse/ide-debug-native-reverse.md


const frontMatter = {
	title: '反向调试',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-reverse',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '反向调试';

const assets = {

};



const toc = [{
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "操作步骤",
  "id": "操作步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
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
        id: "反向调试",
        children: "反向调试"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对C/C++开发场景，DevEco Studio在提供基础调试能力的基础上，同时提供反向调试能力，帮助开发者更好地理解代码和更迅速定位问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "反向调试是指在调试过程中可以回退到历史行和历史断点，查看历史调试信息，包括线程、堆栈和变量信息。支持的调试操作为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "进入/退出反向调试模式"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "反向Step Over回退到历史行"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "反向Resume执行到历史断点"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在程序执行历史的记录点上查看全局、静态、局部变量值"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "File > Settings"
        })
      }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio > Preferences/Settings"
        })
      }), "） ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "> Build,Execution,Deployment > Debugger > C++ Debugger"
        })
      }), "设置界面，勾选", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable time travel debug"
        })
      }), "开启C++反向调试开关。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(744228)/* ["default"] */.A) + "",
        width: "931",
        height: "692"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置断点，进入调试模式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启反向调试开关后，在Debugger中会出现反向调试相关按钮。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(670596)/* ["default"] */.A) + "",
            width: "131",
            height: "22"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["需要查看历史调试信息时，点击“Open Time Travel Debug”按钮", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(197114)/* ["default"] */.A) + "",
            width: "27",
            height: "20"
          }), "进入反向调试模式，您可以在此模式下进行调试。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(90716)/* ["default"] */.A) + "",
            width: "759",
            height: "338"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中，操作按钮说明如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(400462)/* ["default"] */.A) + "",
              width: "34",
              height: "34"
            }), "：退出反向调试模式。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(701986)/* ["default"] */.A) + "",
              width: "34",
              height: "34"
            }), "：切换当前高亮行到下一个历史断点，并显示断点相关信息。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(253407)/* ["default"] */.A) + "",
              width: "34",
              height: "34"
            }), "：切换当前高亮行到上一个历史断点，并显示断点相关信息。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(845762)/* ["default"] */.A) + "",
              width: "34",
              height: "34"
            }), "：切换当前高亮行到下一个历史行，并显示历史行相关信息。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(248583)/* ["default"] */.A) + "",
              width: "34",
              height: "34"
            }), "：切换当前高亮行到上一个历史行，并显示历史行相关信息。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(729105)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "某些功能在反向调试模式下无法使用，此时会根据您的行为进行对应提示。"
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
253407(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAIAAAC1JZyVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAM6SURBVEiJ3ZZNb1tFFIafd2butZ3ETih11VakDUUBJBYgJBb8ACQW3bBgwT+EDRIrxB4EQVShKCoqHy0lrYjjfDSJE8f23DksYqel2KmbuF30LO+dOc+8Z86Zc7S7u8vzN/cCGC8dJoy7UAHnSAVWgCGPC+DAQGCkiBVnwQhBcUiMuIAyECnS28cSEmZIuBw30tsYGJ8hT+uBtVZVvcrMa8jTbtrmCt0dXCAVuMDcW6otAEM1nYiRA0e3Ze11Gj/a3l/4kqoL+Mx6e7b+k7VWCRWKDr7ssiqzb4A9K0bIo2C7d+ze17b2nfX2/Stv4wIOui1r3rCtW+RV4gHZtNXfk46uaogNw0gg5Ohs284dW/veGku2fRuXWdGRhMCidbZpr5M69PaJbWIbaQRluBqBWery8Lf0xxdsrlhnm9Qjr+GygSPJ5xbK+BIp4ks4PzowT2B0tNSs3aS5bI0lNlfsoIElLIFGONHoX8PVGClad5etW+nPL9n8xVIEcAHnR8V9HBtgXECO2LbWffvnW2ss2c7vxIN+svWPfHobYFJBcWCt+2z8bH9/Yxs3B3V+7P30UoCAHIh2w7Zv29oP1rxhrVWk/vcJWQAh0d1j765tLFtzGZcRypMCHNljR34UlTPFZ6gFSJjIZqhd1fl3SdH2H9BrIY8m1iYClgAqdeU1pi5Re527X9nGzX4wJ3Q9jyW0z1VdQIHYJp+1rV/pbCE/Ed5xQkcAn6s6T+m6ZuZT+rxfnv36P9OFPRF94XKVX+XcO+7aJ7rysSr1/iFOemyebv99bI5ahZwqF2z+I1XOW68lM+s+JB6MFvR0oUNzyZDkc8296RY/08J1zczjArFN6g0kmRVd4iFFh6JDcUgaOQj8T83AAxhmlM7p4oeEMrFNitbbly9hhgkFleasUiev4itk04RKf+O4mGNNVoCpdo3FT1W9Ynv3mL5Miigjm1H9fcr1fpMOZU1dwtIpMPTbTF5VaQ55ZuY1dRGLFKa8yoUPNLuIy7CIMqYvnzBAaYwZ+miA6pF6uAyXAVhB0cGKQa4Ln/d/PbOagSgMQhlNPRoHXSCUJzsOAoP6PdZniaI77t6XbVR/QZh/AVtSgGTKkItqAAAAAElFTkSuQmCC");

},
729105(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
400462(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAIAAAC1JZyVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAE7SURBVEiJ7ZYxTsNAEEXftx1bip0AbaDhANyBA3EgjgUSJTTQpkgcKxDb2aFBFPE6XkUiQlF+u7t6M7sz+0dlWfL3io7AOGMOU9K7ooMiMAMLxBiKScZE8h3pCwsM2k9cAwrAKKFd2/KVpkJxKMa2RJmKGekl5nZy6mJEMrbq3b082vxJSY52Q/NTmkr5LLp70PU97RfWDmUTwbZm+WbzZ9Jp4CPZZkld0lRIPxc4gDFQxChXekE6CcQIGE2I/DXVX2kICdR9zz2gPp1We54xZ8wZ828xe/60XwVa275tXlsDczSVbRYyF24Eyla41rvqwziIU6a3qhckhcJsjaZSPmNUYJ605Jk6FdOurfqgXhEFm7TbEmcqbsiuuibtwxxp5ECYo13TNdtBjpnX3/orzVwwYFin1Z6nhfkGECZzmG+fkOQAAAAASUVORK5CYII=");

},
197114(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAIAAADz4NHXAAABaklEQVQ4EdXUQU7CQBQGYI9TvQL2CCSeQCVuu2kkeBDChlDihnGFSgAXbSh7CDWBpERhW9uN8968E5gRMhlxhFDY2HTx97Xz9bWd6Qkdezs5Nki7xHSO4xqGdzAo47gmktnODgwiRk2MmvT5AYNb7lnQKkDvEnrXwGzunULgEk+3uCbRd6B3xR8voFXA+JkEqvEi7gCzoV3cgppF2Ro7p+x9ZYnlUCyH65wtJBq46jYb4U+Rexb3LIyfiAh9B31HjRTzLm+eiWSqKnowiLKj6cNqp+ztt0gkgNk4quqQygZRnVMBfQdebtQhEUG/hGFFr6hsEDGsQL+krpA9vt5zzxKTuiruKY6qwGwiocYTkZjUJRo1vot7PrVIpvLFz7u6KNGoIZahDPt+GfmaAheYLbLFBiq5HLNHKjyFdlGicUdHc87wNcFTCFy57Jgtl+Ahq/BHU8kMxzUYlA/6U+hijmyYjzkUfch/EL8Ay6Oz5HbXv0IAAAAASUVORK5CYII=");

},
248583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAIAAAC1JZyVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAASKSURBVEiJzZdbbxNXEMf/M2cvdpy1CTg3sAMUiopQEK1QqlSVKlXqlbc+8v36DaqKSqhKK+hLSypIpUqlUBJKcRI7dUzWu97dM9OHbBrHJoQEFXXedj17fud/5nZMnU4H/73xa2AcDUMAvQbMUewwGGIQARZQsAt2Xv7TQ7gCgGTotUEE7xjIHAlDDBAgUB30IgYAhYYN/fMm0i2qnKexi6icBxFs7zAYsYCC9omwpBpvaGtJlr9GtMYnLsP2qDgONwAIGNrZczBEUEXS1iym4jjcUUgClT6JqvGGrtzQv77D1mOkobSWiAxDaWIOlXPQDDY5UA0DVnttRKuablGxCq8M9nKSJNpd09aSPlnQ9UUYD8ZD1NTWXVUL9sgbhRuAGKr7yXLyLatFsqnt+4h+0JFJPn0NQR1ZDMm019En38rKDWw+ABkUJ6AW4SqilrSWiJizkE5+gPJZ2BiSHRibFL0Nbd3D5oiWpgkKN0C0puuL+vQWWr8AhNEaT87B+Lr5UDsPEDa0eVdV4AZEBoUxsAfJhjX1YdgFWHttdP6Qhw5FTZ56T9cX5bcv8ewRyGBkgsav0LkvqDilm/dl5Rt99BW6qwIlECcdqn+E0RrUDufqUN2oRa+tG79CRXob2v4dnYeQDKVTND3P0+9T+TwKY2R8Trck3dK1O4hWtXVXiNgLyL6N0hSMP5DlgxhiVwH0/tb1RW0tQRKAUDpF1Vme+YwmrgJAFsELaOIqexUhRx/fRNTMTy/t0swnKFYPUrNdNGqRdaECEPwKT8/zzKcYuwjjwyaAgAz8Y3TsAtc+FDb69Da6qwIQEbOhE5cRnAa7ULsfRgGADGibpzAFKr9B1StqfGRx7qBZTpp8l/2KpF19egtxU5v3FAz2aLQOdmBzzAtaJ+XUrCtrd2TlBqJ1uKW+jqkA4Jep8iafuUZnPocbINnUbAu2N5BsA2oUqlDJCxOACrJImz9LFrEpELtwRsAmdwPADgrHaXKOjS9hA3GLgrMoHAeoP9+cvngIJFUbI4tgsh2hChCyhmaRqKXwCdc/RjADm+6cnoUC7iiNXaQL1yEpBaepWAUbaDaAEQBwSyidpLG34JTATt6Vt03S/LG3qTamvAApV59rOsHj74AYXgXAblfcxagAoOIkjV/VUh3pM4B32vT2WjuRcgNiB1kIU9jTyLe7u1MECJI+J86dTidfS1KS1GFrSAEarGNVqAWInAKcAtgH8WBTIRaRNOmJCNGeaeLsBABgR9m1TDr8/d7FoIC1gB3+TVVVdYCB/kzzPD8Muz/+dGd5edk4DvPzhptiJx7DajVN01qtNjc3Vy6Xk2TP+NnFuK6bJL3bt75fWFgoFArGHGLUAxCRbrc7Pz8/OztbrVb3xTCzqoZh2G63i8XiETBhGIZheMChWWuNMbVa7dKlS57nHQETx3G9Xnccx9rBsNG/d2hjTJqmjUaj0+kQ0fCOXmyqKiJBEExNTfm+P0DaxagqM/u+77quDt+hXsKIKMuyOI6HE5oG/hEcQUe/bSf08PvBQbCf3yva//Cq/gr2D9vXXy5Qpkk3AAAAAElFTkSuQmCC");

},
744228(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752669-40279492bf60324ac8932bb5124c8feb.png");

},
701986(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAIAAAC1JZyVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAMgSURBVEiJ7ZbBbxtVEIe/33u79tpxYssmNlabNq3qHpq2KlLVoiJx6AmpgiP8m9w494yERMUJCaURSkQbqIjTOHF23xsO66QpiRPipBwQc9rRe6tv5mlmfqPhcMiHN/cvMP7HzGbJFHqCyiMDYYFYQAQhj/PEgIWLYARGMSLmE9cM5/FVcGCEPYqAS3EJVsYxA8Z5YmHDlwxXSx8rqHXVuUulSRyzs26jV2oNaCwRxsRiJow8BIarcf05GEoIe2rfUWuAT4m5Ddfs9feMtxRzqh2SDAvYGTmdiMGGq7bxHMClFDtYZPlLEihkw1/i2nf644W2X7rlZzQHhDHE01/vOEYA+Vv2NjHwKfkO+1sQJQxRjBht2P6fKInpnPK3mr9O2sAiZtNg0yvNZ5jhK8QCl8LBw7gqPqPYs62fGb9he41bX6s5mIQ45fWmYNC7zFDpHT3BIvnIwjqbP5DU6D5S5z7VFvJgWPyHmLPMeVyCRdv+ldG3jF6T1NUakDbQCS0/K+YwQSss3+b3H82i+k9c7zH1Hj4jFkf7d2aMAZPAZTbaYPc3il3zmdorzPXLir045n2Tx6K9+Snm2+o9VvehWrfJ2octdSkYIY88o1e2u0lSU71H4yr6CJv004eY0Cd0z6VkY5PerHU1f03tezSWSGqHqVwWBiyAU2fFXX+m9l3m+rjk6FS9WEGX8Zqp3qe9ov5nWnxA7WOSyy1oQF5Jps59Db5Rc0ClgTxh/Lfbs2IsYAXyaiyp/0TdR2reotpCOj5pTsHYkYjtvcKZfDt8XVlHi5/oxldqDiayG09W7imYWBDGmEEgjEvBljAgjgl75QTT1afqPlRjCZeeLm7HMOXVdI6sA+BSfI3KAjgrlT+pU+9r7op6n7orT2kNDqT6XLJmAdD8DfU/B3CeYqz2HXyFAsy0cNNd+0Kdeyw+IFsk7p8pndMwRvPmZDxIxIJ6D18l5BA1v4zP1LrN/DlWDh1b1QVG2Cfuv3OV4Ks4hxkxJxb4Ci49RZXPyqb8La2jhQP3YB20CMJnpJewDgIQCzj+GmXnB8I5AKX9t1b1vwBfd1p3kAOmLAAAAABJRU5ErkJggg==");

},
845762(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAIAAAC1JZyVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAARjSURBVEiJ1ZZbb1tFFIXXnjkXX3K1mzRxKATUFhIqeOhDhUSBSjwh8cAT/xB+AKkQoqCCAmqlGqpUSaFW1URNnSbxJfH1+Jwzs3iI2/iSRE0ECJbOk2fkb+89e68ZqdVq+OelTrNZAPkXMGfXq2FEQ3mAgBYQyKlzcl5pFy1szLAOhuKOwUkA/FsxyoPS2H/M8gPWN6C0zN3A+CWIBgjanq0C5QACGw0HcTJGQINOi+VVbtxk9Q+4I/Qz4o3DG4f2+naCiNsAoPRwpxyPUQ50EvV1bv3CrWVW1hiUENbt+jcqqMgbn2H0dQAAQcJJwHRYfYg4kMwi/HHY+BUwomFjdHZYfsDNH1hZY1CGaAAsrVjTUakZAZCcgpMALOIAred8fhc2lLF5JM/Bmt7SHdVpouCkENb59FuuL7Gyxk4FSiORkWQWSrP2xBa+5sZNhHvQPpTH+rp9dpubt7j7G+MW1GD0Q9koFzZGY5Ol+ywus3SfnQoSUzJxSUZeA4CdPOsbrKxa7anUeenUoH3u5Lm1zL0/ZXQeNh4e4mGMj7DBZz+y+LMtP0BQhnZl+qp+6wuMX2RYA0DTQrvEvUf20VcyuYh0jrt57v6OqAknCVHD3d6DUR5gUV9neYVbv7K8gvYuEhmZuqpyHyHzrqTOI2pg7hOlXG7fYbPI2hNELSTPsfEUUQ00EHWkIfVgRCFqc/sun37HyhqDCrQn2ff1xS8x+TbcEcYBIDJ7HYlzjJowIdolNp+hvQ0SOjnQXUMY0aDFfoGlFRZvs7LK1jYSGTX7ocxex8Rl+BkAoIUo+CkZmZOJi2gW2S7BdEAD0Sc7kNPNg+T+Y25+z/IqgyrctGQW1fznyL4HNw0ANABAIAwQNaF8OCmIgmgoFwB4kv30FM2EiJqMatCeuvCp5D7GxGV4o908ADhJmJB7Be7mWfyJewXQDPfu8RgSIPxxjL0pcQs6IXM3ZOYDOGmIgo27pxq30Nrm9h0Wl7mbR7gHJ9U1pIM/oQHtka7qvCgIZXJBElNsFslYJhfgpAHAGgBQDmzI8iqf3+HmLVYfIm6DFmwc9hUtw7rELdAeNzcEgEQWiSkZvQATdus+GBqhXaRzohw4yQPv6VmkxE2ZfEfcNKxFv6TnLXAQgwUJGTAhAQjT6X40R19utFAevDFor/+O6HMBAnBdXztO97T6lgQyAiUn3LcCWIuw3bYmlP5AB/vEmJgcTPmFjp2+w3BI0MpgMXowrut2Op18Pl8oFEREa41TKgzD6enpa9euZbPZMAyPxQRBcO/evaWlJcdxXNc9FYNks9m8cuXKwsJCLpeLoog9A3uIERGS7XZ7f3//bJhGo9FoNIwxw6uHGGutiMzMzCwuLiqlzoBptVrz8/O+79sTGlopZYzZ2dmpVqsiIqd/jBljUqnU7OxsMpkcyOkQQ1JEfN/3PI8n+uBxEhFjTBAExpiBKPvOBkAYhlEUnYHxUgfFH/hxcG5Ini2Vk/Wfeqr/XzB/AUyiX31WtVcoAAAAAElFTkSuQmCC");

},
670596(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAAWCAIAAABsVLjBAAADU0lEQVRoBe2ZwU7bQBCGeZy0r0DzCEh9grao11yiIvogiAsiqBfSE20RUKFEhNMmsREOOCihtSWfTGLA3p15gsoZvHWd2HECkazUI2Rmx7O/Z/fzeo1ZwdyyMQMr2SgjrwJzElm5CdKRGPTFxbZofOZnG+JiG+xuVspfQB0A8Pj4+LLCrutOFYwlIbQ9oe2he8fPPnmVAt9f5cfv+PEHXi16lVe8XkZvMFU9nGAERkHLsgAgnPAcHwAsyyKF4DrGHIIAcHNzo6rqC8K4v79XFKXf7yfXE0+iVuLH771vb/n+quj9QBBSCHqHvFrkB2szwWCBkQ5jTNd1If7KSv1ZHSGEruuMManMRjarDmGgvhEYhpGW63A4DN9hhIE0k2EkkfCXQvUNDn/TkMA8B/P8yR8aPox6mZppjiwwSqaWpmlpVi51mXh0XVfTNFKjBPIlmIm9xoMSQ7vd7nQ6jDEJwzCM9GqmaXa7XYIhMVxdXbVaLcZYAowpJLxKwasURO87IopaSdRKcgzQP/L2XoOty0iywwKjtKDlD9hxHArOenQcR1VVKUXdI800mmEMjuMAwPX1NcG4vb0lwTQ6iGiaJmOs2+06jqMoCvkAMBgMkmHEkvBXgP6VfnD4a5wEIvBqUahbKUuk8cibSzYZY61Wy7btlDoyzbZtGpuUolORpsyPcyIYKE3CmFWNSDDGms2mxECayTBiSYzXLWol/vNjOM5P1kVjMxxJ8FlglBO0nn43m0255VJC8tGyLBpqWIe6yEiyAp2diIFO0UNpJjW5JqiXoiiRjTABRiwJ0djkJ+tUEx1F54tXKcDljgwuDYl2ux15QkYwyKUsxx7nyDXBRib3DJlPMMY3jHgS6havFhH/edGEyx0fhrY70l2ep9PDw4OcKUQcxzA3icgDiq4SuRwFY0mArfsbcv8oXCIigrYLZsN3lmjHjozxOU3Xde/GzPO8qZqxJBCR18u8WoThhFdpWLq32KkzteiEJBLoDfjBmg+jdxiuY/n+sjtNYeEZSPZTiJ2OKySSQPRh1Mv+541q0f/UsaRfO+abu/HZpMh8atNIjLTB7oqLbX628T98AYyb30XHU5FYdBG5PmL+/4nM3AX5msgKipxETiIrM5CVOv4APyUCtaUmf1AAAAAASUVORK5CYII=");

},
90716(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752728-75c661df3e3abf97e7388191a3ff8484.png");

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