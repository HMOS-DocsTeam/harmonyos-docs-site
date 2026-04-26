"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["546393"], {
751946(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_recording_mic_management_mic_management_md_393_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-recording-mic-management-mic-management-md-393.json
var site_docs_audio_kit_audio_recording_mic_management_mic_management_md_393_namespaceObject = JSON.parse('{"id":"audio-kit/audio-recording/mic-management/mic-management","title":"管理麦克风静音状态","description":"因为在录制过程中需要使用麦克风录制相关音频数据，所以建议开发者在调用录制接口前查询麦克风状态，并在录制过程中监听麦克风的状态变化，避免影响录制效果。","source":"@site/docs/audio-kit/audio-recording/mic-management/mic-management.md","sourceDirName":"audio-kit/audio-recording/mic-management","slug":"/audio-kit/audio-recording/mic-management/","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/mic-management/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"管理麦克风静音状态","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mic-management","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"低时延音频录制(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/audio-fast-recording/"},"next":{"title":"查询和监听其他应用录制状态","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/audio-recording-stream-management/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-recording/mic-management/mic-management.md


const frontMatter = {
	title: '管理麦克风静音状态',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mic-management',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '管理麦克风静音状态';

const assets = {

};



const toc = [{
  "value": "开发步骤及注意事项",
  "id": "开发步骤及注意事项",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "管理麦克风静音状态",
        children: "管理麦克风静音状态"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因为在录制过程中需要使用麦克风录制相关音频数据，所以建议开发者在调用录制接口前查询麦克风状态，并在录制过程中监听麦克风的状态变化，避免影响录制效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在音频录制过程中，用户可以将麦克风静音，此时录音过程正常进行，录制生成的数据文件的大小随录制时长递增，但写入文件的数据均为0，即无声数据（空白数据）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录音不支持音量调节。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioCaptureSampleJS",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在AudioVolumeGroupManager中提供了管理麦克风状态的方法，接口的详细说明请参考音量API文档", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiovolumegroupmanager/arkts-apis-audio-audiovolumegroupmanager",
        children: "AudioVolumeGroupManager"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建audioVolumeGroupManager对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { audio } from '@kit.AudioKit';\n\nlet audioVolumeGroupManager: audio.AudioVolumeGroupManager;\n// 创建audioVolumeGroupManager对象。\nasync function loadVolumeGroupManager(updateCallback?: (msg: string, isError: boolean) => void): Promise<void> {\n  const groupid = audio.DEFAULT_VOLUME_GROUP_ID;\n  audioVolumeGroupManager = await audio.getAudioManager().getVolumeManager().getVolumeGroupManager(groupid);\n  console.info('audioVolumeGroupManager create success.');\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiovolumegroupmanager/arkts-apis-audio-audiovolumegroupmanager#onmicstatechange9",
            children: "on('micStateChange')"
          }), "监听麦克风状态变化，当麦克风静音状态发生变化时将通知应用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["目前此订阅接口在单进程多", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiomanager/arkts-apis-audio-audiomanager",
            children: "AudioManager"
          }), "实例的使用场景下，仅最后一个实例的订阅生效，其他实例的订阅会被覆盖（即使最后一个实例没有进行订阅），因此推荐使用单一AudioManager实例进行开发。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 监听麦克风状态变化。\nasync function on() {\n  audioVolumeGroupManager.on('micStateChange', (micStateChange: audio.MicStateChangeEvent) => {\n    console.info(`Current microphone status is: ${micStateChange.mute} `);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiovolumegroupmanager/arkts-apis-audio-audiovolumegroupmanager#ismicrophonemute9",
            children: "isMicrophoneMute"
          }), "查询麦克风当前静音状态，返回true为静音，false为非静音。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 查询麦克风是否静音。\nasync function isMicrophoneMute(updateCallback?: (msg: string, isError: boolean) => void): Promise<void> {\n  await audioVolumeGroupManager.isMicrophoneMute().then((value: boolean) => {\n    console.info(`isMicrophoneMute is: ${value}.`);\n    // ...\n  });\n}\n"
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