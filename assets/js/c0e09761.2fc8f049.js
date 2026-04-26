"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["771203"], {
609446(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_agc_harmonyos_clouddevguide_agc_harmonyos_clouddev_devprocess_agc_harmonyos_clouddev_sync_agc_harmonyos_clouddev_sync_md_c0e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-agc-harmonyos-clouddevguide-agc-harmonyos-clouddev-devprocess-agc-harmonyos-clouddev-sync-agc-harmonyos-clouddev-sync-md-c0e.json
var site_docs_ide_project_ide_module_management_agc_harmonyos_clouddevguide_agc_harmonyos_clouddev_devprocess_agc_harmonyos_clouddev_sync_agc_harmonyos_clouddev_sync_md_c0e_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-sync/agc-harmonyos-clouddev-sync","title":"（可选）同步云端代码至DevEco Studio工程","description":"DevEco Studio还支持您将AGC云端当前项目下的代码同步至本地工程，包括之前从本地部署到AGC云端的代码、以及在AGC云端编写的代码，以保证云端和本地的版本一致性，方便您的日常开发。","source":"@site/docs/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-sync/agc-harmonyos-clouddev-sync.md","sourceDirName":"ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-sync","slug":"/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-sync/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-sync/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"（可选）同步云端代码至DevEco Studio工程","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-clouddev-sync","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"部署云侧工程","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-deploy/"},"next":{"title":"在端侧调用云函数","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-appdevelop/agc-harmonyos-clouddev-invokecloudcode/agc-harmonyos-clouddev-invokecloudfunc/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-sync/agc-harmonyos-clouddev-sync.md


const frontMatter = {
	title: '（可选）同步云端代码至DevEco Studio工程',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-clouddev-sync',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '（可选）同步云端代码至DevEco Studio工程';

const assets = {

};



const toc = [{
  "value": "同步云函数/云对象",
  "id": "同步云函数云对象",
  "level": 2
}, {
  "value": "同步单个云函数/云对象",
  "id": "同步单个云函数云对象",
  "level": 3
}, {
  "value": "批量同步云函数/云对象",
  "id": "批量同步云函数云对象",
  "level": 3
}, {
  "value": "同步云数据库",
  "id": "同步云数据库",
  "level": 2
}, {
  "value": "同步单个对象类型",
  "id": "同步单个对象类型",
  "level": 3
}, {
  "value": "批量同步对象类型",
  "id": "批量同步对象类型",
  "level": 3
}, {
  "value": "一键同步云侧代码",
  "id": "一键同步云侧代码",
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
        id: "可选同步云端代码至deveco-studio工程",
        children: "（可选）同步云端代码至DevEco Studio工程"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio还支持您将AGC云端当前项目下的代码同步至本地工程，包括之前从本地部署到AGC云端的代码、以及在AGC云端编写的代码，以保证云端和本地的版本一致性，方便您的日常开发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["云端代码同步目前支持以下模式：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section588213529814",
        children: "仅同步云函数/云对象"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section474014335350",
        children: "仅同步云数据库"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section1198316575339",
        children: "一键同步云侧代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "同步云函数云对象",
      children: "同步云函数/云对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(662807)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于使用DevEco Studio 4.1 Canary 2之前的版本部署的函数，同步下来的是JavaScript代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "同步单个云函数云对象",
      children: "同步单个云函数/云对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "云函数/云对象部署到AGC云端后，如在云端又进行了新改动，您可再将云端的云函数/云对象同步到本地工程。云函数/云对象的同步方式一致，下文以云对象为例进行说明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["右击云对象目录，选择“Sync '", (0,jsx_runtime.jsx)(_components.strong, {
            children: "云对象名"
          }), "'”。下文以云对象“id-generator”为例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(384342)/* ["default"] */.A) + "",
            width: "610",
            height: "404"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在确认弹框中点击“Overwrite”，AGC云端的云对象“id-generator”将覆盖更新本地云对象“id-generator”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(49405)/* ["default"] */.A) + "",
            width: "361",
            height: "131"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "等待同步完成，“cloudfunctions”目录下将生成从云端同步下来的云对象“id-generator”，同时将本地原云对象“id-generator”备份在同路径下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(229714)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "后续如执行部署或调试，DevEco Studio会自动跳过备份数据。但出于精简包的考虑，建议您在对比代码差异后，及时将无用的备份数据删除。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(470562)/* ["default"] */.A) + "",
            width: "949",
            height: "668"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "批量同步云函数云对象",
      children: "批量同步云函数/云对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "批量同步云函数/云对象即将AGC云端当前项目下的所有云函数/云对象同步至本地工程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "右击“cloudfunctions”目录，选择“Sync Cloud Functions”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(516263)/* ["default"] */.A) + "",
            width: "527",
            height: "427"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "弹窗提示您本地工程下存在同名云函数/云对象。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "选择“Skip”，同步时将跳过本地同名云函数/云对象。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "选择“Overwrite”，AGC云端的云函数/云对象将覆盖更新本地同名云函数/云对象。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(472229)/* ["default"] */.A) + "",
            width: "714",
            height: "413"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如选择“Skip”，等待同步完成后，“cloudfunctions”目录下将生成从云端同步下来的本项目下所有云函数/云对象，本地已存在的不同步。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下图，“cloudfunctions”目录下新增了云端同步下来的“test-cloud-function”，上图中本地已存在的云函数/云对象未被覆盖更新。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(154569)/* ["default"] */.A) + "",
            width: "778",
            height: "672"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如选择“Overwrite”，等待同步完成后，“cloudfunctions”目录下将生成从云端同步下来的本项目下所有云函数/云对象；本地同名云函数/云对象也被覆盖更新，同时更新前的原云函数/云对象会备份在同路径下。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如下图，“cloudfunctions”目录下新增了云端同步下来的“test-cloud-function”，本地已存在的几个云函数/云对象也被覆盖更新，并且均生成了备份文件“xxxx-", (0,jsx_runtime.jsx)(_components.strong, {
            children: "备份时间"
          }), ".backup”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(212027)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "后续如执行部署或调试，DevEco Studio会自动跳过备份数据。但出于精简包的考虑，建议您在对比代码差异后，及时将无用的备份数据删除。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(139528)/* ["default"] */.A) + "",
            width: "778",
            height: "668"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "同步云数据库",
      children: "同步云数据库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(666565)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前仅支持同步对象类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "同步单个对象类型",
      children: "同步单个对象类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对象类型部署到AGC云端后，如又发生了新改动，您可再将云端的对象类型同步到本地。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "右击对象类型JSON文件（以“objecttype1.json”为例），选择“Sync 'objecttype1.json'”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(783963)/* ["default"] */.A) + "",
            width: "879",
            height: "812"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在确认弹框中点击“Overwrite”，AGC云端的对象类型“objecttype1.json”将覆盖更新本地对象类型“objecttype1.json”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(890146)/* ["default"] */.A) + "",
            width: "356",
            height: "137"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "等待同步完成，“objecttype”目录下将生成从云端同步下来的对象类型“objecttype1.json”。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果云端和本地的同名对象类型内容存在差异，则还会将本地原对象类型备份在同路径下。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果云端和本地的同名对象类型内容完全一致，则不生成备份。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(306488)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "后续如执行部署，DevEco Studio会自动跳过备份数据。但出于精简包的考虑，建议您在对比代码差异后，及时将无用的备份数据删除。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(628598)/* ["default"] */.A) + "",
            width: "918",
            height: "782"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "批量同步对象类型",
      children: "批量同步对象类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可以将AGC云端当前项目下所有的对象类型一键同步至本地。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "右击“objecttype”目录，选择“Sync Object Type”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(485040)/* ["default"] */.A) + "",
            width: "916",
            height: "783"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "弹窗提示您本地工程下已存在同名对象类型，如下图“Post.json”与“objecttype1.json”。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "选择“Skip”，同步时将跳过本地同名对象类型。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "选择“Overwrite”，AGC云端的对象类型将覆盖更新本地同名对象类型。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(775139)/* ["default"] */.A) + "",
            width: "714",
            height: "418"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如选择“Skip”，等待同步完成后，“objecttype”目录下将生成从云端同步下来的本项目下所有对象类型，本地已存在的不同步。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下图，“objecttype”目录下新增了云端同步下来的“test_object.json”，本地已存在的“Post.json”与“objecttype1.json”未被覆盖更新。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(111992)/* ["default"] */.A) + "",
            width: "876",
            height: "810"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如选择“Overwrite”，等待同步完成后，“objecttype”目录下将生成从云端同步下来的所有对象类型，本地已存在的对象类型也被覆盖更新。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果云端和本地的同名对象类型内容存在差异，则还会将本地原对象类型备份在同路径下。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果云端和本地的同名对象类型内容完全一致，则不生成备份。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如下图，“objecttype”目录下生成了“test_object.json”、“Post.json”与“objecttype1.json”三个对象类型文件，其中：“test_object.json”为从云端新同步下来的对象类型；“objecttype1.json”本地已存在且与云端内容一致，不生成备份；“Post.json”本地已存在但与云端内容存在差异，因此被覆盖更新，同时原“Post.json”备份为“Post.json-", (0,jsx_runtime.jsx)(_components.strong, {
            children: "备份时间"
          }), ".backup”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(892907)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "后续如执行部署，DevEco Studio会自动跳过备份数据。但出于精简包的考虑，建议您在对比代码差异后，及时将无用的备份数据删除。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(565406)/* ["default"] */.A) + "",
            width: "878",
            height: "813"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "一键同步云侧代码",
      children: "一键同步云侧代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(133353)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于使用DevEco Studio 4.1 Canary 2之前的版本部署的函数，同步下来的是JavaScript代码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "右击云开发工程（“CloudProgram”），选择“Sync Cloud Program”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(667653)/* ["default"] */.A) + "",
            width: "566",
            height: "325"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "弹窗提示您本地工程下已存在同名对象类型/云函数/云对象。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "选择“Skip”，同步时将跳过本地同名对象类型/云函数/云对象。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "选择“Overwrite”，AGC云端的对象类型/云函数/云对象将覆盖更新本地同名对象类型/云函数/云对象。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(432425)/* ["default"] */.A) + "",
            width: "709",
            height: "411"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如选择“Skip”，等待同步完成后，“objecttype”目录下将生成从云端同步下来的本项目下所有对象类型，“cloudfunctions”目录下将生成从云端同步下来的本项目下所有云函数/云对象，本地已存在的云函数/云对象/对象类型均不同步。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下图："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "“objecttype”目录下新增了云端同步下来的“test_object.json”，本地已存在的“Post.json”与“objecttype1.json”未被覆盖更新。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "“cloudfunctions”目录下生成了从云端同步下来的“test-cloud-function”，本地已存在的“id-generator”、“my-cloud-function”与“my-cloud-object”未被覆盖更新。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(379868)/* ["default"] */.A) + "",
            width: "761",
            height: "614"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如选择“Overwrite”，等待同步完成后，“objecttype”目录下将生成从云端同步下来的本项目下所有对象类型，“cloudfunctions”目录下将生成从云端同步下来的本项目下所有云函数/云对象，本地已存在的云函数/云对象/对象类型也被覆盖更新。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果云端和本地的同名对象类型内容存在差异，则还会将本地原对象类型备份在同路径下。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果云端和本地的同名对象类型内容完全一致，则不生成备份。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "无论云端和本地的同名云函数/云对象代码是否一致，均会将本地原云函数/云对象备份在同路径下。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下图："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["“objecttype”目录下生成了“test _object.json”、“Post.json”与“objecttype1.json”三个对象类型文件，其中：“test _object.json”为从云端新同步下来的对象类型；“Post.json”本地已存在且与云端内容一致，不生成备份；“objecttype1.json”本地已存在但与云端内容存在差异，因此被覆盖更新，同时原“objecttype1.json”备份为“objecttype1.json-", (0,jsx_runtime.jsx)(_components.strong, {
                children: "备份时间"
              }), ".backup”。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["“cloudfunctions”目录下生成了从云端同步下来的“test-cloud-function”，本地已存在的“id-generator”、“my-cloud-function”与“my-cloud-object”也被覆盖更新，并且均生成了备份文件“xxxx-", (0,jsx_runtime.jsx)(_components.strong, {
                children: "备份时间"
              }), ".backup”。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(939872)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "后续如执行部署或调试，DevEco Studio会自动跳过备份数据。但出于精简包的考虑，建议您在对比代码差异后，及时将无用的备份数据删除。"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(530991)/* ["default"] */.A) + "",
            width: "886",
            height: "686"
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
432425(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214858861-f48aadba14a0c73aacee2fa2857a7043.png");

},
662807(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
306488(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
565406(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214704489-dcfc1df9bdc16b3243f93bec0db30eeb.png");

},
472229(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214704441-54ac654b2a3cdd8a97b516690add80ef.png");

},
666565(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
530991(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179338516-f34001b767a2a475b6949d440065bb68.png");

},
139528(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179338508-4218b134ad78d0c4c2ddac94390230ad.png");

},
939872(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
111992(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179498196-62a670017c64aaaf49bb850b9fb546e2.png");

},
49405(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
470562(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179498228-56f29818da986d58241d75a0823a7085.png");

},
890146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
384342(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214704461-84270b87afe0e492df44f1b8b6cff169.png");

},
516263(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179338512-9121b7f743fc9fdc0bc44b2fa05fa439.png");

},
485040(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179338532-6d9cfd5d82a1e137480c55597a43f9ea.png");

},
154569(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214704485-61bcfdbaa46418ce5fa61bb6186fd88e.png");

},
775139(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179498208-2b1c0f53eeae85a0830b11891b31d99e.png");

},
667653(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214858849-0c9e27cd2d52edaea295dfc31bef6969.png");

},
628598(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002214704445-c47e3d314042b371c7f4e25df07374af.png");

},
229714(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
379868(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179498236-2da2d59228e05b70e2a732f49b97bcb3.png");

},
783963(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002179498216-e1cdfd34a404fb0195c372289562bc50.png");

},
212027(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
133353(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
892907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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