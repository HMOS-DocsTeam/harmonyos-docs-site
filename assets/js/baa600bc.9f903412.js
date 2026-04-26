"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["553313"], {
905679(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_insight_intent_2_ide_insight_intent_2_md_baa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-insight-intent-2-ide-insight-intent-2-md-baa.json
var site_docs_ide_insight_intent_2_ide_insight_intent_2_md_baa_namespaceObject = JSON.parse('{"id":"ide-insight-intent2/ide-insight-intent2","title":"意图装饰器生成和小艺智能体创建","description":"通过装饰类或方法可以将应用的功能定义为\\"意图\\"，然后将应用功能以\\"意图\\"形式集成至系统入口。用户通过系统入口（如语音助手、智能推荐卡片）触发意图执行，即可便捷使用应用提供的功能。","source":"@site/docs/ide-insight-intent2/ide-insight-intent2.md","sourceDirName":"ide-insight-intent2","slug":"/ide-insight-intent2/","permalink":"/harmonyos-docs-site/ide-insight-intent2/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"意图装饰器生成和小艺智能体创建","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-intent2","kit":"devtools/ai-coding","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"应用UI生成","permalink":"/harmonyos-docs-site/ide-ui-generator/"},"next":{"title":"模型上下文协议（MCP）配置","permalink":"/harmonyos-docs-site/ide-agent/ide-agent-mcp/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-insight-intent2/ide-insight-intent2.md


const frontMatter = {
	title: '意图装饰器生成和小艺智能体创建',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-intent2',
	kit: 'devtools/ai-coding',
	last_updated: '2026-04-24'
};
const contentTitle = '意图装饰器生成和小艺智能体创建';

const assets = {

};



const toc = [{
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "意图装饰器分类",
  "id": "意图装饰器分类",
  "level": 2
}, {
  "value": "@InsightIntentLink装饰器",
  "id": "insightintentlink装饰器",
  "level": 3
}, {
  "value": "@InsightIntentPage装饰器",
  "id": "insightintentpage装饰器",
  "level": 3
}, {
  "value": "@InsightIntentFunction装饰器",
  "id": "insightintentfunction装饰器",
  "level": 3
}, {
  "value": "@InsightIntentForm装饰器",
  "id": "insightintentform装饰器",
  "level": 3
}, {
  "value": "@InsightIntentEntry装饰器",
  "id": "insightintententry装饰器",
  "level": 3
}, {
  "value": "生成意图插件和创建小艺智能体",
  "id": "生成意图插件和创建小艺智能体",
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
        id: "意图装饰器生成和小艺智能体创建",
        children: "意图装饰器生成和小艺智能体创建"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过装饰类或方法可以将应用的功能定义为\"意图\"，然后将应用功能以\"意图\"形式集成至系统入口。用户通过系统入口（如语音助手、智能推荐卡片）触发意图执行，即可便捷使用应用提供的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.0 Beta2开始，CodeGenie新增通过装饰器开发意图的功能，支持生成五类意图装饰器。同时，DevEco Studio新增Application Agent入口，通过该入口可完成意图插件注册、智能体创建等，提升开发效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用API 20及以上版本。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["仅支持使用团队账号登录时，添加意图插件。个人加入目标团队方式具体可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-manageaccount-0000002306610129#section151241455193313",
          children: "添加成员"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用在AGC已注册，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506#section1772711713288",
          children: "创建HarmonyOS应用"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生成意图装饰器时使用HarmonyOS Ask智能体。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "意图装饰器分类",
      children: "意图装饰器分类"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CodeGenie提供了几类意图装饰器，开发者可根据业务场景进行选择，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator",
        children: "意图装饰器定义"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@InsightIntentLink装饰器：在class头部或内部位置唤起意图装饰器，在class上方插入生成的代码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@InsightIntentPage装饰器：在@Component头部/struct结构体内部/选中整个结构体区域唤起意图装饰器，在@Entry上方插入生成的代码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@InsightIntentFunction装饰器：在类中静态方法区域唤起意图装饰器，在class上方插入@InsightIntentFunction，在class内部插入@InsightIntentFunctionMethod生成内容。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@InsightIntentForm装饰器：在继承FormExtensionAbility的class头部或内部唤起意图装饰器，在class上方插入生成的代码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@InsightIntentEntry装饰器：在直接继承InsightIntentEntryExecutor的class头部或内部唤起意图装饰器，在class上方插入生成的代码。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "insightintentlink装饰器",
      children: "@InsightIntentLink装饰器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开module.json5文件，配置", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "abilities > skills > uris"
            })
          }), "字段。uri格式要求请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config",
            children: "应用链接说明"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(469731)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1920",
            height: "1032"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在class头部或内部位置，右键选择 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CodeGenie > Insight Intent > Link Insight Intent"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(605517)/* ["default"] */.A) + "",
            width: "1382",
            height: "981"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "意图装饰器自动添加至CodeGenie对话框中，可选择输入或不输入提示词，CodeGenie根据代码上下文分析输出结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(778365)/* ["default"] */.A) + "",
            width: "1382",
            height: "981"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["生成结果后，点击对话框中生成代码块右上方的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "插入"
            })
          }), "按钮，在class上方插入生成的代码。开发者可基于结果微调，实现意图调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(939658)/* ["default"] */.A) + "",
            width: "1317",
            height: "935"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "insightintentpage装饰器",
      children: "@InsightIntentPage装饰器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于组件导航（Navigation）的子页面使用，@Component和struct需成对出现。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在@Component头部\\struct结构体内部\\选中整个结构体区域，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "右键 > CodeGenie > Insight Intent > Page Insight Intent"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(806052)/* ["default"] */.A) + "",
            width: "1384",
            height: "983"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "意图装饰器自动添加至CodeGenie对话框中，可选择输入或不输入提示词，CodeGenie根据代码上下文分析输出结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(965014)/* ["default"] */.A) + "",
            width: "1379",
            height: "981"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["生成结果后，点击对话框中生成代码块右上方的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "插入"
            })
          }), "按钮，在@Entry上方插入生成的代码。开发者可基于结果微调，实现意图调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(70982)/* ["default"] */.A) + "",
            width: "1315",
            height: "933"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "insightintentfunction装饰器",
      children: "@InsightIntentFunction装饰器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在类中静态方法区域，右键选择 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CodeGenie > Insight Intent > Function Insight Intent"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(93688)/* ["default"] */.A) + "",
            width: "1070",
            height: "759"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "意图装饰器自动添加至CodeGenie对话框中，可选择输入或不输入提示词，CodeGenie根据代码上下文分析输出结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(481702)/* ["default"] */.A) + "",
            width: "1381",
            height: "982"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["生成结果后，点击对话框中生成代码块右上方的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "插入"
            })
          }), "按钮，在class上方插入@InsightIntentFunction，在class内部插入@InsightIntentFunctionMethod生成内容。开发者可基于结果微调，实现意图调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(422614)/* ["default"] */.A) + "",
            width: "1379",
            height: "981"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "insightintentform装饰器",
      children: "@InsightIntentForm装饰器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["基于FormExtensionAbility使用，在继承FormExtensionAbility的class头部或内部，右键选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CodeGenie > Insight Intent > Form Insight Intent"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(353077)/* ["default"] */.A) + "",
            width: "1068",
            height: "760"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "意图装饰器自动添加至CodeGenie对话框中，可选择输入或不输入提示词，CodeGenie根据代码上下文分析输出结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(16005)/* ["default"] */.A) + "",
            width: "1380",
            height: "981"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["生成结果后，点击对话框中生成代码块右上方的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "插入"
            })
          }), "按钮，在class上方插入生成的代码，开发者可基于结果微调，实现意图调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(920398)/* ["default"] */.A) + "",
            width: "1380",
            height: "981"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "insightintententry装饰器",
      children: "@InsightIntentEntry装饰器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["基于InsightIntentEntryExecutor使用，在直接继承InsightIntentEntryExecutor的class头部或内部，右键选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CodeGenie > Insight Intent > Entry Insight Intent"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(966291)/* ["default"] */.A) + "",
            width: "1069",
            height: "760"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "意图装饰器自动添加至CodeGenie对话框中，可选择输入或不输入提示词，CodeGenie根据代码上下文分析输出结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(222319)/* ["default"] */.A) + "",
            width: "1383",
            height: "983"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["生成结果后，点击对话框中生成代码块右上方的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "插入"
            })
          }), "按钮，在class上方插入生成的代码，开发者可基于结果微调，实现意图调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(331123)/* ["default"] */.A) + "",
            width: "1382",
            height: "982"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生成意图插件和创建小艺智能体",
      children: "生成意图插件和创建小艺智能体"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击DevEco Studio右上角", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(34409)/* ["default"] */.A) + "",
            width: "18",
            height: "19"
          }), "图标登录个人账号，再切换至个人所在的团队账号。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(323768)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["个人账号需要完成实名认证，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/start/rna-0000001062530373",
              children: "实名认证"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如下企业开发者账号为某团队账号名称，仅供参考。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(361341)/* ["default"] */.A) + "",
            width: "362",
            height: "108"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在意图注解代码块内部任意位置，右键选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CodeGenie > Add Intent Plugin"
            })
          }), "，生成的意图注解插件将注册到小艺智能平台中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(884817)/* ["default"] */.A) + "",
            width: "1384",
            height: "982"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在DevEco Studio菜单栏点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "View > Tool Windows > Application Agent"
            })
          }), " ，打开内嵌的小艺智能平台新建智能体和添加插件。小艺智能平台更多具体操作可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/service/developer-guide-0000002469667881",
            children: "鸿蒙智能体"
          }), "。"]
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
16005(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833067-aef22ec71e6d1cfafc1014feca2dbc2c.png");

},
353077(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833069-383e7bf3ba124d4f527bed7f920184bc.png");

},
361341(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
884817(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833073-99e09be56f27ab15d419bfd2a5a885fe.png");

},
422614(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833083-36d4d7fb0877dad03ec35e2b0ac9ae48.png");

},
806052(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753099-a00e47cf925319634e8515828495a3f1.png");

},
323768(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
939658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913156-43bfae64e480bea90fc3dd0a2e24bbd7.png");

},
93688(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753166-eadf4af9a2b7e6d3a787044d2fbbff70.png");

},
34409(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAIAAAAS8MqlAAACCElEQVR4AVyS6XaiQBCFu4lJCIiguOvM+z/TZM5MNgaJmogL4gbzNWX4Ec53ilvVt+iFttbrdZoaEMJbFD/+fvr1+DeKZlL5FvFbSimtDap6onixWKZaW5Z1M19+xrMl5bJUAhrwmzaUsN7sDofjz+mg3wt63WA6Ge7zfL3OZBS3CKJpky+VZZllh6brNBo3DGC6bdy4jpPtczR82czMFgklUEqr6qECyKrI+zvUr7MxQuI499tddj5fSOF0Pu+yzHFsNGAgCqZNFLHlubZ99xol88UKXt8S27a9piOTY6ATSC1eQIkExsNu2PGLomDOXtgeDUKGgCFizXW2qlpK1W+5g35nOAg9z+GLNXgEbKaNBKWU3u/zZP7x/BL/eYrg+WVGykmq6qG/eptwPUmlyuR9GSfLslBB4A37Ifh+s7iU8WwRz5ZFYdZCp2D2RjsNh+NpOu6zvBaH4NgcYOA3R8Pwx2RwPJ7iZIGtxiwyTbf7/WEy6t3d3TIg3yOigeJ41D3kx1W6ZTuCaftMN4HvcTlqK24QB7HRaLDyVbrBIFgsgLPmj+ET8IkQh2jPc7Hl+ZFRMG1aa04siufwbzYHRA0pJO8f2M6X6wWyXPehG/oP9r19b0CAaImkQjcMXMfW1c1lb7rlNTvtVtgxINpBiyhQREiFjWhdNSl1/QGygToyKkgFLaKO/wEAAP//iSSbSQAAAAZJREFUAwAO2DY2k4F8OQAAAABJRU5ErkJggg==");

},
469731(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913144-bbdac0211f428fff3cc964432ae2ed1c.png");

},
222319(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833075-31affce8d88b2d80033708eeb5c7648a.png");

},
70982(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753160-39db2a9ec7ea7c7eb1769207ce1d3f12.png");

},
778365(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753095-bc3143c2cb00f19031be8bb9edc8c54b.png");

},
965014(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833081-d0ae5392a0a418c0fc6e1d0719548949.png");

},
966291(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913148-2481d6fbc44812f6d31f47c65ef5689e.png");

},
605517(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753097-e5480adde25a0cee16f4e7825a6fe507.png");

},
481702(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833085-5458e2856aa4744cfda9dd1f60f1f355.png");

},
331123(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753154-9e26cc069844d59dff2d4b22b05e7c8a.png");

},
920398(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753107-e913c9935f0041288de89e12b65e031c.png");

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