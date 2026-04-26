"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["861678"], {
808221(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_appendixes_nce_on_ndk_libc_interfaces_affected_by_permissions_nce_on_ndk_libc_interfaces_affected_by_permissions_md_0b3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-appendixes-nce-on-ndk-libc-interfaces-affected-by-permissions-nce-on-ndk-libc-interfaces-affected-by-permissions-md-0b3.json
var site_docs_ref_appendixes_nce_on_ndk_libc_interfaces_affected_by_permissions_nce_on_ndk_libc_interfaces_affected_by_permissions_md_0b3_namespaceObject = JSON.parse('{"id":"appendixes/nce-on-ndk-libc-interfaces-affected-by-permissions/nce-on-ndk-libc-interfaces-affected-by-permissions","title":"NDK涉及的musl libc接口使用限制的说明","description":"概述","source":"@site/docs-ref/appendixes/nce-on-ndk-libc-interfaces-affected-by-permissions/nce-on-ndk-libc-interfaces-affected-by-permissions.md","sourceDirName":"appendixes/nce-on-ndk-libc-interfaces-affected-by-permissions","slug":"/appendixes/nce-on-ndk-libc-interfaces-affected-by-permissions/nce-on-ndk-libc-interfaces-affected-by-permissions","permalink":"/harmonyos-docs-site/ref/appendixes/nce-on-ndk-libc-interfaces-affected-by-permissions/nce-on-ndk-libc-interfaces-affected-by-permissions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"NDK涉及的musl libc接口使用限制的说明","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nce-on-ndk-libc-interfaces-affected-by-permissions","kit":"标准库","last_updated":"2026-04-22","slug":"nce-on-ndk-libc-interfaces-affected-by-permissions"},"sidebar":"ref","previous":{"title":"Native api中没有导出的符号列表","permalink":"/harmonyos-docs-site/ref/appendixes/musl-peculiar-symbol/musl-peculiar-symbol"},"next":{"title":"Native api中导出的EGL符号列表","permalink":"/harmonyos-docs-site/ref/appendixes/egl-symbol/egl-symbol"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/appendixes/nce-on-ndk-libc-interfaces-affected-by-permissions/nce-on-ndk-libc-interfaces-affected-by-permissions.md


const frontMatter = {
	title: 'NDK涉及的musl libc接口使用限制的说明',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nce-on-ndk-libc-interfaces-affected-by-permissions',
	kit: '标准库',
	last_updated: '2026-04-22',
	slug: 'nce-on-ndk-libc-interfaces-affected-by-permissions'
};
const contentTitle = 'NDK涉及的musl libc接口使用限制的说明';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "Seccomp机制影响的musl接口",
  "id": "seccomp机制影响的musl接口",
  "level": 2
}, {
  "value": "确定进程因为Seccomp机制终止的方法",
  "id": "确定进程因为seccomp机制终止的方法",
  "level": 3
}, {
  "value": "常见可能受Seccomp机制影响的接口列表如下",
  "id": "常见可能受seccomp机制影响的接口列表如下",
  "level": 3
}, {
  "value": "内核没有对外开放影响的musl接口",
  "id": "内核没有对外开放影响的musl接口",
  "level": 2
}, {
  "value": "SELinux机制影响的musl接口",
  "id": "selinux机制影响的musl接口",
  "level": 2
}, {
  "value": "确定接口因为SELinux机制报错的方法",
  "id": "确定接口因为selinux机制报错的方法",
  "level": 3
}, {
  "value": "常见可能受SELinux机制影响的接口列表如下",
  "id": "常见可能受selinux机制影响的接口列表如下",
  "level": 3
}, {
  "value": "沙箱机制影响的musl接口",
  "id": "沙箱机制影响的musl接口",
  "level": 2
}, {
  "value": "空实现或默认失败的musl接口",
  "id": "空实现或默认失败的musl接口",
  "level": 2
}, {
  "value": "需要特殊权限才能执行的musl接口",
  "id": "需要特殊权限才能执行的musl接口",
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
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "ndk涉及的musl-libc接口使用限制的说明",
        children: "NDK涉及的musl libc接口使用限制的说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者使用DevEco Studio或者NDK进行应用开发时，可能涉及到使用musl libc的接口能力，因为musl libc的个别接口可能受多种系统和环境的限制而无法使用，此时可以通过本文档进行接口问题排查。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果确认是下列原因导致接口调用报错，请通过“华为开发者联盟官网”->“支持”，", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/support/",
        children: "在线提单"
      }), "方式获取支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "seccomp机制影响的musl接口",
      children: "Seccomp机制影响的musl接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "确定进程因为seccomp机制终止的方法",
      children: "确定进程因为Seccomp机制终止的方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查看进程faultlog日志，如果报错原因是signal:SIGSYS，且栈顶在ld-musl-{架构}.so.1库里，则进程终止可能是由Seccomp机制引起的。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "cat /data/log/faultlog/faultlogger/cppcrash-xxxx\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Process name:com.example.myapplication\nReason:Signal:SIGSYS(UNKNOWN)\nFault thread Info:\nTid:13893, Name:e.myapplication\n#00 pc 000a5d30 /system/lib/ld-musl-arm.so.1(sethostname+16)(584c9d0a0e9000497bb0d66799a9526a)\n#01 pc 00002f68 /data/storage/el1/bundle/libs/arm/libentry.so(test()+64)\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常见可能受seccomp机制影响的接口列表如下",
      children: "常见可能受Seccomp机制影响的接口列表如下"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "头文件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "musl接口名称"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fcntl.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name_to_handle_at"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fcntl.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "open_by_handle_at"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "grp.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "initgroups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "grp.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setgroups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sched.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sched.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unshare"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/fanotify.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fanotify_init"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/fanotify.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fanotify_mark"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/fsuid.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setfsgid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/fsuid.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setfsuid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/klog.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "klogctl"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/mount.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mount"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/mount.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "umount2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/mount.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "umount"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/msg.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "msgctl"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/msg.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "msgget"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/msg.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "msgrcv"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/msg.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "msgsnd"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/reboot.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reboot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/sem.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "semctl"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/sem.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "semget"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/sem.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "semop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/sem.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "semtimedop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/shm.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shmat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/shm.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shmctl"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/shm.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shmdt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/shm.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shmget"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/stat.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mkfifo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/stat.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mkfifoat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/stat.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mknod"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/stat.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mknodat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/swap.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "swapoff"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/swap.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "swapon"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "time.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clock_settime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/time.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "settimeofday"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/timex.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "adjtimex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/timex.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clock_adjtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "acct"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "chroot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pause"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setdomainname"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setegid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setgid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sethostname"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setregid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setresgid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setreuid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setuid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pivot_root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "init_module"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "delete_module"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "内核没有对外开放影响的musl接口",
      children: "内核没有对外开放影响的musl接口"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "头文件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "musl接口名称"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/fanotify.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fanotify_init"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/fanotify.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fanotify_mark"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "acct"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "selinux机制影响的musl接口",
      children: "SELinux机制影响的musl接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "确定接口因为selinux机制报错的方法",
      children: "确定接口因为SELinux机制报错的方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "引入errno.h头文件，检查errno错误状态码，如果错误状态码是EACCES，则接口报错可能是由SELinux机制引起的。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常见可能受selinux机制影响的接口列表如下",
      children: "常见可能受SELinux机制影响的接口列表如下"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "头文件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "musl接口名称"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "net/if.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "if_indextoname"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "net/if.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "if_nametoindex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pty.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "forkpty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pty.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "openpty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "semaphore.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sem_open"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "semaphore.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sem_unlink"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stdlib.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ptsname"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stdlib.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ptsname_r"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stdlib.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "posix_openpt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stdlib.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unlockpt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "popen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pclose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/ioctl.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ioctl"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/mman.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shm_open"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/mman.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shm_unlink"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/mount.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mount"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/mount.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "umount"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/mount.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "umount2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/msg.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "msgctl"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/msg.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "msgget"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/msg.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "msgrcv"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/msg.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "msgsnd"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/sem.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "semget"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/sem.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "semctl"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/sem.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "semop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/sem.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "semtimedop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/shm.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shmget"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/shm.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shmat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/shm.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shmdt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/shm.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shmctl"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/stat.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mkfifo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/stat.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mkfifoat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/stat.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mknod"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/stat.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mknodat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "termios.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tcgetattr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "termios.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tcsetattr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "termios.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tcsendbreak"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "termios.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tcdrain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "termios.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tcflush"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "termios.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tcflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "termios.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tcgetsid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "link"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linkat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "readlink"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "readlinkat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "symlink"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "symlinkat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tcgetpgrp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tcsetpgrp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "utmp.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "login_tty"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "沙箱机制影响的musl接口",
      children: "沙箱机制影响的musl接口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["沙箱机制可参考 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-sandbox-directory",
        children: "应用沙箱目录"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引入errno.h头文件，检查errno错误状态码，如果错误状态码是ENOENT，则接口报错可能是由沙箱机制引起的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见可能受沙箱机制影响的接口列表如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "头文件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "musl接口名称"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fcntl.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "open"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fcntl.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "openat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nl_types.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "catopen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fopen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "freopen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rename"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "renameat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "renameat2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tmpfile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stdio.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tmpfile64"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "空实现或默认失败的musl接口",
      children: "空实现或默认失败的musl接口"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "头文件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "musl接口名称"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "netdb.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getnetbyaddr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "netdb.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getnetbyname"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stdio_ext.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "__fsetlocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "brk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "utmp.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getutent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "utmp.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pututline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "utmp.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setutent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "utmp.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pututline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "utmp.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "utmpname"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "需要特殊权限才能执行的musl接口",
      children: "需要特殊权限才能执行的musl接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引入errno.h头文件，检查errno错误状态码，如果错误状态码是EPERM，则接口报错可能是由系统Capabilities安全机制引起的，也有可能是内核其他安全管控引起的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见可能受Capabilities机制影响的接口如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "头文件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "musl接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Capabilities权限"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pivot_root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAP_SYS_ADMIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "init_module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAP_SYS_MODULE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "delete_module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAP_SYS_MODULE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fcntl.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "open_by_handle_at"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAP_DAC_READ_SEARCH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/klog.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "klogctl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAP_SYS_ADMIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/mount.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAP_SYS_ADMIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/mount.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "umount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAP_SYS_ADMIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/mount.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "umount2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAP_SYS_ADMIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/reboot.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reboot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAP_SYS_BOOT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/swap.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "swapon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAP_SYS_ADMIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/swap.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "swapoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAP_SYS_ADMIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sys/time.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "settimeofday"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAP_SYS_TIME"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setdomainname"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAP_SYS_ADMIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sethostname"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAP_SYS_ADMIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unistd.h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "chroot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAP_SYS_CHROOT"
          })]
        })]
      })]
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