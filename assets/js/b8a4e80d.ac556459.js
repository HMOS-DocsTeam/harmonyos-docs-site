"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["409890"], {
309949(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_hvigor_configuration_ide_customized_multi_targets_and_products_ide_customized_multi_targets_and_products_guides_ide_customized_multi_targets_and_products_guides_md_b8a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-hvigor-configuration-ide-customized-multi-targets-and-products-ide-customized-multi-targets-and-products-guides-ide-customized-multi-targets-and-products-guides-md-b8a.json
var site_docs_ide_hvigor_configuration_ide_customized_multi_targets_and_products_ide_customized_multi_targets_and_products_guides_ide_customized_multi_targets_and_products_guides_md_b8a_namespaceObject = JSON.parse('{"id":"ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-guides/ide-customized-multi-targets-and-products-guides","title":"能力说明","description":"通常情况下，应用厂商会根据不同的部署环境，不同的目标人群，不同的运行环境等，将同一个应用定制为不同的版本，如国内版、国际版、普通版、VIP版、免费版、付费版等。针对以上场景，DevEco Studio支持通过少量的代码配置以实例化不同的差异版本，在编译构建过程中实现一个应用构建出不同的目标产物版本，从而实现源代码、资源文件等的高效复用。","source":"@site/docs/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-guides/ide-customized-multi-targets-and-products-guides.md","sourceDirName":"ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-guides","slug":"/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-guides/","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-guides/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"能力说明","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-customized-multi-targets-and-products-guides","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"添加依赖项","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-dependencies/"},"next":{"title":"实践说明","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-sample/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-hvigor-configuration/ide-customized-multi-targets-and-products/ide-customized-multi-targets-and-products-guides/ide-customized-multi-targets-and-products-guides.md


const frontMatter = {
	title: '能力说明',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-customized-multi-targets-and-products-guides',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '能力说明';

const assets = {

};



const toc = [{
  "value": "定制HAP多目标构建产物",
  "id": "定制hap多目标构建产物",
  "level": 2
}, {
  "value": "定义产物的HAP包名",
  "id": "定义产物的hap包名",
  "level": 3
}, {
  "value": "定义产物的deviceType",
  "id": "定义产物的devicetype",
  "level": 3
}, {
  "value": "定义产物的distributionFilter",
  "id": "定义产物的distributionfilter",
  "level": 3
}, {
  "value": "定义产物preloads的分包",
  "id": "定义产物preloads的分包",
  "level": 3
}, {
  "value": "定义产物的source源码集-pages",
  "id": "定义产物的source源码集-pages",
  "level": 3
}, {
  "value": "定义产物的source源码集-sourceRoots",
  "id": "定义产物的source源码集-sourceroots",
  "level": 3
}, {
  "value": "定义产物的资源",
  "id": "定义产物的资源",
  "level": 3
}, {
  "value": "定义产物的icon、label、launchType",
  "id": "定义产物的iconlabellaunchtype",
  "level": 3
}, {
  "value": "定义C++工程依赖的.so文件",
  "id": "定义c工程依赖的so文件",
  "level": 3
}, {
  "value": "定制HAR多目标构建产物",
  "id": "定制har多目标构建产物",
  "level": 2
}, {
  "value": "定义产物的deviceType",
  "id": "定义产物的devicetype-1",
  "level": 3
}, {
  "value": "定义C++工程依赖的.so文件",
  "id": "定义c工程依赖的so文件-1",
  "level": 3
}, {
  "value": "定义产物的资源",
  "id": "定义产物的资源-1",
  "level": 3
}, {
  "value": "定义产物的source源码集-sourceRoots",
  "id": "定义产物的source源码集-sourceroots-1",
  "level": 3
}, {
  "value": "配置APP多目标构建产物",
  "id": "配置app多目标构建产物",
  "level": 2
}, {
  "value": "定义产物的APP包名和供应商名称",
  "id": "定义产物的app包名和供应商名称",
  "level": 3
}, {
  "value": "定义product的bundleName",
  "id": "定义product的bundlename",
  "level": 3
}, {
  "value": "定义product的bundleType",
  "id": "定义product的bundletype",
  "level": 3
}, {
  "value": "定义product的签名配置信息",
  "id": "定义product的签名配置信息",
  "level": 3
}, {
  "value": "定义product的icon和label",
  "id": "定义product的icon和label",
  "level": 3
}, {
  "value": "定义product中包含的target",
  "id": "定义product中包含的target",
  "level": 3
}, {
  "value": "构建定义的目标产物",
  "id": "构建定义的目标产物",
  "level": 2
}, {
  "value": "调试和运行指定的Target",
  "id": "调试和运行指定的target",
  "level": 2
}, {
  "value": "多产物构建target",
  "id": "多产物构建target",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "能力说明",
        children: "能力说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通常情况下，应用厂商会根据不同的部署环境，不同的目标人群，不同的运行环境等，将同一个应用定制为不同的版本，如国内版、国际版、普通版、VIP版、免费版、付费版等。针对以上场景，DevEco Studio支持通过少量的代码配置以实例化不同的差异版本，在编译构建过程中实现一个应用构建出不同的目标产物版本，从而实现源代码、资源文件等的高效复用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在了解HarmonyOS应用的多目标构建产物如何定制前，先了解target和product的概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "工程内的每一个Entry/Feature模块，对应的构建产物为HAP，HAP是应用/元服务可以独立运行在设备中的形态。由于在不同的业务场景中，同一个模块可能需要定制不同的功能或资源，因此引入target的概念。一个模块可以定义多个target，每个target对应一个定制的HAP，通过配置可以实现一个模块构建出不同的HAP。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一个HarmonyOS工程的构建产物为APP包，APP包用于应用/元服务发布上架应用市场。由于不同的业务场景，需要定制不同的应用包，因此引入product概念。一个工程可以定义多个product，每个product对应一个定制化应用包，通过配置可以实现一个工程构建出多个不同的应用包。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多关于多目标产物的实践请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-target",
        children: "多目标产物构建开发实践"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "定制hap多目标构建产物",
      children: "定制HAP多目标构建产物"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每一个Entry/Feature模块均支持定制不同的target，通过在模块中的build-profile.json5文件中实现差异化定制，当前支持HAP包名、设备类型（deviceType）、源码集（source）、资源（resource）、buildOption配置项（如C++依赖的.so、混淆配置、abi类型、cppFlags等）、分发规则（distributionFilter）的定制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "定义目标产物target"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每一个target对应一个定制的HAP，因此，在定制HAP多目标构建产物前，应提前规划好需要定制的target名称。例如，以ArkTS Stage模型为例，定义一个免费版和付费版，模块级build-profile.json5文件示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ \n  \"apiType\": 'stageMode', \n  \"buildOption\": {   \n  }, \n  \"targets\": [  //定义不同的target \n    { \n      \"name\": \"default\",  //默认target名称default \n    }, \n    { \n      \"name\": \"free\",  //免费版target名称 \n    }, \n    { \n      \"name\": \"pay\",  //付费版target名称 \n    } \n  ] \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照上述target的定义，在编译构建时，会同时打包生成default、free和pay三个不同的HAP。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义产物的hap包名",
      children: "定义产物的HAP包名"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每一个target均可以指定产物命名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ \n  \"apiType\": \"stageMode\", \n  \"buildOption\": { \n  }, \n  \"targets\": [ \n    { \n      \"name\": \"default\", \n      \"output\": { \n        \"artifactName\": \"customizedTargetOutputName-1.0.0\"  //产物名称为customizedTargetOutputName-1.0.0\n      } \n    }, \n    { \n      \"name\": \"free\", \n      \"output\": { \n        \"artifactName\": \"customizedTargetOutputName1-1.0.0\"  //产物名称为customizedTargetOutputName1-1.0.0\n      } \n    }, \n    { \n      \"name\": \"pay\", \n      \"output\": { \n        \"artifactName\": \"customizedTargetOutputName2-1.0.0\"  //产物名称为customizedTargetOutputName2-1.0.0\n      } \n    } \n  ] \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果已配置签名，target产物对应的HAP包名为开发者定制的名称；如果未配置签名，target产物对应的HAP包名为开发者定制的名称+unsigned。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义产物的devicetype",
      children: "定义产物的deviceType"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["每一个target均可以指定支持的设备类型deviceType，也可以不定义。如果不定义，则该target默认支持module.json5/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa",
        children: "config.json"
      }), "中定义的设备类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时，在定义每个target的deviceType时，支持的设备类型必须在module.json5或config.json中已经定义。例如，在上述定义的3个target中，分别定义default默认支持所有设备类型，free和pay版本只支持phone设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ \n  \"apiType\": 'stageMode', \n  \"buildOption\": { \n  }, \n  \"targets\": [ \n    { \n      \"name\": \"default\",  //未定义deviceType，默认支持config.json或module.json5中定义的设备类型 \n\n    }, \n    { \n      \"name\": \"free\", \n      \"config\": { \n        \"deviceType\": [  //定义free支持的设备类型为phone \n          \"phone\" \n        ] \n      } \n    }, \n    { \n      \"name\": \"pay\", \n      \"config\": { \n        \"deviceType\": [  //定义pay支持的设备类型为phone \n          \"phone\" \n        ] \n      } \n    } \n  ] \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义产物的distributionfilter",
      children: "定义产物的distributionFilter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在未定义target的分发规则distributionFilter时，以module配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#distributionfilter%E6%A0%87%E7%AD%BE",
        children: "distributionFilter"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-fa/module-structure#distrofilter%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%86%85%E9%83%A8%E7%BB%93%E6%9E%84",
        children: "distroFilter"
      }), "分发规则为准。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对多target存在相同设备类型deviceType的场景，相同设备类型的target需要指定分发规则distributionFilter。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果是FA工程，请将distributionFilter字段替换为distroFilter。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ \n  \"apiType\": \"stageMode\", \n  \"buildOption\": { \n  }, \n  \"targets\": [ \n    { \n      \"name\": \"default\", \n\n    }, \n    { \n      \"name\": \"free\", \n      \"config\": { \n        \"distributionFilter\": {  // 具体请参考distributionFilter标签\n          \"screenShape\": { // 屏幕形状枚举 \n            \"policy\": \"include\", \n            \"value\": [\"circle\"] \n          } \n        } \n      } \n    }, \n    { \n      \"name\": \"pay\", \n      \"config\": { \n        \"distributionFilter\": { \n          \"screenShape\": { \n            \"policy\": \"include\", \n            \"value\": [\"rect\"] \n          } \n        } \n      } \n    } \n  ] \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义产物preloads的分包",
      children: "定义产物preloads的分包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于元服务，每一个target均可以指定preloads的分包，也可以不定义。如果不定义，则以module.json5中的配置为准。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ \n  \"apiType\": 'stageMode', \n  \"showInServiceCenter\": true, \n  \"buildOption\": { \n  }, \n  \"targets\": [   \n    { \n      \"name\": \"default\",   \n    },\n    { \n      \"name\": \"free\",   \n    },\n    { \n      \"name\": \"pay\",   \n      \"config\": { \n        \"atomicService\": { \n          \"preloads\": [  //指定preloads的分包 \n            { \n              \"moduleName\": \"preloadSharedLibrary\"\n            } \n          ] \n        } \n      } \n    } \n  ] \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义产物的source源码集-pages",
      children: "定义产物的source源码集-pages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于source源码集的定制，由于Stage模型和FA模型的差异，Stage模型支持对pages源码目录的page页面进行定制，FA模型则支持对Ability源码目录下的page页面进行定制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，Stage模型中的工程，在模块的pages目录下分别定义了Index.ets、Page1.ets和Page2.ets三个页面。其中default使用了Index.ets页面；free使用了Index.ets和Page1.ets页面；pay使用了Index.ets和Page2.ets页面，则示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{ \n   \"apiType\": 'stageMode', \n   \"buildOption\": { \n   }, \n   \"targets\": [ \n     { \n       \"name\": \"default\", \n       \"source\": {  //定义Stage模型中默认版target的pages源码文件\n         \"pages\": [ \n           \"pages/Index\" \n         ] \n       } \n     }, \n     { \n       \"name\": \"free\", \n       \"config\": { \n         \"deviceType\": [ \n           \"phone\" \n         ] \n       }, \n       \"source\": {  //定义Stage模型中免费版target的pages源码文件\n         \"pages\": [ \n           \"pages/Index\", \n           \"pages/Page1\" \n         ] \n       } \n     }, \n     { \n       \"name\": \"pay\", \n       \"config\": { \n         \"deviceType\": [ \n           \"phone\" \n         ] \n       }, \n       \"source\": {  //定义Stage模型中付费版target的pages源码文件\n         \"pages\": [ \n           \"pages/Index\", \n           \"pages/Page2\" \n         ] \n       } \n     } \n   ] \n }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，FA模型中的工程，在模块的MainAbility中定义了index.ets、page1.ets和page2.ets，其中：default使用了index.ets 页面；free使用了index.ets和page1.ets页面；pay使用了index.ets和page2.ets页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{ \n   \"apiType\": 'faMode', \n   \"buildOption\": { \n   }, \n   \"targets\": [ \n     { \n       \"name\": \"default\", \n       \"source\": {  //定义FA模型中默认版target的pages源码文件\n         \"abilities\": [ \n           { \n             \"name\": \".MainAbility\", \n             \"pages\": [ \n               \"pages/index\" \n             ] \n           } \n         ], \n       } \n     }, \n     { \n       \"name\": \"free\", \n       \"config\": { \n         \"deviceType\": [ \n           \"phone\" \n         ] \n       }, \n       \"source\": {  //定义FA模型中免费版target的pages源码文件\n         \"abilities\": [ \n           { \n             \"name\": \".MainAbility\", \n             \"pages\": [ \n               \"pages/index\", \n               \"pages/page1\" \n             ] \n           } \n         ], \n       } \n     }, \n     { \n       \"name\": \"pay\", \n       \"config\": { \n         \"deviceType\": [ \n           \"phone\" \n         ] \n       }, \n       \"source\": {  //定义FA模型中付费版target的pages源码文件\n         \"abilities\": [ \n           { \n             \"name\": \".MainAbility\", \n             \"pages\": [ \n               \"pages/index\", \n               \"pages/page2\" \n             ] \n           } \n         ], \n       } \n     } \n   ] \n }\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义产物的source源码集-sourceroots",
      children: "定义产物的source源码集-sourceRoots"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在模块的主代码空间（src/main）下，承载着开发者编写的公共代码。如果开发者需要实现不同target之间的差异化逻辑，可以使用差异化代码空间（sourceRoots）。配合差异化代码空间的能力，可以在主代码空间中代码不变的情况下，针对不同的target，编译对应的代码到最终产物中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "概念说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "packageName：当前模块的oh-package.json5中的name字段对应的值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sourceRoot：<defaultSourceRoot> | <targetSourceRoot> ，其中<defaultSourceRoot>是 src/main，<targetSourceRoot>可自定义，寻址优先级为 <targetSourceRoot> > <defaultSourceRoot>。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sourcePath：在sourceRoot中的代码结构目录。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sourceFileName：代码目录下的ets文件名。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如以下工程目录："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "entry\n|--src\n|----main\n|------ets\n|--------code\n|----------test.ets\n|----target\n|------util\n|--------util.ets\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "packageName为entry。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sourceRoot为src/main、src/target。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sourcePath为ets/code、util。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sourceFileName为test.ets、util.ets。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "规格限制"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "import xxx from '<packageName>/sourcePath/sourceFileName' ：通过packageName的方式，省略sourceRoot，可以实现不同target下的差异化构建。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["支持hap、hsp、har（请注意：开启", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#section-enable-filename-obfuscation",
            children: "文件/文件夹名称混淆"
          }), "的har模块需要使用-keep-file-name指定sourceRoot，sourcePath，sourceFileName对应的文件/文件夹名称不被混淆）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不支持跨模块引用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不支持动态import。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "编译时模块target的选择优先级说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在模块编译的过程中，该模块使用的sourceRoots由当前模块编译时的target来决定。当前模块编译时选择target的优先级则为：命令行显式指定 > 直接引用方target > default。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如以下示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hap -> hsp -> har（->表示依赖）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中hap和hsp存在三个target：default、custom、static，而har存在两个target：default、static。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行编译命令：hvigorw -p module=hap@custom assembleHap，hap指定target为custom进行编译，那么三个模块编译时的target分别为："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "hap: custom，命令行显式指定；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "hsp: custom，命令行没有显式指定，则基于直接引用方查找，hsp的直接引用方为hap，hap的target为custom，hsp存在该target，则hsp的target为custom；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "har: default，命令行没有显式指定，则基于直接引用方查找，har的直接引用方为hsp，hsp的target为custom，har不存在该target，则har的target为default；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行编译命令：hvigorw -p module=hap@custom,hsp@static assembleHap assembleHsp，hap指定target为custom，hsp则指定target为static进行编译，那么三个模块编译时的target分别为："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "hap: custom，命令行显式指定；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "hsp: static，命令行显式指定；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "har: static，命令行没有显式指定，则基于直接引用方查找，har的直接引用方为hsp，hsp的target为static，har存在该target，则har的target为static。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在当前依赖关系的基础上，添加依赖：hap -> har。执行编译命令：hvigorw -p module=hap@custom,hsp@static assembleHap assembleHsp。由于har没有显式指定target，且存在两个target不同的直接引用方（hap和hsp，对应的target分别为custom和static），所以编译过程中har的target只能二选一。基于这种场景，建议开发者显式指定模块的target进行编译：hvigorw -p module=hap@custom,hsp@static,har@static assembleHap assembleHsp assembleHar。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在entry模块的build-profile.json5中添加sourceRoots："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"apiType\": \"stageMode\",\n  \"buildOption\": {},\n  \"targets\": [ \n    { \n      \"name\": \"default\", \n      \"source\": { \n        \"sourceRoots\": [\"./src/default\"] // 配置target为default的差异化代码空间\n      } \n    }, \n    { \n      \"name\": \"custom\", \n      \"source\": { \n        \"sourceRoots\": [\"./src/custom\"] // 配置target为custom的差异化代码空间\n      } \n    } \n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在src目录下新增default/Test.ets和custom/Test.ets，新增后的模块目录结构："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "entry\n  |--src\n    |--main\n      |--ets\n        |--pages\n          |--Index.ets\n    |--default\n      |--Test.ets  // 新增\n    |--custom\n      |--Test.ets  // 新增\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在default/Test.ets中写入代码："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getName = () => \"default\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在custom/Test.ets中写入代码："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getName = () => \"custom\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改src/main/ets/pages/Index.ets的代码："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { getName } from 'entry/Test'; // 其中entry为模块级的oh-package.json5中的name字段的值\n@Entry\n@Component\nstruct Index { \n  @State message: string = getName(); \n  build() { \n    RelativeContainer() { \n      Text(this.message) \n    } \n    .height('100%') \n    .width('100%') \n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在工程级的build-profile.json5中配置targets："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"app\": {\n    \"signingConfigs\": [],\n    \"products\": [\n      {\n        \"name\": \"default\",\n        \"signingConfig\": \"default\",\n        \"compatibleSdkVersion\": \"6.1.0(23)\",\n        \"runtimeOS\": \"HarmonyOS\",\n      }\n    ],\n    \"buildModeSet\": [\n      {\n        \"name\": \"debug\",\n      },\n      {\n        \"name\": \"release\"\n      }\n    ]\n  },\n  \"modules\": [\n    {\n      \"name\": \"entry\",\n      \"srcPath\": \"./entry\",\n      \"targets\": [\n        {\n          \"name\": \"default\",\n          \"applyToProducts\": [\n            \"default\"\n          ]\n        },\n        {\n          \"name\": \"custom\",\n          \"applyToProducts\": [\n            \"default\"\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sync完成后，选择entry的target为default，点击Run，界面展示default；选择entry的target为custom，点击Run，则界面展示custom。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义产物的资源",
      children: "定义产物的资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个target使用的资源文件可能存在差异，在开发过程中，开发者可以将每个target所使用的资源存放在不同的资源目录下。其中，ArkTS工程支持对main目录下的资源文件目录（resource）进行定制；JS工程支持对main目录下的资源文件目录（resource）及 Ability下的资源文件目录（res）进行定制。如下为ArkTS工程的资源文件目录定制示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ \n  \"apiType\": 'stageMode', \n  \"buildOption\": { \n  }, \n  \"targets\": [ \n    { \n      \"name\": \"default\", \n      \"source\": { \n        \"pages\": [ \n          \"pages/Index\" \n        ] \n      }, \n      \"resource\": {  // 定义默认版target使用的资源文件目录 \n        \"directories\": [ \n          \"./src/main/resources_default\" \n        ] \n      } \n    }, \n    { \n      \"name\": \"free\", \n      \"config\": { \n        \"deviceType\": [ \n          \"phone\" \n        ] \n      }, \n      \"source\": {   \n        \"pages\": [ \n          \"pages/Index\", \n          \"pages/Page1\" \n        ] \n      }, \n      \"resource\": {  // 定义免费版target使用的资源文件目录 \n        \"directories\": [ \n          \"./src/main/resources_free\",\n          \"./src/main/resources_default\"\n        ] \n      } \n    }, \n    { \n      \"name\": \"pay\", \n      \"config\": { \n        \"deviceType\": [ \n          \"phone\" \n        ] \n      }, \n      \"source\": {   \n        \"pages\": [ \n          \"pages/Index\", \n          \"pages/Page2\" \n        ] \n      }, \n      \"resource\": {  // 定义付费版target使用的资源文件目录\n        \"directories\": [ \n          \"./src/main/resources_pay\",\n          \"./src/main/resources_default\"\n        ] \n      } \n    } \n  ] \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译构建时，资源文件存在以下优先级顺序："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AppScope目录下的资源文件会合入到模块下相同路径的资源目录中。如果两个目录下存在重名文件，编译打包后AppScope目录下的资源文件会覆盖模块下的资源。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果target引用的多个资源文件目录下，存在重名文件，则在构建打包过程中，将按照配置的资源文件目录顺序进行选择。例如，上述付费版target引用的资源中，resources_pay和resources_default中存在重名文件，则resources_pay中的资源会被打包到HAP中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义产物的iconlabellaunchtype",
      children: "定义产物的icon、label、launchType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对每一个的target的ability，均可以定制不同的icon、label和launchType。如果不定义，则该target采用module.json5中module.abilities配置的icon、label，launchType默认为\"singleton\"。示例如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ \n   \"apiType\": 'stageMode', \n   \"buildOption\": { \n   }, \n   \"targets\": [ \n     { \n       \"name\": \"default\", \n       \"source\": {\n        \"abilities\": [\n          {\n            \"name\": \"EntryAbility\",\n            \"icon\":\"$media:layered_image\",\n            \"label\":\"$string:EntryAbility_label\",\n            \"launchType\": \"singleton\"\n          }\n        ]\n      }\n     }, \n     { \n       \"name\": \"free\", \n       \"source\": {\n        \"abilities\": [\n          {\n            \"name\": \"EntryAbility\",\n            \"icon\":\"$media:layered_image\",\n            \"label\":\"$string:EntryAbility_label\",\n            \"launchType\": \"multiton\"\n          }\n        ]\n      }\n     }\n   ] \n }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义c工程依赖的so文件",
      children: "定义C++工程依赖的.so文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在 C++ 工程中，可以对每个target依赖的.so文件进行定制。例如某模块依赖了function1.so、function2.so和function3.so三个文件，其中target为default的产物依赖了function1.so和function2.so；其中target为vip的产物依赖了function1.so和 function3.so，则示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"apiType\": 'stageMode',\n  \"buildOption\": {\n    \"externalNativeOptions\": {\n      \"path\": \"./src/main/cpp/CMakeLists.txt\",\n      \"arguments\": [],\n      \"abiFilters\": [\n        \"arm64-v8a\",\n        \"x86_64\"\n      ],\n      \"cppFlags\": \"\",\n    }\n  },\n  \"targets\": [  //定义不同的target \n    {\n      \"name\": \"default\",\n      \"config\": {\n        \"buildOption\": {\n          \"nativeLib\": {\n            \"filter\": {\n              //按照.so文件的优先级顺序，打包最高优先级的function1.so文件 \n              \"pickFirsts\": [\n                \"**/function1.so\"\n              ],\n              //排除不打包的function3.so文件 \n              \"excludes\": [\n                \"**/function3.so\"\n              ],\n              //允许当.so中资源重名冲突时，使用高优先级的.so文件覆盖低优先级的.so文件 \n              \"enableOverride\": true\n            }\n          }\n        }\n      }\n    },\n    {\n      \"name\": \"vip\",\n      \"config\": {\n        \"buildOption\": {\n          \"nativeLib\": {\n            \"filter\": {\n              //按照.so文件的优先级顺序，打包最高优先级的function1.so文件 \n              \"pickFirsts\": [\n                \"**/function1.so\"\n              ],\n              //排除不打包的function2.so文件 \n              \"excludes\": [\n                \"**/function2.so\"\n              ],\n              //允许当.so中资源重名冲突时，使用高优先级的.so文件覆盖低优先级的.so文件 \n              \"enableOverride\": true\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "定制har多目标构建产物",
      children: "定制HAR多目标构建产物"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每一个HAR模块均支持定制不同的target，通过在模块中的build-profile.json5文件中实现差异化定制，当前支持设备类型（deviceType）、资源（resource）、buildOption配置项（如C++依赖的.so、混淆配置、abi类型、cppFlags等）、源码集（source）的定制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio 6.0.2 Beta1版本之前，在DevEco Studio中构建HAR模块时，仅支持default target，若需指定其他target，需通过命令行来指定和构建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如构建自定义target为free的HAR，可参考执行以下命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hvigorw --mode module -p product=default -p module=library@free -p buildMode=debug assembleHar\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从DevEco Studio 6.0.2 Beta1版本开始，支持在DevEco Studio中选择HAR模块的target，选择的target仅在单独构建HAR包时生效。如果是构建HAP/HSP，会动态计算依赖HAR的target，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section7121513141619",
        children: "多产物构建target"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义产物的devicetype-1",
      children: "定义产物的deviceType"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["每一个target均可以指定支持的设备类型deviceType，也可以不定义。如果不定义，则该target默认支持module.json5/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa",
        children: "config.json"
      }), "中定义的设备类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时，在定义每个target的deviceType时，支持的设备类型必须在module.json5或config.json中已经定义。例如，在上述定义的2个target中，分别定义default默认支持所有设备类型，free版本只支持2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ \n  \"apiType\": 'stageMode', \n  \"buildOption\": { \n  }, \n  \"targets\": [ \n    { \n      \"name\": \"default\"  //未定义deviceType，默认支持config.json或module.json5中定义的设备类型 \n    }, \n    { \n      \"name\": \"free\",\n      \"config\": { \n        \"deviceType\": [  //定义free支持的设备类型为2in1\n          \"2in1\" \n        ] \n      } \n    }\n  ] \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义c工程依赖的so文件-1",
      children: "定义C++工程依赖的.so文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在 C++ 工程中，可以对每个target依赖的.so文件进行定制。例如某模块依赖了function1.so、function2.so和function3.so三个文件，其中target为default的产物依赖了function1.so和function2.so；其中target为vip的产物依赖了function1.so和 function3.so，则示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"apiType\": 'stageMode',\n  \"buildOption\": {\n    \"externalNativeOptions\": {\n      \"path\": \"./src/main/cpp/CMakeLists.txt\",\n      \"arguments\": [],\n      \"abiFilters\": [\n        \"arm64-v8a\",\n        \"x86_64\"\n      ],\n      \"cppFlags\": \"\",\n    }\n  },\n  \"targets\": [  //定义不同的target \n    {\n      \"name\": \"default\",\n      \"config\": {\n        \"buildOption\": {\n          \"nativeLib\": {\n            \"filter\": {\n              //按照.so文件的优先级顺序，打包最高优先级的function1.so文件 \n              \"pickFirsts\": [\n                \"**/function1.so\"\n              ],\n              //排除不打包的function3.so文件 \n              \"excludes\": [\n                \"**/function3.so\"\n              ],\n              //允许当.so中资源重名冲突时，使用高优先级的.so文件覆盖低优先级的.so文件 \n              \"enableOverride\": true\n            }\n          }\n        }\n      }\n    },\n    {\n      \"name\": \"vip\",\n      \"config\": {\n        \"buildOption\": {\n          \"nativeLib\": {\n            \"filter\": {\n              //按照.so文件的优先级顺序，打包最高优先级的function1.so文件 \n              \"pickFirsts\": [\n                \"**/function1.so\"\n              ],\n              //排除不打包的function2.so文件 \n              \"excludes\": [\n                \"**/function2.so\"\n              ],\n              //允许当.so中资源重名冲突时，使用高优先级的.so文件覆盖低优先级的.so文件 \n              \"enableOverride\": true\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义产物的资源-1",
      children: "定义产物的资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个target使用的资源文件可能存在差异，在开发过程中，开发者可以将每个target所使用的资源存放在不同的资源目录下。其中，ArkTS工程支持对main目录下的资源文件目录（resource）进行定制；JS工程支持对main目录下的资源文件目录（resource）及 Ability下的资源文件目录（res）进行定制。如下为ArkTS工程的资源文件目录定制示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ \n  \"apiType\": 'stageMode', \n  \"buildOption\": { \n  }, \n  \"targets\": [ \n    { \n      \"name\": \"default\",\n      \"resource\": {  //定义默认版target使用的资源文件目录 \n        \"directories\": [ \n          \"./src/main/resources_default\" \n        ] \n      } \n    }, \n    { \n      \"name\": \"free\", \n      \"config\": { \n        \"deviceType\": [ \n          \"2in1\" \n        ] \n      }, \n      \"resource\": {  //定义免费版target使用的资源文件目录 \n        \"directories\": [ \n          \"./src/main/resources_free\",\n          \"./src/main/resources_default\"\n        ] \n      } \n    },\n  ] \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义产物的source源码集-sourceroots-1",
      children: "定义产物的source源码集-sourceRoots"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section18668905913",
        children: "定义产物的source源码集-sourceRoots"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置app多目标构建产物",
      children: "配置APP多目标构建产物"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "APP用于应用/元服务上架发布，针对不同的应用场景，可以定制不同的product，每个product中支持对bundleName、bundleType、签名信息、icon和label以及包含的target进行定制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "定义目标产物product"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每一个product对应一个定制的APP包，因此，在定制APP多目标构建产物前，应提前规划好需要定制的product名称。例如，定义productA和productB。工程级build-profile.json5文件示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在定制product时，必须存在\"default\"的product，否则编译时会出现错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(99732)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在编译构建流程中，default product或者default target都承载着兜底机制，其中，default target可以缺省。当某个模块的default target缺省时，Hvigor会默认加上default target并挂载到default product中，因此，构建default product时，默认会构建出default target。如果不想构建出default target，建议参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section7613106105114",
        children: "定义product中包含的target"
      }), "，自定义product以及包含的target。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"app\": { \n  \"signingConfigs\": [], \n  \"products\": [ \n    { \n      \"name\": \"default\", \n      \"signingConfig\": \"default\", \n      \"compatibleSdkVersion\": \"6.1.0(23)\", \n      \"runtimeOS\": \"HarmonyOS\", \n    }, \n    { \n      \"name\": \"productA\", \n      \"compatibleSdkVersion\": \"6.1.0(23)\", \n      \"runtimeOS\": \"HarmonyOS\", \n    }, \n    { \n      \"name\": \"productB\", \n      \"compatibleSdkVersion\": \"6.1.0(23)\", \n      \"runtimeOS\": \"HarmonyOS\", \n    } \n  ], \n  \"buildModeSet\": [ \n    { \n      \"name\": \"debug\", \n    }, \n    { \n      \"name\": \"release\" \n    } \n  ] \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义产物的app包名和供应商名称",
      children: "定义产物的APP包名和供应商名称"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每一个product均可以指定产物命名和供应商名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ \n  \"app\": { \n    \"signingConfigs\": [], \n    \"products\": [ \n      { \n        \"name\": \"default\", \n        \"signingConfig\": \"default\", \n        \"compatibleSdkVersion\": \"6.1.0(23)\", \n        \"runtimeOS\": \"HarmonyOS\", \n        \"output\": { \n          \"artifactName\": \"customizedProductOutputName-1.0.0\"  //产物名称为customizedProductOutputName-1.0.0\n        }, \n        \"vendor\": \"customizedProductVendorName\"   //供应商名称为customizedProductVendorName\n      }, \n      { \n        \"name\": \"productA\", \n        \"compatibleSdkVersion\": \"6.1.0(23)\", \n        \"runtimeOS\": \"HarmonyOS\", \n        \"output\": { \n          \"artifactName\": \"customizedProductOutputNameA-1.0.0\"  //产物名称为customizedProductOutputNameA-1.0.0\n        }, \n        \"vendor\": \"customizedProductVendorNameA\"   //供应商名称为customizedProductVendorNameA\n      }, \n      { \n        \"name\": \"productB\", \n        \"compatibleSdkVersion\": \"6.1.0(23)\", \n        \"runtimeOS\": \"HarmonyOS\", \n        \"output\": { \n          \"artifactName\": \"customizedProductOutputNameB-1.0.0\" //产物名称为customizedProductOutputNameB-1.0.0\n        }, \n        \"vendor\": \"customizedProductVendorNameB\"   //供应商名称为customizedProductVendorNameB\n      } \n    ], \n    \"buildModeSet\": [ \n      { \n        \"name\": \"debug\", \n      }, \n      { \n        \"name\": \"release\" \n      } \n    ] \n  }, \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果已配置签名，product产物对应的APP包名为开发者定制的名称；如果未配置签名，product产物对应的APP包名为开发者定制的名称+unsigned。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义product的bundlename",
      children: "定义product的bundleName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对每个定义的product，均可以定制不同的bundleName，如果product未定义bundleName，则采用工程默认的bundleName。示例如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"app\": { \n  \"signingConfigs\": [], \n  \"products\": [ \n    { \n      \"name\": \"default\", \n      \"signingConfig\": \"default\",\n      \"compatibleSdkVersion\": \"6.1.0(23)\", \n      \"runtimeOS\": \"HarmonyOS\", \n      \"bundleName\": \"com.example00.com\"  //定义default的bundleName信息 \n    }, \n    { \n      \"name\": \"productA\", \n      \"signingConfig\": \"default\", \n      \"compatibleSdkVersion\": \"6.1.0(23)\", \n      \"runtimeOS\": \"HarmonyOS\", \n      \"bundleName\": \"com.example01.com\"  //定义productA的bundleName信息\n    }, \n    { \n      \"name\": \"productB\", \n      \"signingConfig\": \"default\",\n      \"compatibleSdkVersion\": \"6.1.0(23)\", \n      \"runtimeOS\": \"HarmonyOS\", \n      \"bundleName\": \"com.example02.com\"  //定义productB的bundleName信息 \n    } \n  ], \n  \"buildModeSet\": [ \n    { \n      \"name\": \"debug\", \n    }, \n    { \n      \"name\": \"release\" \n    } \n  ] \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义product的bundletype",
      children: "定义product的bundleType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对每个定义的product，均可以定制不同的bundleType。开发者可以通过定义每个product的bundleType，分别定义产物类型："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "bundleType值为app，表示产物为应用；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "bundleType值为atomicService，表示产物为元服务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果product未定义bundleType，则采用工程的bundleType（即创建工程时选择的Application/Atomic Service）。示例如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"app\": { \n  \"signingConfigs\": [], \n  \"products\": [ \n    { \n      \"name\": \"default\", \n      \"signingConfig\": \"default\",\n      \"compatibleSdkVersion\": \"6.1.0(23)\", \n      \"runtimeOS\": \"HarmonyOS\", \n      \"bundleName\": \"com.example00.com\",   \n      \"bundleType\": \"app\" //定义default的bundleType信息 \n    },\n    { \n      \"name\": \"productA\", \n      \"signingConfig\": \"default\",\n      \"compatibleSdkVersion\": \"6.1.0(23)\", \n      \"runtimeOS\": \"HarmonyOS\", \n      \"bundleName\": \"com.example01.com\",    \n      \"bundleType\": \"atomicService\"  //定义productA的bundleType信息 \n    },\n    { \n      \"name\": \"productB\", \n      \"signingConfig\": \"default\",\n      \"compatibleSdkVersion\": \"6.1.0(23)\", \n      \"runtimeOS\": \"HarmonyOS\", \n      \"bundleName\": \"com.example02.com\",    \n      \"bundleType\": \"atomicService\"  //定义productB的bundleType信息 \n    } \n  ], \n  \"buildModeSet\": [ \n    { \n      \"name\": \"debug\", \n    },\n    { \n      \"name\": \"release\"\n    } \n  ] \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义product的签名配置信息",
      children: "定义product的签名配置信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对每个定义的product，均可以定制不同的signingConfig签名文件，如果product未定义signingConfig，则构建生成未签名的APP包。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通常情况下，您首先需要在签名配置界面或工程的build-profile.json5文件中配置签名信息。例如在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "File > Project Structure > Project > Signing Configs"
        })
      }), "界面，分别配置default、productA和productB的签名信息，如下图所示："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(668088)/* ["default"] */.A) + "",
        width: "954",
        height: "591"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "签名信息配置完成后，再添加各个product对应的签名文件，示例如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您也可以提前在product中定义签名文件信息，然后在签名界面对每个product进行签名，确保配置的product签名文件与签名界面配置的签名文件保持一致即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"app\": { \n  \"signingConfigs\": [], //此处通过界面配置签名后会自动生成相应的签名配置，本文略 \n  \"products\": [ \n    { \n      \"name\": \"default\", \n      \"signingConfig\": \"default\", //定义default的签名文件信息\n      \"compatibleSdkVersion\": \"6.1.0(23)\", \n      \"runtimeOS\": \"HarmonyOS\", \n      \"bundleName\": \"com.example00.com\"  \n    }, \n    { \n      \"name\": \"productA\", \n      \"signingConfig\": \"productA\", //定义productA的签名文件信息\n      \"compatibleSdkVersion\": \"6.1.0(23)\", \n      \"runtimeOS\": \"HarmonyOS\", \n      \"bundleName\": \"com.example01.com\"  \n    }, \n    { \n      \"name\": \"productB\", \n      \"signingConfig\": \"productB\", //定义productB的签名文件信息\n      \"compatibleSdkVersion\": \"6.1.0(23)\", \n      \"runtimeOS\": \"HarmonyOS\", \n      \"bundleName\": \"com.example02.com\" \n    } \n  ], \n  \"buildModeSet\": [ \n    { \n      \"name\": \"debug\", \n    }, \n    { \n      \"name\": \"release\" \n    } \n  ] \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义product的icon和label",
      children: "定义product的icon和label"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对每个定义的product，均可以定制不同的icon和label，如果product未定义icon和label，则采用工程默认的icon和label。示例如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(527675)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["products中的icon和label字段在编译时会替换", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
        children: "app.json5"
      }), "中对应的字段，app.json5和module.json5均可以配置这两个字段，如果都配置，优先级顺序请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-typical-scenarios/layered-image#%E9%85%8D%E7%BD%AE%E4%BC%98%E5%85%88%E7%BA%A7%E5%92%8C%E7%94%9F%E6%88%90%E7%AD%96%E7%95%A5",
        children: "配置优先级"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"app\": {\n    \"signingConfigs\": [],\n    \"products\": [\n      {\n        \"name\": \"default\",\n        \"signingConfig\": \"default\",\n        \"compatibleSdkVersion\": \"6.1.0(23)\",\n        \"runtimeOS\": \"HarmonyOS\",\n        \"icon\":\"$media:default_icon\", //定义default的icon\n        \"label\":\"$string:default_name\", //定义default的label\n      },\n      {\n        \"name\": \"productA\",\n        \"signingConfig\": \"default\",\n        \"compatibleSdkVersion\": \"6.1.0(23)\",\n        \"icon\":\"$media:productA_icon\", //定义productA的icon\n        \"label\":\"$string:productA_name\", //定义productA的label\n      },\n      {\n        \"name\": \"productB\",\n        \"signingConfig\": \"default\",\n        \"compatibleSdkVersion\": \"6.1.0(23)\",\n        \"runtimeOS\": \"HarmonyOS\",\n        \"icon\":\"$media:productB_icon\", //定义productB的icon\n        \"label\":\"$string:productB_name\",  //定义productB的label\n      }\n    ],\n    \"buildModeSet\": [\n      {\n        \"name\": \"debug\",\n      },\n      {\n        \"name\": \"release\"\n      }\n    ]\n  },\n  ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义product中包含的target",
      children: "定义product中包含的target"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以选择需要将定义的target分别打包到哪一个product中，每个product可以指定一个或多个target。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时每个target也可以打包到不同的product中，但是同一个module的不同target不能打包到同一个product中（除非该module的不同target配置了不同的deviceType或distributionFilter/distroFilter）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，前面定义了default、free和pay三个target，现需要将default target打包到default product中；将free target打包到productA中；将pay target打包到productB中，对应的示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ \n  \"app\": { \n    \"signingConfigs\": [], //此处通过界面配置签名后会自动生成相应的签名配置，本文略 \n    \"products\": [ \n      { \n        \"name\": \"default\", \n        \"signingConfig\": \"default\",\n        \"compatibleSdkVersion\": \"6.1.0(23)\", \n        \"runtimeOS\": \"HarmonyOS\", \n        \"bundleName\": \"com.example00.com\"  \n      }, \n      { \n        \"name\": \"productA\", \n        \"signingConfig\": \"productA\",\n        \"compatibleSdkVersion\": \"6.1.0(23)\", \n        \"runtimeOS\": \"HarmonyOS\", \n        \"bundleName\": \"com.example01.com\"  \n      }, \n      { \n        \"name\": \"productB\", \n        \"signingConfig\": \"productB\",  \n        \"compatibleSdkVersion\": \"6.1.0(23)\", \n        \"runtimeOS\": \"HarmonyOS\", \n        \"bundleName\": \"com.example02.com\" \n      } \n    ], \n  \"modules\": [ \n    { \n      \"name\": \"entry\", \n      \"srcPath\": \"./entry\", \n      \"targets\": [ \n        { \n          \"name\": \"default\",  //将default target打包到default APP中 \n          \"applyToProducts\": [ \n            \"default\" \n          ] \n        }, \n        { \n          \"name\": \"free\",  //将free target打包到productA APP中 \n          \"applyToProducts\": [ \n            \"productA\" \n          ] \n        }, \n        { \n          \"name\": \"pay\",  //将pay target打包到productB APP中 \n          \"applyToProducts\": [ \n            \"productB\" \n          ] \n        } \n      ] \n    } \n  ] \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "构建定义的目标产物",
      children: "构建定义的目标产物"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个target对应一个HAP，每个product对应一个APP包，在编译构建时，如果存在多product或多target时，您可以指定编译具体的包。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["单击右上角的", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(82244)/* ["default"] */.A) + "",
        width: "18",
        height: "18"
      }), "图标，指定需要打包的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Product"
        })
      }), "及", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Target"
        })
      }), "，然后单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Apply"
        })
      }), "保存。例如选择\"ProductA\"中，entry模块对应的\"free\" Target。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Product"
          })
        }), "：选择需要构建的APP包。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Build Mode"
          })
        }), "：选择", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section192461528194916",
          children: "编译模式"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Product Info"
          })
        }), "：该APP包的BundleName和SigningConfig信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Target Select"
          })
        }), "：选择各个模块的Target，该Target需要包含在定义的Product中才能选择，如果未包含则显示\"No Target to apply\"。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(670039)/* ["default"] */.A) + "",
        width: "527",
        height: "352"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然后执行编译构建APP/HAP的任务："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["单击菜单栏的", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Build > Build Hap(s)/APP(s) > Build APP(s)"
          })
        }), " ，构建指定的Product对应的APP。例如，按照", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section7613106105114",
          children: "上述配置文件"
        }), "和上图中的配置，此时DevEco Studio将构建生成ProductA的APP包。default和ProductB的APP均不会生成。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["单击菜单栏的", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Build > Build Hap(s)/APP(s) > Build Hap(s)"
          })
        }), "，构建指定Product下的所有Target对应的HAP。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果您想将某个模块下的指定target打包生成HAP，可以在工程目录中，单击模块名，然后再单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Build > Make Module"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "‘模块名"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "’"
        })
      }), "，此时DevEco Studio将构建生成模块下指定target对应的包。例如，按照上述配置，此时DevEco Studio将构建生成entry模块下free的HAP。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(46840)/* ["default"] */.A) + "",
        width: "521",
        height: "207"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调试和运行指定的target",
      children: "调试和运行指定的Target"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用DevEco Studio调试或运行应用/元服务时，每个模块只能选择其中的一个target运行，可以通过单击右上角的", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(878593)/* ["default"] */.A) + "",
        width: "18",
        height: "18"
      }), "图标，指定需要调试或运行的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Product"
        })
      }), "下对应的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Module Target"
        })
      }), "，然后单击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Apply"
        })
      }), "保存。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(241151)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在选择需要调试或运行的target时，需要注意选择该target所属的Product，否则将找不到可调试和运行的target。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(552079)/* ["default"] */.A) + "",
        width: "527",
        height: "352"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多产物构建target",
      children: "多产物构建target"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "align target"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译构建时，优先级最高的target。工程配置align target后，如果模块中存在align target，那么将自动选择align target进行构建。align target作用范围是整个工程，只能配置一个，支持命令行和配置文件两种方式。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "命令行方式示例如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hvigorw -c properties.ohos.align.target=target1 assembleHap\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在hvigor-config.json5配置文件中添加ohos.align.target，示例如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "\"properties\": {\n  'ohos.align.target': 'target1'\n},\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "fallback target"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当模块不存在指定的target时会选用default进行构建，但如果不想用default进行构建，那么可以配置fallback target，当找不到指定target时，如果模块中存在fallback target，则使用fallback target进行构建。fallback target作用范围是整个工程，可配置多个，配置多个时按数组顺序先命中的生效。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "命令行方式示例如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hvigorw -c properties.ohos.fallback.target=target1,target2 assembleHap\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在hvigor-config.json5配置文件中添加ohos.fallback.target，示例如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "\"properties\": {\n  'ohos.fallback.target': ['target1', 'target2']\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(329826)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "align target和fallback target配置方式命令行优先级高于配置文件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用配置文件配置align target和fallback target，仅支持DevEco Studio界面", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Build"
          })
        }), "菜单栏功能，不支持", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Run"
          })
        }), "菜单栏功能，可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hdc",
          children: "hdc命令行工具"
        }), "进行推包运行、调试。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多个target的优先级顺序为：align target > 命令行指定模块target > 父级模块target > fallback target > default。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(886168)/* ["default"] */.A) + "",
        width: "1032",
        height: "744"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "举例说明："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工程依赖entry->lib1->lib2，需要构建多个产品A、B、C，工程中target配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "entry: A、B、default"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lib1: B、C、default"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lib2: A、C、default"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定align target为A，fallback target为C。那么构建hap时的编译命令为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hvigorw --mode module -p module=entry -c properties.ohos.align.target=A -c properties.ohos.fallback.target=C assembleHap\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译的target选择就是：entry@A, lib1@C, lib2@A。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(541736)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上所有说明仅针对非ohosTest模式。在ohosTest模式下，依赖的target固定为default，其他target均不生效。"
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
99732(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
552079(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753352-5c48e03e61ec32191c87ba4458a551da.png");

},
541736(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
46840(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913340-d24976513af77b57800ea38f65b34912.png");

},
527675(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
82244(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABQ0lEQVQ4jbWTQU/CQBSEv1YTKtvlSOFkS0IgetJq/P9nAU+QEhJaT7Ac225CD7QeMJVGLJrUOW327c7OmzdrxHFc0ADMJkh+RbRVO7Zqd5Houq4YJwlKKQDa7Rs6Uv541jjnUZKmzBcBWuvKvhCC+7sx0rYvEyVpynT6xiHPz758ZZr4/sM3skprRVEwXwQc8hzTNPHcW/r9HgCbzZYweueQ58wXAS/PPoZhlHcrZqepLtsZeC5S2kymM14nM6S0GXguAFpr0rTadkmk1I51GJWFntMlWK7Y7zOyLCNYrug53bK+DiPUyTSbz5HjdEvpcMzPeDTEslpYVovxaFjJ08BzcU4UVsy2bYEQAq016zDCc2958h+BL7PhGAPbFhVFjY3//wJ5ijhJCD8n6Xlu7Rep/WsdKXEcp1zXoVbRX9BYjj4AKu6hJEPPMVkAAAAASUVORK5CYII=");

},
329826(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
668088(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753291-7632f5ef3b254e5242b4a4a8f313aa50.png");

},
886168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833267-af5713fe5abc1e2219b243f8ef89a5c0.png");

},
878593(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABQ0lEQVQ4jbWTQU/CQBSEv1YTKtvlSOFkS0IgetJq/P9nAU+QEhJaT7Ac225CD7QeMJVGLJrUOW327c7OmzdrxHFc0ADMJkh+RbRVO7Zqd5Houq4YJwlKKQDa7Rs6Uv541jjnUZKmzBcBWuvKvhCC+7sx0rYvEyVpynT6xiHPz758ZZr4/sM3skprRVEwXwQc8hzTNPHcW/r9HgCbzZYweueQ58wXAS/PPoZhlHcrZqepLtsZeC5S2kymM14nM6S0GXguAFpr0rTadkmk1I51GJWFntMlWK7Y7zOyLCNYrug53bK+DiPUyTSbz5HjdEvpcMzPeDTEslpYVovxaFjJ08BzcU4UVsy2bYEQAq016zDCc2958h+BL7PhGAPbFhVFjY3//wJ5ijhJCD8n6Xlu7Rep/WsdKXEcp1zXoVbRX9BYjj4AKu6hJEPPMVkAAAAASUVORK5CYII=");

},
241151(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
670039(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913342-5c48e03e61ec32191c87ba4458a551da.png");

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