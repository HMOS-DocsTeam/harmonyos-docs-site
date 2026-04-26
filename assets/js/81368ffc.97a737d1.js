"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["852083"], {
154737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_performance_optimization_audio_workgroup_audio_workgroup_md_813_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-performance-optimization-audio-workgroup-audio-workgroup-md-813.json
var site_docs_audio_kit_audio_performance_optimization_audio_workgroup_audio_workgroup_md_813_namespaceObject = JSON.parse('{"id":"audio-kit/audio-performance-optimization/audio-workgroup/audio-workgroup","title":"音频工作组管理","description":"音频工作组是一套通过标记来帮助系统识别应用内音频关键线程的接口，系统通过应用提供的关键音频线程以及工作组运行信息可以让音频线程的运行状态更加健康。","source":"@site/docs/audio-kit/audio-performance-optimization/audio-workgroup/audio-workgroup.md","sourceDirName":"audio-kit/audio-performance-optimization/audio-workgroup","slug":"/audio-kit/audio-performance-optimization/audio-workgroup/","permalink":"/harmonyos-docs-site/audio-kit/audio-performance-optimization/audio-workgroup/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"音频工作组管理","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-workgroup","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"提升音频性能体验","permalink":"/harmonyos-docs-site/audio-kit/audio-performance-optimization/audio-performance/"},"next":{"title":"音频编创开发概述(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/audio-production-creation/audio-suite/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-performance-optimization/audio-workgroup/audio-workgroup.md


const frontMatter = {
	title: '音频工作组管理',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-workgroup',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '音频工作组管理';

const assets = {

};



const toc = [{
  "value": "使用说明",
  "id": "使用说明",
  "level": 2
}, {
  "value": "创建音频工作组示例",
  "id": "创建音频工作组示例",
  "level": 3
}, {
  "value": "创建音频工作组并将关键线程加入音频工作组",
  "id": "创建音频工作组并将关键线程加入音频工作组",
  "level": 3
}, {
  "value": "通知系统音频工作组的开始与结束",
  "id": "通知系统音频工作组的开始与结束",
  "level": 3
}, {
  "value": "工作组任务结束后进行清理",
  "id": "工作组任务结束后进行清理",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "音频工作组管理",
        children: "音频工作组管理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频工作组是一套通过标记来帮助系统识别应用内音频关键线程的接口，系统通过应用提供的关键音频线程以及工作组运行信息可以让音频线程的运行状态更加健康。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioRendererSampleC",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于播放音频类应用，开发者需要先创建音频工作组，再将工作组运行信息的周期性告知系统。当工作结束后，需要对音频工作组进行清理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建音频工作组示例",
      children: "创建音频工作组示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者在使用OH_AudioWorkgroup的API前，需要先用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-resource-manager-h/capi-native-audio-resource-manager-h#oh_audiomanager_getaudioresourcemanager",
        children: "OH_AudioManager_GetAudioResourceManager"
      }), "获取OH_AudioResourceManager实例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <ohaudio/native_audio_resource_manager.h>\n// ...\nOH_AudioResourceManager *resMgr;\n// ...\n    OH_AudioManager_GetAudioResourceManager(&resMgr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建音频工作组并将关键线程加入音频工作组",
      children: "创建音频工作组并将关键线程加入音频工作组"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者先使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-resource-manager-h/capi-native-audio-resource-manager-h#oh_audioresourcemanager_createworkgroup",
        children: "OH_AudioResourceManager_CreateWorkgroup"
      }), "创建一个新的音频工作组，再使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-resource-manager-h/capi-native-audio-resource-manager-h#oh_audioworkgroup_addcurrentthread",
        children: "OH_AudioWorkgroup_AddCurrentThread"
      }), "将关键线程加入音频工作组。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <chrono>\n// ...\nint32_t g_tokenId;\nOH_AudioWorkgroup *grp = nullptr;\n// ...\n    OH_AudioResourceManager_CreateWorkgroup(resMgr, \"workgroup\", &grp);\n    OH_AudioWorkgroup_AddCurrentThread(grp, &g_tokenId);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通知系统音频工作组的开始与结束",
      children: "通知系统音频工作组的开始与结束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当音频工作组开始一个工作周期时，开发者可以通知系统任务的开始时间和预期完成时间。在音频工作组完成当前周期内的工作时，开发者应再次通知系统任务已结束。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "constexpr static uint64_t intervalMs = 20;\nbool threadShouldRun = true;\n\nwhile (threadShouldRun) {\n    auto now = std::chrono::system_clock::now().time_since_epoch();\n    auto startTimeMs = std::chrono::duration_cast<std::chrono::milliseconds>(now).count();\n    OH_AudioWorkgroup_Start(grp, startTimeMs, startTimeMs + intervalMs);\n    threadShouldRun = false;\n    // 应用音频数据处理。\n    OH_AudioWorkgroup_Stop(grp);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "工作组任务结束后进行清理",
      children: "工作组任务结束后进行清理"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 当线程已经不需要接入分组时，将其从工作组中移除。\nOH_AudioWorkgroup_RemoveThread(grp, g_tokenId);\n\nOH_AudioResourceManager_ReleaseWorkgroup(resMgr, grp);\ngrp = nullptr;\n"
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