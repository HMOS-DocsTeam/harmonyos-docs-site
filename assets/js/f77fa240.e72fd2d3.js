"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["652497"], {
299963(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_codelinter_correctness_ide_audio_interrupt_check_ide_audio_interrupt_check_md_f77_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-codelinter-correctness-ide-audio-interrupt-check-ide-audio-interrupt-check-md-f77.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_codelinter_correctness_ide_audio_interrupt_check_ide_audio_interrupt_check_md_f77_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide-audio-interrupt-check/ide-audio-interrupt-check","title":"@correctness/audio-interrupt-check","description":"建议应用在播放或录制音频的场景中，监听音频焦点中断回调事件，并响应。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide-audio-interrupt-check/ide-audio-interrupt-check.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide-audio-interrupt-check","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide-audio-interrupt-check/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide-audio-interrupt-check/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"@correctness/audio-interrupt-check","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-audio-interrupt-check","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@correctness/avsession-buttons-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide-avsession-buttons-check/"},"next":{"title":"@correctness/audio-pause-or-mute-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide-audio-pause-or-mute-check/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-correctness/ide-audio-interrupt-check/ide-audio-interrupt-check.md


const frontMatter = {
	title: '@correctness/audio-interrupt-check',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-audio-interrupt-check',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@correctness/audio-interrupt-check';

const assets = {

};



const toc = [{
  "value": "规则配置",
  "id": "规则配置",
  "level": 2
}, {
  "value": "选项",
  "id": "选项",
  "level": 2
}, {
  "value": "正例",
  "id": "正例",
  "level": 2
}, {
  "value": "反例",
  "id": "反例",
  "level": 2
}, {
  "value": "规则集",
  "id": "规则集",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "correctnessaudio-interrupt-check",
        children: "@correctness/audio-interrupt-check"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议应用在播放或录制音频的场景中，监听音频焦点中断回调事件，并响应。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["改善", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/audio-playback-concurrency#%E5%A4%84%E7%90%86%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9%E5%8F%98%E5%8C%96",
        children: "音视频播放"
      }), "体验场景下，建议优先修改。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@correctness/audio-interrupt-check\": \"error\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该规则无需配置额外选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正例",
      children: "正例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\nimport { media } from '@kit.MediaKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// An identifier specifying whether the audio stream is being played. In actual development, this parameter corresponds to the module related to the audio playback state.\nlet isPlay: boolean;\n// An identifier specifying whether to duck the volume down. In actual development, this parameter corresponds to the module related to the audio volume.\nlet isDucked: boolean;\n// An identifier specifying whether the start operation is successful.\nlet started: boolean;\nmedia.createAVPlayer((error: BusinessError, player) => {\n  if (player) {\n    console.info('Succeeded in creating AVPlayer');\n        player.on('audioInterrupt', (interruptEvent: audio.InterruptEvent)=>{\n      // When audio focus changes, the AudioRenderer receives the interruptEvent callback and performs processing based on the content in the callback.\n      // 1. (Optional) The AudioRenderer reads the value of interruptEvent.forceType to see whether the system has forcibly performed the operation.\n      // Note: In the default focus strategy, INTERRUPT_HINT_RESUME maps to the force type INTERRUPT_SHARE, and others map to INTERRUPT_FORCE. Therefore, the value of forceType does not need to be checked.\n      // 2. (Mandatory) The AudioRenderer then reads the value of interruptEvent.hintType and performs corresponding processing.\n      if (interruptEvent.forceType === audio.InterruptForceType.INTERRUPT_FORCE) {\n        // If the value of interruptEvent.forceType is INTERRUPT_FORCE, the system has performed audio-related processing, and the application needs to update its state and make adjustments accordingly.\n        switch (interruptEvent.hintType) {\n          case audio.InterruptHint.INTERRUPT_HINT_PAUSE:\n            // The system has paused the audio stream (focus is temporarily lost). To ensure state consistency, the application needs to switch to the audio paused state.\n            // Temporarily losing focus: After other audio streams release focus, the current audio stream will receive the audio focus event corresponding to resume and automatically resume the playback.\n            // A simplified processing indicating several operations for switching the application to the audio paused state.\n            isPlay = false;\n            break;\n          case audio.InterruptHint.INTERRUPT_HINT_STOP:\n            // The system has stopped the audio stream (focus is permanently lost). To ensure state consistency, the application needs to switch to the audio paused state.\n            // Permanently losing focus: No audio focus event will be received. The user must manually trigger the operation to resume playback.\n            // A simplified processing indicating several operations for switching the application to the audio paused state.\n            isPlay = false;\n            break;\n          case audio.InterruptHint.INTERRUPT_HINT_DUCK:\n            // The system has ducked the volume down (to 20% of the normal volume by default).\n            // A simplified processing indicating several operations for switching the application to the volume decreased state.\n            isDucked = true;\n            break;\n          case audio.InterruptHint.INTERRUPT_HINT_UNDUCK:\n            // The system has restored the audio volume to normal.\n            // A simplified processing indicating several operations for switching the application to the normal volume state.\n            isDucked = false;\n            break;\n          default:\n            break;\n        }\n      } else if (interruptEvent.forceType === audio.InterruptForceType.INTERRUPT_SHARE) {\n        // If the value of interruptEvent.forceType is INTERRUPT_SHARE, the application can take action or ignore as required.\n        switch (interruptEvent.hintType) {\n          case audio.InterruptHint.INTERRUPT_HINT_RESUME:\n            // The paused audio stream can be played. It is recommended that the application continue to play the audio stream and switch to the audio playing state.\n            // If the application does not want to continue the playback, it can ignore the event.\n            // To continue the playback, the application needs to call start(), and use the identifier variable started to record the execution result of start().\n            isPlay = true;\n            started = true;\n            break;\n          default:\n            break;\n        }\n      }\n    });\n    player.on('audioOutputDeviceChangeWithInfo', ()=>{\n        console.error(`createAVPlayer audioOutputDeviceChangeWithInfo`);\n    });\n  } else {\n    console.error(`Failed to create AVPlayer, error message:${error.message}`);\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { media } from '@kit.MediaKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nexport class AudioInterruptReport {\n  demoCallBack() {\n    media.createAVPlayer((error: BusinessError, player) => {\n      if (player) {\n        player.on('audioOutputDeviceChangeWithInfo', ()=>{\n            console.error(`createAudioRenderer outputDeviceChangeWithInfo`);\n        })\n        console.info('Succeeded in creating AVPlayer');\n      } else {\n        console.error(`Failed to create AVPlayer, error message:${error.message}`);\n      }\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则集",
      children: "规则集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "plugin:@correctness/all\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Code Linter代码检查规则的配置指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-code-edit/ide-code-check/ide-code-linter",
        children: "Code Linter代码检查"
      }), "。"]
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