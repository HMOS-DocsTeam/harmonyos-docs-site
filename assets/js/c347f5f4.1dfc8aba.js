"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["985564"], {
80617(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_app_file_app_file_backup_restore_app_file_backup_extension_app_file_backup_extension_md_c34_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-app-file-app-file-backup-restore-app-file-backup-extension-app-file-backup-extension-md-c34.json
var site_docs_core_file_kit_app_file_app_file_backup_restore_app_file_backup_extension_app_file_backup_extension_md_c34_namespaceObject = JSON.parse('{"id":"core-file-kit/app-file/app-file-backup-restore/app-file-backup-extension/app-file-backup-extension","title":"应用接入数据备份恢复","description":"应用接入数据备份恢复需要通过BackupExtensionAbility实现。","source":"@site/docs/core-file-kit/app-file/app-file-backup-restore/app-file-backup-extension/app-file-backup-extension.md","sourceDirName":"core-file-kit/app-file/app-file-backup-restore/app-file-backup-extension","slug":"/core-file-kit/app-file/app-file-backup-restore/app-file-backup-extension/","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-file-backup-extension/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"应用接入数据备份恢复","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file-backup-extension","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用数据备份恢复概述","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-file-backup-overview/"},"next":{"title":"应用克隆适配指导","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-file-clone/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/app-file/app-file-backup-restore/app-file-backup-extension/app-file-backup-extension.md


const frontMatter = {
	title: '应用接入数据备份恢复',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file-backup-extension',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用接入数据备份恢复';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "元数据资源配置文件说明",
  "id": "元数据资源配置文件说明",
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
        id: "应用接入数据备份恢复",
        children: "应用接入数据备份恢复"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用接入数据备份恢复需要通过BackupExtensionAbility实现。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BackupExtensionAbility是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-development-overview",
        children: "Stage模型"
      }), "中扩展组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview",
        children: "ExtensionAbility"
      }), "的派生类。开发者可以通过修改配置文件定制备份恢复框架的行为，包括是否允许备份恢复，备份哪些文件等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["备份恢复扩展能力关键接口如下表所示。API的接口使用指导请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-application-backupextensionability/js-apis-application-backupextensionability#backupextensionability",
        children: "BackupExtensionAbility API参考"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-backupextensioncontext/js-apis-file-backupextensioncontext",
        children: "BackupExtensionContext API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "onBackup(): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据备份准备阶段，迁移备份数据前回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onBackupEx(backupInfo: string): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<string>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onRestore(bundleVersion: BundleVersion): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据恢复阶段，备份数据迁移完成后回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onRestoreEx(bundleVersion: BundleVersion, restoreInfo: string): string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<string>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onRelease(scenario: number): Promise<void>"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["备份或恢复完成时的特殊处理，备份或恢复完成时回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始支持该接口。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当备份恢复时，所有待备份文件及目录的路径不得超过4095字节，否则将导致未定义行为。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当备份目录时，应用进程必须拥有读取该目录及其所有子目录的权限（DAC中的r），否则将导致备份失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当备份文件时，应用进程必须拥有搜索该文件所有祖父级目录的权限（DAC中的x），否则将导致备份失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当备份恢复时，所有待备份恢复的文件及目录不支持相对路径(../)和软链接。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用配置文件module.json5中注册extensionAbilities相关配置"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新增\"extensionAbilities\"字段，其中注册类型\"type\"设置为\"backup\"，元数据信息", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-metadata/js-apis-bundlemanager-metadata",
            children: "\"metadata\""
          }), "新增一个\"name\"为\"ohos. extension. backup\"的条目。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BackupExtensionAbility配置文件示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"extensionAbilities\": [\n        {\n            \"description\": \"$string:ServiceExtAbility\",\n            \"icon\": \"$media:icon\",\n            \"name\": \"BackupExtensionAbility\",\n            \"type\": \"backup\",\n            \"exported\": false,\n            \"metadata\": [\n                {\n                    \"name\": \"ohos.extension.backup\",\n                    \"resource\": \"$profile:backup_config\"\n                }\n            ],\n            \"srcEntry\": \"./ets/BackupExtension/BackupExtension.ets\"\n        }\n    ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新增元数据资源配置文件"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在元数据资源配置文件中，定义备份恢复时需要传输的文件。元数据资源配置文件名称需要与module.json5中\"metadata.resource\"例如\"backup_config.json\"名称保持一致，其保存位置在工程的resources/base/profile文件夹下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "元数据资源配置文件示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"allowToBackupRestore\": true,\n    \"includes\": [\n        \"/data/storage/el2/base/files/users/\"\n    ],\n    \"excludes\": [\n        \"/data/storage/el2/base/files/users/hidden/\"\n    ],\n    \"fullBackupOnly\": false,\n    \"restoreDeps\": \"\"\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以在BackupExtension.ets文件中自定义类继承的BackupExtensionAbility，通过重写其onBackup/onBackupEx和onRestore/onRestoreEx方法，使其达到在备份预加工应用数据或者在恢复阶段加工待恢复文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果没有特殊要求可以空实现，则备份恢复服务会按照统一的备份恢复数据规则进行备份恢复。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面的示例展示了一个空实现的BackupExtension.ets文件："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// onBackup && onRestore\nimport { BackupExtensionAbility, BundleVersion } from '@kit.CoreFileKit';\nimport {hilog} from '@kit.PerformanceAnalysisKit';\n\nconst TAG = `FileBackupExtensionAbility`;\nexport default class BackupExtension extends  BackupExtensionAbility {\n  // onBackup\n  async onBackup ()   {\n    hilog.info(0x0000, TAG, `onBackup ok`);\n  }\n  // onRestore\n  async onRestore (bundleVersion : BundleVersion) {\n    hilog.info(0x0000, TAG, `onRestore end`);\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BackupExtensionAbility } from '@kit.CoreFileKit';\nimport { BundleVersion } from '@kit.CoreFileKit';\n// ...\n\ninterface ErrorInfo {\n  type: string,\n  errorCode: number,\n  errorInfo: string\n}\n\n// ...\n\nclass BackupExt extends BackupExtensionAbility {\n  // onBackupEx\n  async onBackupEx(backupInfo: string): Promise<string> {\n    console.info('onBackupEx ok');\n    let errorInfo: ErrorInfo = {\n      type: 'ErrorInfo',\n      errorCode: 0,\n      errorInfo: 'app diy error info'\n    }\n    return JSON.stringify(errorInfo);\n  }\n\n  // onRestoreEx\n  async onRestoreEx(bundleVersion : BundleVersion, restoreInfo: string): Promise<string> {\n    console.info(`onRestoreEx begin`);\n    let errorInfo: ErrorInfo = {\n      type: 'ErrorInfo',\n      errorCode: 0,\n      errorInfo: 'app diy error info'\n    }\n    return JSON.stringify(errorInfo);\n  }\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API 20开始，开发者如需在应用备份恢复完成后执行一些特殊操作，例如清理备份或恢复时应用创建的临时文件，可以在BackupExtension.ets文件中自定义类继承的BackupExtensionAbility，通过重写其onRelease方法，当备份或恢复完成时，会执行onRelease方法以执行开发者自定义的行为。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onRelease具有超时机制，应用若在5秒内未完成onRelease操作，将触发备份恢复结束时的应用进程退出流程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面的示例展示了需要清理临时文件目录时onRelease的实现："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BackupExtensionAbility } from '@kit.CoreFileKit';\n// ...\nimport { fileIo } from '@kit.CoreFileKit';\n\n// ...\n\nconst SCENARIO_BACKUP: number = 1;\nconst SCENARIO_RESTORE: number = 2;\n// 需要清理的临时目录\nlet filePath: string = '/data/storage/el2/base/.temp/';\n\nclass BackupExt extends BackupExtensionAbility {\n  // ...\n  // onRelease\n  async onRelease(scenario: number): Promise<void> {\n    try {\n      if (scenario == SCENARIO_BACKUP) {\n        // 备份场景，应用自行实现处理，以清理备份产生的临时文件为例\n        console.info(`onRelease begin`);\n        await fileIo.rmdir(filePath);\n        console.info(`onRelease end, rmdir succeed`);\n      }\n      if (scenario == SCENARIO_RESTORE) {\n        // 恢复场景，应用自行实现处理，以清理恢复产生的临时文件为例\n        console.info(`onRelease begin`);\n        await fileIo.rmdir(filePath);\n        console.info(`onRelease end, rmdir succeed`);\n      }\n    } catch (error) {\n      console.error(`onRelease failed with error. Code: ${error.code}, message: ${error.message}`);\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "元数据资源配置文件说明",
      children: "元数据资源配置文件说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "allowToBackupRestore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否允许备份恢复，默认为false。true为允许备份恢复，false为不允许备份恢复。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "includes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用沙箱中需要备份的文件和目录。  当模式串以非/开始时，表示一个相对于根路径的相对路径。  includes支持的路径清单列表如下述代码段内容所示，当配置includes时请确保配置路径范围包含在其中，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "不支持备份el3、el4路径"
              })
            }), "。  当includes已配置时，备份恢复框架会采用开发者配置的模式串，否则将会采用下述代码段内容作为默认值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "excludes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["includes中无需备份的例外项。格式同includes。  在配置excludes时，请确保其范围在includes的子集中。  当excludes已配置时，备份恢复框架会采用开发者配置的模式串，否则将会采用", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "空数组"
              })
            }), "作为默认值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fullBackupOnly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否使用应用默认恢复目录，默认值为false。当值为true时，恢复数据时会通过临时路径进行缓存，临时路径可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-file-backupextensioncontext/js-apis-file-backupextensioncontext#%E5%B1%9E%E6%80%A7",
              children: "backupDir"
            }), "获取。当值为false或者不配置该字段时，恢复数据会以'/'为根目录解压数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "restoreDeps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "不推荐使用"
              })
            }), "，应用恢复时依赖其他应用数据，默认值为\"\"，需要配置依赖应用名称。当前仅支持最多一个依赖项。配置的依赖仅在一次恢复任务上下文生效，如果一次恢复任务中没有检测到依赖应用，则忽略该依赖描述继续执行恢复任务。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "依赖应用未恢复或者恢复失败都会导致本应用恢复失败"
              })
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "json串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "额外信息可通过该字段传递。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "字段说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "有关fullBackupOnly字段的说明"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["当fullBackupOnly为false时，恢复数据会以 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "/"
              })
            }), " 为根目录解压数据，同路径下的同名文件会被覆盖。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当fullBackupOnly为true时，恢复数据会以临时目录为根目录解压数据，开发者需要在OnRestore/OnRestoreEx内自行实现恢复数据的逻辑，进行最终的恢复。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可根据自身的业务场景，选择对应的恢复数据方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["假设应用的数据备份路径为：", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "data/storage/el2/base/files/A/"
            })
          }), " 。那么在恢复时："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果配置了fullBackupOnly为false，数据会被直接解压到：", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "/data/storage/el2/base/files/A/"
              })
            }), " 目录下；"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果配置了fullBackupOnly为true，数据则会被解压到：", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "临时路径backupDir + /restore/data/storage/el2/base/files/A/"
              })
            }), " 目录下。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "includes支持的路径清单列表如下："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"includes\": [\n        \"data/storage/el1/database/\",\n        \"data/storage/el1/base/files/\",\n        \"data/storage/el1/base/preferences/\",\n        \"data/storage/el1/base/haps/*/files/\",\n        \"data/storage/el1/base/haps/*/preferences/\",\n        \"data/storage/el2/database/\",\n        \"data/storage/el2/base/files/\",\n        \"data/storage/el2/base/preferences/\",\n        \"data/storage/el2/base/haps/*/files/\",\n        \"data/storage/el2/base/haps/*/preferences/\",\n        \"data/storage/el2/distributedfiles/\",\n        \"data/storage/el5/database/\",\n        \"data/storage/el5/base/files/\",\n        \"data/storage/el5/base/preferences/\",\n        \"data/storage/el5/base/haps/*/files/\",\n        \"data/storage/el5/base/haps/*/preferences/\"\n    ]\n}\n"
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