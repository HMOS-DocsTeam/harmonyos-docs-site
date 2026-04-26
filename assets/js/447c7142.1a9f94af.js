"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["189100"], {
429165(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_signing_ide_signing_md_447_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-signing-ide-signing-md-447.json
var site_docs_ide_signing_ide_signing_md_447_namespaceObject = JSON.parse('{"id":"ide-signing/ide-signing","title":"配置调试签名","description":"针对开发调试场景，DevEco Studio为开发者提供了自动签名方案，帮助开发者高效进行调试。此外，也可以选择手动签名方式生成调试签名。","source":"@site/docs/ide-signing/ide-signing.md","sourceDirName":"ide-signing","slug":"/ide-signing/","permalink":"/harmonyos-docs-site/ide-signing/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"配置调试签名","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"支持使用预览器的API清单","permalink":"/harmonyos-docs-site/ide-previewer-01/ide-previewer-api-list/"},"next":{"title":"使用本地真机运行应用","permalink":"/harmonyos-docs-site/ide-run-device/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-signing/ide-signing.md


const frontMatter = {
	title: '配置调试签名',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '配置调试签名';

const assets = {

};



const toc = [{
  "value": "使用场景说明",
  "id": "使用场景说明",
  "level": 2
}, {
  "value": "自动签名",
  "id": "自动签名",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 3
}, {
  "value": "关联注册应用",
  "id": "关联注册应用",
  "level": 3
}, {
  "value": "未关联注册应用",
  "id": "未关联注册应用",
  "level": 3
}, {
  "value": "手动签名",
  "id": "手动签名",
  "level": 2
}, {
  "value": "生成密钥和证书请求文件",
  "id": "生成密钥和证书请求文件",
  "level": 3
}, {
  "value": "申请调试证书",
  "id": "申请调试证书",
  "level": 3
}, {
  "value": "申请调试Profile文件和添加权限信息",
  "id": "申请调试profile文件和添加权限信息",
  "level": 3
}, {
  "value": "配置签名信息",
  "id": "配置签名信息",
  "level": 3
}, {
  "value": "附录",
  "id": "附录",
  "level": 2
}, {
  "value": "自动签名支持的ACL权限",
  "id": "自动签名支持的acl权限",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "配置调试签名",
        children: "配置调试签名"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对开发调试场景，DevEco Studio为开发者提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section18815157237",
        children: "自动签名"
      }), "方案，帮助开发者高效进行调试。此外，也可以选择", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section297715173233",
        children: "手动签名"
      }), "方式生成调试签名。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景说明",
      children: "使用场景说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["自动签名仅用于调试场景，方便开发者进行应用调试。部分调试场景下必须使用手动签名：\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["当需要进行跨设备调试、跨应用交互调试、断网情况下调试或者多用户共同开发且需要共享密钥时，必须使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section297715173233",
              children: "手动签名"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果开发过程中使用到需要审批的权限时，例如：\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["使用部分不支持自动签名的", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions",
                  children: "受限开放权限"
                }), "时，必须使用", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#section297715173233",
                  children: "手动签名"
                }), "。支持自动签名的ACL权限清单请参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#section5301916183411",
                  children: "自动签名支持的ACL权限"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "需要华为业务方审核的权限时（例如华为账号一键登录等），必须使用手动签名。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "若kit需要配置指纹，建议使用手动签名。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "发布场景必须使用手动签名。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自动签名",
      children: "自动签名"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio 6.0.0 Beta3及之前版本，自动签名未关联注册的应用。从DevEco Studio 6.0.0 Beta5版本开始，自动签名新增关联注册应用的方式，签名操作界面新增“", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Associate with registered application"
        })
      }), "”选项。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["关联注册应用的自动签名：与应用市场（AppGallery Connect，简称AGC）的应用绑定，可在DevEco Studio开通", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506#section1817619495251",
          children: "开放能力"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "未关联注册应用的自动签名：未与应用市场的应用绑定，不支持在DevEco Studio开通开放能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "关联注册应用进行签名仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "元服务的自动签名属于关联注册应用进行签名，元服务自动签名仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用自动签名前，请确保本地系统时间与北京时间（UTC/GMT+08:00）保持一致。如果不一致，将导致签名失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "关联注册应用",
      children: "关联注册应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "操作步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["连接真机设备或模拟器，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-run-device",
            children: "使用本地真机运行应用/元服务"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-emulator",
            children: "使用模拟器运行应用/元服务"
          }), "，真机连接成功后如下图所示："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(678168)/* ["default"] */.A) + "",
            width: "377",
            height: "328"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(420032)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果同时连接多个设备，则使用自动化签名时，会同时将这多个设备的信息写到证书文件中。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["进入", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File > Project Structure... > Project > Signing Configs"
            })
          }), "界面，勾选“", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Associate with registered application"
            })
          }), "”。如果未登录，请先点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sign In"
            })
          }), "进行登录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(663540)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "963",
            height: "600"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(89763)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Team"
              })
            }), "下拉框，可以切换团队账号。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["开始签名后，DevEco Studio根据Bundle name查询该团队在AGC上同包名的应用。若在AGC查询到应用，则进行自动签名；若在AGC未查询到应用或应用冲突，请根据提示信息修改后重新自动签名，具体修改请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-signature-service-18",
              children: "常见问题"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enable open capabilities"
            })
          }), "，在DevEco Studio上开通", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506#section1817619495251",
            children: "开放能力"
          }), "。当前支持开通如下四种开放能力：Push Kit（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-kit-introduction",
            children: "推送服务"
          }), "）、Device status detection（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/device-security-kit-guide/devicesecurity-deviceverify-develop",
            children: "应用设备状态检测"
          }), "）、Map Kit（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/map-kit-guide/map-introduction",
            children: "地图服务"
          }), "）、Safety Detect（", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-safetydetect-develop",
            children: "安全检测服务"
          }), "），应用根据需要进行勾选。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(483609)/* ["default"] */.A) + "",
            width: "954",
            height: "591"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）在配置文件中添加ACL权限信息，ACL权限清单请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section5301916183411",
            children: "自动签名支持的ACL权限"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在需要使用权限的模块的module.json5（Stage模型）/config.json（FA模型）文件中添加“requestPermissions”/“reqPermissions”字段，并在字段下添加对应的权限名等信息。以下示例为在Stage模型工程中增加\"ohos.permission.ACCESS_DDK_USB\"权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    ...\n    \"requestPermissions\": [{\n      \"name\": \"ohos.permission.ACCESS_DDK_USB\",\n    }],\n    ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(94856)/* ["default"] */.A) + "",
            width: "414",
            height: "264"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["修改配置文件后点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            })
          }), "，若应用已在AGC申请该权限则签名成功；若应用未申请该权限，会导致签名失败，点击Notice弹窗中\"", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "submit a permission request in AppGallery Connect"
            })
          }), "\"或\"", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Submit"
            })
          }), "\"，跳转至AGC申请权限，然后再返回DevEco Studio界面重新签名。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(135395)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "966",
            height: "604"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(665077)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["申请ACL前注意事项：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["在申请ACL权限前，请审视是否符合", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions",
                  children: "受限权限的使用场景"
                }), "。当前仅少量符合特殊场景的应用可在通过审批后，使用受限权限。申请方式请见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
                  children: "申请使用受限权限"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["涉及受限权限的应用，在上架时，应用市场（AGC）将根据应用的使用场景审核是否可以使用对应的受限权限。如不符合，应用的上架申请将被驳回，审核方式请见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-app-0000002271695230",
                  children: "发布HarmonyOS应用"
                }), "。"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["申请ACL后Profile证书说明：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "在ACL权限申请审批完成前，可获得一个有效期较短的临时Profile证书，使应用完成签名。临时证书到期后，若申请仍未审批通过，签名时需再次申请和再次获取临时证书。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "在ACL权限申请审批完成后，可获取一个有效期较长的正式Profile证书。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["签名完成后，在本地生成密钥（.p12）、证书请求文件（.csr）、数字证书（.cer）及Profile文件（.p7b）。将鼠标悬停在Provisioning Profile: DevEco Managed Profile后", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(39133)/* ["default"] */.A) + "",
            width: "26",
            height: "25"
          }), "，可查看证书有效期、包名（bundle name）、ACL权限（acl）、开放能力（capability）等信息；或进入工程级build-profile.json5文件，在“signingConfigs”下可查看到配置成功的签名信息。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "未关联注册应用",
      children: "未关联注册应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "HarmonyOS工程********按以下步骤操作："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["连接真机设备或模拟器，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-run-device",
            children: "使用本地真机运行应用/元服务"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-emulator",
            children: "使用模拟器运行应用/元服务"
          }), "，真机连接成功后如下图所示："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(906591)/* ["default"] */.A) + "",
            width: "377",
            height: "328"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(255392)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果同时连接多个设备，则使用自动化签名时，会同时将这多个设备的信息写到证书文件中。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["进入", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File > Project Structure... > Project > Signing Configs"
            })
          }), "界面，勾选“", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Automatically generate signature"
            })
          }), "”即可完成签名。如果未登录，请先单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sign In"
            })
          }), "进行登录，然后自动完成签名。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(916578)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "962",
            height: "601"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）在配置文件中添加ACL权限信息，ACL权限清单请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section5301916183411",
            children: "自动签名支持的ACL权限"
          }), "。修改配置文件后，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ok。"
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在需要使用权限的模块的module.json5（Stage模型）/config.json（FA模型）文件中添加“requestPermissions”/“reqPermissions”字段，并在字段下添加对应的权限名等信息，以在Stage模型工程中增加\"ohos.permission.ACCESS_DDK_USB\"权限为例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    ...\n    \"requestPermissions\": [{\n      \"name\": \"ohos.permission.ACCESS_DDK_USB\",\n    }],\n    ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(927934)/* ["default"] */.A) + "",
            width: "414",
            height: "264"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(634425)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在调试签名时，不会强校验配置文件中添加的ACL权限。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["涉及受限权限的应用，上架时，应用市场（AGC）将根据应用的使用场景审核是否可以使用对应的受限权限，如不符合，应用的上架申请将被驳回。在配置ACL权限前，请审视是否符合", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions",
              children: "受限权限的使用场景"
            }), "。当前仅少量符合特殊场景的应用可在通过审批后，使用受限权限，申请方式请见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
              children: "申请使用受限权限"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["签名完成后，在本地生成密钥（.p12）、证书请求文件（.csr）、数字证书（.cer）及Profile文件（.p7b）。将鼠标悬停在Provisioning Profile: DevEco Managed Profile后", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(883409)/* ["default"] */.A) + "",
            width: "26",
            height: "25"
          }), "，可查看证书有效期、包名（bundle name）、ACL权限（acl）、开放能力（capability）等信息；或进入工程级build-profile.json5文件，在“signingConfigs”下可查看到配置成功的签名信息。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "OpenHarmony工程********按以下步骤操作："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["连接真机设备或模拟器，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-run-device",
            children: "使用本地真机运行应用/元服务"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-emulator",
            children: "使用模拟器运行应用/元服务"
          }), "，真机连接成功后如下图所示："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(795631)/* ["default"] */.A) + "",
            width: "377",
            height: "328"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["进入", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File > Project Structure... > Project > Signing Configs"
            })
          }), "界面。仅勾选“", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Automatically generate signature"
            })
          }), "”时，生成OpenHarmony签名；勾选“", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Support HarmonyOS"
            })
          }), "”和“", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Automatically generate signature"
            })
          }), "”时，生成HarmonyOS签名。如果未登录，请先单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sign In"
            })
          }), "进行登录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(840288)/* ["default"] */.A) + "",
            width: "951",
            height: "592"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "签名完成后，如下图所示。在本地生成密钥（.p12）、证书请求文件（.csr）、数字证书（.cer）及Profile文件（.p7b），数字证书在AGCt网站的“证书、APP ID和Profile”页签中可以查看。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(286819)/* ["default"] */.A) + "",
            width: "950",
            height: "595"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(612028)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OpenHarmony工程签名时，推荐使用HarmonyOS签名。因为OpenHarmony签名是Release签名，Release签名的应用不支持调试和打印debug日志等。此外，OpenHarmony签名可能会影响应用运行。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果同时连接多个设备，则使用自动化签名时，会同时将这多个设备的信息写到证书文件中。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "手动签名",
      children: "手动签名"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS应用/元服务通过数字证书（.cer文件）和Profile文件（.p7b文件）来保证应用/元服务的完整性。在申请数字证书和Profile文件前，需要通过DevEco Studio生成密钥（存储在格式为.p12的密钥库文件中）和证书请求文件（.csr文件）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "基本概念"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "密钥"
          })
        }), "：格式为.p12，包含非对称加密中使用的公钥和私钥，存储在密钥库文件中，公钥和私钥用于数字签名和验证。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "证书请求文件"
          })
        }), "：格式为.csr，全称为Certificate Signing Request，包含密钥对中的公钥和通用名称、组织名称、组织单位等信息，用于向AppGallery Connect申请数字证书。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "数字证书"
          })
        }), "：格式为.cer，由华为AppGallery Connect颁发。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Profile文件"
          })
        }), "：格式为.p7b，包含HarmonyOS应用/元服务的包名、数字证书信息、描述应用/元服务允许申请的证书权限列表，以及允许应用/元服务调试的设备列表（如果应用/元服务类型为Release类型，则设备列表为空）等内容，每个应用/元服务包中均必须包含一个Profile文件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "生成密钥和证书请求文件",
      children: "生成密钥和证书请求文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio 6.1.0 Beta2及之后版本"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在主菜单栏单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Build > Generate Key"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "and CSR"
            })
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Generate Key"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "and CSR"
            })
          }), "界面，可以单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Select an existing key"
            })
          }), "选择已有的密钥库文件（存储有密钥的.p12文件），若没有密钥库文件则进行填写。下面以新创建密钥库文件为例进行说明。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(580912)/* ["default"] */.A) + "",
            width: "518",
            height: "384"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Generate Key"
            })
          }), "窗口，填写密钥库信息后，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Next"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Keystore Name"
                })
              }), "：填写p12文件名称，仅允许包含字母、数字、下划线（_）、中划线（-）、句号（.）。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Select file save path"
                })
              }), "：设置密钥库文件存储路径。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Key store password"
                })
              }), "：设置密钥库密码，必须由大写字母、小写字母、数字和特殊符号中的两种以上字符的组合，长度至少为8位。请记住该密码，后续签名配置需要使用。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Confirm password"
                })
              }), "：再次输入密钥库密码。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Alias"
                })
              }), "：密钥别名。请记住该别名，后续签名配置需要使用。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Advance Setting"
                })
              }), "：密钥库文件的高级设置，选填。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "****Validity(years)：****选填，证书有效期，建议设置为25年及以上，覆盖应用/元服务的完整生命周期。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "****First and last name：****选填，通用名称，可填写应用名称或开发者姓名等。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Organizational unit"
                  })
                }), "：选填，组织单位，可填写部门名称或个人开发等。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "****Organization：****选填，组织名称，可填写公司全称或开发者姓名等。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "****City or locality：****选填，城市或地区。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "****State or province：****选填，州或省。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["****Country code(XX)：****选填，", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-appendix-countrycode-0000002236201362",
                  children: "国家码"
                }), "。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(33788)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "First and last name、Organizational unit、Organization、City or locality、State or province填写要求小于64个字符，不可使用双引号（\"）、斜杠（\\）、反引号（`）。"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(558024)/* ["default"] */.A) + "",
            width: "511",
            height: "630"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Generate"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Certificate Request File (CSR)", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "窗口，设置CSR文件名和CSR文件存储路径后，点击"
                })
              }), "Finish"]
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "CSR File Name"
              })
            }), "：填写CSR文件名称，仅允许包含字母、数字、下划线（_）、中划线（-）、句号（.）。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Select file save path"
              })
            }), "：设置CSR文件存储路径。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(469335)/* ["default"] */.A) + "",
            width: "514",
            height: "356"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建CSR文件成功，可以在存储路径下获取生成的密钥库文件（.p12）、证书请求文件（.csr）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(148356)/* ["default"] */.A) + "",
            width: "600",
            height: "85"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio 6.1.0 Beta2之前版本"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在主菜单栏单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Build > Generate Key"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "and CSR"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(445668)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果本地已有对应的密钥，无需新生成密钥，可以在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Generate Key"
            })
          }), "界面中单击下方的Skip跳过密钥生成过程，直接使用已有密钥生成证书请求文件。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key store file"
            })
          }), "中，可以单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Choose Existing"
            })
          }), "选择已有的密钥库文件（存储有密钥的.p12文件）；如果没有密钥库文件，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New"
            })
          }), "进行创建。下面以新创建密钥库文件为例进行说明。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(669148)/* ["default"] */.A) + "",
            width: "520",
            height: "141"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Create Key Store"
            })
          }), "窗口，填写密钥库信息后，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Key store file"
              })
            }), "：设置密钥库文件存储路径，并填写p12文件名。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Password"
              })
            }), "：设置密钥库密码，必须由大写字母、小写字母、数字和特殊符号中的两种以上字符的组合，长度至少为8位。请记住该密码，后续签名配置需要使用。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Confirm password"
              })
            }), "：再次输入密钥库密码。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(272490)/* ["default"] */.A) + "",
            width: "436",
            height: "152"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Generate Key"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "and CSR"
            })
          }), "界面，继续填写密钥信息后，单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Next"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Alias"
              })
            }), "：必填，别名，用于标识密钥名称。请记住该别名，后续签名配置需要使用。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Password"
              })
            }), "：必填，密码，与密钥库密码保持一致，无需手动输入。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "****Validity(years)：****选填，证书有效期，建议设置为25年及以上，覆盖应用/元服务的完整生命周期。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "****First and last name：****选填，通用名称，可填写应用名称或开发者姓名等。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Organizational unit"
              })
            }), "：选填，组织单位，可填写部门名称或个人开发等。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "****Organization：****选填，组织名称，可填写公司全称或开发者姓名等。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "****City or locality：****选填，城市或地区。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "****State or province：****选填，州或省。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["****Country code(XX)：****选填，", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-appendix-countrycode-0000002236201362",
              children: "国家码"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(693829)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "First and last name、Organizational unit、Organization、City or locality、State or province要求：字符长度为（0，64），且不可使用双引号（\"）、斜杠（\\）、反引号（`）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(862000)/* ["default"] */.A) + "",
            width: "519",
            height: "370"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Generate Key"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "and CSR"
            })
          }), "界面，设置CSR文件存储路径和CSR文件名。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(318168)/* ["default"] */.A) + "",
            width: "520",
            height: "266"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finish"
            })
          }), "，创建CSR文件成功，可以在存储路径下获取生成的密钥库文件（.p12）、证书请求文件（.csr）和material文件夹（存放密码加密材料等）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(883244)/* ["default"] */.A) + "",
            width: "257",
            height: "142"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "申请调试证书",
      children: "申请调试证书"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在AGC中申请和下载调试证书，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-cert-0000002283256797",
        children: "申请调试证书"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(194596)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如您未在AGC中注册该应用，申请前需要在AGC中注册，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506",
        children: "创建HarmonyOS应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "申请调试profile文件和添加权限信息",
      children: "申请调试Profile文件和添加权限信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）如需使用ACL权限，在AGC中", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-apply-acl-0000002394212138",
            children: "申请ACL权限"
          }), "。同时，在DevEco Studio配置文件中添加权限信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(814172)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ACL权限申请仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["若应用因特殊场景要求使用受限开放权限，请务必在此步骤进行申请，否则应用将在审核时被驳回。受限开放权限可申请的特殊场景请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions",
              children: "受限开放权限"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "确保应用申请受限开放权限时提供的场景和功能信息准确。如果应用内使用的受限开放权限超出您申请的范围，或申请权限后使用的功能和场景超出可使用的范围，将影响应用上架。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在需要使用权限的模块的module.json5（Stage模型）/config.json（FA模型）文件中添加“requestPermissions”/“reqPermissions”字段，并在字段下添加对应的权限名等信息，以在Stage模型工程中增加\"ohos.permission.ACCESS_DDK_USB\"权限为例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    ...\n    \"requestPermissions\": [{\n      \"name\": \"ohos.permission.ACCESS_DDK_USB\",\n    }],\n    ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(917749)/* ["default"] */.A) + "",
            width: "414",
            height: "264"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在AGC中申请和下载Profile文件，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278",
            children: "申请调试Profile"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置签名信息",
      children: "配置签名信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["连接真机设备，确保", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-run-device",
            children: "DevEco Studio与真机设备已连接"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(464221)/* ["default"] */.A) + "",
            width: "377",
            height: "328"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File >"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Project Structure >"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Project > Signing Configs"
            })
          }), "窗口中，取消勾选“Automatically generate signature”和“Associate with registered application”，分别配置密钥（.p12文件）、Profile（.p7b文件）和数字证书（.cer文件）的路径等信息，配置完毕后点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Apply"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Store file"
              })
            }), "：选择密钥库文件，文件后缀为.p12，该文件为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section462703710326",
              children: "生成密钥和证书请求文件"
            }), "中生成的.p12文件。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Store password"
              })
            }), "：输入密钥库密码，该密码与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section462703710326",
              children: "生成密钥和证书请求文件"
            }), "中填写的密钥库密码保持一致。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Key alias"
              })
            }), "：输入密钥的别名信息，与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section462703710326",
              children: "生成密钥和证书请求文件"
            }), "中填写的别名保持一致。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Key password"
              })
            }), "：输入密钥的密码，与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section462703710326",
              children: "生成密钥和证书请求文件"
            }), "中填写的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Store Password"
              })
            }), "保持一致。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Sign alg"
              })
            }), "：签名算法，固定为SHA256withECDSA。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Profile file"
              })
            }), "：选择", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section89479413571",
              children: "申请调试Profile文件和添加权限信息"
            }), "中生成的Profile文件，文件后缀为.p7b。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Certpath file"
              })
            }), "：选择", (0,jsx_runtime.jsx)(_components.a, {
              href: "#section081822416419",
              children: "申请调试证书"
            }), "中生成的数字证书文件，文件后缀为.cer。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(914872)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Store file，Profile file，Certpath file三个字段支持配置相对路径，以项目根目录为起点，配置文件所在位置的路径名称。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "密钥库文件、密钥库密码、密钥别名、密钥密码、Profile文件、数字证书文件必须配套使用，否则会导致签名失败。若失败请根据报错信息进行修改，再进行签名。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(74919)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "953",
            height: "626"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置完成后，将鼠标悬停在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Provisioning Profile: DevEco Manage Profile"
            })
          }), "后", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(740035)/* ["default"] */.A) + "",
            width: "26",
            height: "25"
          }), "，可查看证书有效期、包名（bundle name）、企业名称（common name）、ACL权限（acl）、开放能力（capability）相关信息；或者进入工程级build-profile.json5文件，在“signingConfigs”下可查看到配置成功的签名信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(612385)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1166",
            height: "728"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进入工程级build-profile.json5文件，在“signingConfigs”下可查看到配置成功的签名信息，点击右上角的“Run”按钮运行应用/元服务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(535527)/* ["default"] */.A) + "",
            width: "1623",
            height: "517"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "附录",
      children: "附录"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自动签名支持的acl权限",
      children: "自动签名支持的ACL权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自动签名当前支持申请的ACL权限的清单如下所示。执行", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section18815157237",
        children: "操作步骤"
      }), "后，DevEco Studio将校验当前配置的ACL权限是否在以下列表中，然后通过应用市场（AGC）申请对应的Profile文件，用于签名打包，从而避免繁琐的手动签名步骤。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从DevEco Studio 6.1.0 Beta2版本开始，自动签名支持配置的ACL权限具体参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions",
        children: "受限开放权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "6.0.2 Beta********1"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.SUBSCRIBE_NOTIFICATION"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.ACCESS_USER_FULL_DISK"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.CUSTOM_SCREEN_RECORDING"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.GET_IP_MAC_INFO"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "6.0.1 Release"
        })
      }), "****（6.0.1.260）****"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.SET_SYSTEMSHARE_APPLAUNCHTRUSTLIST"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.HOOK_KEY_EVENT"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.WEB_NATIVE_MESSAGING"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "6.0.0 Beta3"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.CUSTOMIZE_SAVE_BUTTON"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.GET_ABILITY_INFO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.LINKTURBO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.GET_WIFI_LOCAL_MAC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.GET_ETHERNET_LOCAL_MAC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.USE_FLOAT_BALL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.READ_LOCAL_DEVICE_NAME"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.ACCESS_NET_TRACE_INFO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.atomicService.MANAGE_STORAGE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.MANAGE_SCREEN_TIME_GUARD"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "5.1.0 Release"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.ACCESS_DDK_USB_SERIAL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.USE_FRAUD_APP_PICKER"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "5.0.5 Release"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.kernel.DISABLE_GOTPLT_RO_PROTECTION"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.MANAGE_APN_SETTING"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "5.0.3 Release"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.READ_WRITE_USB_DEV"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.USE_FRAUD_CALL_LOG_PICKER"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.USE_FRAUD_MESSAGES_PICKER"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.ACCESS_DISK_PHY_INFO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.SET_PAC_URL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.PERSONAL_MANAGE_RESTRICTIONS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.START_PROVISIONING_MESSAGE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.PRELOAD_FILE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.kernel.ALLOW_WRITABLE_CODE_MEMORY"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.kernel.DISABLE_CODE_MEMORY_PROTECTION"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.kernel.ALLOW_EXECUTABLE_FORT_MEMORY"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.GET_WIFI_PEERS_MAC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.READ_WRITE_DESKTOP_DIRECTORY"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.MANAGE_PASTEBOARD_APP_SHARE_OPTION"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.READ_WRITE_USER_FILE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "5.0.0 Release"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.READ_CONTACTS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.WRITE_CONTACTS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.READ_AUDIO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.WRITE_AUDIO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.READ_IMAGEVIDEO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.READ_PASTEBOARD"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.WRITE_IMAGEVIDEO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.ACCESS_DDK_USB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.ACCESS_DDK_HID"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.SYSTEM_FLOAT_WINDOW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.FILE_ACCESS_PERSIST"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.INPUT_MONITORING"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.INTERCEPT_INPUT_EVENT"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.permission.SHORT_TERM_WRITE_IMAGEVIDEO"
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
740035(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAIAAACgvKk3AAADjUlEQVR4AWSUS28TWRCF63YSYuGQEJPEcRIzGmAYzWZGIxAIIR4bJJYgsQIkxA6JPwRizQoBO3YIIWABPwABhgTixI5fcR5usI1N89Utu50oVyfVp+qcqr63u50gbHwHjW2NkLARgjhtbIcg3LEajVBh9T29gUgEnJN4RRT6idOF3s9FnBPnI8ELAzeNAX9A/IoJPuORLgePfonGSCDey0x/9QHJXyXgbjDLjfvYc8Odi5wuXDF66iD3BeeEw8rehdBqtYulen61ulKorRarkLVSvdVsI5k/JqS2G8hgHCUDVQZth8252em/jmaPHVk4+mf2+LHD85nprUazsLZhtjjiZ7SlOo6EUgw2cig1kZ1Pj46OIAGTSP/IppFWClUrEg0YIEQdx4UEQNhXeiY1MZ6Eg2qtfu/Bw/sPHhaLZVK2gIQBm/kpGpAgu95ss9keHh6iAQF3uVJ7/PTZzetXb1y/8ujJs0JBJ/JmMAwNDf340cbGFAOcll1vdmMrnJ1JIRg+5ZYunj8zltw/lkyePXPi/cec6x1G0tOp+maIjRHEGH1dvzTpdLo8oPhu586e/Pv4EdHPNlorVcYPjCGJOiNs3W4XDpgIIEDHkQAS5/z3A/PwzVSi12/efVn6+t+//6hOQdUoCJR5j+b2x7Pjo1cBKxDdi3NaECI/iqWvKx9yi3fv3Bod3Ucz4MhIfpf4gPQXivDR87tTdLtEphB7QC9XKpcvnQ+CXecQJ78YLD0bo/0N+FU4rSGjDI8EzVYbMkAkp0/9n83O9e8vDAGt1k9eLl3cj+j9lKOAFw8YDyYn9perNdIYTHn+4s3LV2/t5qSGUmU9dTCJjS4QE47gR4seOZEY6XQ6G5sNHhkmi8vLBRthkbmbWyE2zBhi4AeDV4EbayadKpXrNFiK4/ataxfOnSLlMEQkPu9MehJJOKc45/hTkHJYYZkVAg4vTNXWN5dXSjwg55xv45FFpN/ypdr6RnZ+ym9KR6hOTx8ctk/p47+jBzc/kEysFisfc/nPi6ufF/O5L3nS8bEEEsadU9iKgUG7xpEDrCCR2Dc7M8lG5mYPzWemFuamMumD/BgwxM3wnaCLZ6cVmF5E9y9+0UPR4LfDuzKVV6cOJL2IFuFAhO+OsAfM2lkjNcRFaya1OhEOBoe1kkWEvWAEKkCyCDEgGdFxlli0KhzAaQPOL1LnfHB6QBigAiDYokh+AwAA///EmzIWAAAABklEQVQDAH1KEMH0m/tOAAAAAElFTkSuQmCC");

},
286819(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752949-300620c7e8434b5fc2c8e6fb35862ba8.png");

},
483609(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913000-d67cb6a527cbe3158fae5bcd0901b123.png");

},
795631(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752941-75e5be6df08323a99268a92829201ef8.png");

},
906591(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832921-75e5be6df08323a99268a92829201ef8.png");

},
148356(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752998-f3d12a8265d993f6795423774723d6d7.png");

},
445668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
916578(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913004-8651f7adee6dcb342ebf7a7730395ee0.png");

},
927934(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752925-b2f03a428e00cb80629e34003ece9eb9.png");

},
883244(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
33788(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
464221(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832911-75e5be6df08323a99268a92829201ef8.png");

},
663540(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752994-6fcf8519be5991012b4372fb6b209834.png");

},
255392(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
135395(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752937-299a2b2b3dd31b445d61d0e591ca8bae.png");

},
612385(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912984-66247b6a3e514637278476263d421f9c.png");

},
558024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832933-37a1e14db2fa9bb5ccdc011968e5624d.png");

},
612028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
693829(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
862000(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752939-5ac1b0cdf4901bd612097641524fb6f5.png");

},
580912(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752935-6be108769b2b2460797e06eeb5618677.png");

},
74919(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753014-3386e9e5212eb08b1a41924cd95619f3.png");

},
814172(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
469335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912990-58eac16844c63570cfbdadeeac6e1a54.png");

},
318168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912996-417d8527492d1483bf6d84c1f7b70a28.png");

},
94856(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752988-b2f03a428e00cb80629e34003ece9eb9.png");

},
634425(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
420032(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
39133(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAIAAACgvKk3AAADjUlEQVR4AWSUS28TWRCF63YSYuGQEJPEcRIzGmAYzWZGIxAIIR4bJJYgsQIkxA6JPwRizQoBO3YIIWABPwABhgTixI5fcR5usI1N89Utu50oVyfVp+qcqr63u50gbHwHjW2NkLARgjhtbIcg3LEajVBh9T29gUgEnJN4RRT6idOF3s9FnBPnI8ELAzeNAX9A/IoJPuORLgePfonGSCDey0x/9QHJXyXgbjDLjfvYc8Odi5wuXDF66iD3BeeEw8rehdBqtYulen61ulKorRarkLVSvdVsI5k/JqS2G8hgHCUDVQZth8252em/jmaPHVk4+mf2+LHD85nprUazsLZhtjjiZ7SlOo6EUgw2cig1kZ1Pj46OIAGTSP/IppFWClUrEg0YIEQdx4UEQNhXeiY1MZ6Eg2qtfu/Bw/sPHhaLZVK2gIQBm/kpGpAgu95ss9keHh6iAQF3uVJ7/PTZzetXb1y/8ujJs0JBJ/JmMAwNDf340cbGFAOcll1vdmMrnJ1JIRg+5ZYunj8zltw/lkyePXPi/cec6x1G0tOp+maIjRHEGH1dvzTpdLo8oPhu586e/Pv4EdHPNlorVcYPjCGJOiNs3W4XDpgIIEDHkQAS5/z3A/PwzVSi12/efVn6+t+//6hOQdUoCJR5j+b2x7Pjo1cBKxDdi3NaECI/iqWvKx9yi3fv3Bod3Ucz4MhIfpf4gPQXivDR87tTdLtEphB7QC9XKpcvnQ+CXecQJ78YLD0bo/0N+FU4rSGjDI8EzVYbMkAkp0/9n83O9e8vDAGt1k9eLl3cj+j9lKOAFw8YDyYn9perNdIYTHn+4s3LV2/t5qSGUmU9dTCJjS4QE47gR4seOZEY6XQ6G5sNHhkmi8vLBRthkbmbWyE2zBhi4AeDV4EbayadKpXrNFiK4/ataxfOnSLlMEQkPu9MehJJOKc45/hTkHJYYZkVAg4vTNXWN5dXSjwg55xv45FFpN/ypdr6RnZ+ym9KR6hOTx8ctk/p47+jBzc/kEysFisfc/nPi6ufF/O5L3nS8bEEEsadU9iKgUG7xpEDrCCR2Dc7M8lG5mYPzWemFuamMumD/BgwxM3wnaCLZ6cVmF5E9y9+0UPR4LfDuzKVV6cOJL2IFuFAhO+OsAfM2lkjNcRFaya1OhEOBoe1kkWEvWAEKkCyCDEgGdFxlli0KhzAaQPOL1LnfHB6QBigAiDYokh+AwAA///EmzIWAAAABklEQVQDAH1KEMH0m/tOAAAAAElFTkSuQmCC");

},
917749(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832915-b2f03a428e00cb80629e34003ece9eb9.png");

},
535527(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912992-50466290472fce39c773439cf909bec6.png");

},
272490(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
665077(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
669148(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
914872(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
840288(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752992-cbea2db6367f2e263b95324a22d5b15c.png");

},
678168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912982-75e5be6df08323a99268a92829201ef8.png");

},
89763(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
194596(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
883409(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAIAAACgvKk3AAADjUlEQVR4AWSUS28TWRCF63YSYuGQEJPEcRIzGmAYzWZGIxAIIR4bJJYgsQIkxA6JPwRizQoBO3YIIWABPwABhgTixI5fcR5usI1N89Utu50oVyfVp+qcqr63u50gbHwHjW2NkLARgjhtbIcg3LEajVBh9T29gUgEnJN4RRT6idOF3s9FnBPnI8ELAzeNAX9A/IoJPuORLgePfonGSCDey0x/9QHJXyXgbjDLjfvYc8Odi5wuXDF66iD3BeeEw8rehdBqtYulen61ulKorRarkLVSvdVsI5k/JqS2G8hgHCUDVQZth8252em/jmaPHVk4+mf2+LHD85nprUazsLZhtjjiZ7SlOo6EUgw2cig1kZ1Pj46OIAGTSP/IppFWClUrEg0YIEQdx4UEQNhXeiY1MZ6Eg2qtfu/Bw/sPHhaLZVK2gIQBm/kpGpAgu95ss9keHh6iAQF3uVJ7/PTZzetXb1y/8ujJs0JBJ/JmMAwNDf340cbGFAOcll1vdmMrnJ1JIRg+5ZYunj8zltw/lkyePXPi/cec6x1G0tOp+maIjRHEGH1dvzTpdLo8oPhu586e/Pv4EdHPNlorVcYPjCGJOiNs3W4XDpgIIEDHkQAS5/z3A/PwzVSi12/efVn6+t+//6hOQdUoCJR5j+b2x7Pjo1cBKxDdi3NaECI/iqWvKx9yi3fv3Bod3Ucz4MhIfpf4gPQXivDR87tTdLtEphB7QC9XKpcvnQ+CXecQJ78YLD0bo/0N+FU4rSGjDI8EzVYbMkAkp0/9n83O9e8vDAGt1k9eLl3cj+j9lKOAFw8YDyYn9perNdIYTHn+4s3LV2/t5qSGUmU9dTCJjS4QE47gR4seOZEY6XQ6G5sNHhkmi8vLBRthkbmbWyE2zBhi4AeDV4EbayadKpXrNFiK4/ataxfOnSLlMEQkPu9MehJJOKc45/hTkHJYYZkVAg4vTNXWN5dXSjwg55xv45FFpN/ypdr6RnZ+ym9KR6hOTx8ctk/p47+jBzc/kEysFisfc/nPi6ufF/O5L3nS8bEEEsadU9iKgUG7xpEDrCCR2Dc7M8lG5mYPzWemFuamMumD/BgwxM3wnaCLZ6cVmF5E9y9+0UPR4LfDuzKVV6cOJL2IFuFAhO+OsAfM2lkjNcRFaya1OhEOBoe1kkWEvWAEKkCyCDEgGdFxlli0KhzAaQPOL1LnfHB6QBigAiDYokh+AwAA///EmzIWAAAABklEQVQDAH1KEMH0m/tOAAAAAElFTkSuQmCC");

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