"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["93379"], {
166951(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_passwordvault_arkweb_access_password_safe_arkweb_access_password_safe_md_e67_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-passwordvault-arkweb-access-password-safe-arkweb-access-password-safe-md-e67.json
var site_docs_system_security_passwordvault_arkweb_access_password_safe_arkweb_access_password_safe_md_e67_namespaceObject = JSON.parse('{"id":"system-security/passwordvault/arkweb-access-password-safe/arkweb-access-password-safe","title":"网页接入密码保险箱","description":"网页中的登录表单，登录成功后，用户可将用户名和密码保存到系统密码保险箱中。再次打开该网页时，密码保险箱可以提供用户名、密码的自动填充。","source":"@site/docs/system-security/passwordvault/arkweb-access-password-safe/arkweb-access-password-safe.md","sourceDirName":"system-security/passwordvault/arkweb-access-password-safe","slug":"/system-security/passwordvault/arkweb-access-password-safe/","permalink":"/harmonyos-docs-site/system-security/passwordvault/arkweb-access-password-safe/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"网页接入密码保险箱","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkweb-access-password-safe","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"系统可适配的场景","permalink":"/harmonyos-docs-site/system-security/passwordvault/passwordvault-apps/passwordvault-special-scenarios/"},"next":{"title":"应用与网页共用账号密码","permalink":"/harmonyos-docs-site/system-security/passwordvault/password-shared-apps-web-pages/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/passwordvault/arkweb-access-password-safe/arkweb-access-password-safe.md


const frontMatter = {
	title: '网页接入密码保险箱',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkweb-access-password-safe',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '网页接入密码保险箱';

const assets = {

};



const toc = [{
  "value": "手机使用场景",
  "id": "手机使用场景",
  "level": 2
}, {
  "value": "2in1使用场景",
  "id": "2in1使用场景",
  "level": 2
}, {
  "value": "网页密码保存规格",
  "id": "网页密码保存规格",
  "level": 2
}, {
  "value": "网页密码表单规格",
  "id": "网页密码表单规格",
  "level": 2
}, {
  "value": "推荐的密码登录表单",
  "id": "推荐的密码登录表单",
  "level": 3
}, {
  "value": "不支持自动填充的密码登录表单类型",
  "id": "不支持自动填充的密码登录表单类型",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    form: "form",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    input: "input",
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
        id: "网页接入密码保险箱",
        children: "网页接入密码保险箱"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网页中的登录表单，登录成功后，用户可将用户名和密码保存到系统密码保险箱中。再次打开该网页时，密码保险箱可以提供用户名、密码的自动填充。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "手机使用场景",
      children: "手机使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下以<", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://developer.huawei.com/&gt;网站为例"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在网站中输入用户名、密码，登录成功后，ArkWeb会提示将用户名和密码保存到密码保险箱中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(888837)/* ["default"] */.A) + "",
            width: "243",
            height: "504"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "再次打开相同的网站，点击用户名或者密码框中时，会弹出密码保险箱的填充提示。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(333914)/* ["default"] */.A) + "",
            width: "243",
            height: "516"
          }), (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(299404)/* ["default"] */.A) + "",
            width: "243",
            height: "505"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以选择提示框中的用户名，通过认证，就能直接在网页中填入之前保存的用户名、密码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(852021)/* ["default"] */.A) + "",
            width: "243",
            height: "510"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“使用其他账号”，选择密码保险箱中保存的其他账号。认证后在网页中填入选择的用户名、密码。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(122599)/* ["default"] */.A) + "",
            width: "243",
            height: "509"
          }), (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(49199)/* ["default"] */.A) + "",
            width: "243",
            height: "509"
          }), (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(730697)/* ["default"] */.A) + "",
            width: "243",
            height: "503"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“手动输入”或者提示框之外的地方，会弹出小艺输入法，会提示可用于密码填充的用户名和钥匙图标。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击用户名可触发在网页中填入用户名、密码；点击钥匙图标，进入选择账号的界面。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(703175)/* ["default"] */.A) + "",
            width: "243",
            height: "505"
          }), (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(650232)/* ["default"] */.A) + "",
            width: "243",
            height: "508"
          }), (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(307279)/* ["default"] */.A) + "",
            width: "243",
            height: "509"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2in1使用场景",
      children: "2in1使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下以<", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://developer.huawei.com/&gt;网站为例"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在网站中输入用户名、密码，登陆成功后，ArkWeb会提示将用户名和密码保存到密码保险箱中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(764532)/* ["default"] */.A) + "",
            width: "731",
            height: "461"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "再次打开相同的网站，点击用户名或者密码框中时，会弹出密码保险箱的下拉框。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(681018)/* ["default"] */.A) + "",
            width: "729",
            height: "415"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择下拉框中的用户名，通过认证，就能直接在网页中填入之前保存的用户名、密码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(726897)/* ["default"] */.A) + "",
            width: "729",
            height: "416"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "也可以点击下拉框中的“使用其他账号”，选择密码保险箱中保存的其他账号。认证后在网页中填入选择的用户名、密码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(825278)/* ["default"] */.A) + "",
            width: "729",
            height: "457"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "网页密码保存规格",
      children: "网页密码保存规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、ArkWeb依赖密码表单提交成功后，触发页面跳转到其他页面，才能触发密码保存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、Native应用通过ArkWeb实现H5登入，登录成功后请勿立即销毁ArkWeb实例，否则将无法提示密码保存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "网页密码表单规格",
      children: "网页密码表单规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb使用Chromium智能算法，自动识别网页中的用户名、密码元素。算法对用户名、密码表单的设计，有一定的约束。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "推荐的密码登录表单",
      children: "推荐的密码登录表单"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用静态的登录页面或登录表单元素，而不是通过js脚本在页面中动态插入"
        }), (0,jsx_runtime.jsxs)(_components.form, {
          children: ["、", (0,jsx_runtime.jsx)(_components.input, {}), "等表单元素。", (0,jsx_runtime.jsx)(_components.p, {}), "\n"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用户名密码输入框均使用", (0,jsx_runtime.jsx)(_components.input, {}), "元素实现，并集成在同一个内，默认可编辑，登录场景有且最多有一个type=\"password\"类型的", (0,jsx_runtime.jsx)(_components.input, {}), "元素。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击按钮触发登录，登录成功后，应当触发跳转到新的页面。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户名框携带autocomplete=“username”，携带id或name属性，并采用如下建议的值，便于算法推断用户名元素："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const char* const kUsernameLatin[] = {\n    \"gatti\",      \"uzantonomo\",   \"solonanarana\",    \"nombredeusuario\",\n    \"olumulo\",    \"nomenusoris\",  \"enwdefnyddiwr\",   \"nomdutilisateur\",\n    \"lolowera\",   \"notandanafn\",  \"nomedeusuario\",   \"vartotojovardas\",\n    \"username\",   \"ahanjirimara\", \"gebruikersnaam\",  \"numedeutilizator\",\n    \"brugernavn\", \"benotzernumm\", \"jinalamtumiaji\",  \"erabiltzaileizena\",\n    \"brukernavn\", \"benutzername\", \"sunanmaiamfani\",  \"foydalanuvchinomi\",\n    \"mosebedisi\", \"kasutajanimi\", \"ainmcleachdaidh\", \"igamalomsebenzisi\",\n    \"nomdusuari\", \"lomsebenzisi\", \"jenengpanganggo\", \"ingoakaiwhakamahi\",\n    \"nomeutente\", \"namapengguna\"};\n\nconst char* const kUserLatin[] = {\n    \"user\",   \"wosuta\",   \"gebruiker\",  \"utilizator\",\n    \"usor\",   \"notandi\",  \"gumagamit\",  \"vartotojas\",\n    \"fammi\",  \"olumulo\",  \"maiamfani\",  \"cleachdaidh\",\n    \"utent\",  \"pemakai\",  \"mpampiasa\",  \"umsebenzisi\",\n    \"bruger\", \"usuario\",  \"panganggo\",  \"utilisateur\",\n    \"bruker\", \"benotzer\", \"uporabnik\",  \"doutilizador\",\n    \"numake\", \"benutzer\", \"covneegsiv\", \"erabiltzaile\",\n    \"usuari\", \"kasutaja\", \"defnyddiwr\", \"kaiwhakamahi\",\n    \"utente\", \"korisnik\", \"mosebedisi\", \"foydalanuvchi\",\n    \"uzanto\", \"pengguna\", \"mushandisi\"};\n\nconst char* const kUsernameNonLatin[] = {\n \"用户名\", \"کاتيجونالو\", \"用戶名\", \"የተጠቃሚስም\",\n \"логин\", \"اسمالمستخدم\", \"נאמען\", \"کاصارفکانام\",\n \"ユーザ名\", \"όνομα χρήστη\", \"brûkersnamme\", \"корисничкоиме\",\n \"nonitilizatè\", \"корисничкоиме\", \"ngaranpamaké\", \"ຊື່ຜູ້ໃຊ້\",\n \"användarnamn\", \"యూజర్పేరు\", \"korisničkoime\", \"пайдаланушыаты\",\n \"שםמשתמש\", \"ім'якористувача\", \"کارننوم\", \"хэрэглэгчийннэр\",\n \"nomedeusuário\", \"имяпользователя\", \"têntruynhập\", \"பயனர்பெயர்\",\n \"ainmúsáideora\", \"ชื่อผู้ใช้\", \"사용자이름\", \"імякарыстальніка\", \"lietotājvārds\",\n \"потребителскоиме\", \"uporabniškoime\", \"колдонуучунунаты\", \"kullanıcıadı\",\n \"පරිශීලකනාමය\", \"istifadəçiadı\", \"օգտագործողիանունը\", \"navêbikarhêner\", \"ಬಳಕೆದಾರಹೆಸರು\",\n \"emriipërdoruesit\", \"वापरकर्तानाव\", \"käyttäjätunnus\", \"વપરાશકર્તાનામ\", \"felhasználónév\",\n \"उपयोगकर्तानाम\", \"nazwaużytkownika\", \"ഉപയോക്തൃനാമം\", \"სახელი\", \"အသုံးပြုသူအမည်\",\n \"نامکاربری\", \"प्रयोगकर्तानाम\", \"uživatelskéjméno\", \"ব্যবহারকারীরনাম\",\n \"užívateľskémeno\", \"ឈ្មោះអ្នកប្រើប្រាស់\"};\n\nconst char* const kUserNonLatin[] = {\n \"用户\", \"użytkownik\", \"tagatafaʻaaogā\", \"دکارونکيعکس\",\n \"用戶\", \"užívateľ\", \"корисник\", \"карыстальнік\",\n \"brûker\", \"kullanıcı\", \"истифода\", \"អ្នកប្រើ\",\n \"ọrụ\", \"ተጠቃሚ\", \"באַניצער\", \"хэрэглэгчийн\",\n \"يوزر\", \"istifadəçi\", \"ຜູ້ໃຊ້\", \"пользователь\",\n \"صارف\", \"meahoʻohana\", \"потребител\", \"वापरकर्ता\",\n \"uživatel\", \"ユーザー\", \"מִשׁתַמֵשׁ\", \"ผู้ใช้งาน\",\n \"사용자\", \"bikaranîvan\", \"колдонуучу\", \"વપરાશકર્તા\",\n \"përdorues\", \"ngườidùng\", \"корисникот\", \"उपयोगकर्ता\",\n \"itilizatè\", \"χρήστης\", \"користувач\", \"օգտվողիանձնագիրը\",\n \"használó\", \"faoiúsáideoir\", \"შესახებ\", \"ব্যবহারকারী\",\n \"lietotājs\", \"பயனர்\", \"ಬಳಕೆದಾರ\", \"ഉപയോക്താവ്\",\n \"کاربر\", \"యూజర్\", \"පරිශීලක\", \"प्रयोगकर्ता\", \"användare\",\n \"المستعمل\", \"пайдаланушы\", \"အသုံးပြုသူကို\", \"käyttäjä\"};\n\nconst char* const kTechnicalWords[] = {\n    \"uid\",         \"newtel\",     \"uaccount\",   \"regaccount\",  \"ureg\",\n    \"loginid\",     \"laddress\",   \"accountreg\", \"regid\",       \"regname\",\n    \"loginname\",   \"membername\", \"uname\",      \"ucreate\",     \"loginmail\",\n    \"accountname\", \"umail\",      \"loginreg\",   \"accountid\",   \"loginaccount\",\n    \"ulogin\",      \"regemail\",   \"newmobile\",  \"accountlogin\"};\n\nconst char* const kWeakWords[] = {\"id\", \"login\", \"mail\"};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "登录场景，密码框携带autocomplete=“current-password”。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用户名框下面紧挨密码框，中间不要插入其他", (0,jsx_runtime.jsx)(_components.input, {}), "元素（包括不可见的", (0,jsx_runtime.jsx)(_components.input, {}), "）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "静态页面中的用户名密码框不可见，则需要确保在静态页面中就存在，而不是跳转页面时插入密码表单。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【案例1】："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(465101)/* ["default"] */.A) + "",
        width: "1126",
        height: "386"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【案例2】："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(978161)/* ["default"] */.A) + "",
        width: "766",
        height: "315"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持自动填充的密码登录表单类型",
      children: "不支持自动填充的密码登录表单类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始页面内无用户名密码表单元素，点击登录跳转页面后，新增非类型的用户名密码表单。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "密码输入框携带了autocomplete=“new-password”属性。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户名输入框type=\"number\"，验证码输入框type=\"number\"，无密码输入框。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用户名和密码元素中间存在其他", (0,jsx_runtime.jsx)(_components.input, {}), "元素，算法推断出的用户名元素，不符合用户预期。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["网页通过javascript脚本，变更了", (0,jsx_runtime.jsx)(_components.input, {}), "元素的焦点或者修改", (0,jsx_runtime.jsx)(_components.input, {}), "元素的value。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用户名", (0,jsx_runtime.jsx)(_components.input, {}), "元素上id、name、label内容中匹配到如下密码类型标识："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const char* const kNegativeLatin[] = {\n    \"pin\",    \"parola\",   \"wagwoord\",   \"wachtwoord\",\n    \"fake\",   \"parole\",   \"givenname\",  \"achinsinsi\",\n    \"token\",  \"parool\",   \"firstname\",  \"facalfaire\",\n    \"fname\",  \"lozinka\",  \"pasahitza\",  \"focalfaire\",\n    \"lname\",  \"passord\",  \"pasiwedhi\",  \"iphasiwedi\",\n    \"geslo\",  \"huahuna\",  \"passwuert\",  \"katalaluan\",\n    \"heslo\",  \"fullname\", \"phasewete\",  \"adgangskode\",\n    \"parol\",  \"optional\", \"wachtwurd\",  \"contrasenya\",\n    \"sandi\",  \"lastname\", \"cyfrinair\",  \"contrasinal\",\n    \"senha\",  \"kupuhipa\", \"katasandi\",  \"kalmarsirri\",\n    \"password\", \"loluszais\",  \"tenimiafina\",\n    \"second\", \"passwort\", \"middlename\", \"paroladordine\",\n    \"codice\", \"pasvorto\", \"familyname\", \"inomboloyokuvula\",\n    \"modpas\", \"salasana\", \"motdepasse\", \"numeraeleiloaesesi\",\n    \"captcha\"};\n\nconst char* const kNegativeNonLatin[] = {\n    \"fjalëkalim\", \"የይለፍቃል\", \"كلمهالسر\", \"գաղտնաբառ\",\n    \"пароль\", \"পাসওয়ার্ড\", \"парола\", \"密码\", \"密碼\",\n    \"დაგავიწყდათ\", \"κωδικόςπρόσβασης\", \"પાસવર્ડ\", \"סיסמה\",\n    \"पासवर्ड\", \"jelszó\", \"lykilorð\", \"paswọọdụ\",\n    \"パスワード\", \"ಪಾಸ್ವರ್ಡ್\", \"пароль\", \"ការពាក្យសម្ងាត់\",\n    \"암호\", \"şîfre\", \"купуясөз\", \"ລະຫັດຜ່ານ\",\n    \"slaptažodis\", \"лозинка\", \"पासवर्ड\", \"нууцүг\",\n    \"စကားဝှက်ကို\", \"पासवर्ड\", \"رمز\", \"کلمهعبور\",\n    \"hasło\", \"пароль\", \"лозинка\", \"پاسورڊ\",\n    \"මුරපදය\", \"contraseña\", \"lösenord\", \"гузарвожа\",\n    \"கடவுச்சொல்\", \"పాస్వర్డ్\", \"รหัสผ่าน\", \"пароль\",\n    \"پاسورڈ\", \"mậtkhẩu\", \"פּאַראָל\", \"ọrọigbaniwọle\"};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用户名", (0,jsx_runtime.jsx)(_components.input, {}), "元素的autocomplete=\"one-time-code\"或者\"cc-*\"，或者id、name属性上能正则匹配到如下one-time-code或者信用卡标识："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "inline constexpr char16_t kOneTimePwdRe[] =\n    u\"one.?time|sms.?(code|token|password|pwd|pass)\";\n\ninline constexpr char16_t kCardCvcRe[] =\n    u\"verification|card.?identification|security.?code|card.?code\"\n    u\"|security.?value\"\n    u\"|security.?number|card.?pin|c-v-v\"\n    u\"|código de segurança\"  // pt-BR\n    u\"|código de seguridad\"  // es-MX\n    u\"|karten.?prüfn\"        // de-DE\n    u\"|(?:cvn|cvv|cvc|csc|cvd|ccv)\"\n    // We used to match \"cid\", but it is a substring of \"cidade\" (Portuguese for\n    // \"city\") and needs to be handled carefully.\n    u\"|\\\\bcid\\\\b|cccid\";\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["页面加载完成，", (0,jsx_runtime.jsx)(_components.input, {}), "的type属性不是\"password\"，点击登录才变成\"password\"类型。"]
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
825278(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438417-334a8cf1f27a888e0459d89f40759119.png");

},
307279(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438415-2fb5bd5310e6e71d50c1db58a938339b.png");

},
122599(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798718-b0a59fda5ae687a9d3db31e799752a49.png");

},
465101(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958372-26c6be1570dfb869f9e4732312e2cc26.png");

},
852021(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478367-20c3b2580607aad2aa8d07f692735638.png");

},
764532(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958370-a0c617dc595fab974c2cd86a0a48fafc.png");

},
888837(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798716-aa44d8e8a9a9eb416c110825b2323d56.png");

},
650232(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798720-40b80dd48c6b85b51243caca73d9531e.png");

},
730697(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958368-19aec2b0068d269c167c68763758e428.png");

},
726897(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798722-ecde3669ef56e9e7ce8ac0f6668a8d6c.png");

},
681018(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478371-f1524339856d51de108253d33345f975.png");

},
299404(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958366-7ac60673dd1cef7c487b48a887700c9b.png");

},
703175(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478369-21a2aca3cdaa101cbe4a67253efbdad6.png");

},
49199(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438413-2fb5bd5310e6e71d50c1db58a938339b.png");

},
978161(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478373-e6c907f11a8f0a261d37bf52f1810012.png");

},
333914(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438411-06614a900892260b993151b103ba85d8.png");

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