"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["810152"], {
110659(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_security_kit_guide_devicesecurity_vps_c_devicesecurity_vps_c_md_4e9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-security-kit-guide-devicesecurity-vps-c-devicesecurity-vps-c-md-4e9.json
var site_docs_system_security_device_security_kit_guide_devicesecurity_vps_c_devicesecurity_vps_c_md_4e9_namespaceObject = JSON.parse('{"id":"system-security/device-security-kit-guide/devicesecurity-vps-c/devicesecurity-vps-c","title":"病毒防护服务管理(C/C++)","description":"场景介绍","source":"@site/docs/system-security/device-security-kit-guide/devicesecurity-vps-c/devicesecurity-vps-c.md","sourceDirName":"system-security/device-security-kit-guide/devicesecurity-vps-c","slug":"/system-security/device-security-kit-guide/devicesecurity-vps-c/","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-vps-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"病毒防护服务管理(C/C++)","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-vps-c","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"防窥保护","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-dlpantipeep/"},"next":{"title":"查询当前状态场景","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-superprivacymode/devicesecurity-getsuperprivacymode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-security-kit-guide/devicesecurity-vps-c/devicesecurity-vps-c.md


const frontMatter = {
	title: '病毒防护服务管理(C/C++)',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-vps-c',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '病毒防护服务管理(C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "病毒防护服务管理cc",
        children: "病毒防护服务管理(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20)开始，三方EDR（Endpoint Detection and Response）应用在Device Security Kit上注册后，可以调用注册、更新、卸载（删除数据）接口，将自身应用信息提交至HarmonyOS安全防护服务进行统一管理；零信任应用在Device Security Kit上注册后，可以查询所有注册的EDR信息列表（包含包名、当前版本号、上次更新时间、病毒防护开关状态、用户ID）；MDM应用在Device Security Kit上注册后，企业管理员可通过MDM（Mobile Device Management）应用启用或禁用HarmonyOS自带的安全防护服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前能力仅支持2in1设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持并发场景，同一时间仅允许一个三方EDR应用或MDM应用调用该模块接口。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(751150)/* ["default"] */.A) + "",
        width: "694",
        height: "353"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(521234)/* ["default"] */.A) + "",
        width: "694",
        height: "210"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(166377)/* ["default"] */.A) + "",
        width: "714",
        height: "486"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "流程说明"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三方EDR应用注册、更新、卸载时调用该模块接口向HarmonyOS安全防护服务进行应用信息同步。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "零信任应用调用该模块接口查询当前注册的所有三方EDR应用的信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MDM应用调用该模块接口实现HarmonyOS安全防护功能的启停。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是病毒防护服务管理的相关接口，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityantivirus/devicesecurity-capi-securityantivirus",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_RegisterAntivirus(const char* bundleName)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方EDR应用向HarmonyOS安全防护服务注册。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_UnregisterAntivirus(const char* bundleName)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方EDR应用从HarmonyOS安全防护服务注销。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_UpdateAntivirus(const SecurityAntivirus_Antivirus* antivirus)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方EDR应用向HarmonyOS安全防护服务更新自身应用信息，包含包名、当前版本号、上次更新时间、病毒防护开关状态、用户ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_QueryAntivirus(SecurityAntivirus_Antivirus** list, uint32_t* length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "零信任应用向HarmonyOS安全防护服务查询当前所有三方EDR注册信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_QueryPreinstalledAntivirus  (SecurityAntivirus_Antivirus** list, uint32_t* length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDM应用向HarmonyOS安全防护服务查询所有用户的防病毒功能状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_EnablePreinstalledAntivirus(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDM应用启用HarmonyOS安全防护服务所有用户的防病毒功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_DisablePreinstalledAntivirus(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDM应用禁用HarmonyOS安全防护服务所有用户的防病毒功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_EnablePreinstalledAntivirusByAccount(int32_t accountId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDM应用启用HarmonyOS安全防护服务中用户ID为accountId的防病毒功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SecurityAntivirus_ErrCode HMS_SecurityAntivirus_DisablePreinstalledAntivirusByAccount(int32_t accountId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDM应用禁用HarmonyOS安全防护服务中用户ID为accountId的防病毒功能。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(678089)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在开发准备过程中，需要申请权限：ohos.permission.REGISTER_ANTIVIRUS、ohos.permission.MANAGE_ANTIVIRUS、ohos.permission.MANAGE_PREINSTALLED_ANTIVIRUS。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["只允许名单内的应用申请该权限，申请方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-enterprise-apps",
          children: "申请使用企业类应用可用权限"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-mdm-apps",
          children: "申请使用仅MDM应用可用权限"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMakeLists.txt中导入病毒防护服务管理共享库，并链接该库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "find_library(dsm-lib libsecurityantivirus_ndk.z.so)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so ${dsm-lib})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入病毒防护服务管理的头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstdio>\n#include <cstdlib>\n#include \"DeviceSecurityKit/security_antivirus.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "EDR应用执行接口调用，分别向HarmonyOS安全防护服务中同步注册、卸载、更新信息，需要ohos.permission.REGISTER_ANTIVIRUS权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const char *regisBundleName = \"****\"; // 构造注册接口入参\nint ret = HMS_SecurityAntivirus_RegisterAntivirus(regisBundleName);\nprintf(\"HMS_SecurityAntivirus_RegisterAntivirus ret = %d \\n\", ret);\n\nconst char *unRegisBundleName = \"****\"; // 构造卸载接口入参\nret = HMS_SecurityAntivirus_UnregisterAntivirus(unRegisBundleName);\nprintf(\"HMS_SecurityAntivirus_UnregisterAntivirus ret = %d \\n\", ret);\n\nSecurityAntivirus_Antivirus updateAntivirus; // 构造更新接口入参\nret = HMS_SecurityAntivirus_UpdateAntivirus(&updateAntivirus);\nprintf(\"HMS_SecurityAntivirus_UpdateAntivirus ret = %d \\n\", ret);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "零信任应用执行接口调用，查询当前所有在HarmonyOS安全防护服务中注册的三方EDR应用信息，需要ohos.permission.MANAGE_ANTIVIRUS权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(505244)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "零信任应用在根据应用进程信息进行业务处理后，需要释放查询接口出入参的内存。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SecurityAntivirus_Antivirus *list = nullptr; // 构造查询接口出参1\nuint32_t length = 0; // 构造查询接口出参2\nint ret = HMS_SecurityAntivirus_QueryAntivirus(&list, &length);\nprintf(\"HMS_SecurityAntivirus_QueryAntivirus ret = %d \\n\", ret);\nfor (uint32_t i = 0; i < length; ++i) {\n    free((char*)(list[i].bundleName)); // 释放出参内部字符串\n    free((char*)(list[i].metadata));\n}\nfree(list); // 释放出参数组本身\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MDM应用执行接口调用，实现HarmonyOS安全防护服务的启停，需要ohos.permission.MANAGE_PREINSTALLED_ANTIVIRUS权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(944266)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MDM应用在根据应用进程信息进行业务处理后，需要释放查询接口出入参的内存。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SecurityAntivirus_Antivirus *list = nullptr; // 构造查询接口出参1\nuint32_t length = 0; // 构造查询接口出参2\nint ret = HMS_SecurityAntivirus_QueryPreinstalledAntivirus(&list, &length);\nprintf(\"HMS_SecurityAntivirus_QueryPreinstalledAntivirus ret = %d \\n\", ret);\nfor (uint32_t i = 0; i < length; ++i) {\n    free((char*)(list[i].bundleName)); // 释放出参内部字符串\n    free((char*)(list[i].metadata));\n}\nfree(list); // 释放出参数组本身\n\nret = HMS_SecurityAntivirus_EnablePreinstalledAntivirus();\nprintf(\"HMS_SecurityAntivirus_EnablePreinstalledAntivirus ret = %d \\n\", ret);\n\nret = HMS_SecurityAntivirus_DisablePreinstalledAntivirus();\nprintf(\"HMS_SecurityAntivirus_DisablePreinstalledAntivirus ret = %d \\n\", ret);\n\nint32_t accountId = 0; // 构造合法的用户ID\nret = HMS_SecurityAntivirus_EnablePreinstalledAntivirusByAccount(accountId);\nprintf(\"HMS_SecurityAntivirus_EnablePreinstalledAntivirusByAccount ret = %d \\n\", ret);\n\nret = HMS_SecurityAntivirus_DisablePreinstalledAntivirusByAccount(accountId );\nprintf(\"HMS_SecurityAntivirus_DisablePreinstalledAntivirusByAccount ret = %d \\n\", ret);\n"
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
521234(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
505244(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
751150(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958404-672bce9c55ba4c8424eb05891761239d.png");

},
166377(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798756-351c89dd1a438c7297f10503efc14d98.png");

},
678089(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
944266(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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