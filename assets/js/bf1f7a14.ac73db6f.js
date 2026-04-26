"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["766326"], {
56847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_application_typical_scenarios_typical_scenario_configuration_typical_scenario_configuration_md_bf1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-application-typical-scenarios-typical-scenario-configuration-typical-scenario-configuration-md-bf1.json
var site_docs_development_fundamentals_application_typical_scenarios_typical_scenario_configuration_typical_scenario_configuration_md_bf1_namespaceObject = JSON.parse('{"id":"development-fundamentals/application-typical-scenarios/typical-scenario-configuration/typical-scenario-configuration","title":"创建应用静态快捷方式","description":"随着应用的功能越来越复杂，用户在使用应用时，找到某个功能的操作步骤也变得更加繁琐。为提升用户体验，可以对应用中常用的功能创建对应的桌面快捷方式，以达到快速启动应用、一键直达特定功能等目的。例如相机应用的 “快速拍照”、便签应用的 “新建便签” 和地图应用的常用地点导航等功能的快捷方式，用户通过快捷方式可以快速进入特定功能页面，既能大大提高操作效率，同时也增加了用户对应用的依赖性。使用快捷方式，还可以实现个性化定制的需求，创建多个快捷方式，以满足个性化的工作流程和操作偏好。快捷方式的配置请参考配置方法，快捷方式的管理能力请参考shortcutManager模块。","source":"@site/docs/development-fundamentals/application-typical-scenarios/typical-scenario-configuration/typical-scenario-configuration.md","sourceDirName":"development-fundamentals/application-typical-scenarios/typical-scenario-configuration","slug":"/development-fundamentals/application-typical-scenarios/typical-scenario-configuration/","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/typical-scenario-configuration/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"创建应用静态快捷方式","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/typical-scenario-configuration","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"module对象内部结构","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-fa/module-structure/"},"next":{"title":"创建应用分身","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/app-clone/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/application-typical-scenarios/typical-scenario-configuration/typical-scenario-configuration.md


const frontMatter = {
	title: '创建应用静态快捷方式',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/typical-scenario-configuration',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = '创建应用静态快捷方式';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "配置方法",
  "id": "配置方法",
  "level": 2
}, {
  "value": "隐藏快捷方式",
  "id": "隐藏快捷方式",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "创建应用静态快捷方式",
        children: "创建应用静态快捷方式"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["随着应用的功能越来越复杂，用户在使用应用时，找到某个功能的操作步骤也变得更加繁琐。为提升用户体验，可以对应用中常用的功能创建对应的桌面快捷方式，以达到快速启动应用、一键直达特定功能等目的。例如相机应用的 “快速拍照”、便签应用的 “新建便签” 和地图应用的常用地点导航等功能的快捷方式，用户通过快捷方式可以快速进入特定功能页面，既能大大提高操作效率，同时也增加了用户对应用的依赖性。使用快捷方式，还可以实现个性化定制的需求，创建多个快捷方式，以满足个性化的工作流程和操作偏好。快捷方式的配置请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%85%8D%E7%BD%AE%E6%96%B9%E6%B3%95",
        children: "配置方法"
      }), "，快捷方式的管理能力请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-shortcutmanager/js-apis-shortcutmanager",
        children: "shortcutManager模块"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以导航场景为例，用户使用地图应用导航时，通常先搜索目的地，然后开始导航。为了提升导航效率和操作便捷性，建议在地图应用中添加常去地点的快捷方式，如公司、家等。添加这些快捷方式后，用户长按应用图标，即可打开快捷方式入口，快速启动导航。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-desktop-shortcuts",
        children: "桌面快捷方式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(29502)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "桌面展示快捷方式的数量有上限要求，最多展示4个。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置方法",
      children: "配置方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面介绍在工程中配置静态快捷方式的方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在entry/src/main/resources/base/element/string.json配置资源文件如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"string\": [\n    {\n      \"name\": \"share\",\n      \"value\": \"分享好友\"\n    },\n    {\n      \"name\": \"add\",\n      \"value\": \"添加收藏\"\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置快捷方式文件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在模块的/resources/base/profile/目录下配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#shortcuts%E6%A0%87%E7%AD%BE",
            children: "快捷方式的配置文件"
          }), "，如shortcuts_config.json。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"shortcuts\": [\n   {\n      \"shortcutId\": \"id_test1\",\n      \"label\": \"$string:add\",\n      \"icon\": \"$media:add_icon\",\n      \"wants\": [\n        {\n          \"bundleName\": \"com.ohos.hello\",\n          \"moduleName\": \"entry\",\n          \"abilityName\": \"EntryAbility1\",\n          \"parameters\": {\n            \"testKey\": \"testValue\"\n          }\n        }\n      ]\n    },\n    {\n      \"shortcutId\": \"id_test2\",\n      \"label\": \"$string:share\",\n      \"icon\": \"$media:share_icon\",\n      \"wants\": [\n        {\n          \"bundleName\": \"com.ohos.hello\",\n          \"moduleName\": \"entry\",\n          \"abilityName\": \"EntryAbility\",\n          \"parameters\": {\n            \"testKey\": \"testValue\"\n          }\n        }\n      ]\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用的module.json5文件中配置metadata，指向快捷方式的配置文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    // ...\n    \"abilities\": [\n      {\n        \"name\": \"EntryAbility\",\n        \"srcEntry\": \"./ets/entryability/EntryAbility.ets\",\n        \"metadata\": [\n          {\n            \"name\": \"ohos.ability.shortcuts\",  // 配置快捷方式，该值固定为ohos.ability.shortcuts\n            \"resource\": \"$profile:shortcuts_config\"  // 指定shortcuts信息的资源位置\n          }\n        ],\n        // ...\n      }\n    ],\n    // ...\n  },\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装应用后，长按桌面上的应用图标，图标上方会显示开发者配置的快捷方式：“添加收藏”和“分享好友”。点击相应标签，可启动对应的组件。应用配置的静态快捷方式在桌面上的展示效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(551951)/* ["default"] */.A) + "",
        width: "211",
        height: "242"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "隐藏快捷方式",
      children: "隐藏快捷方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-shortcutmanager/js-apis-shortcutmanager#shortcutmanagersetshortcutvisibleforself",
        children: "setShortcutVisibleForSelf"
      }), "接口隐藏或展示快捷方式。"]
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
551951(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCADyANMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDoaaWpW6VCxr5KB9RTJN9OD1veFvCd1rQFxKxt7LPDY+Z/90f1r0Cz8H6LaxgfZBK396Ulif6V6tDDykrkVcfSpPl3Z5IHoL17J/wjmj/9A62/74o/4RzR/wDoHW3/AHxXWsM+5j/a0P5WeMM/NNZ+e9e0/wDCOaOeum2v/fFH/CN6N/0DbX/vgVaoO5Es0i/sni6tz3qeN69h/wCEc0YdNNtf+/YpR4e0gdNOtf8AvgVvGNjgrYpVNkeSxvVhXr1QaBpQ/wCYfbf98U7+w9LHSxt/++K6Yziuh504OTueWb6QtXqn9h6X/wA+Nv8A98Uf2Hpf/Pjb/wDfFdEcQl0MHh2+p5TnNJXq39haZ/z42/8A3xSjQ9L72Nv/AN81f1qPYPYPueTE4qNq9d/sLS/+fC3/AO+KQ6DpR/5cLf8A74qfrKvsDos8ec1EzV7J/YGlf9A+2/74o/4R7SP+gdbf98VrHGxXQwnhHLqeM76bvr2f/hHdI/6B1t/3xR/wjmj99Otv++K2WYRXQ5pZbJ9TxffSh69kk8M6M6lTp1uB/srg/pXM694CTy2m0dyrDnyHOQfof8auOPpydnoZSy6pBXWpwqNUik1EUeKRo5VZJFOGVhgg1KlXNphTi1oPopdtFZWR02KT1c8N6YdY1u3tDnyyd0hHZR1/w/GqT811/wALFB1q7Y9RBge3zCvzrCWnUUWfbVZuFNtHpkMSQxJHEgSNQAqgYAFPoqtqNy1nZyTrBLcFBkxxlQxHr8xA468mvpltY8VlmiuUk1DXtWPmaTatYWyQGZHuVjl+0P1VBtc4Uj+L3rQ0vW5rq9SzuNKu7Wfyw773iIUc8/K5OMggHFUiTboornvGfiP/AIRuyt5Y7Ke+mmlC+TCPmEY+aR/T5UBPPU4HemSdDSkVw9z8QoILNbn+w9XaP7I98/EKlIFxmQgyDI+YYAyeOlN8VfEWw0DWrXTjEk7yS+XKwvraPy/3bN0eQEHKgfMFHPBJwCxHc0VxHhH4haf4g1P7CrWscrvOkQS7jkLeXKy4Kg5BKgOCMggtg8c9vTEFFFFNAFFFFMAooooEwooooEFFFFO4BRRRT0A4L4kaSqiLUoVwxYRy47+h/p+VcbGuRmvU/GqhvDN7nnAUj/voV5hEOK7KNT3bM5alP3rjgvFFSgcUVpzoXIjHxXY/C1caveH/AKYj+dceOldZ8NZ1j16WJiAZYSF9yDnH86/PMvkvbxufU4j+Gz0/mmTLuidT3Uin/nRivqzyGzz201y70/wrpi2pj/daRPJ8y5+eExoP5niuj0o+b4u1eU/wW1tED7/Ox/8AQhUb+FIQ8n2XUNQtYXLHyY3Uou45YDcpIBPOM4rU0nS4tLjlEck08sz+ZLNM253bAAz0HAAGAKaIL9eefGBIZrXSIJtPkvvNmmRkis3uWVPIfkBVJHz+Xz/9evQ6BTA8Fs7O8t9Jk0220W5a9vNDuLQRQWP2Yh3Ma73V3JwDwXz+FXfifb3sPju0vLS2ubpJGjtViX7VGodlJYq6gISQqDg8bTkc17XsUybyo3gbQ2OQPSlZQ2CQMg5Bx0piPF/hzqVufHz2yBhBI8jWUaqQZBIgaWZi33kV4WQMM8ye/PtJpqxorBgqggbQcdB6U6mIKKKKYBRRRTAKKKKBMKKKKBBRRRQAUUUUAYvjL/kWb7/dX/0IV5dF0r0vx1MsPhu4Vjgyssaj1OQf5A15nH0ram9CGrk4NFM3UVdw5UZqCp7O4lsbyG6gOJIm3D39j7VClPNfm1KbTTR9LOzVmey6Jq1vq9itxbt7OhPKHuDWjXhlnfXWm3AmsZmik746H2I711Vr8Q7lFC3djFKR/FG5TP4YNfVYbHRqRSnozyatLleh6SaK8+/4WOM/8gsn/t4/+xpf+Fjj/oFH/wACP/sa9CDUtjmbUdz0CgdK8/8A+FjD/oFn/wACP/saB8RQRxpZ/wDAj/7Gto0pvZGbrQXU9AorgP8AhYh/6BZ/7/8A/wBjS/8ACw89dMI/7b//AGNV7CfYn6xT7nfUVwX/AAsIf9Aw/wDf/wD+xpf+FhD/AKBp/wC//wD9jT9jPsHt4dzvKK4P/hYI/wCga3/f/wD+xpf+Fgf9Q1v+/wD/APY0vZyBVodzu6K4T/hYH/UNb/v/AP8A2NL/AMJ+P+ga3/f/AP8AsaVmilUizuqK4T/hYH/UNb/v/wD/AGNNPxCx00wn/tv/APY0h3vsd7RXA/8ACxPXSyP+3j/7GkPxFwf+QWf/AAI/+xouFjv6K8//AOFi/wDUKP8A4Ef/AGNB+I2P+YUf/Aj/AOxppNgegUjMEQs7BVUZJJwAK8+b4jMV/d6WA3+1Pkf+g1z+s+JNS1gFJpBHbn/llF8oP17mnysC/wCMtcXV79YbZs2kGdp/vt3P+FY0Y4qGGPAqyq1qrILBiin7faincDKU0FsVHnFSWcEt9ew2tuN0srhF/wAf61+d4elztJHu1allclsbO51G4EFlC80h7KOnuT2rp7b4f38qg3F1bwn+6AWIrvNC0m20exS3tl5xl37u3qa0fpX1mHwMKcbz3PIqVpSeh56vw5b+LUwP+2H/ANlTv+Fdf9RX/wAlv/sq9D8p/SmspXqMV3Rio7GElfc8/Hw6/wCoqP8AwH/+ypw+HeP+YoP/AAH/APsq71adW6qzWzM3Rg+hwQ+Hv/UTH/gP/wDZUf8ACv8A/qJj/wAB/wD7Ku9oo9tPuL2FPscIPh//ANRL8fI/+ypf+Ff/APUTH/fj/wCyruqKTqz7h7Cn2OGHgAD/AJiY/wC/H/2VL/wgI/6CQ/78f/ZV3FFT7ST6lKjDocP/AMIEO2o5/wC2H/2VA8BD/oI4/wC2H/2VdxRUPUtQSOI/4QEf9BL/AMl//sqafh+D/wAxMD/t3/8Asq7mndqmxSOC/wCFejtqf/kv/wDZU1vh7z/yFP8AyX/+yrvaKFoM4IfDwf8AQU/8l/8A7Kkb4d/9RMH/ALd//sq78UGmm0FjzqT4ezqMxX8TezRlf6msXVfDt/pI33EW+Ef8tY+V/wAR+NevUjKrqVYBlIwQe4qlNhZHisQzVqNK2vFWirpd4sluMWs33R/cbuKzoUrW9wIvLoq4I6KLiscc54rpvhjCJ/EzyNz5MDMPqSB/U1y8ldf8JRnW74/9MP8A2YV8lllNOoj0MTLQ9Tq1GgQc9arw8yCovEkt5BoGoy6XGJL9LeRrdCM7pApKj88V9PJnnxNAMD0INHDDsRXE6X4T0LUdNtryK51C6SZA8kn9pT7bg+rgPg4Pbt0x2q94FlyNWgt7ma60yC78qzmmcyHaEXeoc8uFfeMknoR2qSjelTY3HQ1XnvLa3mgiuLiKKWclYkdwpkIGSFB64AJ4q9cD93+NcJ8RQAmmtLMpiMzKtsLTz5XkCF1eHAJEi7CRkFTyD1FUmQ0bsfifQZJBHHrelvITtCrdxkkntjPWtD7XALxbQyr9paMyiPPJQEAn6ZI/OvALEz2l4NUk1i4866aGaa3it7R5TbudsPlny9rOpK7gMAl+Ccc9R4802JPFepX9nd6lFdwWdq2UvplCvNdBAu0NgAhD8vTkHFFwPXQwPcfnVK51fT7Yzia7hQwPGkgLfcaQ4QH3JIxXlvhOztrXU7K+jjWO5uoNaNxLnl9lygXJ9gTXM6eRrWgpfLMZ9D0xNMn1ONDIskgjgUMVYYOIyWkJHUxjFFwSPf7u8trOISXlxDbxk7Q8sgQE+mTWZF4r8PzGHyta09vN3bP9IXnacN37V5pdA6L8LYtRtTcSTX1413ALgSXQEbM5iQhtxX93tH1PNeeed9pjjjmluAttLtSO0SBZpS04hdV2pkEl1Iz13dwDSHY+pYZUmiSWF1kjcbldDkMPUHvT6p6LbG00eyt3JLxwqrEkHkDnkAA/gB9KuUDCnU2lFAAaSnUhFIAFJRRQAUUUUDMPxpCJdDZu8cisPzx/WuKtl+UZru/FIzoN19F/9CFcTbDgVcXZATBOKKmA4oquZAecydK7D4Sf8hq//wCuA/8AQhXHydK7D4Sf8hm//wCuA/8AQhXz2Vr3kdOJ2PVFOGB9KucOvHSqdPjkKdOle+12ONMwLzwgJLi9FlqNzY2N8we7tYOA7Z+Yo3WMt0Yr1HIw3zV0djaw2VpFbWsSQwRKEjjQYVVAwABThOvcGmNOf4RipsVdBct0UfWsTV9EtdVurea7Mp8iKaJFRyoHmqFZsjkMFyAQRjca1aStFFEXOYXwLo7tObxZboSECNXYIIECMixpsC4UBjjOTnBzkClvfBdje6lLeXF3fEzXUd1NGsgCSmLYYkYYztUoGAB6k5zmupFFFkM5bRPA+laNqyajaNdtcKLgHzbhnQiZw74QnavI/hA981JqPg7TtR1Oa6u3uHhmaN5rQPiGUouE3Lj5gOu0nGeo6V0tFSByreBtKOlzaar3SWDu0kVukxCW5ZGRhH6Ahm45Az8uOKrz/DnQpZrmXF0rzMzribiFyzOHjBHysrOxB7ZrsqKkEU9H0+HSdLtrC2LtFbxhA0jbmbHUse5J5NXKKKCgpRSUooAWmmlpKACiiigAooooAy/FH/IBu/8AdH/oQriLU/KPpXbeKP8AkA3f0H/oQriLX7o+lNLQC8OlFIp4FFFhnnDj5a7H4SjGs3//AFwH/oVcgw4rsfhOMaze/wDXAf8AoVeNlsbNXN8RLoeo0UVLFDuGT0r23ZHIlcioqr4l1rTvDWi3OqaqxjtbdQWKqWZiTgKoHJJJAA96o+EvE2n+Kra7exhvLS4tJfIubW9hMM0LbQwDKfUEEH0pcw+U2KQ57Y/EU5gVODSVSYhFDeq/98n/ABpcN6r/AN8n/GlFLTAbhvVf++T/AI0Yb1X/AL5P+NOoqRjcN/s/98n/ABo+b1X8j/jTqKVhob83qv5H/Gj5/Vf++T/jTqKTGNw3+z/3yf8AGjDf7P8A3yf8adRSAbhv9n/vk/40Yb/Z/wC+T/jTqKAG4b/Z/wC+T/jRhv8AZ/75P+NOooAQBupI+mP/AK9LmiigDJ8Vf8gC8/3R/wChCuGtW+UV3Hi048O3p/2V/wDQhXn9q/Aq4q4GoG4oqsHop8ornFsOK7D4VDGsXv8A1wH/AKFXJEcV1vwtIGtXY7mDP/jwrhwlHlVxVKl5Hp6DcwFcH4q8Z+IIPEGrWHhbTdPuIdDtUu9Qe+maMyBwzCOLaOu1Ty3GcV3sZ2uD71z3ij4faB4mvvteqQ3AnaLyJWt7mSDz488JJsI3ryeD6n1rrkOJxlvous/FjSrTUvEV5Nonh+4WO70/T9PkHnngNHLNIQRkcMFXgcZya7zwb4Ug8NLqEgvr7Ur6/mE1zeXrq0khVQij5VUABQAABXnni3TNd+F2hXN94N1PzdBTajadqKtOtirEL5sb53bV6lDxjPIrp/hL4nvdfi1uC81C11iLT7tYINVtIxHFdKY1c4AJGVLbTg4qSjurheAa4/x54ph8N6eiJJD/AGndkx2iTOFQNwN7seFRdwJJ9gMkiuxuD8oHvXJ+OY7680ttO0vTxc3F8rQfaJdvlWoI5kbJycdQADkjt1q09CGtTn38b2elatpxufENjqemy2wguZIHjLQTrz5xVeRG3Oey4HQEmovHnibX9M1SbT7CeCKOe382GdLJWaIHK/eknVWYFScbSMYyKt6foTjxRoi2+hvY6ZosUyG6l8n/AEglBGm0IxYgruPzAVU+Ivh7VZI7zUNPjt9QuXUx28Cacsjp8p27maUDGe+O/Q0AWfBXiXXtYnvUuBbSrZwK5UWwiMzNuCgSLPIoOUOeOMisjw7441jVNHuTez2mjTRIdQW6uQtyslu8k2xAilMEKgGckkLnvWt4M8GX/heOW5kvkvmmhzcwJblZJW2nCqxk2ryewAPtXP6f4O1LS/D2qLqWiQasLyDZaWuUmnsMKyxRbnwrKoP3gQQWPUc0AkdT4U1jxHqXhT7c0+iXV9JL5iKXMKRW5X5fM2l8PxnHQZxnjJ5Pwp8TNSufD1tdXl/4ekeUsxeaeZCoLnap2w7eBgde3PNdJrHh6507wJDpWhaXFDNdQRwahJZrGkgjWP8AeFem9zgovu2elYcPhjxDDcreW+lRw+H1uEuh4bF4u8uo4ffjYOQreVu2lhkt2KuUer2RuDaxG9WJLnaPMWJiyBu+CQCRU1QWU7XNnDM8Etu0qBzDLjfGSPutgkZHsanoYBRRRSAKKKKACiiigAooooAxvGJx4avj/sr/AOhCvNbeTAFei+OG2+Fr7two/wDHhXl0EmAK1hsJmuJeKKoCXjrRViMrrXQfD+6W18TRq5AWdGi59eCP1Fc/TGLo6yRkq6ncpB5BHStYUdLI82Vazue+1PFKCMP19a5Dwl4qt9XgSC6dYtQUYZTwJPdf8K6eueUbaM74TUldF11V1KuoZWGCCMgiooo4LWIRwRpFGOiIoUfkKgyfeis+U05h7MWbJpKKKskKKKKBhRRRSYBRRRzSAKKO9FA7hRRRzUjCijB9KKACijmg8GgAooqjq2qWmk2rXF9MsaAcAnlvYDuadgOf+Jt4sGgLBn57iUDHsOT/AE/OvNInqfxHrc2vam1y4KQqNkUf91f8TVOM4roirIhu5cD0VAG4opgMzTW6UZozXoqNjwOYhePkEcEcgjtWlaeItas1CwajPtHQOd+P++s1zep60ls5ihUSSDgnPArJk1u8c8Oq+wUV6NHJ61dczVl5nJPMadJ2T1PRl8Za8P8Al7U/WJf8Kd/wmmvf8/Kf9+l/wrzT+2Lz/nr/AOOij+2Lz/nr/wCOitXw9U8if7Zj5npY8aa//wA/Kf8Afpf8KX/hNNf/AOflP+/S/wCFeZ/2xef89f8Ax0VJHrl4p+Yo49CoqZcP1bXVilnMe7PSP+E01/8A5+U/79L/AIUHxpr3/PzH/wB+l/wrkNL1aK8by3Hly9hnIatMj1ryK+ElQlyVI2Z6lDE+2jzQldG3/wAJrr//AD9J/wB+l/wpp8ba+P8Al6T/AL9L/hWIwpjVzOEex2xlLqbZ8b+IP+fqP/vyv+FJ/wAJx4g/5+o/+/K/4VgsKbUOCN0zoD458QdrqP8A78r/AIUn/CdeIf8An6j/AO/K/wCFc8aKXKijoP8AhOvEP/P1H/35X/Cj/hOvEP8Az9x/9+V/wrnqTH0pcqC50P8AwnfiH/n7j/78r/hSf8J14h/5+4/+/K/4Vz+PpRto5UF2dCPHXiH/AJ+o/wDvyv8AhR/wnXiLtdoP+2Kf4Vz2Keq0cqC7Nmbxj4hmXDai6g/3EVf5CsieW4u5vNu5pJpO7SMWNCrT1FOyC4sa7RU61GKeDQSSUUzNFIBpNUdYumtrF2Q4dvlU1cbisbxMf9FiH+3/AENe/gqaqV4xZ8xipOFKTRzZ61Na2s95MIrSF5ZD/CgzUDHCk19HfCXw7a6Z4ct7oRqbu4G95COa+kzTMVl9HntdvRI8rLsC8bU5b2R4Lf6Bqunx+ZeWM0cf97Gf5Vl9sivsS7tYbq3eKdFeNxggjrXh2l+C7Q/FSewdc2MI89U+ucD9K8zAcQxrxm6sbOKv6no4zI3SlH2bum7HBWfhzWLyDzrbT53i6524rOnglt5THPE8cg6qwwa+woYUhjVI0VUUYAA4Fea/Grw7bXOgvqccapdwHO4cZWscFxK69dUqkLJ7GmLyFUqLqQlqjwRWKsGUkEHIIrttPuftNlFKfvEfN9a4fOQK6nw8x/s7H+2a7uIKadBT6pnJkk2q7h0aNUmmMaaxpmfevjT65LQU0lN3UmaRolYdQaYW9KTNKwx+aKZmjNFgH0ZpmaUUmgH05elMBp6mkMcOtPqMU8GgkfRmm0opCH5NFNzRSENY81jeJT/o0f8Av/0rWLc1keJDm2j/AN7+lfRZb/vMD5jGfwZHOsMivdPhL44sn0mLS9SmSC5h4VnOA4rwuvRfhz8On8RQDUNRd4bPP7sL1evczunh6mG/2h2S2fmcOUVK0K/7lXPev7TsSOLqE/8AAhXnen3tqPi3fSG4jCG1UBt3BOTWkPhfogUc3PH/AE2b/GuNsvBOmSfES70tmn+zxwLIvznOST3618lg6eEtU5Zv4X09PM+nxM8ReF4rfueyHVLELk3UIA/2xXknxi8aWl1YHSNMlWZ3OZJFOQB6V1L/AAu0RlI3XIz/ANNm/wAa8t+I3gKXwuRdWrtPYu2CzdVPvW+T0MC8TH3230TVjDNKuLjQdoq3U4ToK6XQTjT/APgZrm+1dDoZ/wBC/wCBGvpM/wD91+aPCyP/AHr5M02NMJpN1MY18QfZpD6TNMzRuoKH5pCaZkmkzQA/NLnNMyaUGgB9FIKWkwHr1p4pgpwNSDH5opuaWgRIDS5qPNOBqSR+aKbmigCNjzWR4i/494/9/wDoa1TWfrcfmWJI6qQa+gwE1HEwb7nzWKi5UZJHMyfcIr6i+GdzBc+D7A2xXCptYDsR1r5fNdF4R8X6n4Xlb7E4eBuWifkV7udZfPHUFGm9U7nn5RjY4Sq3PZn1OTgV5RpWrWrfGS9RZB80IiBzwWBJIrlNY+LWrX1m0FtAltvGGfqfwrz6K6niuxdJM4uA2/zM85rx8v4frRhU9s7OSsj1sbndJyh7LWzufYlcJ8ZLmCHwZcJORukO1AfWvPNO+L+rW9oIrm2jnkUYDjjP1rj/ABV4o1HxLdCXUJBsX7ka8AVhgOH8TTxEZ1dIxZpjc6oToONPVswx0Fb2inFn/wACNYNdBpyGOzQHgn5vzr2+IJpYZR7s8vIYOWIcuyLham03NJmviz7IfSZpuaM0AOzRmm5paAHUUlLQA8U4UxelPpMBafUeaXNSJsfmnA1FmnbqBMkpQaaDS0gHZoptFIRFnFI2CCCAQRgj1pm6k3Yr0r21PJULmLfaa8bloQXj9B1FZzKVPII+tdUWppIPYV7FDPalOKjUjc4KmSwqO8JWOWorpm2+g/Km/L/dFb/6xL/n3+P/AACFw8/+fn4f8E5unKpb7oJPsK6Lg9hRwOmKmXEWmlP8S48Pa61PwMuysGZg8wwo5C+ta2aZupM14WMxtXFz5qjPdweCp4SPLAkzR1qPdRurjOsf0ozTM0uaAH0ZpKVelIB1OFNFKKAHrTqZmlqWwY7NFNpc0iWh1LTM06gEPBpwNR04GkDJKKbmikIqUhoor0HscERDTWoorE6YjGo7UUVJrED1pGoopFiUtFFDGFFFFIApe5oooAeOlKvSiigBwpR1oopALSr1ooqQHUUUUhBQKKKAHiloopALRRRQB//Z");

},
29502(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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