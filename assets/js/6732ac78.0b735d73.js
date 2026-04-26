"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["445617"], {
632121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ime_kit_ime_kit_security_ime_kit_security_md_673_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ime-kit-ime-kit-security-ime-kit-security-md-673.json
var site_docs_ime_kit_ime_kit_security_ime_kit_security_md_673_namespaceObject = JSON.parse('{"id":"ime-kit/ime-kit-security/ime-kit-security","title":"输入法安全模式介绍","description":"为了保护用户数据安全，系统增加了输入法安全模式功能，包括基础模式和完整体验模式。在基础模式下，输入法扩展无法调用任何可能涉及访问或泄漏用户隐私数据的系统能力；而在完整体验模式下，则没有该限制。","source":"@site/docs/ime-kit/ime-kit-security/ime-kit-security.md","sourceDirName":"ime-kit/ime-kit-security","slug":"/ime-kit/ime-kit-security/","permalink":"/harmonyos-docs-site/ime-kit/ime-kit-security/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"输入法安全模式介绍","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ime-kit-security","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"输入法子类型开发指南","permalink":"/harmonyos-docs-site/ime-kit/input-method-subtype-guide/"},"next":{"title":"在自绘编辑框中使用输入法开发指导 (C/C++)","permalink":"/harmonyos-docs-site/ime-kit/use-inputmethod-in-custom-edit-box-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ime-kit/ime-kit-security/ime-kit-security.md


const frontMatter = {
	title: '输入法安全模式介绍',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ime-kit-security',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '输入法安全模式介绍';

const assets = {

};



const toc = [{
  "value": "基础模式介绍",
  "id": "基础模式介绍",
  "level": 2
}, {
  "value": "完整体验模式介绍",
  "id": "完整体验模式介绍",
  "level": 2
}, {
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "共享沙箱介绍",
  "id": "共享沙箱介绍",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "输入法安全模式介绍",
        children: "输入法安全模式介绍"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了保护用户数据安全，系统增加了输入法安全模式功能，包括基础模式和完整体验模式。在基础模式下，输入法扩展无法调用任何可能涉及访问或泄漏用户隐私数据的系统能力；而在完整体验模式下，则没有该限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户可以在设置应用中切换基础模式和完整体验模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础模式介绍",
      children: "基础模式介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基础模式下，输入法扩展（InputMethodExtensionAbility）进程无法拉起其他UIAbility或ExtensionAbility。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基础模式下，输入法扩展会受到系统管控，不能使用涉及访问或泄漏用户个人数据的各种接口，同时无法将数据传递出进程。管控功能包括但不限于：网络、短信、电话、麦克风、定位、相机、蓝牙、壁纸、支付、日历、游戏、扬声器、Wi-Fi、剪切板、多媒体、联系人、公共事件、系统账号、健康数据、地图服务、推送服务、融合搜索、共享内存、分布式特性、广告设备标识、振动等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基础模式下，输入法扩展可以使用基础输入功能必要的系统能力，例如，IME Kit、ArkUI、窗口、图形、屏幕管理等。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["基础模式下，输入法扩展对", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%85%B1%E4%BA%AB%E6%B2%99%E7%AE%B1%E4%BB%8B%E7%BB%8D",
          children: "共享沙箱"
        }), "只读，对输入法扩展独立沙箱可读写；应用主入口可以对", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%85%B1%E4%BA%AB%E6%B2%99%E7%AE%B1%E4%BB%8B%E7%BB%8D",
          children: "共享沙箱"
        }), "及其独立沙箱读写。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整体验模式介绍",
      children: "完整体验模式介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "完整体验模式下，输入法扩展不受基础模式相关限制，例如可以拉起其他UIAbility或ExtensionAbility、以调用访问用户数据的接口等。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["完整体验模式下，输入法扩展可以对", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%85%B1%E4%BA%AB%E6%B2%99%E7%AE%B1%E4%BB%8B%E7%BB%8D",
          children: "共享沙箱"
        }), "读写。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-arkts/js-apis-inputmethod-extension-ability/js-apis-inputmethod-extension-ability#oncreate",
        children: "onCreate"
      }), "在输入法扩展的 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-arkts/js-apis-inputmethod-extension-ability/js-apis-inputmethod-extension-ability#oncreate",
        children: "onCreate"
      }), "生命周期回调函数中通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-arkts/js-apis-inputmethodengine/js-apis-inputmethodengine#getsecuritymode11",
        children: "getSecurityMode"
      }), "接口查询当前输入法应用的安全模式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果当前处于基础模式，开发者需要调整内部功能的呈现情况，以避免出现功能不可用的情况。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当处于完整体验模式时，开发者可以使用访问用户数据的接口，但这些接口的使用仅限于提升输入法的用户体验。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了确保输入法功能的稳定性，开发者应当在基础模式下仅使用与基础输入功能相关的能力，并且不得试图绕过系统机制将数据传递到输入法扩展之外。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "共享沙箱介绍",
      children: "共享沙箱介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入法扩展使用独立沙箱，与应用主入口不可互相访问对方的独立沙箱。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为方便输入法扩展和应用主入口之间数据传递和共享，提供了共享沙箱机制。输入法扩展和应用主入口都能够访问共享沙箱。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图1"
            })
          }), " 共享沙箱"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(345959)/* ["default"] */.A) + "",
            width: "525",
            height: "265"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "共享沙箱的配置流程。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当应用主入口的", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-releaseprofile-0000001914714796",
            children: "profile"
          }), "和输入法扩展的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#extensionabilities%E6%A0%87%E7%AD%BE",
            children: "dataGroupIds"
          }), "中包含相同的data-group-id时，他们就可以使用这个data-group-id对应的共享沙箱。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为了使用共享沙箱，需要先申请一个data-group-id，并将其分别配置到应用主入口的", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-releaseprofile-0000001914714796",
            children: "profile"
          }), "和输入法扩展的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#extensionabilities%E6%A0%87%E7%AD%BE",
            children: "dataGroupIds"
          }), "中。具体流程如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "申请data-group-id，申请流程如下。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["按照如下格式发送邮件到", (0,jsx_runtime.jsx)(_components.a, {
                  href: "mailto:agconnect@huawei.com",
                  children: "agconnect@huawei.com"
                }), "。\n", (0,jsx_runtime.jsxs)(_components.ol, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "邮件标题格式：【输入法应用申请应用内数据共享】xxx应用"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "邮件内容："
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "应用appid：xxx"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "应用名称：xxx"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "开发者id：xxx"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "邮件附件中提供："
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "①输入法应用安装至系统后，在设置的输入法列表中显示该应用的截图。"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "②输入法应用中module.json5文件的InputMethodExtensionAbility相关配置截图。"
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "我们收到邮件后，3个工作日内会答复审核结果。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["待您收到data-group-id申请成功的邮件回复后，重新生成", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-releaseprofile-0000001914714796",
                children: "应用的profile"
              }), "，新生成的profile里面包含本次申请到的data-group-id；并使用DevEco Studio", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ide-publish-app#section280162182818",
                children: "配置工程的签名信息"
              }), "，将新的profile配置到工程中。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["按照data-group-id申请成功的回复邮件指导，获取到您本次申请到的data-group-id，并在InputMethodExtensionAbility所在的module.json5中配置", (0,jsx_runtime.jsx)(_components.a, {
                href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#extensionabilities%E6%A0%87%E7%AD%BE",
                children: "dataGroupIds"
              }), "。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(54508)/* ["default"] */.A) + "",
            width: "753",
            height: "324"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "共享沙箱使用流程。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["a. 分别在输入法扩展和应用主入口通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#getgroupdir10",
            children: "getGroupDir"
          }), "获取共享沙箱路径。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(152448)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接口入参dataGroupID应该填写您本次申请到的data-group-id。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "b. 如果接口调用成功，且能够返回共享沙箱路径，说明您申请并配置的data-group-id已生效，此时您可通过共享沙箱在应用主入口和输入法扩展之间进行数据共享。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(640750)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基础模式下输入法扩展对共享沙箱是只读权限，不可写入数据；完整体验模式下可读写。"
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
640750(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
345959(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798668-8d258168dba800ead69bd4d29f454467.png");

},
152448(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
54508(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438363-dff73db73fc80e077dbe5b718ed6fa04.png");

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