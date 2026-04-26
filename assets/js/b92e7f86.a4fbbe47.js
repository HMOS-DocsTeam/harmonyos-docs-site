"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["19"], {
820616(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_vulkan_guide_vulkan_vulkan_md_b92_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-vulkan-guide-vulkan-vulkan-md-b92.json
var site_docs_ref_vulkan_guide_vulkan_vulkan_md_b92_namespaceObject = JSON.parse('{"id":"vulkan-guide/vulkan/vulkan","title":"Vulkan支持能力","description":"Vulkan是一套2D和3D绘图应用程序接口，具有跨平台、高性能的特点。HarmonyOS SDK 现已支持Vulkan v1.4.309版本接口，具体可用版本取决于GPU驱动实现。","source":"@site/docs-ref/vulkan-guide/vulkan/vulkan.md","sourceDirName":"vulkan-guide/vulkan","slug":"/vulkan-guide/vulkan/vulkan","permalink":"/harmonyos-docs-site/ref/vulkan-guide/vulkan/vulkan","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Vulkan支持能力","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vulkan","kit":"标准库","last_updated":"2026-04-22","slug":"vulkan"},"sidebar":"ref","previous":{"title":"Vulkan External Memory开发指导","permalink":"/harmonyos-docs-site/ref/vulkan-guide/vulkan-guides/vulkan-oh-external-memory-guidelines/vulkan-oh-external-memory-guidelines"},"next":{"title":"Vulkan","permalink":"/harmonyos-docs-site/ref/vulkan-guide/vulkan-extensions/capi-vulkan/capi-vulkan"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/vulkan-guide/vulkan/vulkan.md


const frontMatter = {
	title: 'Vulkan支持能力',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vulkan',
	kit: '标准库',
	last_updated: '2026-04-22',
	slug: 'vulkan'
};
const contentTitle = 'Vulkan支持能力';

const assets = {

};



const toc = [{
  "value": "支持的标准库接口列表",
  "id": "支持的标准库接口列表",
  "level": 2
}, {
  "value": "HarmonyOS新增的扩展接口列表",
  "id": "harmonyos新增的扩展接口列表",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
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
        id: "vulkan支持能力",
        children: "Vulkan支持能力"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.vulkan.org/",
        children: "Vulkan"
      }), "是一套2D和3D绘图应用程序接口，具有跨平台、高性能的特点。HarmonyOS SDK 现已支持Vulkan v1.4.309版本接口，具体可用版本取决于GPU驱动实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的标准库接口列表",
      children: "支持的标准库接口列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持Vulkan v1.4.309版本的部分接口能力，具体请见下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "符号类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "符号名"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkAcquireNextImage2KHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkAcquireNextImageKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkAllocateCommandBuffers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkAllocateDescriptorSets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkAllocateMemory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkBeginCommandBuffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkBindBufferMemory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkBindBufferMemory2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkBindImageMemory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkBindImageMemory2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdBeginQuery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdBeginRendering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdBeginRenderPass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdBeginRenderPass2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdBindDescriptorSets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdBindDescriptorSets2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdBindIndexBuffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdBindIndexBuffer2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdBindPipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdBindVertexBuffers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdBindVertexBuffers2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdBlitImage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdBlitImage2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdClearAttachments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdClearColorImage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdClearDepthStencilImage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdCopyBuffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdCopyBuffer2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdCopyBufferToImage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdCopyBufferToImage2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdCopyImage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdCopyImage2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdCopyImageToBuffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdCopyImageToBuffer2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdCopyQueryPoolResults"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdDispatch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdDispatchBase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdDispatchIndirect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdDraw"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdDrawIndexed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdDrawIndexedIndirect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdDrawIndexedIndirectCount"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdDrawIndirect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdDrawIndirectCount"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdEndQuery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdEndRendering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdEndRenderPass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdEndRenderPass2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdExecuteCommands"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdFillBuffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdNextSubpass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdNextSubpass2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdPipelineBarrier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdPipelineBarrier2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdPushConstants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdPushConstants2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdPushDescriptorSet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdPushDescriptorSet2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdPushDescriptorSetWithTemplate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdPushDescriptorSetWithTemplate2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdResetEvent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdResetEvent2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdResetQueryPool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdResolveImage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdResolveImage2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetBlendConstants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetCullMode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetDepthBias"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetDepthBiasEnable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetDepthBounds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetDepthBoundsTestEnable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetDepthCompareOp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetDepthTestEnable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetDepthWriteEnable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetDeviceMask"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetEvent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetEvent2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetFrontFace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetLineStipple"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetLineWidth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetPrimitiveRestartEnable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetPrimitiveTopology"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetRasterizerDiscardEnable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetRenderingAttachmentLocations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetRenderingInputAttachmentIndices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetScissor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetScissorWithCount"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetStencilCompareMask"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetStencilOp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetStencilReference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetStencilTestEnable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetStencilWriteMask"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetViewport"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdSetViewportWithCount"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdUpdateBuffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdWaitEvents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdWaitEvents2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdWriteTimestamp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCmdWriteTimestamp2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCopyImageToImage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCopyImageToMemory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCopyMemoryToImage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateBuffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateBufferView"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateCommandPool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateComputePipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateDescriptorPool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateDescriptorSetLayout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateDescriptorUpdateTemplate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateDevice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateDisplayModeKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateDisplayPlaneSurfaceKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateEvent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateFence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateFramebuffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateGraphicsPipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateHeadlessSurfaceEXT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateImage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateImageView"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateInstance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreatePipelineCache"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreatePipelineLayout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreatePrivateDataSlot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateQueryPool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateRenderPass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateRenderPass2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateSampler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateSamplerYcbcrConversion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateSemaphore"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateShaderModule"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateSharedSwapchainsKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateSwapchainKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyBuffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyBufferView"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyCommandPool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyDescriptorPool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyDescriptorSetLayout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyDescriptorUpdateTemplate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyDevice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyEvent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyFence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyFramebuffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyImage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyImageView"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyInstance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyPipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyPipelineCache"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyPipelineLayout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyPrivateDataSlot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyQueryPool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyRenderPass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroySampler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroySamplerYcbcrConversion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroySemaphore"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroyShaderModule"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroySurfaceKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDestroySwapchainKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkDeviceWaitIdle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkEndCommandBuffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkEnumerateDeviceExtensionProperties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkEnumerateDeviceLayerProperties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkEnumerateInstanceExtensionProperties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkEnumerateInstanceLayerProperties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkEnumerateInstanceVersion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkEnumeratePhysicalDeviceGroups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkEnumeratePhysicalDevices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkFlushMappedMemoryRanges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkFreeCommandBuffers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkFreeDescriptorSets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkFreeMemory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetBufferDeviceAddress"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetBufferMemoryRequirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetBufferMemoryRequirements2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetBufferOpaqueCaptureAddress"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDescriptorSetLayoutSupport"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDeviceBufferMemoryRequirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDeviceGroupPeerMemoryFeatures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDeviceGroupPresentCapabilitiesKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDeviceGroupSurfacePresentModesKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDeviceImageMemoryRequirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDeviceImageSparseMemoryRequirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDeviceImageSubresourceLayout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDeviceMemoryCommitment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDeviceMemoryOpaqueCaptureAddress"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDeviceProcAddr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDeviceQueue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDeviceQueue2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDisplayModeProperties2KHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDisplayModePropertiesKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDisplayPlaneCapabilities2KHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDisplayPlaneCapabilitiesKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetDisplayPlaneSupportedDisplaysKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetEventStatus"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetFenceStatus"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetImageMemoryRequirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetImageMemoryRequirements2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetImageSparseMemoryRequirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetImageSparseMemoryRequirements2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetImageSubresourceLayout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetImageSubresourceLayout2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetInstanceProcAddr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceDisplayPlaneProperties2KHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceDisplayPlanePropertiesKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceDisplayProperties2KHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceDisplayPropertiesKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceExternalBufferProperties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceExternalFenceProperties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceExternalSemaphoreProperties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceFeatures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceFeatures2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceFormatProperties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceFormatProperties2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceImageFormatProperties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceImageFormatProperties2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceMemoryProperties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceMemoryProperties2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDevicePresentRectanglesKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceProperties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceProperties2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceQueueFamilyProperties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceQueueFamilyProperties2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceSparseImageFormatProperties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceSparseImageFormatProperties2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceSurfaceCapabilities2KHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceSurfaceCapabilitiesKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceSurfaceFormats2KHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceSurfaceFormatsKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceSurfacePresentModesKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceSurfaceSupportKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPhysicalDeviceToolProperties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPipelineCacheData"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetPrivateData"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetQueryPoolResults"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetRenderAreaGranularity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetRenderingAreaGranularity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetSemaphoreCounterValue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetSwapchainImagesKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkInvalidateMappedMemoryRanges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkMapMemory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkMapMemory2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkMergePipelineCaches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkQueueBindSparse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkQueuePresentKHR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkQueueSubmit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkQueueSubmit2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkQueueWaitIdle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkResetCommandBuffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkResetCommandPool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkResetDescriptorPool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkResetEvent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkResetFences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkResetQueryPool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkSetEvent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkSetPrivateData"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkSignalSemaphore"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkTransitionImageLayout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkTrimCommandPool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkUnmapMemory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkUnmapMemory2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkUpdateDescriptorSets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkUpdateDescriptorSetWithTemplate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkWaitForFences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkWaitSemaphores"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "harmonyos新增的扩展接口列表",
      children: "HarmonyOS新增的扩展接口列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了标准能力，还提供了HarmonyOS平台扩展的Vulkan能力，扩展了使用OHNativeWindow创建Vulkan Surface的能力，以及获取OH_NativeBuffer和OH_NativeBuffer属性的能力。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "符号类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "符号名"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkCreateSurfaceOHOS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetNativeBufferPropertiesOHOS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetMemoryNativeBufferOHOS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkGetSwapchainGrallocUsageOHOS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkAcquireImageOHOS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vkQueueSignalReleaseImageOHOS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["新增接口的详细介绍请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan/capi-vulkan",
        children: "Vulkan模块"
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