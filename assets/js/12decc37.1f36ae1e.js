"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["921884"], {
391811(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_mdm_kit_mdm_kit_guide_mdm_kit_guide_md_12d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-mdm-kit-mdm-kit-guide-mdm-kit-guide-md-12d.json
var site_docs_system_basicfun_mdm_kit_mdm_kit_guide_mdm_kit_guide_md_12d_namespaceObject = JSON.parse('{"id":"system-basicfun/mdm-kit/mdm-kit-guide/mdm-kit-guide","title":"MDM Kit开发指南","description":"功能介绍","source":"@site/docs/system-basicfun/mdm-kit/mdm-kit-guide/mdm-kit-guide.md","sourceDirName":"system-basicfun/mdm-kit/mdm-kit-guide","slug":"/system-basicfun/mdm-kit/mdm-kit-guide/","permalink":"/harmonyos-docs-site/system-basicfun/mdm-kit/mdm-kit-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"MDM Kit开发指南","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit-guide","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"MDM Kit简介","permalink":"/harmonyos-docs-site/system-basicfun/mdm-kit/mdm-kit-intro/"},"next":{"title":"EnterpriseAdminExtensionAbility开发指南","permalink":"/harmonyos-docs-site/system-basicfun/mdm-kit/mdm-kit-admin/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/mdm-kit/mdm-kit-guide/mdm-kit-guide.md


const frontMatter = {
	title: 'MDM Kit开发指南',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit-guide',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'MDM Kit开发指南';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "申请资质",
  "id": "申请资质",
  "level": 3
}, {
  "value": "创建EnterpriseAdminExtensionAbility",
  "id": "创建enterpriseadminextensionability",
  "level": 3
}, {
  "value": "声明接口所需权限",
  "id": "声明接口所需权限",
  "level": 3
}, {
  "value": "MDM功能开发",
  "id": "mdm功能开发",
  "level": 3
}, {
  "value": "调试说明",
  "id": "调试说明",
  "level": 3
}, {
  "value": "分发部署",
  "id": "分发部署",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "mdm-kit开发指南",
        children: "MDM Kit开发指南"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MDM Kit为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/mdm-kit/mdm-kit-term#mdm%E5%BA%94%E7%94%A8%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%E5%BA%94%E7%94%A8",
        children: "MDM应用"
      }), "提供设备管理能力，包括企业设备管理与事件监听、应用管理、禁用管理、安全管理、设备设置、设备控制、设备信息获取、硬件外设管理、系统管理、网络通信管理等，具体API接口说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/mdm-arkts",
        children: "API参考"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设备管理应用：具备", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/mdm-kit/mdm-kit-admin",
        children: "企业设备管理扩展能力"
      }), "的应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要完成一个设备管理应用开发，需要完成以下步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "申请资质。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建EnterpriseAdminExtensionAbility。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "声明接口所需权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MDM功能开发与调试。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分发部署。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "申请资质",
      children: "申请资质"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发应用前，需要在AppGallery Connect中配置项目和应用信息。包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148",
          children: "注册成为企业开发者"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-createproject-0000001100334664",
          children: "创建项目"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-createapp-0000001146718717",
          children: "创建应用"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-mdm-cert-0000002283256801",
          children: "申请MDM应用的证书"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-mdm-profile-0000002248341094",
          children: "Profile"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建enterpriseadminextensionability",
      children: "创建EnterpriseAdminExtensionAbility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/mdm-kit/mdm-kit-admin",
        children: "EnterpriseAdminExtensionAbility开发指南"
      }), "完成EnterpriseAdminExtensionAbility的创建。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "声明接口所需权限",
      children: "声明接口所需权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在申请权限前，请保证符合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#%E6%9D%83%E9%99%90%E4%BD%BF%E7%94%A8%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E5%88%99",
        children: "权限使用的基本原则"
      }), "。然后在工程Module对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5"
      }), "配置文件中\"requestPermissions\"标签下声明要使用的接口所需的权限。例如："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\": [\n// ···\n  {\n    \"name\": \"ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS\"\n  },\n// ···\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(998250)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["所需要申请的权限请参考具体接口，这里提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/mdm-api/mdm-arkts/js-apis-enterprise-adminmanager/js-apis-enterprise-adminmanager",
        children: "企业设备管理"
      }), "的链接，可基于该文档查看MDM Kit内其他API文档。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明的MDM权限必须在申请MDM应用的证书和Profile时完成申请，否则后面应用还是无法获取到该权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mdm功能开发",
      children: "MDM功能开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导包。MDM Kit目前包含应用管理、通信管理、安全管理、限制策略、系统管理、设备设置和查询、设备控制等多种类型的API，请根据业务需求导入使用。以下为导入adminManager和restrictions的示例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { adminManager, restrictions } from '@kit.MDMKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用接口，实现相应的功能。以下为禁用设备Wi-Fi的示例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { adminManager, restrictions } from '@kit.MDMKit';\n// ...\nimport { Want } from '@kit.AbilityKit';\n// ...\n  private wantTemp: Want = {\n    bundleName: 'com.example.mdmsample',\n    abilityName: 'EnterpriseAdminAbility',\n  };\n  // ...\n    try {\n      restrictions.setDisallowedPolicy(this.wantTemp, 'wifi', isDisallow);\n      console.info(isDisallow ? 'disable wifi success.' : 'enable wifi success.');\n      // ...\n    } catch (err) {\n      console.error('setDisallowedPolicy fail.');\n      // ...\n    }\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调试说明",
      children: "调试说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于MDM接口需要在激活企业设备管理扩展能力后使用，调试时需通过hdc命令来激活/解除激活扩展能力，命令如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 激活为超级设备管理应用\nhdc shell edm enable-admin -n 包名 -a 企业设备管理扩展能力类名\n# 激活为BYOD设备管理应用\nhdc shell edm enable-admin -n 包名 -a 企业设备管理扩展能力类名 -t byod\n# 从API version 23开始支持激活为普通设备管理应用，该命令在PC/2in1设备可正常使用，在其他形态设备中使用会报错\nhdc shell edm enable-admin -n 包名 -a 企业设备管理扩展能力类名 -t da\n# 解除激活\nhdc shell edm disable-admin -n 包名\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(945066)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正式使用时，在同一设备上只能激活一个超级设备管理应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BYOD（bring your own device），自带设备办公。指一些企业允许员工携带自己的笔记本电脑、平板电脑、智能手机等移动终端设备到办公场所，并可以用这些设备获取公司内部信息、使用企业特许应用的一种政策。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调试之前，需要完成资质申请。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "分发部署",
      children: "分发部署"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将开发、调试完成的MDM应用申请商用：参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/business/cn/doc/HEM/developer-commercial-license-0000002469392504",
        children: "企业MDM应用商用申请"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将已商用发布的MDM应用部署到设备上：参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/business/cn/doc/HEM/hem_user-guide_add-reseller_management-devices-ot-0000002307766441",
        children: "如何管理部署策略"
      }), "，将部署配置的部署类型一栏勾选上MDM应用部署。"]
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
945066(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
998250(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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