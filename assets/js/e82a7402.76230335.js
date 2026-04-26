"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["697201"], {
780700(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_page_interaction_web_drag_web_drag_md_e82_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-page-interaction-web-drag-web-drag-md-e82.json
var site_docs_arkweb_web_manage_page_interaction_web_drag_web_drag_md_e82_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-page-interaction/web-drag/web-drag","title":"使用Web组件的拖拽功能与网页交互","description":"ArkWeb的拖拽功能使应用能够在网页中实现元素的拖放，用户可以长按可拖拽的元素，将其拖至可放置的元素上，然后松手完成放置。ArkWeb在网页内容中的拖拽功能满足H5标准。","source":"@site/docs/arkweb/web-manage-page-interaction/web-drag/web-drag.md","sourceDirName":"arkweb/web-manage-page-interaction/web-drag","slug":"/arkweb/web-manage-page-interaction/web-drag/","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-drag/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"使用Web组件的拖拽功能与网页交互","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-drag","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Web组件显示网页弹框","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-dialog/"},"next":{"title":"解决Web组件本地资源跨域问题","permalink":"/harmonyos-docs-site/arkweb/web-manage-cyber-security-privacy/web-cross-origin/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-page-interaction/web-drag/web-drag.md


const frontMatter = {
	title: '使用Web组件的拖拽功能与网页交互',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-drag',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Web组件的拖拽功能与网页交互';

const assets = {

};



const toc = [{
  "value": "将网页内容拖拽至其他应用",
  "id": "将网页内容拖拽至其他应用",
  "level": 2
}, {
  "value": "拖拽事件通知",
  "id": "拖拽事件通知",
  "level": 2
}, {
  "value": "在ArkTS侧实现拖拽相关逻辑",
  "id": "在arkts侧实现拖拽相关逻辑",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "为什么H5设置的拖拽事件没有触发？",
  "id": "为什么h5设置的拖拽事件没有触发",
  "level": 3
}, {
  "value": "如何禁用web组件拖拽能力",
  "id": "如何禁用web组件拖拽能力",
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "使用web组件的拖拽功能与网页交互",
        children: "使用Web组件的拖拽功能与网页交互"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb的拖拽功能使应用能够在网页中实现元素的拖放，用户可以长按可拖拽的元素，将其拖至可放置的元素上，然后松手完成放置。ArkWeb在网页内容中的拖拽功能满足H5标准。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "将网页内容拖拽至其他应用",
      children: "将网页内容拖拽至其他应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb目前支持以下四种数据格式。应用按照 H5 标准设置这些格式的拖拽数据，即可将内容拖拽到其他应用中。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "数据格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "text/plain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "text/uri-list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "链接"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "text/html"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTML格式"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拖拽事件通知",
      children: "拖拽事件通知"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb拖拽不同于ArkUI的组件级拖拽，主要针对网页内容的拖拽，因此仅支持部分拖拽事件的监听方法。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "监听方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragstart",
              children: "onDragStart"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不建议使用此方法，否则会影响Web组件的拖拽行为，造成拖拽逻辑不符合预期，如无法触发H5拖拽事件监听，预览图无法创建或预览图错误，拖拽数据无法预置等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragenter",
              children: "onDragEnter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽的元素进入Web区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragmove",
              children: "onDragMove"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽的元素在Web区域移动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragleave",
              children: "onDragLeave"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽的元素离开Web区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondrop15",
              children: "onDrop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拖拽的元素落入Web区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragend10",
              children: "onDragEnd"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由Web发起的拖拽元素结束拖拽。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在arkts侧实现拖拽相关逻辑",
      children: "在ArkTS侧实现拖拽相关逻辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在多数情况下，应用在H5端实现的拖拽功能能够满足需求。如有需要，请参考以下案例，实现在ArkTS端进行拖拽数据读取等操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkweb/web-use-frontend-page-js/web-app-page-data-channel",
          children: "建立应用侧与前端页面数据通道"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在onDrop方法中，做简单逻辑，例如暂存一些关键数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在ArkTS侧接收消息的方法中，添加应用处理逻辑，可以进行耗时任务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于ArkTS侧的onDrop方法会早于H5中放置事件的处理方法（H5示例中的droppable.addEventListener('drop')）执行，若在onDrop方法中进行页面跳转等操作，将导致H5中的drop方法无法正确执行，产生不符合预期的结果。因此，应建立双向通信机制，在H5中的drop方法执行完毕后，通知ArkTS侧执行相应的业务逻辑，以确保业务逻辑的预期执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb'\nimport { unifiedDataChannel, uniformTypeDescriptor } from '@kit.ArkData';\n\n@Entry\n@Component\nstruct DragDrop {\n  private controller: webview.WebviewController = new webview.WebviewController()\n  @State ports: Array<webview.WebMessagePort> = []\n  @State dragData: Array<unifiedDataChannel.UnifiedRecord> = []\n\n  build() {\n    Column() {\n      Web({\n        src: $rawfile('drag.html'),\n        controller: this.controller,\n      }).onPageEnd((event) => {\n        // 注册通信端口\n        this.ports = this.controller.createWebMessagePorts();\n        this.ports[1].onMessageEvent((result: webview.WebMessage) => {\n          // ArkTS收到html传来的数据后的处理，可以先打日志确认下消息，双端的消息格式可以自己约定，能唯一识别就行\n          console.info('ETS receive Message: typeof (result) = ' + typeof (result) + ';' + result);\n          // 这里添加result中消息接收到后的处理,可进行耗时任务\n        });\n        console.info('ETS postMessage set h5port ');\n        // 完成通信端口注册后，向前端发送注册完成消息，完成双向的端口绑定\n        this.controller.postMessage('__init_port__', [this.ports[0]], '*');\n      })// onDrop 可做简单逻辑，例如暂存一些关键数据\n        .onDrop((dragEvent: DragEvent) => {\n          console.info('ETS onDrop!')\n          let data: UnifiedData = dragEvent.getData();\n          if(!data) {\n            return false;\n          }\n          let uriArr: unifiedDataChannel.UnifiedRecord[] = data.getRecords();\n          if (!uriArr || uriArr.length <= 0) {\n            return false;\n          }\n          // 可以遍历records取数据暂存，或者以其他方式暂存数据\n          for (let i = 0; i < uriArr.length; ++i) {\n            if (uriArr[i].getType() === uniformTypeDescriptor.UniformDataType.PLAIN_TEXT) {\n              let plainText = uriArr[i] as unifiedDataChannel.PlainText;\n              if (plainText.textContent) {\n                console.info('plainText.textContent: ', plainText.textContent);\n              }\n            }\n          }\n          return true\n        })\n    }\n\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "H5示例:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<html lang=\"zh-CN\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n    <title>H5 拖拽 Demo</title>\n</head>\n<style>\n    body {\n      font-family: Arial, sans-serif;\n      padding: 20px;\n    }\n\n    .draggable {\n      width: 100px;\n      height: 100px;\n      background-color: #4CAF50;\n      color: white;\n      text-align: center;\n      line-height: 100px;\n      margin-bottom: 20px;\n      cursor: grab;\n    }\n\n    .droppable {\n      width: 300px;\n      height: 150px;\n      border: 2px dashed #999;\n      background-color: #f0f0f0;\n      text-align: center;\n      line-height: 150px;\n      font-size: 16px;\n    }\n\n    .success {\n      background-color: #4CAF50;\n      color: white;\n    }\n</style>\n<body>\n\n<h2>H5 拖拽 Demo</h2>\n\n<div id=\"draggable\" class=\"draggable\" draggable=\"true\">可拖拽元素</div>\n\n<div id=\"droppable\" class=\"droppable\">请将方块拖到这里</div>\n\n<script>\n    const draggable = document.getElementById('draggable');\n    const droppable = document.getElementById('droppable');\n\n    // 拖拽开始事件\n    draggable.addEventListener('dragstart', function (e) {\n      e.dataTransfer.setData('text/plain', this.id);\n      this.style.opacity = '0.4';\n    });\n\n    // 拖拽结束事件\n    draggable.addEventListener('dragend', function (e) {\n      this.style.opacity = '1';\n    });\n\n    // 拖入目标区域时触发\n    droppable.addEventListener('dragover', function (e) {\n      e.preventDefault(); // 必须调用，否则无法触发 drop 事件\n    });\n\n    // 放置事件\n    droppable.addEventListener('drop', function (e) {\n      e.preventDefault();\n      const data = e.dataTransfer.getData('text/plain');\n      // 传入ArkTS\n      PostMsgToArkTS(data);\n      const draggableEl = document.getElementById(data);\n      this.appendChild(draggableEl);\n      this.classList.add('success');\n      this.textContent = \"放置成功！\";\n    });\n\n    // scriptproxy端口在js侧设置\n    var h5Port;\n    window.addEventListener('message', function (event) {\n    console.info(\"H5 receive settingPort message\");\n        if (event.data == '__init_port__') {\n            if (event.ports[0] != null) {\n                console.info(\"H5 set h5Port \" + event.ports[0]);\n                h5Port = event.ports[0];\n            }\n        }\n    });\n\n    // 通过scriptproxy方式,发送数据到ArkTS侧的实现\n    function PostMsgToArkTS(data) {\n        console.info(\"H5 PostMsgToArkTS, h5Port \" + h5Port);\n        if (h5Port) {\n          h5Port.postMessage(data);\n        } else {\n          console.error(\"h5Port is null, Please initialize first\");\n        }\n    }\n</script>\n\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(463200)/* ["default"] */.A) + "",
        width: "633",
        height: "1104"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日志打印："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(265027)/* ["default"] */.A) + "",
        width: "1300",
        height: "181"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "为什么h5设置的拖拽事件没有触发",
      children: "为什么H5设置的拖拽事件没有触发？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请检查相关CSS资源是否正常设置，因为有些网页UA做了判断，针对特定设备的UA才会进行CSS样式设置。可以考虑在Web组件设置自定义UA解决这种问题，例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb'\n\n@Entry\n@Component\nstruct Index {\n  private webController: webview.WebviewController = new webview.WebviewController()\n  build(){\n    Column() {\n      Web({\n        src: 'example.com',\n        controller: this.webController,\n      }).onControllerAttached(() => {\n        // 特定UA\n        let customUA = 'android'\n        this.webController.setCustomUserAgent(this.webController.getUserAgent() + customUA)\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如何禁用web组件拖拽能力",
      children: "如何禁用web组件拖拽能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在未进行特殊配置的情况下，web组件默认支持拖拽功能。如果不需要拖拽功能，可以参考以下示例禁用拖拽。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "禁用拖拽方式主要分为两类："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网页侧通过W3C CSS、JS进行拦截/禁用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用侧通过Web组件runJavaScriptExt接口注入JS进行拦截/禁用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "H5示例1:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<html lang=\"zh-CN\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n    <title>w3c通用属性/方法禁用拖拽</title>\n</head>\n<style>\n    body {\n      font-family: Arial, sans-serif;\n      padding: 20px;\n    }\n    .normal {\n      width: 100px;\n      height: 100px;\n      margin-bottom: 40px;\n    }\n    .undraggable {\n      width: 100px;\n      height: 100px;\n      margin-bottom: 40px;\n      -webkit-user-drag: none;\n    }\n\n</style>\n<body>\n\n<h2>w3c通用属性/方法禁用拖拽</h2>\n\n<!--一，通过显式设置draggable样式为false来禁用该元素的拖拽-->\n<!--仅对img或div这种整个元素节点的拖拽行为生效，对节点中选中的文字不生效-->\n<div>draggable设置禁用拖拽</div>\n<img class=\"normal\" draggable=\"false\" src=\"./any-pic.png\"><br>\n\n<!--二，通过引用一个样式class，class中设置-webkit-user-drag为none来禁用拖拽-->\n<!--生效范围同方式一-->\n<div>-webkit-user-drag设置禁用拖拽</div>\n<img class=\"undraggable\" src=\"./any-pic.png\"><br>\n\n<!--三，通过对设置ondragstart事件监听并preventDefault来禁用拖拽-->\n<!--对任意内容的拖拽行为都生效-->\n<!--可通过扩大监听器监听的范围来禁用更大区域内的拖拽，比如监听在window上可实现整个web组件的拖拽禁用-->\n<!--由于生效节点较靠后，拖拽事实上已进行部分，会对菜单功能产生影响-->\n<div>ondragstart设置禁用拖拽</div>\n<div ondragstart=\"dragstartHandler(event)\">\n    <img class=\"normal\" src=\"./any-pic.png\">\n    <p>\n        此段文本用于验证ondragstart脚本对选中文本的禁用拖拽效果\n    </p>\n</div>\n\n<script>\n    function dragstartHandler(event) {\n        console.info('forbid drag when drag start');\n        event.preventDefault();\n    }\n</script>\n\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(388284)/* ["default"] */.A) + "",
        width: "574",
        height: "1178"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "html示例2:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<html lang=\"zh-CN\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n    <title>runJavascriptExt注入js禁用拖拽</title>\n</head>\n<style>\n    body {\n      font-family: Arial, sans-serif;\n      padding: 20px;\n    }\n    .normal {\n      width: 100px;\n      height: 100px;\n      margin-bottom: 40px;\n    }\n</style>\n<body>\n\n<h2>runJavascriptExt注入js禁用拖拽</h2>\n\n<div>\n    <img class=\"normal\" src=\"./any-pic.png\">\n    <p>\n        此段文本用于验证runJavascriptExt注入js对选中文本的禁止拖拽效果\n    </p>\n</div>\n\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(158556)/* ["default"] */.A) + "",
        width: "395",
        height: "514"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS示例:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct Index {\n  webViewController: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('w3cDemoPage')\n        .onClick(() => {\n          this.webViewController.loadUrl($rawfile('w3c-forbid.html'));\n        })\n      Button('runJsDemoPage')\n        .onClick(() => {\n          this.webViewController.loadUrl($rawfile('runJs-forbid.html'));\n        })\n      Button('runJsForbidDrag')\n        .onClick(() => {\n          try {\n            // 使用runJavaScriptExt执行脚本添加dragstart事件监听器去禁用拖拽\n            this.webViewController.runJavaScriptExt(\n              'window.addEventListener(\\'dragstart\\', (ev) => {\\n' +\n                'ev.preventDefault();\\n' +\n                '});',\n              (error, result) => {\n                if (error) {\n                  console.error(`run JavaScript error, ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`)\n                  return;\n                }\n              });\n          } catch (resError) {\n            console.error(`ErrorCode: ${(resError as BusinessError).code},  Message: ${(resError as BusinessError).message}`);\n          }\n        })\n      Web({\n        src: $rawfile('w3c-forbid.html'),\n        controller: this.webViewController\n      })\n        .domStorageAccess(true)\n        .javaScriptAccess(true)\n        .fileAccess(true)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
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
463200(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798574-f15e64d4b8c30edaa8f89b4ff6e584f8.gif");

},
388284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958224-1362be095240168a71194cbf884c508d.gif");

},
265027(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438269-c1cf83a805a9c90319c6270cbacadeae.png");

},
158556(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478225-53ab779d14755ba719982586ba07ef92.gif");

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