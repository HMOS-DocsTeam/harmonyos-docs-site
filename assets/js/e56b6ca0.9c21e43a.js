"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["769364"], {
827966(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_agc_harmonyos_clouddevguide_agc_harmonyos_clouddev_devprocess_agc_harmonyos_clouddev_devproject_agc_harmonyos_create_faproject_agc_harmonyos_create_faproject_md_e56_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-agc-harmonyos-clouddevguide-agc-harmonyos-clouddev-devprocess-agc-harmonyos-clouddev-devproject-agc-harmonyos-create-faproject-agc-harmonyos-create-faproject-md-e56.json
var site_docs_ide_project_ide_module_management_agc_harmonyos_clouddevguide_agc_harmonyos_clouddev_devprocess_agc_harmonyos_clouddev_devproject_agc_harmonyos_create_faproject_agc_harmonyos_create_faproject_md_e56_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-devproject/agc-harmonyos-create-faproject/agc-harmonyos-create-faproject","title":"创建元服务工程","description":"新建工程","source":"@site/docs/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-devproject/agc-harmonyos-create-faproject/agc-harmonyos-create-faproject.md","sourceDirName":"ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-devproject/agc-harmonyos-create-faproject","slug":"/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-devproject/agc-harmonyos-create-faproject/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-devproject/agc-harmonyos-create-faproject/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"创建元服务工程","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-create-faproject","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"创建HarmonyOS应用工程","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-devproject/agc-harmonyos-create-appproject/"},"next":{"title":"历史工程转换为端云一体化开发工程","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-devproject/agc-harmonyos-project-migration/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-devproject/agc-harmonyos-create-faproject/agc-harmonyos-create-faproject.md


const frontMatter = {
	title: '创建元服务工程',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-create-faproject',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '创建元服务工程';

const assets = {

};



const toc = [{
  "value": "新建工程",
  "id": "新建工程",
  "level": 2
}, {
  "value": "前提条件",
  "id": "前提条件",
  "level": 3
}, {
  "value": "选择模板",
  "id": "选择模板",
  "level": 3
}, {
  "value": "关联云开发资源",
  "id": "关联云开发资源",
  "level": 3
}, {
  "value": "配置工程信息",
  "id": "配置工程信息",
  "level": 3
}, {
  "value": "工程初始化配置",
  "id": "工程初始化配置",
  "level": 2
}, {
  "value": "自动开通云开发服务",
  "id": "自动开通云开发服务",
  "level": 3
}, {
  "value": "端云一体化开发工程目录结构",
  "id": "端云一体化开发工程目录结构",
  "level": 2
}, {
  "value": "端开发工程（Application）",
  "id": "端开发工程application",
  "level": 3
}, {
  "value": "云开发工程（CloudProgram）",
  "id": "云开发工程cloudprogram",
  "level": 3
}, {
  "value": "（可选）AGC元服务管理",
  "id": "可选agc元服务管理",
  "level": 2
}, {
  "value": "从DevEco Studio补充创建元服务",
  "id": "从deveco-studio补充创建元服务",
  "level": 3
}, {
  "value": "将游离元服务添加到AGC项目下",
  "id": "将游离元服务添加到agc项目下",
  "level": 3
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
        id: "创建元服务工程",
        children: "创建元服务工程"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "新建工程",
      children: "新建工程"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["您已完成", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-clouddev-prerequisite",
          children: "开发准备工作"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["您已使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-prerequisite/agc-harmonyos-clouddev-account",
          children: "已实名认证"
        }), "、且注册地为中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）的华为开发者账号登录DevEco Studio。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请确保您的华为开发者账号无欠款，账户欠费将导致云存储服务开通失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "选择模板",
      children: "选择模板"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择以下任一种方式，打开工程创建向导界面。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果当前未打开任何工程，可以在DevEco Studio的欢迎页点击“Create Project”开始创建一个新工程。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果已经打开了工程，可以在菜单栏选择“File > New > Create Project”来创建一个新工程。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“Atomic Service”页签，选择合适的云开发模板，然后点击“Next”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(36059)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前仅支持通用云开发模板（[CloudDev]Empty Ability）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(462844)/* ["default"] */.A) + "",
            width: "972",
            height: "644"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "关联云开发资源",
      children: "关联云开发资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为工程关联云开发所需的资源，即将您账号团队在AGC创建的元服务关联到待创建工程。具体操作如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）如您尚未登录DevEco Studio，点击“Sign In”，在弹出的账号登录页面，使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-prerequisite/agc-harmonyos-clouddev-account",
            children: "已实名认证"
          }), "的华为开发者账号完成登录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(413092)/* ["default"] */.A) + "",
            width: "971",
            height: "649"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "登录成功后，界面将展示账号昵称。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(980566)/* ["default"] */.A) + "",
            width: "391",
            height: "135"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择已登录账号下的APP ID，以关联AGC上的元服务。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "从APP ID下拉列表中选中所需的APP ID后，界面会展示该元服务在AGC控制台的名称、所属项目、包名与数据处理位置。确认无误后，点击“Next”。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(228605)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "元服务包名为自动生成，格式为固定前缀与appid的组合（com.atomicservice.[appid]）。不符合命名规范的包名无法在APP ID下拉列表中展示。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(149224)/* ["default"] */.A) + "",
                width: "969",
                height: "646"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["当出现以下场景时，您可点击“Register App ID”，", (0,jsx_runtime.jsx)(_components.a, {
                href: "#section397317130308",
                children: "前往AGC控制台补充创建元服务"
              }), "。创建成功后返回DevEco Studio界面，即可看到新建的元服务信息。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "APP ID框为空，即当前账号尚未在AGC控制台创建任何元服务。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "您需为待创建工程关联一个新的元服务。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(903354)/* ["default"] */.A) + "",
                width: "967",
                height: "645"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如查询到的元服务尚未关联任何项目，则无法选中。请先", (0,jsx_runtime.jsx)(_components.a, {
                href: "#section152521927193013",
                children: "将游离元服务添加到AGC项目下"
              }), "，再返回DevEco Studio界面操作。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(749438)/* ["default"] */.A) + "",
                width: "970",
                height: "648"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果查询到的元服务所属项目尚未启用数据处理位置，请点击界面提示内的“AppGallery Connect”", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-datalocation-0000001160439813",
                children: "设置数据处理位置"
              }), "。设置完成后返回DevEco Studio界面，点击“Refresh”刷新当前APP ID列表，即可看到设置的数据处理位置。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(475874)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "由于云开发目前仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外），请确保项目启用的数据处理位置包含“中国”。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "无论项目启用的默认数据处理位置为哪个站点，后续开发的云服务资源都将部署在“中国”站点。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(971115)/* ["default"] */.A) + "",
                width: "971",
                height: "649"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置工程信息",
      children: "配置工程信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进入工程配置界面，配置工程的基本信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["其中，Device type和Enable CloudDev参数不可更改，其他参数请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-service-create-project",
            children: "创建元服务工程"
          }), "内对应的指导进行配置。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Device type"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "该工程模板支持的设备类型，目前仅支持手机设备。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Enable CloudDev"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是否启用云开发。云开发模板默认启用且无法更改。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(786143)/* ["default"] */.A) + "",
            width: "974",
            height: "647"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“Finish”，进入主开发界面，DevEco Studio执行工程同步操作，端侧工程会自动执行“ohpm install”，云侧工程会自动执行“npm install”，以分别下载端侧和云侧依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(645944)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若云侧执行“npm install”失败，请排查是否尚未", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-appendix/ide-environment-config#section197296441787",
            children: "配置NPM代理"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(858503)/* ["default"] */.A) + "",
            width: "939",
            height: "604"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在主开发界面，可查看刚刚新建的工程。关于工程的详细目录结构介绍，请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section20250910164411",
            children: "端云一体化开发工程目录结构"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(42152)/* ["default"] */.A) + "",
            width: "909",
            height: "604"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "工程初始化配置",
      children: "工程初始化配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当您成功创建工程并关联云开发资源后，DevEco Studio会为您的工程自动执行一些初始化配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自动开通云开发服务",
      children: "自动开通云开发服务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio为工程关联的项目自动开通云函数、云数据库、云存储等云开发服务，您可在“Notifications”窗口查看服务开通状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(483973)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如服务开通失败，您可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-console",
          children: "CloudDev云开发管理面板"
        }), "快捷进入AGC控制台进行手动开通。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如云存储服务自动开通与手动开通均失败，可能是账户欠费导致。请您", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-account-bill-0000001200817917#section813072912208",
          children: "检查账户是否余额不足"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-account-recharge-0000001126625360",
          children: "补齐欠款"
        }), "后再前往AGC控制台进行手动开通。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "端云一体化开发工程目录结构",
      children: "端云一体化开发工程目录结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "端云一体化开发工程主要包含端开发工程（Application）与云开发工程（CloudProgram）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "端开发工程application",
      children: "端开发工程（Application）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["端开发工程主要用于开发应用端侧的业务代码，使用通用云开发模板创建的端开发工程目录结构如下图所示。“Application/cloud_objects”模块用于存放云对象的调用接口类，“src/main/ets/pages”目录下包含了云存储、云数据库和云函数页面，其他目录文件介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-project-structure",
        children: "工程目录结构"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(431515)/* ["default"] */.A) + "",
        width: "256",
        height: "762"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "云开发工程cloudprogram",
      children: "云开发工程（CloudProgram）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在云开发工程中，您可为您的元服务开发云端代码，包括云函数和云数据库服务代码。使用通用云开发模板创建的云开发工程目录结构如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(878191)/* ["default"] */.A) + "",
        width: "243",
        height: "380"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "clouddb：云数据库目录，包含数据条目目录（dataentry）和对象类型目录（objecttype）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "dataentry：用于存放数据条目文件。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "该目录下一般会根据您选择的云开发模板预置数据条目示例文件。在通用云开发模板工程中，该目录下会预置名为“d_Post.json”的数据条目示例文件，内含两条示例数据。您可按需使用、修改或删除。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(839853)/* ["default"] */.A) + "",
                width: "741",
                height: "600"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "objecttype：用于存放对象类型文件。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "该目录下一般会根据您选择的云开发模板预置对象类型示例文件。在通用云开发模板工程中，该目录下会预置名为“Post.json”的对象类型示例文件，内含对象类型“Post”的权限、索引、字段名称和字段值等。您可按需使用、修改或删除。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(632700)/* ["default"] */.A) + "",
                width: "652",
                height: "467"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "db-config.json：模块配置文件，主要包含云数据库工程的配置信息，如默认存储区名称、默认数据处理位置。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "cloudfunctions：云函数目录，包含各个云函数/云对象子目录。每个子目录下包含了云函数/云对象的配置文件、入口文件、依赖文件等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该目录下一般会根据您选择的云开发模板预置示例函数。通用云开发模板工程下预置了一个用于生成UUID的示例云对象“id-generator”，您可按需使用、修改或删除。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(851763)/* ["default"] */.A) + "",
            width: "775",
            height: "452"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "node_modules：工程同步时执行“npm install”生成，包含“typescript”和“@types/node”公共依赖。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "cloud-config.json：云开发工程配置文件，包含应用名称与ID、项目名称与ID、启用的数据处理位置、支持的设备类型等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "package.json：定义了“typescript”和“@types/node”公共依赖。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "package-lock.json：工程同步时执行“npm install”生成，记录当前状态下实际安装的各个npm package的具体来源和版本号。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "可选agc元服务管理",
      children: "（可选）AGC元服务管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "从deveco-studio补充创建元服务",
      children: "从DevEco Studio补充创建元服务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如创建元服务工程时，发现尚未在AGC控制台创建对应的元服务，可直接从DevEco Studio进行补充创建。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“Register App ID”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(735571)/* ["default"] */.A) + "",
            width: "967",
            height: "645"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在弹窗中填写待创建的元服务信息后，点击“OK”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(332385)/* ["default"] */.A) + "",
            width: "506",
            height: "265"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Project"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "为当前元服务选择所属的项目。可以输入一个新项目名称，或在下拉框中选择已有项目。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "App type"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用形态。默认为“AtomicService”，不支持修改。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "App name"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "元服务在华为应用市场详情页展示的名称。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "App category"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用分类。元服务暂不支持游戏类别，请选择“App”。  说明：  应用分类设置后不支持修改，请谨慎选择。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回DevEco Studio界面，可查看到刚刚创建的元服务的名称及APP ID、所属项目及项目ID、包名、数据处理位置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(329155)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若元服务关联的是一个新建项目或者尚未启用数据处理位置的已有项目，则还会提示尚未启用数据处理位置，参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#li58931263712",
            children: "上文"
          }), "处理即可。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(408143)/* ["default"] */.A) + "",
            width: "970",
            height: "645"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "将游离元服务添加到agc项目下",
      children: "将游离元服务添加到AGC项目下"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "游离元服务指未关联任何AGC项目的元服务。创建工程时，如需要关联的AGC元服务为游离状态，则您需要将该元服务添加到您的AGC项目下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(316374)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "元服务与项目的关联关系一旦创建则无法再修改，请谨慎操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“Not associated yet”，或点击界面下方提示内的“AppGallery Connect”，可打开AGC控制台“开发与服务”页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(824832)/* ["default"] */.A) + "",
            width: "970",
            height: "648"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击选择希望为元服务关联的项目，或者点击“添加项目”新建一个项目。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(159355)/* ["default"] */.A) + "",
            width: "1144",
            height: "465"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如选择了新建一个项目，设置项目名称，点击“确认”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如选择了已有项目，则忽略此步骤。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(603948)/* ["default"] */.A) + "",
            width: "632",
            height: "165"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置或管理项目的数据处理位置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如项目尚未设置数据处理位置："
            }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "点击“启用”。"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(206242)/* ["default"] */.A) + "",
                    width: "550",
                    height: "205"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "仔细阅读提示框的文字说明后，在“启用”栏为您的项目勾选一个或多个数据处理位置，并在“设为默认”栏将其中一个设置为默认数据处理位置。"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(488494)/* ["default"] */.A) + "",
                    width: "102",
                    height: "38"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "启用的数据处理位置必须包含中国站点。"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(787353)/* ["default"] */.A) + "",
                    width: "989",
                    height: "614"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如项目已设置过数据处理位置，可点击“管理”启用新的数据处理位置、取消已启用的数据处理位置，或修改默认数据处理位置。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(239498)/* ["default"] */.A) + "",
                width: "534",
                height: "184"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“确认”，元服务成功关联项目。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(520037)/* ["default"] */.A) + "",
            width: "591",
            height: "201"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回DevEco Studio，点击“Refresh”刷新，可看到元服务已关联上了项目。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(1108)/* ["default"] */.A) + "",
            width: "971",
            height: "649"
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
36059(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
488494(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
858503(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214858865-e4d959b8ebd86c05ec06c25a89a0ee2b.png");

},
316374(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
787353(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179498220-7864cecf468290d5f32e4c25248ab315.png");

},
431515(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179498204-64c9f1538f94228d1b726454ae443179.png");

},
645944(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
228605(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
1108(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002509136865-d23ff80375329a3e336295f02c233f45.png");

},
903354(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214858837-e26f4fce7fccebe2d2ce3345ad4417fe.png");

},
332385(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002496008473-8d00e61a74bdfd5ca97b0e1abf1aad44.png");

},
878191(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002279948894-22b09a1158b2a7b44f5db9ebd4c9253c.png");

},
632700(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179498164-d0f989df178d6b53c99f8672b2f39bc7.png");

},
786143(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002547471367-21a827943cba60c2fa96c8aa5cbabb54.png");

},
206242(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
159355(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002463616410-ef5e23dcc04ef15b9ec2133943d7eda2.png");

},
749438(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002462648052-d68588f5bee5f6e667c8f08e897a9902.png");

},
839853(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002314788585-3631279ebc72727749ab36d73c7f12a7.png");

},
735571(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214704425-e26f4fce7fccebe2d2ce3345ad4417fe.png");

},
413092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214858877-9a0dd307d67b6d17554e53c5cee42a4f.png");

},
603948(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
475874(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
149224(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002496005713-7af40f93893737883e89942ee0ed48b7.png");

},
980566(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
408143(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002463542130-d43f6ec70c65b6fa5732b2bc8c489620.png");

},
239498(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
329155(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
971115(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002462747966-b76c94bb56a3d0c431be891af530917c.png");

},
851763(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179498100-bd78ff46b72b6fb82d9524fa12ece35c.png");

},
520037(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214858853-2b0d3c7f7b23ed6d1edb07863b02a6c3.png");

},
483973(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
462844(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002495751689-bf5ae128f59f07e0a8ca59fee1e5db91.png");

},
42152(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214704493-4c0b57f1987ba37d2973856eaf8cc6e6.png");

},
824832(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002495887153-d68588f5bee5f6e667c8f08e897a9902.png");

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