"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["157118"], {
449358(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_core_file_kit_intro_core_file_kit_intro_md_bf0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-core-file-kit-intro-core-file-kit-intro-md-bf0.json
var site_docs_core_file_kit_core_file_kit_intro_core_file_kit_intro_md_bf0_namespaceObject = JSON.parse('{"id":"core-file-kit/core-file-kit-intro/core-file-kit-intro","title":"Core File Kit简介","description":"Core File Kit（文件基础服务）为开发者提供一套访问和管理应用文件和用户文件的能力。帮助用户更高效地管理、查找和备份各类文件，使用户能够轻松应对各种文件管理的需求。","source":"@site/docs/core-file-kit/core-file-kit-intro/core-file-kit-intro.md","sourceDirName":"core-file-kit/core-file-kit-intro","slug":"/core-file-kit/core-file-kit-intro/","permalink":"/harmonyos-docs-site/core-file-kit/core-file-kit-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Core File Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-file-kit-intro","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"代理提醒(ArkTS)","permalink":"/harmonyos-docs-site/background-task-kit/agent-powered-reminder/"},"next":{"title":"应用文件概述","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/core-file-kit-intro/core-file-kit-intro.md


const frontMatter = {
	title: 'Core File Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-file-kit-intro',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Core File Kit简介';

const assets = {

};



const toc = [{
  "value": "Core File Kit概述",
  "id": "core-file-kit概述",
  "level": 2
}, {
  "value": "Kit使用场景",
  "id": "kit使用场景",
  "level": 2
}, {
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "亮点/特征",
  "id": "亮点特征",
  "level": 2
}, {
  "value": "框架原理",
  "id": "框架原理",
  "level": 2
}, {
  "value": "应用文件访问框架",
  "id": "应用文件访问框架",
  "level": 3
}, {
  "value": "用户文件访问框架",
  "id": "用户文件访问框架",
  "level": 3
}, {
  "value": "与相关Kit的关系",
  "id": "与相关kit的关系",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "core-file-kit简介",
        children: "Core File Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Core File Kit（文件基础服务）为开发者提供一套访问和管理应用文件和用户文件的能力。帮助用户更高效地管理、查找和备份各类文件，使用户能够轻松应对各种文件管理的需求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "core-file-kit概述",
      children: "Core File Kit概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Core File Kit套件中，按文件所有者的不同，有如下文件分类模型，其示意图如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/app-file/app-file-overview",
          children: "应用文件"
        }), "：文件所有者为应用，包括应用安装文件、应用资源文件、应用缓存文件等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/user-files/user-file-overview",
          children: "用户文件"
        }), "：文件所有者为登录到该终端设备的用户，包括用户私有的图片、视频、音频、文档等。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统文件：与应用和用户无关的其它文件，包括公共库、设备文件、系统资源文件等。这类文件不需要开发者进行文件管理，本文不展开介绍。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按文件系统管理的文件存储位置（数据源位置）的不同，有如下文件系统分类模型："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本地文件系统：提供本地设备或外置存储设备（如U盘、移动硬盘）的文件访问能力。本地文件系统是最基本的文件系统，本文不展开介绍。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/distributed-fs/distributed-fs-overview",
          children: "分布式文件系统"
        }), "：提供跨设备的文件访问能力。所谓跨设备，指文件不一定存储在本地设备或外置存储设备，而是通过计算机网络与其它分布式设备相连。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloud-sync-file-overview",
          children: "端云文件协同"
        }), "：端云文件协同为应用开发提供端云一体的统一文件系统能力，为用户和应用提供一致的文件同步与跨端访问体验。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 文件分类模型示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(502730)/* ["default"] */.A) + "",
        width: "1635",
        height: "1167"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kit使用场景",
      children: "Kit使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Core File Kit常见的使用场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用文件访问和文件分享。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用数据备份恢复。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "选择与保存用户文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "跨设备的文件访问和分享能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持对应用文件进行查看、创建、读写、删除、移动、复制、获取属性等访问操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持应用文件上传到网络服务器和网络服务器下载网络资源文件到本地应用文件目录。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持获取当前应用的存储空间大小、指定文件系统的剩余空间大小和指定文件系统的总空间大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持应用分享文件给其它应用和使用其它应用分享的文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持应用接入数据备份恢复，在接入后，应用可通过修改配置文件定制备份恢复框架的行为，包括是否允许备份恢复、备份哪些数据。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%94%A8%E6%88%B7%E6%96%87%E4%BB%B6%E8%AE%BF%E9%97%AE%E6%A1%86%E6%9E%B6",
          children: "用户文件访问框架"
        }), "，用于开发者访问和管理用户文件。例如选择与保存用户文件。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持跨设备的文件访问和拷贝能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持全维度同步上云，实时回调同步状态，节省本地存储空间，支持全生命周期版本管理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点/特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "沙箱隔离："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["访问和管理应用文件，对于每个应用，系统会在内部存储空间映射出一个专属的“", (0,jsx_runtime.jsx)(_components.a, {
            href: "/core-file-kit/app-file/app-sandbox-directory",
            children: "应用沙箱目录"
          }), "”，它是“", (0,jsx_runtime.jsx)(_components.a, {
            href: "/core-file-kit/app-file/app-sandbox-directory#%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E7%9B%AE%E5%BD%95%E4%B8%8E%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84",
            children: "应用文件目录"
          }), "”与一部分系统文件（应用运行必需的少量系统文件）所在的目录组成的集合。有以下优点："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "隔离性：应用沙箱提供了一个完全隔离的环境，使用户可以安全地访问应用文件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "安全性：应用沙箱限制了应用可见的数据的最小范围，保护了应用文件的安全。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用分享："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用之间可以通过分享URI（Uniform Resource Identifier）或文件描述符FD（File Descriptor）的方式，进行文件共享。有以下优点："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "便携性：应用之间进行文件分享，省去了用户在多个应用间切换的麻烦，简化了操作步骤，提高了效率。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "高效性：应用间的文件分享能够更快地完成文件的传输，减少了因多次跳转和等待而浪费的时间。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "数据一致性：应用间的文件分享能够确保数据的完整性和一致性，避免数据在传输过程中出现损坏或丢失的情况。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "安全性：应用间的文件分享可以确保文件的安全性，避免文件被非法获取或篡改。同时，通过文件授权访问的方式，可以进一步增强文件的安全性。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "端云协同："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持全维度同步上云和灵活的文件缓存能力。有以下优点："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "无缝体验：完全复刻本地文件操作逻辑。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "增量上传：仅对变化部分（新增/修改的文件分片）进行上传，无需传输完整文件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "差分缓存：本端仅缓存文件的变化分片（而非完整文件）。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "框架原理",
      children: "框架原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用文件访问框架",
      children: "应用文件访问框架"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用文件访问框架是通过基础文件操作接口（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
        children: "ohos.file.fs"
      }), "）实现。开发者无需了解内部实现，基础文件操作接口功能详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-file-access-management/app-file-access#%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E",
        children: "接口说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "用户文件访问框架",
      children: "用户文件访问框架"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户文件访问框架（File Access Framework）是一套提供给开发者访问和管理用户文件的基础框架。该框架依托于HarmonyOS的ExtensionAbility组件机制，提供了一套统一访问用户文件的方法和接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 用户文件访问框架示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(231868)/* ["default"] */.A) + "",
        width: "1283",
        height: "888"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统应用或三方应用（即图中的文件访问客户端）若需访问用户文件，如选择一张照片或保存多个文档等，可以通过拉起“文件选择器应用”来实现。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["FilePicker：系统预置应用，提供文件访问客户端选择和保存文件的能力，无需配置权限。FilePicker的使用指导请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/core-file-kit/user-files/select-save-user-file/select-user-file",
            children: "选择用户文件"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FileManager：对于设备开发者，还可以按需开发自己的文件选择器或文件管理器应用。该功能不向三方应用开放。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "File Access Framework（用户文件访问框架）的主要功能模块如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "File Access Helper：提供给文件管理器和文件选择器访问用户文件的API接口。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["File Access ExtensionAbility：提供文件访问框架能力，由内卡文件管理服务UserFileManager和外卡文件管理服务ExternalFileManager组成，实现对应的文件访问功能。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "UserFileManager：内卡文件管理服务，基于File Access ExtensionAbility框架实现，用于管理内置存储设备上的文件。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "ExternalFileManager：外卡文件管理服务，基于File Access ExtensionAbility框架实现，用于管理外置存储设备上的文件。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与相关kit的关系",
      children: "与相关Kit的关系"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ability Kit：Core File Kit中用户文件访问框架依赖Ability Kit提供的Extension基础能力，并受Ability Kit服务调度管理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器，但与真机存在部分能力差异，具体差异如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通用差异：请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification#section1227613205203",
          children: "模拟器与真机的差异"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-app-file-configuration",
          children: "应用共享目录配置"
        }), "不支持模拟器开发。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file-backup-restore",
          children: "应用数据备份恢复"
        }), "不支持模拟器开发。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/distributed-fs",
          children: "分布式文件系统"
        }), "不支持模拟器开发。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloud-sync-file",
          children: "端云文件协同"
        }), "不支持模拟器开发。"]
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
231868(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478261-1ab4d72e0a5ed2b6ce798a0a086df4f7.png");

},
502730(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958260-8c7a3e257dc3d474ea05cb291611d5f2.png");

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