"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["482861"], {
439042(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_app_file_app_file_backup_restore_app_data_migration_guidelines_app_data_migration_verification_self_verification_self_verification_md_b83_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-app-file-app-file-backup-restore-app-data-migration-guidelines-app-data-migration-verification-self-verification-self-verification-md-b83.json
var site_docs_core_file_kit_app_file_app_file_backup_restore_app_data_migration_guidelines_app_data_migration_verification_self_verification_self_verification_md_b83_namespaceObject = JSON.parse('{"id":"core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification/self-verification/self-verification","title":"开发者自验证","description":"简介","source":"@site/docs/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification/self-verification/self-verification.md","sourceDirName":"core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification/self-verification","slug":"/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification/self-verification/","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification/self-verification/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"开发者自验证","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/self-verification","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用数据迁移适配指导","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-adaptation/"},"next":{"title":"端到端验证","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification/e2e-verification/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification/self-verification/self-verification.md


const frontMatter = {
	title: '开发者自验证',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/self-verification',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '开发者自验证';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "开发者自验证流程",
  "id": "开发者自验证流程",
  "level": 2
}, {
  "value": "应用沙箱数据准备",
  "id": "应用沙箱数据准备",
  "level": 3
}, {
  "value": "HarmonyOS NEXT上模拟验证应用数据迁移",
  "id": "harmonyos-next上模拟验证应用数据迁移",
  "level": 2
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "开发者自验证",
        children: "开发者自验证"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发的过程中，当开发者完成所需", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/adaptation-process",
        children: "适配流程"
      }), "后，可导入提前准备好的APK应用沙箱数据，自验证HarmonyOS应用数据迁移适配结果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在HarmonyOS应用适配完成并上架到华为应用市场之后，开发者仍需要将终端设备从HarmonyOS升级到HarmonyOS NEXT，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification/e2e-verification",
        children: "端到端验证"
      }), "应用数据迁移结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发者自验证流程",
      children: "开发者自验证流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用沙箱数据准备",
      children: "应用沙箱数据准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请自行构造APK应用沙箱数据，并将构造好的APK应用沙箱数据按指定格式打包成“{APK包名}.zip”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(824950)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在打包‘{APK包名}.zip’文件时，必须使用UTF-8编码格式进行压缩，否则压缩中文命名的文件时，文件名会出现乱码。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "APK应用沙箱目录"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "{APK包名}.zip目录"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/data/user_de/{userId}/{APK包名}/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{APK包名}/de"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/data/user/{userId}/{APK包名}/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{APK包名}/ce"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/data/media/{userId}/Android/data/{APK包名}/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{APK包名}/A/data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/data/media/{userId}/Android/obb/{APK包名}/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{APK包名}/A/obb"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打包好的“{APK包名}.zip”解压后，要满足包含一个“APK包名”根目录，根目录下包含对应沙箱目录文件夹，文件结构如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "─com.demo.demo\n    ├─A\n    │  ├─data\n    │  └─obb\n    ├─ce\n    └─de\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将打包好的“{APK包名}.zip”推送到外部存储设备（U盘或者移动硬盘），连接终端设备和外部存储设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(706756)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前终端设备支持识别NTFS格式的外部存储设备，请使用NTFS格式的外部存储设备连接终端设备。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在终端设备中，打开“文件管理”应用，长按选中外部存储设备中的“{APK包名}.zip”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(394517)/* ["default"] */.A) + "",
            width: "303",
            height: "654"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(746519)/* ["default"] */.A) + "",
            width: "301",
            height: "647"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单击“复制”按钮，将数据复制到文件管理器的“下载”目录下，作为后续自验证的测试数据源。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(690124)/* ["default"] */.A) + "",
            width: "317",
            height: "684"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(835654)/* ["default"] */.A) + "",
            width: "313",
            height: "675"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "harmonyos-next上模拟验证应用数据迁移",
      children: "HarmonyOS NEXT上模拟验证应用数据迁移"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在应用沙箱数据准备好之后，开发者需要先完成所需", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/adaptation-process",
        children: "适配流程"
      }), "，再模拟验证应用数据迁移。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装目标HarmonyOS应用到终端设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(54098)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "“迁移调试”工具“205.0.0.110”之前的版本，仅支持调试release签名的应用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从“205.0.0.110”版本开始，“迁移调试”工具仅支持调试debug签名的应用。请开发者升级到最新版本，并使用debug签名的包验证。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["“迁移调试”工具版本查看方式：", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "设置"
            })
          }), ">", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "应用和元服务"
            })
          }), ">", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MigrateTool"
            })
          }), ">", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "版本"
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开迁移调试工具。迁移调试工具图标如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(835364)/* ["default"] */.A) + "",
            width: "59",
            height: "58"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“迁移工具”应用的首页，开发者通过单击“选择”按钮进入设备文件管理界面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(44836)/* ["default"] */.A) + "",
            width: "305",
            height: "658"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在设备文件管理界面，单击“浏览”按钮，进入浏览手机内部存储界面。单击“我的手机”，根据之前导入数据的路径，进入手机存储的相应路径，选择需要导入的APK应用数据zip包。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(751592)/* ["default"] */.A) + "",
            width: "305",
            height: "658"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(418869)/* ["default"] */.A) + "",
            width: "305",
            height: "658"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单击需要导入的APK应用数据zip包后，会返回“迁移调试”工具首页，已选择的需要导入的APK应用数据会显示在第一栏中。选择好需要导入的APK应用数据后，单击“请输入应用包名”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(20702)/* ["default"] */.A) + "",
            width: "305",
            height: "658"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入需要验证的目标HarmonyOS应用包名，目标HarmonyOS应用会显示在“迁移调试”工具首页的第二栏中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(409651)/* ["default"] */.A) + "",
            width: "305",
            height: "658"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(525126)/* ["default"] */.A) + "",
            width: "305",
            height: "658"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择需要导入的APK数据和目标HarmonyOS应用后，单击“启动迁移”按钮，开始模拟数据迁移，页面切换为数据优化界面，应用数据迁移的进度在数据迁移进度条中显示。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(781374)/* ["default"] */.A) + "",
            width: "305",
            height: "658"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(990547)/* ["default"] */.A) + "",
            width: "305",
            height: "658"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用数据迁移完成之后，数据迁移进度条上方显示“已优化完成”，进度更新为100%。数据迁移成功的情况下，界面中无异常提示。单击“完成”按钮，切换回“迁移调试”工具首页，在下方的“迁移日志”版块中显示详细迁移信息。result字段表示数据迁移结果，costTime字段表示数据迁移时长（单位ms）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(941657)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1、此处的数据迁移成功，仅表示“备份恢复框架”接入成功，APK应用的数据成功迁移到“备份恢复框架”需要的指定目录。开发者需要通过从应用的沙箱中获取数据并解析，判断应用适配“备份恢复框架”的结果"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2、单个应用数据迁移执行超过十五分钟，超过设定的单个应用最长数据迁移时间，会导致任务执行失败。开发者需要优化应用BackupExtensionAbility的代码实现，在十五分钟内完成应用数据迁移。"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(314691)/* ["default"] */.A) + "",
            width: "305",
            height: "658"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(98667)/* ["default"] */.A) + "",
            width: "305",
            height: "658"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数据迁移失败的情况下，应用图标上方的状态显示“优化失败”。单击“完成”按钮，切换回“迁移工具”应用首页，在下方的“迁移日志”版块中显示详细迁移信息。result字段表示数据迁移结果，costTime字段表示数据迁移时长（单位ms）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(518916)/* ["default"] */.A) + "",
            width: "291",
            height: "628"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(706717)/* ["default"] */.A) + "",
            width: "305",
            height: "658"
          })]
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
394517(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478269-a049489241c2e94511ca30f78177d913.png");

},
706717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958276-2f2d31df13986022eaa711fb4198814f.png");

},
690124(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438315-cc52e467628a19545017c0aac552dfff.png");

},
54098(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
835654(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958270-16588766e2de82ef98c36ca26866b251.png");

},
990547(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958274-354937e8e7c3f00f3bf98a3b49b00eda.png");

},
751592(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438317-75897d706c1a05fa52f25a22b29a5b35.png");

},
835364(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
525126(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438319-56bbb68b485972762dee201c4e4a6955.png");

},
314691(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478275-8d8646bb6ad3d7042b91fef86e00a3dc.png");

},
44836(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798622-5e78ba555278115704b7ae3934cac909.png");

},
98667(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798626-5754956356badc437760bd15ff8f649d.png");

},
706756(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
409651(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798624-a18b9fb0aac759ba74739b302e7f7d06.png");

},
418869(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958272-50a2de7aa7b62abe9c3247145f130cb4.png");

},
781374(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798624-a18b9fb0aac759ba74739b302e7f7d06.png");

},
746519(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798620-ee7f08924f09770a96e3449ff857737f.png");

},
824950(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
518916(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438321-613fd467313ee1b485ccb644b4075d8a.png");

},
941657(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
20702(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478273-b6ab678afe8fdd4680d7287369b6d6c6.png");

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