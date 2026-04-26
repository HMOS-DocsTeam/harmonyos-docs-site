"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["948439"], {
618413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_app_data_persistence_data_persistence_by_preferences_data_persistence_by_preferences_md_a0c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-app-data-persistence-data-persistence-by-preferences-data-persistence-by-preferences-md-a0c.json
var site_docs_arkdata_app_data_persistence_data_persistence_by_preferences_data_persistence_by_preferences_md_a0c_namespaceObject = JSON.parse('{"id":"arkdata/app-data-persistence/data-persistence-by-preferences/data-persistence-by-preferences","title":"通过用户首选项实现数据持久化 (ArkTS)","description":"场景介绍","source":"@site/docs/arkdata/app-data-persistence/data-persistence-by-preferences/data-persistence-by-preferences.md","sourceDirName":"arkdata/app-data-persistence/data-persistence-by-preferences","slug":"/arkdata/app-data-persistence/data-persistence-by-preferences/","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/data-persistence-by-preferences/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"通过用户首选项实现数据持久化 (ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-persistence-by-preferences","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用数据持久化概述","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/app-data-persistence-overview/"},"next":{"title":"通过用户首选项实现数据持久化 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/preferences-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/app-data-persistence/data-persistence-by-preferences/data-persistence-by-preferences.md


const frontMatter = {
	title: '通过用户首选项实现数据持久化 (ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-persistence-by-preferences',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '通过用户首选项实现数据持久化 (ArkTS)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "存储模式说明",
  "id": "存储模式说明",
  "level": 2
}, {
  "value": "XML存储",
  "id": "xml存储",
  "level": 3
}, {
  "value": "GSKV存储",
  "id": "gskv存储",
  "level": 3
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "首选项通用限制",
  "id": "首选项通用限制",
  "level": 3
}, {
  "value": "XML模式约束限制",
  "id": "xml模式约束限制",
  "level": 3
}, {
  "value": "GSKV模式约束限制",
  "id": "gskv模式约束限制",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "通过用户首选项实现数据持久化-arkts",
        children: "通过用户首选项实现数据持久化 (ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户首选项(Preferences)为应用提供Key-Value键值型的数据处理能力，支持应用持久化轻量级数据，并对其修改和查询。当用户有轻量级的键值型数据需要存储时，可以采用Preferences来进行存储。一般适用于保存用户的个性化设置，例如字体大小、是否开启夜间模式等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如图所示，用户程序通过ArkTS接口调用用户首选项读写对应的数据文件。开发者可以将用户首选项持久化文件的内容加载到Preferences实例，每个文件唯一对应到一个Preferences实例，系统会通过静态容器将该实例存储在内存中，直到主动从内存中移除该实例或删除该文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用首选项的持久化文件保存在应用沙箱内部，可以通过context获取其路径。具体请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84",
        children: "获取应用文件路径"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 用户首选项运作机制"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(775975)/* ["default"] */.A) + "",
        width: "1383",
        height: "865"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "存储模式说明",
      children: "存储模式说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户首选项默认使用XML格式进行存储，从API version 18开始，可选择GSKV存储模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xml存储",
      children: "XML存储"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["XML存储指的是数据会以XML的形式存储到文件中，该模式的优点是通用性强，支持跨平台。当选择该模式时，首选项对数据的操作主要发生在内存中，开发者可以在需要的时候再调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-preferences/js-apis-data-preferences#flush",
        children: "flush"
      }), "接口进行数据持久化。针对单进程、小数据量场景，推荐使用该存储模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gskv存储",
      children: "GSKV存储"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GSKV是从API version 18起提供的一种存储模式，数据以二进制的形式存储在文件中，该模式的优点是支持多进程并发读写。当选择该模式时，首选项对数据的操作会实时落盘。针对多进程并发场景，推荐使用该存储模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "首选项通用限制",
      children: "首选项通用限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key键为string类型，要求非空且长度不超过1024个字节。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果Value值为string类型，请使用UTF-8编码格式，可以为空，不为空时长度不超过16MB。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-preferences/js-apis-data-preferences#preferencesremovepreferencesfromcache",
          children: "removePreferencesFromCache"
        }), "或者", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-preferences/js-apis-data-preferences#preferencesdeletepreferences",
          children: "deletePreferences"
        }), "后，订阅的数据变更会主动取消订阅，重新", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-preferences/js-apis-data-preferences#preferencesgetpreferences",
          children: "getPreferences"
        }), "后需要重新订阅数据变更。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不允许deletePreferences与其他接口多线程、多进程并发调用，否则可能会发生不可预期行为。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持数据加密存储。如果需要进行数据加密，应用应该先将数据进行加密，然后将密文通过Uint8Array类型存储到Preferences中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xml模式约束限制",
      children: "XML模式约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "XML模式（首选项的默认模式）无法保证进程并发安全，会有文件损坏和数据丢失的风险，不支持在多进程场景下使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当存储的数据中包含非UTF-8格式的字符串时，请使用Uint8Array类型存储，否则会造成持久化文件出现格式错误造成文件损坏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "内存会随着存储数据量的增大而增大，所以存储的数据量应该是轻量级的，建议存储的数据不超过50MB。数据量较大时，在使用同步接口创建Preferences对象和持久化数据时会成为耗时操作，不建议在主线程中使用，否则可能会出现appfreeze问题。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gskv模式约束限制",
      children: "GSKV模式约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GSKV模式不支持跨平台，使用该模式前需调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-preferences/js-apis-data-preferences#preferencesisstoragetypesupported18",
          children: "isStorageTypeSupported"
        }), "接口判断当前平台是否支持该模式。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是用户首选项持久化功能的相关接口，更多接口及使用方式请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-preferences/js-apis-data-preferences",
        children: "用户首选项"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getPreferencesSync(context: Context, options: Options): Preferences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Preferences实例。该接口存在异步接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "putSync(key: string, value: ValueType): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将数据写入Preferences实例，可通过flush将Preferences实例持久化。该接口存在异步接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hasSync(key: string): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查Preferences实例是否包含名为给定Key的存储键值对，true表示包含，false表示不包含。给定的Key值不能为空。该接口存在异步接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getSync(key: string, defValue: ValueType): ValueType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取键对应的值，如果值为null或非默认值类型，将返回默认数据defValue。该接口存在异步接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deleteSync(key: string): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从Preferences实例中删除名为给定Key的存储键值对。该接口存在异步接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "flush(callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将当前Preferences实例的数据异步存储到用户首选项持久化文件中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'change', callback: Callback<string>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅数据变更，订阅的数据发生变更后，在执行flush方法后，触发callback回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'change', callback?: Callback<string>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅数据变更。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deletePreferences(context: Context, options: Options, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从内存中移除指定的Preferences实例。若Preferences实例有对应的持久化文件，则同时删除其持久化文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isStorageTypeSupported(type: StorageType): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断当前平台是否支持希望使用的存储模式。true表示支持，false表示不支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入@kit.ArkData模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { preferences } from '@kit.ArkData';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）选择存储模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该步骤为可选步骤。首选项默认使用XML模式存储数据，从API version 18开始，新增提供并支持使用GSKV存储模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在选择GSKV存储模式之前，需要使用isStorageTypeSupported()接口判断当前平台是否支持GSKV模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若接口返回false，则说明当前平台不支持GSKV模式，请使用XML模式进行数据存储。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let isGskvSupported = preferences.isStorageTypeSupported(preferences.StorageType.GSKV);\nLogger.info('Is gskv supported on this platform: ' + isGskvSupported);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取Preferences实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对默认的XML存储模式，使用getPreferencesSync()方法获取Preferences实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "context的定义如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const context = EntryAbility.getContext();\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对默认的XML存储模式，使用getPreferencesSync()方法获取Preferences实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { window } from '@kit.ArkUI';\n\nlet dataPreferences: preferences.Preferences | null = null;\n\nclass EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    let options: preferences.Options = { name: 'myStore' };\n    dataPreferences = preferences.getPreferencesSync(context, options);\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对GSKV存储模式，使用getPreferencesSync()方法获取Preferences实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若希望使用GSKV存储模式且当前平台支持该模式，可以通过以下方式获取GSKV存储模式的Preferences实例。需要注意的是，当选择某一存储模式后，不允许再对存储模式进行切换。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { window } from '@kit.ArkUI';\n\nlet dataPreferences: preferences.Preferences | null = null;\n\nclass EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    let options: preferences.Options = { name: 'myStore', storageType: preferences.StorageType.GSKV };\n    dataPreferences = preferences.getPreferencesSync(context, options);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "写入数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用putSync()方法将数据写入Preferences实例中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对默认存储模式（XML存储模式），在写入数据后，如有需要，可使用flush()方法将Preferences实例的数据存储到持久化文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对GSKV存储模式，在写入数据后，数据会实时持久化到文件中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(666911)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当对应的键已经存在时，putSync()方法会覆盖其值。可以使用hasSync()方法检查是否存在对应键值对。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (dataPreferences.hasSync('startup')) {\n  Logger.info('The key startup is contained.');\n} else {\n  Logger.info('The key startup does not contain.');\n  // 此处以此键值对不存在时写入数据为例\n  dataPreferences.putSync('startup', 'auto');\n  // 在XML模式下，当字符串包含非UTF-8格式的字符时，需要将字符串转为Uint8Array类型再存储，长度均不超过16 * 1024 * 1024个字节。\n  let uInt8Array1 = new util.TextEncoder().encodeInto('~！@#￥%……&*（）——+？');\n  dataPreferences.putSync('uInt8', uInt8Array1);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "读取数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用getSync()方法获取数据，即指定键对应的值。如果值为null或非默认值类型，则返回默认数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let val = dataPreferences.getSync('startup', 'default');\nLogger.info('The startup value is ' + val);\nlet uInt8Array2 : preferences.ValueType = dataPreferences.getSync('uInt8', new Uint8Array(0));\n// 将获取到的Uint8Array转换为字符串\nlet textDecoder = util.TextDecoder.create('utf-8');\nval = textDecoder.decodeToString(uInt8Array2 as Uint8Array);\nLogger.info('The uInt8 value is ' + val);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "删除数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用deleteSync()方法删除指定键值对，示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "dataPreferences.deleteSync('startup');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数据持久化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用存入数据到Preferences实例后，可以使用flush()方法实现数据持久化。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "dataPreferences.flush((err: BusinessError) => {\n  if (err) {\n    Logger.error(`Failed to flush. Code:${err.code}, message:${err.message}`);\n    return;\n  }\n  Logger.info('Succeeded in flushing.');\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅数据变更。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用订阅数据变更需要指定observer作为回调方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对首选项的默认存储模式（XML存储模式），订阅的Key值发生变更后，当执行flush()方法时，触发observer回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let observer = (key: string) => {\n  Logger.info('The key ' + key + ' changed.');\n}\ndataPreferences.on('change', observer);\n// 数据产生变更，由'auto'变为'manual'\ndataPreferences.put('startup', 'manual', (err: BusinessError) => {\n  if (err) {\n    Logger.error(`Failed to put the value of 'startup'. Code:${err.code},message:${err.message}`);\n    return;\n  }\n  Logger.info('Succeeded in putting the value of startup.');\n  if (dataPreferences !== null) {\n    dataPreferences.flush((err: BusinessError) => {\n      if (err) {\n        Logger.error(`Failed to flush. Code:${err.code}, message:${err.message}`);\n        return;\n      }\n      Logger.info('Succeeded in flushing.');\n    })\n  }\n})\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对GSKV存储模式，订阅的Key值发生变更后（无需调用flush），observer被触发回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let observer = (key: string) => {\n  Logger.info('The key ' + key + ' changed.');\n}\ndataPreferences.on('change', observer);\n// 数据产生变更，由'auto'变为'manual'\ndataPreferences.put('startup', 'manual', (err: BusinessError) => {\n  if (err) {\n    Logger.error(`Failed to put the value of 'startup'. Code:${err.code},message:${err.message}`);\n    return;\n  }\n  Logger.info('Succeeded in putting the value of startup.');\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "删除指定文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用deletePreferences()方法从内存中移除指定文件对应的Preferences实例及其数据。若该Preference存在对应的持久化文件，则一并删除，包括指定文件及其备份文件、损坏文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(236654)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "调用该接口后，应用不允许再使用该Preferences实例进行数据操作，否则会出现数据一致性问题。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "成功删除后，数据及文件将不可恢复。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在GSKV模式中，该接口不支持与其他接口并发调用（包括多进程），否则会出现不可预期行为。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "context的定义如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const context = EntryAbility.getContext();\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let options: preferences.Options = { name: 'myStore' };\npreferences.deletePreferences(context, options, (err: BusinessError) => {\n  if (err) {\n    Logger.error(`Failed to delete preferences. Code:${err.code}, message:${err.message}`);\n    return;\n  }\n  Logger.info('Succeeded in deleting preferences.');\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/preferences",
          children: "首选项"
        })
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
775975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437567-82e2c0804321d11bc209b373bf787248.jpg");

},
666911(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
236654(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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