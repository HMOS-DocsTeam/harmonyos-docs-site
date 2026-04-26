"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["604330"], {
447244(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_app_file_app_sandbox_directory_app_sandbox_directory_md_4b0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-app-file-app-sandbox-directory-app-sandbox-directory-md-4b0.json
var site_docs_core_file_kit_app_file_app_sandbox_directory_app_sandbox_directory_md_4b0_namespaceObject = JSON.parse('{"id":"core-file-kit/app-file/app-sandbox-directory/app-sandbox-directory","title":"应用沙箱目录","description":"应用沙箱是一种以安全防护为目的的隔离机制，避免数据受到恶意路径穿越访问。在这种沙箱的保护机制下，应用可见的目录范围即为“应用沙箱目录”。","source":"@site/docs/core-file-kit/app-file/app-sandbox-directory/app-sandbox-directory.md","sourceDirName":"core-file-kit/app-file/app-sandbox-directory","slug":"/core-file-kit/app-file/app-sandbox-directory/","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-sandbox-directory/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"应用沙箱目录","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-sandbox-directory","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用文件概述","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-overview/"},"next":{"title":"应用文件访问(ArkTS)","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-access-management/app-file-access/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/app-file/app-sandbox-directory/app-sandbox-directory.md


const frontMatter = {
	title: '应用沙箱目录',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-sandbox-directory',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用沙箱目录';

const assets = {

};



const toc = [{
  "value": "应用沙箱目录与应用沙箱路径",
  "id": "应用沙箱目录与应用沙箱路径",
  "level": 2
}, {
  "value": "应用文件目录与应用文件路径",
  "id": "应用文件目录与应用文件路径",
  "level": 2
}, {
  "value": "应用沙箱路径和真实物理路径的对应关系",
  "id": "应用沙箱路径和真实物理路径的对应关系",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    extensionpath: "extensionpath",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    packagename: "packagename",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    userid: "userid",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用沙箱目录",
        children: "应用沙箱目录"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用沙箱是一种以安全防护为目的的隔离机制，避免数据受到恶意路径穿越访问。在这种沙箱的保护机制下，应用可见的目录范围即为“应用沙箱目录”。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["对于每个应用，系统会在内部存储空间映射出一个专属的“应用沙箱目录”，它是“", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E7%9B%AE%E5%BD%95%E4%B8%8E%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84",
          children: "应用文件目录"
        }), "”与一部分系统文件（应用运行必需的少量系统文件）所在的目录组成的集合。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用沙箱限制了应用可见的数据范围。在“应用沙箱目录”中，应用默认仅能看到自己的应用文件以及少量的系统文件（应用运行必需的少量系统文件）。在全量挂载的设备平台上，文件管理应用可查看其他应用存放在el2/base下的数据。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用可以在“应用文件目录”下保存和处理自己的应用文件；系统文件及其目录对于应用是只读的；应用若需要访问用户文件，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/user-files/user-file-overview",
          children: "用户文件"
        }), "使用指导。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下图展示了应用沙箱下，应用可访问的文件范围和方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 应用沙箱文件访问关系图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(66397)/* ["default"] */.A) + "",
        width: "906",
        height: "639"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用沙箱目录与应用沙箱路径",
      children: "应用沙箱目录与应用沙箱路径"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用沙箱保护机制下，应用无法获知除自身应用文件目录之外的其他应用或用户的数据目录位置及存在。同时，所有应用的目录可见范围均经过权限隔离与文件路径挂载隔离，形成了独立的路径视图，屏蔽了实际物理路径："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如下图所示，在普通应用（也称三方应用）视角下，不仅可见的目录与文件数量限制了范围，并且可见的目录与文件路径也与系统进程等其他进程看到的不同。我们将普通应用视角下看到的“应用沙箱目录”下某个文件或某个具体目录的路径，称为“应用沙箱路径”。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者在应用开发调试时，可能需要向应用沙箱下推送一些文件以期望在应用内访问或测试。可以通过DevEco Studio向应用安装路径中放入目标文件，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/resource-categories-and-access#%E8%B5%84%E6%BA%90%E8%AE%BF%E9%97%AE",
          children: "应用安装资源访问"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "实际物理路径与沙箱路径并非1:1的映射关系，沙箱路径总是少于系统进程视角可见的物理路径。部分调试进程视角下的物理路径在对应的应用沙箱目录下没有对应路径。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 应用沙箱路径（不同权限与角色的进程下可见的文件路径不同）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(484400)/* ["default"] */.A) + "",
        width: "1405",
        height: "357"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用文件目录与应用文件路径",
      children: "应用文件目录与应用文件路径"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如前文所述，“应用沙箱目录”内分为两类：应用文件目录和系统文件目录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统文件目录对应用的可见范围由HarmonyOS系统预置，开发者无需关注。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在此主要介绍应用文件目录，如下图所示。应用文件目录下的文件或目录路径称为应用文件路径。各文件路径具有不同的属性和特征。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 应用文件目录结构图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(6881)/* ["default"] */.A) + "",
        width: "1917",
        height: "1269"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(25237)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止直接使用上图中四级目录之前的目录名组成的路径字符串，否则可能导致后续应用版本因应用文件路径变化导致不兼容问题。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应通过Context属性获取应用文件路径，包括但不限于上图中绿色背景的路径。 Context上下文获取及上述应用文件路径的获取，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage",
          children: "应用上下文Context"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一级目录data/：应用文件根目录。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "二级目录storage/：应用持久化文件目录。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "三级目录el1/~el5/：不同文件加密类型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "EL1(Encryption Level 1):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "保护设备上所有文件的基础安全能力。设备开机后，用户无需完成身份验证即可访问EL1保护的文件。除非有特殊需求，否则不建议使用此方法。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果直接窃取设备存储介质上的密文，攻击者无法脱机进行解密。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "EL2(Encryption Level 2):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在EL1的基础上，增加首次认证后的文件保护能力。设备开机后，用户在通过首次认证后，通过EL2能力保护的文件才能被访问。此后只要设备没有关机，通过EL2能力保护的文件一直可被访问。推荐应用默认使用该方式。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果在关机后丢失手机，攻击者无法读取EL2保护的文件。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "EL3(Encryption Level 3):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "与EL4整体能力类似，但和EL4的区别是，在锁屏下可创建新的文件，但无法读取。如无特殊必要，无需使用该方式。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "EL4(Encryption Level 4):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在EL2的基础上，增加设备锁屏时的文件保护能力。在用户锁屏时，通过EL4能力保护的数据将无法被访问。如无特殊必要，无需使用该方式。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果设备在锁屏状态下被盗，攻击者无法读取EL4保护的文件。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "EL5(Encryption Level 5):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在EL2的基础上，增加设备锁屏时的文件保护能力。在用户锁屏后，满足一定条件时，通过EL5能力保护的数据将无法被访问，但可以继续创建和读写新的文件。如无特殊必要，无需使用该方式。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["默认情况下不会生成EL5的相关目录，应用若需要使用EL5目录，则需要配置访问E类加密数据库的权限。具体配置方法详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkdata/data-reliability-security/encrypted-estore-guidelines",
              children: "E类加密数据库的使用"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(521024)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用如无特殊需要，应将数据存放在el2加密目录下，以尽可能保证数据安全。但是对于某些场景，一些应用文件需要在用户首次认证前就可被访问，例如时钟、闹铃、壁纸等，此时应用需要将这些文件存放到设备级加密区（el1）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者可通过监听", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_user_unlocked",
            children: "COMMON_EVENT_USER_UNLOCKED"
          }), "事件感知当前用户首次认证完成。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["切换应用文件加密类型目录的方法请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#%E8%8E%B7%E5%8F%96%E5%92%8C%E4%BF%AE%E6%94%B9%E5%8A%A0%E5%AF%86%E5%88%86%E5%8C%BA",
            children: "获取和修改加密分区"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "四级、五级目录："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过ApplicationContext获取distributedfiles目录或base下的files、cache、preferences、temp等目录的路径，应用全局信息存放在这些目录下。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过UIAbilityContext、AbilityStageContext、ExtensionContext可以获取HAP级别应用文件路径。HAP信息可以存放在这些目录下，存放在此目录的文件会跟随HAP的卸载而删除，不会影响App级别目录下的文件。在开发态，一个应用包含一个或者多个HAP，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-package-fundamentals/application-package-structure/application-package-structure-stage",
            children: "Stage模型应用程序包结构"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用文件路径具体说明及生命周期如下表所示。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表1"
            })
          }), " 应用文件路径详细说明"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "目录名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Context属性名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "bundle"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "bundleCodeDir"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "安装文件路径"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["应用安装后的App的HAP资源包所在目录；随应用卸载而清理。  不能通过拼接路径访问资源文件，应使用", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager",
                  children: "资源管理接口"
                }), "访问资源。  可以用于存储应用的代码资源数据，主要包括应用安装的HAP资源包、可重复使用的库文件以及插件资源等。此路径下存储的代码资源数据可以被用于动态加载。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "base"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NA"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "本设备文件路径"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用在本设备上存放持久化数据的目录（随应用卸载而清理），子目录包含files/、cache/、temp/和haps/。  不建议将cookie、密码和token等高风险信息明文存储在此目录下。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "database"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "databaseDir"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "数据库路径"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用在el2加密条件下存放通过分布式数据库服务操作的文件目录；随应用卸载而清理。  仅用于保存应用的私有数据库数据，主要包括数据库文件等。此路径下仅适用于存储分布式数据库相关文件数据。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "distributedfiles"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "distributedFilesDir"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "分布式文件路径"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["应用在el2加密条件下存放分布式文件的目录，应用将文件放入该目录可分布式跨设备直接访问；随应用卸载而清理。  可以用于保存应用分布式场景下的数据，主要包括应用多设备共享文件、应用多设备备份文件、应用多设备群组协助文件。此路径下存储这些数据，使得应用更加适合多设备使用场景。  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "注意"
                  })
                }), "：  distributedfiles下的.remote_share目录由系统创建管理，应用请勿创建或操作。  distributedfiles目录支持直接操作其他设备文件，请勿随意删除该目录下的文件。详细注意事项请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/core-file-kit/distributed-fs/file-access-across-devices",
                  children: "跨设备文件共享和访问"
                }), " 。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "files"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "filesDir"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用通用文件路径"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用在本设备内部存储上通用的存放默认长期保存的文件路径；随应用卸载而清理。  可以用于保存应用的任何私有数据，主要包括用户持久性文件、图片、媒体文件以及日志文件等。此路径下存储这些数据，使得数据保持私有、安全且持久有效。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "cache"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "cacheDir"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用缓存文件路径"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用在本设备内部存储上用于缓存下载的文件或可重新生成的缓存文件的路径，应用cache目录大小超过配额或者系统空间达到一定条件，自动触发清理该目录下文件；用户通过系统空间管理类应用也可能触发清理该目录。应用需判断文件是否仍存在，决策是否需重新缓存该文件；随应用卸载而清理。  可以用于保存应用的缓存数据，主要包括离线数据、图片缓存、数据库备份以及临时文件等。此路径下存储的数据可能会被系统自动清理，因此不要存储重要数据。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "preferences"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "preferencesDir"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用首选项文件路径"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["应用在本设备内部存储上通过数据库API存储配置类或首选项的目录；随应用卸载而清理。详见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/arkdata/app-data-persistence/data-persistence-by-preferences",
                  children: "通过用户首选项实现数据持久化"
                }), "。  可以用于保存应用的首选项数据，主要包括应用首选项文件以及配置文件等。此路径下仅适用于存储少量数据。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "temp"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "tempDir"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用临时文件路径"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用在本设备内部存储上仅在应用运行期间产生和需要的文件，应用退出后即清理。  可以用于保存应用的临时生成的数据，主要包括数据库缓存、图片缓存、临时日志文件、以及下载的应用安装包文件等。此路径下存储使用后即可删除的数据。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用沙箱路径和真实物理路径的对应关系",
      children: "应用沙箱路径和真实物理路径的对应关系"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用沙箱路径下读写文件，经过映射转换，实际读写的是真实物理路径中的应用文件，应用沙箱路径与真实物理路径对应关系如下表所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其中<USERID>为当前用户ID，从100开始递增，<EXTENSIONPATH>为moduleName-extensionName。应用是否以Extension独立沙箱运行可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview",
        children: "ExtensionAbility组件"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "应用沙箱路径"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "物理路径"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/data/storage/el1/bundle"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用安装包目录：  /data/app/el1/bundle/public/", (0,jsx_runtime.jsx)(_components.packagename, {})]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/data/storage/el1/base"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用el1级别加密数据目录：  - 非独立沙箱运行的应用：/data/app/el1/", (0,jsx_runtime.jsxs)(_components.userid, {
              children: ["/base/", (0,jsx_runtime.jsxs)(_components.packagename, {
                children: ["  - 以独立沙箱运行的Extension应用： /data/app/el1/", (0,jsx_runtime.jsxs)(_components.userid, {
                  children: ["/base/+extension-", (0,jsx_runtime.jsxs)(_components.extensionpath, {
                    children: ["+", (0,jsx_runtime.jsx)(_components.packagename, {})]
                  })]
                })]
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/data/storage/el2/base"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用el2级别加密数据目录：  - 非独立沙箱运行的应用：/data/app/el2/", (0,jsx_runtime.jsxs)(_components.userid, {
              children: ["/base/", (0,jsx_runtime.jsxs)(_components.packagename, {
                children: ["  - 以独立沙箱运行的Extension应用： /data/app/el2/", (0,jsx_runtime.jsxs)(_components.userid, {
                  children: ["/base/+extension-", (0,jsx_runtime.jsxs)(_components.extensionpath, {
                    children: ["+", (0,jsx_runtime.jsx)(_components.packagename, {})]
                  })]
                })]
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/data/storage/el1/database"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用el1级别加密数据库目录：  - 非独立沙箱运行的应用：/data/app/el1/", (0,jsx_runtime.jsxs)(_components.userid, {
              children: ["/database/", (0,jsx_runtime.jsxs)(_components.packagename, {
                children: ["  - 以独立沙箱运行的Extension应用：/data/app/el1/", (0,jsx_runtime.jsxs)(_components.userid, {
                  children: ["/database/+extension-", (0,jsx_runtime.jsxs)(_components.extensionpath, {
                    children: ["+", (0,jsx_runtime.jsx)(_components.packagename, {})]
                  })]
                })]
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/data/storage/el2/database"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用el2级别加密数据库目录：  - 非独立沙箱运行的应用：/data/app/el2/", (0,jsx_runtime.jsxs)(_components.userid, {
              children: ["/database/", (0,jsx_runtime.jsxs)(_components.packagename, {
                children: ["  - 以独立沙箱运行的Extension应用：/data/app/el2/", (0,jsx_runtime.jsxs)(_components.userid, {
                  children: ["/database/+extension-", (0,jsx_runtime.jsxs)(_components.extensionpath, {
                    children: ["+", (0,jsx_runtime.jsx)(_components.packagename, {})]
                  })]
                })]
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "/data/storage/el2/distributedfiles"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用el2加密级别有账号分布式数据融合目录：  - 物理目录：/mnt/hmdfs/", (0,jsx_runtime.jsxs)(_components.userid, {
              children: ["/account/merge_view/data/", (0,jsx_runtime.jsx)(_components.packagename, {})]
            })]
          })]
        })]
      })]
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
66397(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798612-23f2ff6c504a7ae0d8c1b9a5f9d19b84.png");

},
484400(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438307-2aff20e3dea1c9fdbf3fcce4ce96ce1d.png");

},
25237(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
6881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958262-1c009463985363e1252d9e86126b675a.png");

},
521024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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