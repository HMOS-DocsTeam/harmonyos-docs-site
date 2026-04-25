---
title: "@ohos.contact (联系人)"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-contact
kit: 应用服务
last_updated: "2026-04-22"
slug: js-apis-contact
---

# @ohos.contact (联系人)

本模块提供联系人管理能力，包括添加联系人、删除联系人、更新联系人等。

![](../../../images/ebb452d4/note_3.0-zh-cn.png) 

本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 导入模块

```
import { contact } from '@kit.ContactsKit';
```

## contact.addContact10+

addContact(context: Context, contact: Contact, callback: AsyncCallback&lt;number&gt;): void

添加联系人。使用callback异步回调。

****元服务API****：从API version 12 开始，该接口支持在元服务中使用。

****需要权限****：ohos.permission.WRITE\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| contact | [Contact](#contact) | 是 | 联系人信息。 |
| callback | AsyncCallback&lt;number&gt; | 是 | 回调函数。成功返回添加的联系人id；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/5b27d941/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
  import { BusinessError } from '@kit.BasicServicesKit';
  import { common } from '@kit.AbilityKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.addContact(context, {
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, (err: BusinessError, data) => {
    if (err) {
      console.error(`Failed to add Contact. Code:${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`Succeeded in adding Contact. data: ${JSON.stringify(data)}`);
  });
```

## contact.addContact(deprecated)

addContact(contact: Contact, callback: AsyncCallback&lt;number&gt;): void

添加联系人。使用callback异步回调。

![](../../../images/6962ba5c/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[addContact](#contactaddcontact10)替代。

****需要权限****：ohos.permission.WRITE\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| contact | [Contact](#contact) | 是 | 联系人信息。 |
| callback | AsyncCallback&lt;number&gt; | 是 | 回调函数。成功返回添加的联系人id；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.addContact(context, {
  name: {
    fullName: 'xxx'
  },
  phoneNumbers: [{
    phoneNumber: '138xxxxxxxx'
  }]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to add Contact. Code:${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in adding Contact. data: ${JSON.stringify(data)}`);
});
```

## contact.addContact10+

addContact(context: Context, contact: Contact): Promise&lt;number&gt;

添加联系人。使用Promise异步回调。

****元服务API****：从API version 12 开始，该接口支持在元服务中使用。

****需要权限****：ohos.permission.WRITE\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| contact | [Contact](#contact) | 是 | 联系人信息。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number&gt; | Promise对象，返回添加的联系人id。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/8ffa96c0/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
  import { BusinessError } from '@kit.BasicServicesKit';
  import { common } from '@kit.AbilityKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  let promise = contact.addContact(context, {
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  });
  promise.then((data) => {
    console.info(`Succeeded in adding Contact. data: ${JSON.stringify(data)}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to add Contact. Code: ${err.code}, message: ${err.message}`);
  });
```

## contact.addContact(deprecated)

addContact(contact: Contact): Promise&lt;number&gt;

添加联系人。使用Promise异步回调。

![](../../../images/95237236/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[addContact](#contactaddcontact10-1)替代。

****需要权限****：ohos.permission.WRITE\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| contact | [Contact](#contact) | 是 | 联系人信息。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number&gt; | Promise对象，返回添加的联系人id。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

let promise = contact.addContact({
  name: {
    fullName: 'xxx'
  },
  phoneNumbers: [{
    phoneNumber: '138xxxxxxxx'
  }]
});
promise.then((data) => {
  console.info(`Succeeded in adding Contact. data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to add Contact. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.deleteContact10+

deleteContact(context: Context, key: string, callback: AsyncCallback&lt;void&gt;): void

删除联系人。使用callback异步回调。

****需要权限****：ohos.permission.WRITE\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| key | string | 是 | 联系人的唯一查询键key值，一个联系人对应一个key，可通过[selectContacts](#contactselectcontacts10-1)接口获取。 |
| callback | AsyncCallback&lt;void&gt; | 是 | 回调函数。成功返回删除的联系人id；失败返回失败的错误码。 |

****错误码：****

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/46767995/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
  import { BusinessError } from '@kit.BasicServicesKit';
  import { common } from '@kit.AbilityKit';

 // 通过selectContacts接口选择联系人。
  contact.selectContacts().then((data) => {
    // 请在组件内获取context。
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    // 第二个参数传入选择联系人的key值
    contact.deleteContact(context, data[0].key, (err: BusinessError) => {
      if (err) {
        console.error(`Failed to delete Contact. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('Succeeded in deleting Contact.');
    });
  }).catch((err: BusinessError) => {
    console.error(`Failed to select Contacts. Code: ${err.code}, message: ${err.message}`);
  });
```

## contact.deleteContact(deprecated)

deleteContact(key: string, callback: AsyncCallback&lt;void&gt;): void

删除联系人。使用callback异步回调。

![](../../../images/4703af24/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[deleteContact](#contactdeletecontact10)替代。

****需要权限****：ohos.permission.WRITE\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 联系人的唯一查询键key值，一个联系人对应一个key，可通过[selectContacts](#contactselectcontacts10-1)接口获取。 |
| callback | AsyncCallback&lt;void&gt; | 是 | 回调函数。成功返回删除的联系人id；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

// 通过selectContacts接口选择联系人。
contact.selectContacts().then((data) => {
  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  // 第一个参数传入选择联系人的key值
  contact.deleteContact(data[0].key, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to delete Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in deleting Contact.');
  });
}).catch((err: BusinessError) => {
  console.error(`Failed to select Contacts. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.deleteContact10+

deleteContact(context: Context, key: string): Promise&lt;void&gt;

删除联系人。使用Promise异步回调。

****需要权限****：ohos.permission.WRITE\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| key | string | 是 | 联系人的唯一查询键key值，一个联系人对应一个key，可通过[selectContacts](#contactselectcontacts10-1)接口获取。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise对象。无返回结果的Promise对象。 |

****错误码：****

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/c9311146/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 通过selectContacts接口选择联系人。
contact.selectContacts().then((data) => {
  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  // 第二个参数传入选择联系人的key值
  let promise = contact.deleteContact(context, data[0].key);
  promise.then(() => {
    console.info(`Succeeded in deleting Contact.`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to delete Contact. Code: ${err.code}, message: ${err.message}`);
  });
}).catch((err: BusinessError) => {
  console.error(`Failed to select Contacts. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.deleteContact(deprecated)

deleteContact(key: string): Promise&lt;void&gt;

删除联系人。使用Promise异步回调。

![](../../../images/b551ad01/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[deleteContact](#contactdeletecontact10-1)替代。

****需要权限****：ohos.permission.WRITE\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 联系人的唯一查询键key值，一个联系人对应一个key，可通过[selectContacts](#contactselectcontacts10-1)接口获取。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise对象。无返回结果的Promise对象。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

// 通过selectContacts接口选择联系人。
contact.selectContacts().then((data) => {
  // 第一个参数传入选择联系人的key值
  let promise = contact.deleteContact(data[0].key);
  promise.then(() => {
    console.info(`Succeeded in deleting Contact.`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to delete Contact. Code: ${err.code}, message: ${err.message}`);
  });
}).catch((err: BusinessError) => {
  console.error(`Failed to select Contacts. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.updateContact10+

updateContact(context: Context, contact: Contact, callback: AsyncCallback&lt;void&gt;): void

更新联系人。使用callback异步回调。

****需要权限****：ohos.permission.WRITE\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| contact | [Contact](#contact) | 是 | 联系人信息。id必填，可通过[selectContacts](#contactselectcontacts10-1)接口获取。 |
| callback | AsyncCallback&lt;void&gt; | 是 | 回调函数。成功返回更新的联系人id；失败返回失败的错误码。 |

****错误码：****

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/f31e3190/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 通过selectContacts接口选择联系人。
contact.selectContacts().then((data) => {
  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.updateContact(context, {
    id: data[0].id,  // 选择联系人的id。
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to update Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in updating Contact.');
  });
}).catch((err: BusinessError) => {
  console.error(`Failed to select Contacts. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.updateContact(deprecated)

updateContact(contact: Contact, callback: AsyncCallback&lt;void&gt;): void

更新联系人。使用callback异步回调。

![](../../../images/f2381dba/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[updateContact](#contactupdatecontact10)替代。

****需要权限****：ohos.permission.WRITE\_CONTACTS和ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| contact | [Contact](#contact) | 是 | 联系人信息。id必填，可通过[selectContacts](#contactselectcontacts10-1)接口获取。 |
| callback | AsyncCallback&lt;void&gt; | 是 | 回调函数。成功返回更新的联系人id；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

// 通过selectContacts接口选择联系人。
contact.selectContacts().then((data) => {
  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.updateContact(context, {
    id: data[0].id,  // 选择联系人的id。
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to update Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in updating Contact.');
  });
}).catch((err: BusinessError) => {
  console.error(`Failed to select Contacts. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.updateContact10+

updateContact(context: Context, contact: Contact, attrs: ContactAttributes, callback: AsyncCallback&lt;void&gt;): void

更新联系人（支持传入联系人的属性列表）。使用callback异步回调。

****需要权限****：ohos.permission.WRITE\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| contact | [Contact](#contact) | 是 | 联系人信息。id必填，可通过[selectContacts](#contactselectcontacts10-1)接口获取。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;void&gt; | 是 | 回调函数。成功返回更新的联系人id；失败返回失败的错误码。 |

****错误码：****

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/c99ed10a/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 通过selectContacts接口选择联系人。
contact.selectContacts().then((data) => {
  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.updateContact(context, {
    id: data[0].id,  // 选择联系人的id。
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  }, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to update Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in updating Contact.');
  });
}).catch((err: BusinessError) => {
  console.error(`Failed to select Contacts. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.updateContact(deprecated)

updateContact(contact: Contact, attrs: ContactAttributes, callback: AsyncCallback&lt;void&gt;): void

更新联系人（支持传入联系人的属性列表）。使用callback异步回调。

![](../../../images/5d1a0974/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[updateContact](#contactupdatecontact10-1)替代。

****需要权限****：ohos.permission.WRITE\_CONTACTS和ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| contact | [Contact](#contact) | 是 | 联系人信息。id必填，可通过[selectContacts](#contactselectcontacts10-1)接口获取。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;void&gt; | 是 | 回调函数。成功返回更新的联系人id；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

// 通过selectContacts接口选择联系人。
contact.selectContacts().then((data) => {
  contact.updateContact({
    id: data[0].id,  // 选择联系人的id。
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  }, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to update Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in updating Contact.');
  });
}).catch((err: BusinessError) => {
  console.error(`Failed to select Contacts. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.updateContact10+

updateContact(context: Context, contact: Contact, attrs?: ContactAttributes): Promise&lt;void&gt;

更新联系人（支持传入联系人的属性列表）。使用Promise异步回调。

****需要权限****：ohos.permission.WRITE\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| contact | [Contact](#contact) | 是 | 联系人信息。id必填，可通过[selectContacts](#contactselectcontacts10-1)接口获取。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise对象。无返回结果的Promise对象。 |

****错误码：****

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/9210f589/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
  import { BusinessError } from '@kit.BasicServicesKit';
  import { common } from '@kit.AbilityKit';

  // 通过selectContacts接口选择联系人。
  contact.selectContacts().then((data) => {
    // 请在组件内获取context。
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    let promise = contact.updateContact(context, {
      id: data[0].id,  // 选择联系人的id。
      name: {
        fullName: 'xxx'
      },
      phoneNumbers: [{
        phoneNumber: '138xxxxxxxx'
      }]
    }, {
      attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
    });
    promise.then(() => {
      console.info('Succeeded in updating Contact.');
    }).catch((err: BusinessError) => {
      console.error(`Failed to update Contact. Code: ${err.code}, message: ${err.message}`);
    });
  }).catch((err: BusinessError) => {
    console.error(`Failed to select Contacts. Code: ${err.code}, message: ${err.message}`);
  });
```

## contact.updateContact(deprecated)

updateContact(contact: Contact, attrs?: ContactAttributes): Promise&lt;void&gt;

更新联系人（支持传入联系人的属性列表）。使用Promise异步回调。

![](../../../images/ad369833/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[updateContact](#contactupdatecontact10-2)替代。

****需要权限****：ohos.permission.WRITE\_CONTACTS和ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| contact | [Contact](#contact) | 是 | 联系人信息。id必填，可通过[selectContacts](#contactselectcontacts10-1)接口获取。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise对象。无返回结果的Promise对象。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

// 通过selectContacts接口选择联系人。
contact.selectContacts().then((data) => {
  let promise = contact.updateContact({
    id: data[0].id,  // 选择联系人的id。
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  });
  promise.then(() => {
    console.info('Succeeded in updating Contact.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to update Contact. Code: ${err.code}, message: ${err.message}`);
  });
}).catch((err: BusinessError) => {
  console.error(`Failed to select Contacts. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.isLocalContact10+

isLocalContact(context: Context, id: number, callback: AsyncCallback&lt;boolean&gt;): void

判断当前联系人id是否在电话簿中。使用callback异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| id | number | 是 | 联系人对象的id属性，一个联系人对应一个id。 |
| callback | AsyncCallback&lt;boolean&gt; | 是 | 回调函数。成功返回布尔值，true代表联系人id在本地电话簿中，false则代表联系人id不在本地电话簿中；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

****示例：****

![](../../../images/088586ce/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.isLocalContact(context, 1, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to isLocalContact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in isLocalContact. data->${JSON.stringify(data)}`);
});
```

## contact.isLocalContact(deprecated)

isLocalContact(id: number, callback: AsyncCallback&lt;boolean&gt;): void

判断当前联系人id是否在电话簿中。使用callback异步回调。

![](../../../images/f69301a2/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[isLocalContact](#contactislocalcontact10)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | 联系人对象的id属性，一个联系人对应一个id。 |
| callback | AsyncCallback&lt;boolean&gt; | 是 | 回调函数。成功返回布尔值，true代表联系人id在本地电话簿中，false则代表联系人id不在本地电话簿中；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.isLocalContact(1, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to isLocalContact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in isLocalContact. data->${JSON.stringify(data)}`);
});
```

## contact.isLocalContact10+

isLocalContact(context: Context, id: number): Promise&lt;boolean&gt;

判断当前联系人id是否在电话簿中。使用Promise异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| id | number | 是 | 联系人对象的id属性，一个联系人对应一个id。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | Promise对象。返回true表示联系人id在本地电话簿中，返回false表示联系人id不在本地电话簿中。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

****示例：****

![](../../../images/b8cf1006/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
  import { BusinessError } from '@kit.BasicServicesKit';
  import { common } from '@kit.AbilityKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  let promise = contact.isLocalContact(context, 1);
  promise.then((data) => {
    console.info(`Succeeded in isLocalContact. data->${JSON.stringify(data)}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to isLocalContact. Code: ${err.code}, message: ${err.message}`);
  });
```

## contact.isLocalContact(deprecated)

isLocalContact(id: number): Promise&lt;boolean&gt;

判断当前联系人id是否在电话簿中。使用Promise异步回调。

![](../../../images/659d3587/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[isLocalContact](#contactislocalcontact10-1)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | 联系人对象的id属性，一个联系人对应一个id。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | Promise对象。返回true表示联系人id在本地电话簿中，返回false表示联系人id不在本地电话簿中。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

let promise = contact.isLocalContact(1);
promise.then((data) => {
  console.info(`Succeeded in isLocalContact. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to isLocalContact. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.isMyCard10+

isMyCard(context: Context, id: number, callback: AsyncCallback&lt;boolean&gt;): void

判断是否为“我的名片”。使用callback异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| id | number | 是 | 名片对象的id属性。 |
| callback | AsyncCallback&lt;boolean&gt; | 是 | 回调函数。成功返回是否为“我的名片”的布尔值。true代表的是“我的名片”，false则代表不是；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

****示例：****

![](../../../images/22d59720/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
  import { BusinessError } from '@kit.BasicServicesKit';
  import { common } from '@kit.AbilityKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.isMyCard(context, 1, (err: BusinessError, data) => {
    if (err) {
      console.error(`Failed to isMyCard. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`Succeeded in isMyCard. data->${JSON.stringify(data)}`);
  });
```

## contact.isMyCard(deprecated)

isMyCard(id: number, callback: AsyncCallback&lt;boolean&gt;): void

判断是否为“我的名片”。使用callback异步回调。

![](../../../images/4df59429/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[isMyCard](#contactismycard10)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | 名片对象的id属性。 |
| callback | AsyncCallback&lt;boolean&gt; | 是 | 回调函数。成功返回是否为“我的名片”的布尔值。true代表的是“我的名片”，false则代表不是；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.isMyCard(1, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to isMyCard. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in isMyCard. data->${JSON.stringify(data)}`);
});
```

## contact.isMyCard10+

isMyCard(context: Context, id: number): Promise&lt;boolean&gt;

判断是否为“我的名片”。使用Promise异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| id | number | 是 | 名片对象的id属性。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | Promise对象。返回true表示是“我的名片”，返回false表示不是。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

****示例：****

![](../../../images/0c9b0667/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
  import { BusinessError } from '@kit.BasicServicesKit';
  import { common } from '@kit.AbilityKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  let promise = contact.isMyCard(context, 1);
  promise.then((data) => {
    console.info(`Succeeded in isMyCard. data->${JSON.stringify(data)}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to isMyCard. Code: ${err.code}, message: ${err.message}`);
  });
```

## contact.isMyCard(deprecated)

isMyCard(id: number): Promise&lt;boolean&gt;

判断是否为“我的名片”。使用Promise异步回调。

![](../../../images/84968f07/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[isMyCard](#contactismycard10-1)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | 名片对象的id属性。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | Promise对象。返回true表示是“我的名片”，返回false表示不是。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

let promise = contact.isMyCard(1);
promise.then((data) => {
  console.info(`Succeeded in isMyCard. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to isMyCard. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.queryMyCard10+

queryMyCard(context: Context, callback: AsyncCallback&lt;Contact&gt;): void

查询“我的名片”。使用callback异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| callback | AsyncCallback&lt;[Contact](#contact)&gt; | 是 | 回调函数。成功返回“我的名片”信息；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/d0654f1e/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
  import { BusinessError } from '@kit.BasicServicesKit';
  import { common } from '@kit.AbilityKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.queryMyCard(context, (err: BusinessError, data) => {
    if (err) {
      console.error(`Failed to query My Card. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
  });
```

## contact.queryMyCard(deprecated)

queryMyCard(callback: AsyncCallback&lt;Contact&gt;): void

查询“我的名片”。使用callback异步回调。

![](../../../images/5f5f1535/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryMyCard](#contactquerymycard10)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;[Contact](#contact)&gt; | 是 | 回调函数。成功返回“我的名片”信息；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryMyCard((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query My Card. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
});
```

## contact.queryMyCard10+

queryMyCard(context: Context, attrs: ContactAttributes, callback: AsyncCallback&lt;Contact&gt;): void

查询“我的名片”（支持传入联系人的属性列表）。使用callback异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;[Contact](#contact)&gt; | 是 | 回调函数。成功返回“我的名片”信息；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/f319ef33/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
  import { BusinessError } from '@kit.BasicServicesKit';
  import { common } from '@kit.AbilityKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.queryMyCard(context, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  }, (err: BusinessError, data) => {
    if (err) {
      console.error(`Failed to query My Card. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
  });
```

## contact.queryMyCard(deprecated)

queryMyCard(attrs: ContactAttributes, callback: AsyncCallback&lt;Contact&gt;): void

查询“我的名片”（支持传入联系人的属性列表）。使用callback异步回调。

![](../../../images/db8d12ee/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryMyCard](#contactquerymycard10-1)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;[Contact](#contact)&gt; | 是 | 回调函数。成功返回“我的名片”信息；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryMyCard({
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query My Card. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
});
```

## contact.queryMyCard10+

queryMyCard(context: Context, attrs?: ContactAttributes): Promise&lt;Contact&gt;

查询“我的名片”（支持传入联系人的属性列表）。使用Promise异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[Contact](#contact)&gt; | Promise对象。返回“我的名片”联系人对象。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/37604319/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
  import { BusinessError } from '@kit.BasicServicesKit';
  import { common } from '@kit.AbilityKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  let promise = contact.queryMyCard(context, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  });
  promise.then((data) => {
    console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to query My Card. Code: ${err.code}, message: ${err.message}`);
  });
```

## contact.queryMyCard(deprecated)

queryMyCard(attrs?: ContactAttributes): Promise&lt;Contact&gt;

查询“我的名片”（支持传入联系人的属性列表）。使用Promise异步回调。

![](../../../images/b76a70c1/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryMyCard](#contactquerymycard10-2)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[Contact](#contact)&gt; | Promise对象。返回“我的名片”联系人对象。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

let promise = contact.queryMyCard({
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
});
promise.then((data) => {
  console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to query My Card. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.selectContact(deprecated)

selectContact(callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

调用选择联系人接口，打开选择联系人UI界面。使用callback异步回调。

![](../../../images/36c4cfea/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[selectContacts](#contactselectcontacts10)替代。

****系统能力****：SystemCapability.Applications.Contacts

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回选择的联系人对象数组；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.selectContact((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to select Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in selecting Contact. data->${JSON.stringify(data)}`);
});
```

## contact.selectContact(deprecated)

selectContact(): Promise&lt;Array&lt;Contact&gt;>

调用选择联系人接口，打开选择联系人UI界面。使用Promise异步回调。

![](../../../images/00f8fbba/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[selectContacts](#contactselectcontacts10-1)替代。

****系统能力****：SystemCapability.Applications.Contacts

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[Contact](#contact)&gt;&gt; | Promise对象。返回选择的联系人数组对象。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

let promise = contact.selectContact();
promise.then((data) => {
  console.info(`Succeeded in selecting Contact. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to select Contact. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.selectContacts10+

selectContacts(callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

调用选择联系人接口，打开选择联系人UI界面。使用callback异步回调。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.Contacts

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回选择的联系人对象数组；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.selectContacts((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to select Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in selecting Contacts. data->${JSON.stringify(data)}`);
});
```

## contact.selectContacts10+

selectContacts(): Promise&lt;Array&lt;Contact&gt;>

调用选择联系人接口，打开选择联系人UI界面。使用Promise异步回调。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.Contacts

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[Contact](#contact)&gt;&gt; | Promise对象。返回选择的联系人数组对象。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

let promise = contact.selectContacts();
promise.then((data) => {
  console.info(`Succeeded in selecting Contacts. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to select Contacts. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.selectContacts10+

selectContacts(options: ContactSelectionOptions, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

调用选择联系人接口，打开选择联系人UI界面（选择联系人时支持传入筛选条件）。使用callback异步回调。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.Contacts

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [ContactSelectionOptions](#contactselectionoptions10) | 是 | 选择联系人时的筛选条件。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回选择的联系人对象数组；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.selectContacts({
  isMultiSelect:false
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to select Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in selecting Contacts. data->${JSON.stringify(data)}`);
});
```

## contact.selectContacts10+

selectContacts(options: ContactSelectionOptions): Promise&lt;Array&lt;Contact&gt;>

调用选择联系人接口，打开选择联系人UI界面（选择联系人时支持传入筛选条件）。使用Promise异步回调。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.Contacts

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [ContactSelectionOptions](#contactselectionoptions10) | 是 | 选择联系人时的筛选条件。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[Contact](#contact)&gt;&gt; | Promise对象。返回选择的联系人数组对象。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

let promise = contact.selectContacts({isMultiSelect:false});
promise.then((data) => {
  console.info(`Succeeded in selecting Contacts. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to select Contacts. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.queryContact10+

queryContact(context: Context, key: string, callback: AsyncCallback&lt;Contact&gt;): void

根据key查询联系人。使用callback异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| key | string | 是 | 联系人的key值，一个联系人对应一个key。 |
| callback | AsyncCallback&lt;[Contact](#contact)&gt; | 是 | 回调函数。成功返回查询的联系人对象；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/4282070f/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContact(context, 'xxx', (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});
```

## contact.queryContact(deprecated)

queryContact(key: string, callback: AsyncCallback&lt;Contact&gt;): void

根据key查询联系人。使用callback异步回调。

![](../../../images/fe5d8023/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContact](#contactquerycontact10)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 联系人的key值，一个联系人对应一个key。 |
| callback | AsyncCallback&lt;[Contact](#contact)&gt; | 是 | 回调函数。成功返回查询的联系人对象；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryContact('xxx', (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});
```

## contact.queryContact10+

queryContact(context: Context, key: string, holder: Holder, callback: AsyncCallback&lt;Contact&gt;): void

根据key和holder查询联系人。使用callback异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| key | string | 是 | 联系人的key值，一个联系人对应一个key。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| callback | AsyncCallback&lt;[Contact](#contact)&gt; | 是 | 回调函数。成功返回查询的联系人对象；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/72347bfe/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContact(context, 'xxx', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});
```

## contact.queryContact(deprecated)

queryContact(key: string, holder: Holder, callback: AsyncCallback&lt;Contact&gt;): void

根据key和holder查询联系人。使用callback异步回调。

![](../../../images/383e22bb/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContact](#contactquerycontact10-1)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 联系人的key值，一个联系人对应一个key。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| callback | AsyncCallback&lt;[Contact](#contact)&gt; | 是 | 回调函数。成功返回查询的联系人对象；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryContact('xxx', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});
```

## contact.queryContact10+

queryContact(context: Context, key: string, attrs: ContactAttributes, callback: AsyncCallback&lt;Contact&gt;): void

根据key和attrs查询联系人。使用callback异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| key | string | 是 | 联系人的key值，一个联系人对应一个key。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;[Contact](#contact)&gt; | 是 | 回调函数。成功返回查询的联系人对象；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/6c56bbe6/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContact(context, 'xxx', {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});
```

## contact.queryContact(deprecated)

queryContact(key: string, attrs: ContactAttributes, callback: AsyncCallback&lt;Contact&gt;): void

根据key和attrs查询联系人。使用callback异步回调。

![](../../../images/f5b7f03e/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContact](#contactquerycontact10-2)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 联系人的key值，一个联系人对应一个key。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;[Contact](#contact)&gt; | 是 | 回调函数。成功返回查询的联系人对象；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryContact('xxx', {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});
```

## contact.queryContact10+

queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback&lt;Contact&gt;): void

根据key、holder和attrs查询联系人。使用callback异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| key | string | 是 | 联系人的key值，一个联系人对应一个key。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;[Contact](#contact)&gt; | 是 | 回调函数。成功返回查询的联系人对象；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/83676ddd/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
  import { BusinessError } from '@kit.BasicServicesKit';
  import { common } from '@kit.AbilityKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.queryContact(context, 'xxx', {
    holderId: 1,
    bundleName: "",
    displayName: ""
  }, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  }, (err: BusinessError, data) => {
    if (err) {
      console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
  });
```

## contact.queryContact(deprecated)

queryContact(key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback&lt;Contact&gt;): void

根据key、holder和attrs查询联系人。使用callback异步回调。

![](../../../images/953490c0/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContact](#contactquerycontact10-3)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 联系人的key值，一个联系人对应一个key。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;[Contact](#contact)&gt; | 是 | 回调函数。成功返回查询的联系人对象；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryContact('xxx', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});
```

## contact.queryContact10+

queryContact(context: Context, key: string, holder?: Holder, attrs?: ContactAttributes): Promise&lt;Contact&gt;

根据key、holder和attrs查询联系人。使用Promise异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| key | string | 是 | 联系人的key值，一个联系人对应一个key。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息，不传默认不使用该条件过滤联系人。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，不传默认查询所有联系人属性。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[Contact](#contact)&gt; | Promise对象。返回查询到的联系人对象。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/61a1b7db/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryContact(context, 'xxx', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.queryContact(deprecated)

queryContact(key: string, holder?: Holder, attrs?: ContactAttributes): Promise&lt;Contact&gt;

根据key、holder和attrs查询联系人。使用Promise异步回调。

![](../../../images/f74813bc/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContact](#contactquerycontact10-4)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 联系人的key值，一个联系人对应一个key。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息，不传默认不使用该条件过滤联系人。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，不传默认查询所有联系人属性。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;[Contact](#contact)&gt; | Promise对象。返回查询到的联系人对象。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

let promise = contact.queryContact('xxx', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.queryContacts10+

queryContacts(context: Context, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

查询所有联系人。使用callback异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/9964e485/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContacts(context, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});
```

## contact.queryContacts(deprecated)

queryContacts(callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

查询所有联系人。使用callback异步回调。

![](../../../images/6d2eb294/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContacts](#contactquerycontacts10)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryContacts((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});
```

## contact.queryContacts10+

queryContacts(context: Context, holder: Holder, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据holder查询所有联系人。使用callback异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/d3cb9d17/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContacts(context, {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});
```

## contact.queryContacts(deprecated)

queryContacts(holder: Holder, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据holder查询所有联系人。使用callback异步回调。

![](../../../images/c66f8567/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContacts](#contactquerycontacts10-1)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryContacts({
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});
```

## contact.queryContacts10+

queryContacts(context: Context, attrs: ContactAttributes, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据attrs查询所有联系人。使用callback异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/c9a1e81c/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContacts(context, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});
```

## contact.queryContacts(deprecated)

queryContacts(attrs: ContactAttributes, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据attrs查询所有联系人。使用callback异步回调。

![](../../../images/721e97ca/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContacts](#contactquerycontacts10-2)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryContacts({
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});
```

## contact.queryContacts10+

queryContacts(context: Context, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据holder和attrs查询所有联系人。使用callback异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/e22eb5d7/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContacts(context, {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});
```

## contact.queryContacts(deprecated)

queryContacts(holder: Holder, attrs: ContactAttributes, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据holder和attrs查询所有联系人。使用callback异步回调。

![](../../../images/c0ea0f26/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContacts](#contactquerycontacts10-3)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryContacts({
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});
```

## contact.queryContacts10+

queryContacts(context: Context, holder?: Holder, attrs?: ContactAttributes): Promise&lt;Array&lt;Contact&gt;>

根据holder和attrs查询所有联系人。使用Promise异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息，不传默认不使用该条件过滤联系人。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，不传默认查询所有联系人属性。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[Contact](#contact)&gt;&gt; | Promise对象。返回查询到的联系人数组对象。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/40822a48/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryContacts(context, {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contacts. data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.queryContacts(deprecated)

queryContacts(holder?: Holder, attrs?: ContactAttributes): Promise&lt;Array&lt;Contact&gt;>

根据holder和attrs查询所有联系人。使用Promise异步回调。

![](../../../images/07935e06/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContacts](#contactquerycontacts10-4)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息，不传默认不使用该条件过滤联系人。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，不传默认查询所有联系人属性。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[Contact](#contact)&gt;&gt; | Promise对象。返回查询到的联系人数组对象。 |

****示例：****

```
  import { BusinessError } from '@kit.BasicServicesKit';

  let promise = contact.queryContacts({
    holderId: 1,
    bundleName: "",
    displayName: ""
  }, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  });
  promise.then((data) => {
    console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
  });
```

## contact.queryContactsByPhoneNumber10+

queryContactsByPhoneNumber(context: Context, phoneNumber: string, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据电话号码查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| phoneNumber | string | 是 | 联系人的电话号码。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/ce0d0eb5/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContactsByPhoneNumber(context, '138xxxxxxxx', (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

## contact.queryContactsByPhoneNumber(deprecated)

queryContactsByPhoneNumber(phoneNumber: string, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据电话号码查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

![](../../../images/4b06defa/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByPhoneNumber](#contactquerycontactsbyphonenumber10)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | 联系人的电话号码。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryContactsByPhoneNumber('138xxxxxxxx', (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

## contact.queryContactsByPhoneNumber10+

queryContactsByPhoneNumber(context: Context, phoneNumber: string, holder: Holder, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据电话号码和holder查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| phoneNumber | string | 是 | 联系人的电话号码。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/f70de1cd/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContactsByPhoneNumber(context, '138xxxxxxxx', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

## contact.queryContactsByPhoneNumber(deprecated)

queryContactsByPhoneNumber(phoneNumber: string, holder: Holder, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据电话号码和holder查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

![](../../../images/a08f0dd2/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByPhoneNumber](#contactquerycontactsbyphonenumber10-1)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | 联系人的电话号码。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryContactsByPhoneNumber('138xxxxxxxx', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

## contact.queryContactsByPhoneNumber10+

queryContactsByPhoneNumber(context: Context, phoneNumber: string, attrs: ContactAttributes, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据电话号码和attrs查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| phoneNumber | string | 是 | 联系人的电话号码。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/1dc7658a/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContactsByPhoneNumber(context, '138xxxxxxxx', {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

## contact.queryContactsByPhoneNumber(deprecated)

queryContactsByPhoneNumber(phoneNumber: string, attrs: ContactAttributes, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据电话号码和attrs查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

![](../../../images/d565de22/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByPhoneNumber](#contactquerycontactsbyphonenumber10-2)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | 联系人的电话号码。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryContactsByPhoneNumber('138xxxxxxxx', {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

## contact.queryContactsByPhoneNumber10+

queryContactsByPhoneNumber(context: Context, phoneNumber: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据电话号码、holder和attrs查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| phoneNumber | string | 是 | 联系人的电话号码。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/bffefaf4/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContactsByPhoneNumber(context, '138xxxxxxxx', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

## contact.queryContactsByPhoneNumber(deprecated)

queryContactsByPhoneNumber(phoneNumber: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据电话号码、holder和attrs查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

![](../../../images/fc0903ed/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByPhoneNumber](#contactquerycontactsbyphonenumber10-3)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | 联系人的电话号码。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryContactsByPhoneNumber('138xxxxxxxx', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

## contact.queryContactsByPhoneNumber10+

queryContactsByPhoneNumber(context: Context, phoneNumber: string, holder?: Holder, attrs?: ContactAttributes): Promise&lt;Array&lt;Contact&gt;>

根据电话号码、holder和attrs查询联系人。使用Promise异步回调。该接口仅返回联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| phoneNumber | string | 是 | 联系人的电话号码。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息，不传默认不使用该条件过滤联系人。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，不传默认查询所有联系人属性。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[Contact](#contact)&gt;&gt; | Promise对象。返回查询到的联系人数组对象。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/586079b9/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryContactsByPhoneNumber(context, '138xxxxxxxx', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.queryContactsByPhoneNumber(deprecated)

queryContactsByPhoneNumber(phoneNumber: string, holder?: Holder, attrs?: ContactAttributes): Promise&lt;Array&lt;Contact&gt;>

根据电话号码、holder和attrs查询联系人。使用Promise异步回调。该接口仅返回联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

![](../../../images/8a29ee9f/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByPhoneNumber](#contactquerycontactsbyphonenumber10-4)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | 联系人的电话号码。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息，不传默认不使用该条件过滤联系人。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，不传默认查询所有联系人属性。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[Contact](#contact)&gt;&gt; | Promise对象。返回查询到的联系人数组对象。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

let promise = contact.queryContactsByPhoneNumber('138xxxxxxxx', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.queryContactsByEmail10+

queryContactsByEmail(context: Context, email: string, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据email查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| email | string | 是 | 联系人的邮箱地址。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/818e05e5/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContactsByEmail(context, 'xxx@email.com', (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

## contact.queryContactsByEmail(deprecated)

queryContactsByEmail(email: string, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据email查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

![](../../../images/98bcb57b/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByEmail](#contactquerycontactsbyemail10)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| email | string | 是 | 联系人的邮箱地址。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryContactsByEmail('xxx@email.com', (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

## contact.queryContactsByEmail10+

queryContactsByEmail(context: Context, email: string, holder: Holder, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据email和holder查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| email | string | 是 | 联系人的邮箱地址。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/f2eb1505/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContactsByEmail(context, 'xxx@email.com', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

## contact.queryContactsByEmail(deprecated)

queryContactsByEmail(email: string, holder: Holder, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据email和holder查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

![](../../../images/86a126a7/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByEmail](#contactquerycontactsbyemail10-1)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| email | string | 是 | 联系人的邮箱地址。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryContactsByEmail('xxx@email.com', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

## contact.queryContactsByEmail10+

queryContactsByEmail(context: Context, email: string, attrs: ContactAttributes, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据email和attrs查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| email | string | 是 | 联系人的邮箱地址。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/fd1b42fb/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContactsByEmail(context, 'xxx@email.com', {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

## contact.queryContactsByEmail(deprecated)

queryContactsByEmail(email: string, attrs: ContactAttributes, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据email和attrs查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

![](../../../images/2207e264/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByEmail](#contactquerycontactsbyemail10-2)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| email | string | 是 | 联系人的邮箱地址。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryContactsByEmail('xxx@email.com', {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

## contact.queryContactsByEmail10+

queryContactsByEmail(context: Context, email: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据email、holder和attrs查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| email | string | 是 | 联系人的邮箱地址。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/5e2f14ad/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContactsByEmail(context, 'xxx@email.com', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

## contact.queryContactsByEmail(deprecated)

queryContactsByEmail(email: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback&lt;Array&lt;Contact&gt;>): void

根据email、holder和attrs查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

![](../../../images/335e570d/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByEmail](#contactquerycontactsbyemail10-3)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| email | string | 是 | 联系人的邮箱地址。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表。 |
| callback | AsyncCallback&lt;Array&lt;[Contact](#contact)&gt;&gt; | 是 | 回调函数。成功返回查询到的联系人对象数组；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryContactsByEmail('xxx@email.com', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

## contact.queryContactsByEmail10+

queryContactsByEmail(context: Context, email: string, holder?: Holder, attrs?: ContactAttributes): Promise&lt;Array&lt;Contact&gt;>

根据email、holder和attrs查询联系人。使用Promise异步回调。该接口仅返回联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| email | string | 是 | 联系人的邮箱地址。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息，不传默认不使用该条件过滤联系人。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，不传默认查询所有联系人属性。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[Contact](#contact)&gt;&gt; | Promise对象。返回查询到的联系人数组对象。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/34b6d666/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryContactsByEmail(context, 'xxx@email.com', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.queryContactsByEmail(deprecated)

queryContactsByEmail(email: string, holder?: Holder, attrs?: ContactAttributes): Promise&lt;Array&lt;Contact&gt;>

根据email、holder和attrs查询联系人。使用Promise异步回调。该接口仅返回联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

![](../../../images/8ce24ebd/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByEmail](#contactquerycontactsbyemail10-4)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| email | string | 是 | 联系人的邮箱地址。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息，不传默认不使用该条件过滤联系人。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，不传默认查询所有联系人属性。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[Contact](#contact)&gt;&gt; | Promise对象。返回查询到的联系人数组对象。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

let promise = contact.queryContactsByEmail('xxx@email.com', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.queryGroups10+

queryGroups(context: Context, callback: AsyncCallback&lt;Array&lt;Group&gt;>): void

查询联系人的所有群组。使用callback异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| callback | AsyncCallback&lt;Array&lt;[Group](#group)&gt;&gt; | 是 | 回调函数。成功返回查询到的群组对象数组；失败返回失败的错误码。 |

****错误码：****

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/626a0790/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryGroups(context, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});
```

## contact.queryGroups(deprecated)

queryGroups(callback: AsyncCallback&lt;Array&lt;Group&gt;>): void

查询联系人的所有群组。使用callback异步回调。

![](../../../images/4c02d319/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryGroups](#contactquerygroups10)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;[Group](#group)&gt;&gt; | 是 | 回调函数。成功返回查询到的群组对象数组；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryGroups((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Groups.. data->${JSON.stringify(data)}`);
});
```

## contact.queryGroups10+

queryGroups(context: Context, holder: Holder, callback: AsyncCallback&lt;Array&lt;Group&gt;>): void

根据holder查询联系人的所有群组。使用callback异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| callback | AsyncCallback&lt;Array&lt;[Group](#group)&gt;&gt; | 是 | 回调函数。成功返回查询到的群组对象数组；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/ecb8af5f/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryGroups(context, {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});
```

## contact.queryGroups(deprecated)

queryGroups(holder: Holder, callback: AsyncCallback&lt;Array&lt;Group&gt;>): void

根据holder查询联系人的所有群组。使用callback异步回调。

![](../../../images/8aa370e2/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryGroups](#contactquerygroups10-1)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| callback | AsyncCallback&lt;Array&lt;[Group](#group)&gt;&gt; | 是 | 回调函数。成功返回查询到的群组对象数组；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryGroups({
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});
```

## contact.queryGroups10+

queryGroups(context: Context, holder?: Holder): Promise&lt;Array&lt;Group&gt;>

根据holder查询联系人的所有群组。使用Promise异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息，不传默认不使用该条件过滤联系人群组。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[Group](#group)&gt;&gt; | Promise对象。返回查询到的群组对象数组。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/9983d5f5/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryGroups(context, {
  holderId: 1,
  bundleName: "",
  displayName: ""
});
promise.then((data) => {
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.queryGroups(deprecated)

queryGroups(holder?: Holder): Promise&lt;Array&lt;Group&gt;>

根据holder查询联系人的所有群组。使用Promise异步回调。

![](../../../images/6e1e99b8/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryGroups](#contactquerygroups10-2)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息，不传默认不使用该条件过滤联系人群组。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[Group](#group)&gt;&gt; | Promise对象。返回查询到的群组对象数组。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

let promise = contact.queryGroups({
  holderId: 1,
  bundleName: "",
  displayName: ""
});
promise.then((data) => {
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.queryHolders10+

queryHolders(context: Context, callback: AsyncCallback&lt;Array&lt;Holder&gt;>): void

查询所有创建联系人的应用信息。使用callback异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| callback | AsyncCallback&lt;Array&lt;[Holder](#holder)&gt;&gt; | 是 | 回调函数。成功返回查询到的创建联系人应用信息的对象数组；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/db9f4201/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryHolders(context, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Holders. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Holders. data->${JSON.stringify(data)}`);
});
```

## contact.queryHolders(deprecated)

queryHolders(callback: AsyncCallback&lt;Array&lt;Holder&gt;>): void

查询所有创建联系人的应用信息。使用callback异步回调。

![](../../../images/369e7425/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryHolders](#contactqueryholders10)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;[Holder](#holder)&gt;&gt; | 是 | 回调函数。成功返回查询到的创建联系人应用信息的对象数组；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryHolders((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Holders. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Holders. data->${JSON.stringify(data)}`);
});
```

## contact.queryHolders10+

queryHolders(context: Context): Promise&lt;Array&lt;Holder&gt;>

查询所有创建联系人的应用信息。使用Promise异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[Holder](#holder)&gt;&gt; | Promise对象。返回查询到的创建联系人应用信息的对象数组。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

****示例：****

![](../../../images/f2185364/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryHolders(context);
promise.then((data) => {
  console.info(`Succeeded in querying Holders. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to query Holders. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.queryHolders(deprecated)

queryHolders(): Promise&lt;Array&lt;Holder&gt;>

查询所有创建联系人的应用信息。使用Promise异步回调。

![](../../../images/0398a968/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryHolders](#contactqueryholders10-1)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[Holder](#holder)&gt;&gt; | Promise对象。返回查询到的创建联系人应用信息的对象数组。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

let promise = contact.queryHolders();
promise.then((data) => {
  console.info(`Succeeded in querying Holders. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to query Holders. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.queryKey10+

queryKey(context: Context, id: number, callback: AsyncCallback&lt;string&gt;): void

根据联系人的id查询联系人的key。使用callback异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| id | number | 是 | 联系人对象的id属性。 |
| callback | AsyncCallback&lt;string&gt; | 是 | 回调函数。成功返回查询到的联系人对应的key；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

****示例：****

![](../../../images/b46d6c2f/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryKey(context, 1, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Key. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
});
```

## contact.queryKey(deprecated)

queryKey(id: number, callback: AsyncCallback&lt;string&gt;): void

根据联系人的id查询联系人的key。使用callback异步回调。

![](../../../images/a5bf8965/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryKey](#contactquerykey10)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | 联系人对象的id属性。 |
| callback | AsyncCallback&lt;string&gt; | 是 | 回调函数。成功返回查询到的联系人对应的key；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryKey(1, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Key. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
});
```

## contact.queryKey10+

queryKey(context: Context, id: number, holder: Holder, callback: AsyncCallback&lt;string&gt;): void

根据联系人的id和holder查询联系人的key。使用callback异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| id | number | 是 | 联系人对象的id属性。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| callback | AsyncCallback&lt;string&gt; | 是 | 回调函数。成功返回查询到的联系人对应的key；失败返回失败的错误码。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

****示例：****

![](../../../images/281748a5/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryKey(context, 1, {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Key. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
});
```

## contact.queryKey(deprecated)

queryKey(id: number, holder: Holder, callback: AsyncCallback&lt;string&gt;): void

根据联系人的id和holder查询联系人的key。使用callback异步回调。

![](../../../images/746c80b3/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryKey](#contactquerykey10-1)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | 联系人对象的id属性。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息。 |
| callback | AsyncCallback&lt;string&gt; | 是 | 回调函数。成功返回查询到的联系人对应的key；失败返回失败的错误码。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

contact.queryKey(1, {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Key. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
});
```

## contact.queryKey10+

queryKey(context: Context, id: number, holder?: Holder): Promise&lt;string&gt;

根据联系人的id和holder查询联系人的key。使用Promise异步回调。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| id | number | 是 | 联系人对象的id属性。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息，不传默认不使用该条件过滤联系人。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise对象。返回查询到的联系人对应的key。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

****示例：****

![](../../../images/56cf0201/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryKey(context, 1, {
  holderId: 1,
  bundleName: "",
  displayName: ""
});
promise.then((data) => {
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to query Key. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.queryKey(deprecated)

queryKey(id: number, holder?: Holder): Promise&lt;string&gt;

根据联系人的id和holder查询联系人的key。使用Promise异步回调。

![](../../../images/b12634af/note_3.0-zh-cn.png) 

从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryKey](#contactquerykey10-2)替代。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | 联系人对象的id属性。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息，不传默认不使用该条件过滤联系人。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string&gt; | Promise对象。返回查询到的联系人对应的key。 |

****示例：****

```
import { BusinessError } from '@kit.BasicServicesKit';

let promise = contact.queryKey(1, {
  holderId: 1,
  bundleName: "",
  displayName: ""
});
promise.then((data) => {
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to query Key. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.queryContactsCount22+

queryContactsCount(context: Context): Promise&lt;number&gt;

查询所有联系人的数量。使用Promise异步回调。

****元服务API****：从API version 22 开始，该接口支持在元服务中使用。

****需要权限****：ohos.permission.READ\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | [Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context) | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number&gt; | Promise对象。返回查询到的联系人数量。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[Contacts错误码](/ref/contacts-api/contacts-arkts-errcode/errorcode-contacts/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 16700001 | General error. |

****示例：****

```
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryContactsCount(context);
promise.then((data) => {
  console.info(`Succeeded in querying ContactsCount. data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to query ContactsCount. Code: ${err.code}, message: ${err.message}`);
});
```

## contact.addContactViaUI15+

addContactViaUI(context: Context, contact: Contact): Promise&lt;number&gt;

调用新建联系人接口，打开新建联系人UI界面，新建完成。使用Promise异步回调。

****元服务API****: 从API version 15 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.Contacts

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| contact | [Contact](#contact) | 是 | 联系人信息。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number&gt; | Promise对象。返回添加的联系人id。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[Contacts错误码](/ref/contacts-api/contacts-arkts-errcode/errorcode-contacts/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |
| 801 | The specified SystemCapability name was not found. |
| 16700001 | General error. |
| 16700102 | Failed to set value to contacts data. |
| 16700103 | User cancel. |

****示例：****

![](../../../images/55aa1a33/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 请在组件内获取context。
let contactInfo: contact.Contact = {
  name: {
    fullName: 'xxx'
  },
  phoneNumbers: [{
    phoneNumber: '138xxxxxx'
  }]
}
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.addContactViaUI(context, contactInfo);
promise.then((data) => {
    console.info(`Succeeded in add Contact via UI.data->${JSON.stringify(data)}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to add Contact via UI. Code: ${err.code}, message: ${err.message}`);
  });
```

## contact.saveToExistingContactViaUI15+

saveToExistingContactViaUI(context: Context, contact: Contact): Promise&lt;number&gt;

调用保存至已有联系人接口，选择联系人UI界面并完成编辑。使用Promise异步回调。

****元服务API****: 从API version 15 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.Contacts

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| contact | [Contact](#contact) | 是 | 联系人信息。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number&gt; | Promise对象。返回添加的联系人id。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[Contacts错误码](/ref/contacts-api/contacts-arkts-errcode/errorcode-contacts/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |
| 801 | The specified SystemCapability name was not found. |
| 16700001 | General error. |
| 16700101 | Failed to get value to contacts data. |
| 16700102 | Failed to set value to contacts data. |
| 16700103 | User cancel. |

****示例：****

![](../../../images/5f400749/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 请在组件内获取context。
let contactInfo: contact.Contact = {
  id: 1,
  name: {
    fullName: 'xxx'
  },
  phoneNumbers: [{
    phoneNumber: '138xxxxxx'
  }]
}
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.saveToExistingContactViaUI(context, contactInfo);
promise.then((data) => {
    console.info(`Succeeded in save to existing Contact via UI.data->${JSON.stringify(data)}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to save to existing Contact via UI. Code: ${err.code}, message: ${err.message}`);
  });
```

## contact.addContacts23+

addContacts(context: Context, contacts: Array&lt;Contact&gt;): Promise&lt;Array&lt;number&gt;>

批量添加联系人。使用Promise异步回调。

****元服务API****：从API version 23 开始，该接口支持在元服务中使用。

****需要权限****：ohos.permission.WRITE\_CONTACTS

****系统能力****：SystemCapability.Applications.ContactsData

****参数：****

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context)。 |
| contacts | Array&lt;[Contact](#contact)&gt; | 是 | 联系人信息数组。 |

****返回值：****

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;number&gt;&gt; | Promise对象，返回批量添加的联系人id数组。 |

****错误码：****

以下错误码的详细介绍请参见[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)和[Contacts错误码](/ref/contacts-api/contacts-arkts-errcode/errorcode-contacts/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 16700001 | General error. |
| 16700002 | Invalid parameter value. |

****示例：****

![](../../../images/b7c60ef4/note_3.0-zh-cn.png) 

在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#获取uiability的上下文信息)。

```
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

const contactInfo1: contact.Contact = {
  name: { fullName: 'xxx1'},
  phoneNumbers: [{ phoneNumber: '138xxxxxx' }]
};
const contactInfo2: contact.Contact = {
  name: { fullName: 'xxx2'},
  phoneNumbers: [{ phoneNumber: '139xxxxxx' }]
};
const context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.addContacts(context, [contactInfo1, contactInfo2]).then((data) => {
  console.info(`Succeeded in addContacts.data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to addContacts. Code: ${err.code}, message: ${err.message}`);
});
```

## ContactSelectionOptions10+

选择联系人条件。

****系统能力****：SystemCapability.Applications.Contacts

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| isMultiSelect10+ | boolean | 否 | 是 | 是否为多选，true:多选，false:单选。默认值为false。****元服务API****：从API version 11 开始，该接口支持在元服务中使用。 |
| maxSelectable15+ | number | 否 | 是 | 联系人选择数量上限。默认值为10000。****元服务API****：从API version 15 开始，该接口支持在元服务中使用。 |
| isDisplayedByName15+ | boolean | 否 | 是 | 是否按联系人姓名维度展示，true:按联系人姓名维度展示，false:按联系人号码维度展示。默认值为false。****元服务API****：从API version 15 开始，该接口支持在元服务中使用。 |
| filter15+ | [ContactSelectionFilter](#contactselectionfilter15) | 否 | 是 | 联系人查询过滤器。****元服务API****：从API version 15 开始，该接口支持在元服务中使用。 |

## ContactSelectionFilter15+

联系人查询过滤器。

****元服务API****：从API version 15 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.Contacts

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| filterClause | [FilterClause](#filterclause15) | 否 | 否 | 过滤条件。 |
| filterType | [FilterType](#filtertype15) | 否 | 否 | 过滤类型。 |

## FilterType15+

枚举，联系人过滤类型。

****元服务API****：从API version 15 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 值 | 说明 |
| --- | --- | --- |
| SHOW\_FILTER | 0 | 仅展示符合过滤条件的联系人。  ****系统能力****：SystemCapability.Applications.Contacts |
| DEFAULT\_SELECT | 1 | 默认勾选符合过滤条件的联系人。  ****系统能力****：SystemCapability.Applications.Contacts |
| SHOW\_FILTER\_AND\_DEFAULT\_SELECT | 2 | 默认勾选仅展示符合过滤条件的联系人。  ****系统能力****：SystemCapability.Applications.Contacts |

## FilterClause15+

联系人过滤条件。

****元服务API****：从API version 15 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.Contacts

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| id | Array&lt;[FilterOptions](#filteroptions15)&gt; | 否 | 是 | 联系人id。 |
| name | Array&lt;[FilterOptions](#filteroptions15)&gt; | 否 | 是 | 联系人姓名。 |
| dataItem | [DataFilter](#datafilter15) | 否 | 是 | 联系人数据过滤项。 |
| focusModeList | Array&lt;[FilterOptions](#filteroptions15)&gt; | 否 | 是 | 专注模式。 |

## FilterOptions15+

联系人过滤参数。

****元服务API****：从API version 15 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.Contacts

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| filterCondition | [FilterCondition](#filtercondition15) | 否 | 否 | 过滤条件。 |
| value | string | ValueType[] | 否 | 是 | 过滤值，默认为undefined。 |

## FilterCondition15+

枚举，过滤条件。

****元服务API****：从API version 15 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 值 | 说明 |
| --- | --- | --- |
| IS\_NOT\_NULL | 0 | 对应字段不为空。  ****系统能力****：SystemCapability.Applications.Contacts |
| EQUAL\_TO | 1 | 对应字段等于某值。  ****系统能力****：SystemCapability.Applications.Contacts |
| NOT\_EQUAL\_TO | 2 | 对应字段不等于某值。  ****系统能力****：SystemCapability.Applications.Contacts |
| IN | 3 | 对应字段值在某数组中。  ****系统能力****：SystemCapability.Applications.Contacts |
| NOT\_IN | 4 | 对应字段值不在某数组中。  ****系统能力****：SystemCapability.Applications.Contacts |
| CONTAINS | 5 | 对应字段值包含某值  ****系统能力****：SystemCapability.Applications.Contacts。 |

## DataFilter15+

联系人数据过滤项。

****元服务API****：从API version 15 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.Contacts

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| field | [DataField](#datafield15) | 否 | 否 | 联系人数据字段。 |
| options | Array&lt;[FilterOptions](#filteroptions15)&gt; | 否 | 否 | 过滤参数。 |

## DataField15+

枚举，联系人数据字段。

****元服务API****：从API version 15 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 值 | 说明 |
| --- | --- | --- |
| EMAIL | 0 | 联系人邮箱。  ****系统能力****：SystemCapability.Applications.Contacts。 |
| PHONE | 1 | 联系人电话。  ****系统能力****：SystemCapability.Applications.Contacts。 |
| ORGANIZATION | 2 | 联系人单位。  ****系统能力****：SystemCapability.Applications.Contacts。 |

## Contact

联系人对象类。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

### 常量

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 值 | 说明 |
| --- | --- | --- | --- |
| INVALID\_CONTACT\_ID | number | -1 | 默认联系人的id。 |

### 属性

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| id | number | 是 | 是 | 联系人的id，由系统自动生成。 |
| key | string | 是 | 是 | 联系人的key，由系统自动生成。 |
| contactAttributes | [ContactAttributes](#contactattributes) | 否 | 是 | 联系人的属性列表。 |
| emails | [Email](#email)[] | 否 | 是 | 联系人的邮箱地址列表。 |
| events | [Event](#event)[] | 否 | 是 | 联系人的生日、周年纪念等重要日期列表。 |
| groups | [Group](#group)[] | 否 | 是 | 联系人的群组列表。 |
| imAddresses | [ImAddress](#imaddress)[] | 否 | 是 | 联系人的即时消息地址列表。 |
| phoneNumbers | [PhoneNumber](#phonenumber)[] | 否 | 是 | 联系人的电话号码列表。 |
| portrait | [Portrait](#portrait) | 否 | 是 | 联系人的头像。 |
| postalAddresses | [PostalAddress](#postaladdress)[] | 否 | 是 | 联系人的邮政地址列表。 |
| relations | [Relation](#relation)[] | 否 | 是 | 联系人的关系列表。 |
| sipAddresses | [SipAddress](#sipaddress)[] | 否 | 是 | 联系人的会话发起协议(SIP)地址列表。 |
| websites | [Website](#website)[] | 否 | 是 | 联系人的网站列表。 |
| name | [Name](#name) | 否 | 是 | 联系人的姓名。 |
| nickName | [NickName](#nickname) | 否 | 是 | 联系人的昵称。 |
| note | [Note](#note) | 否 | 是 | 联系人的备注。 |
| organization | [Organization](#organization) | 否 | 是 | 联系人的组织信息。 |

****对象创建示例：****

使用JSON格式创建联系人数据。

```
let myContact: contact.Contact = {
    phoneNumbers: [{
        phoneNumber: "138xxxxxxxx"
    }],
    name: {
        fullName: "fullName",
        namePrefix: "namePrefix"
    },
    nickName: {
        nickName: "nickName"
    }
};
```

## ContactAttributes

联系人属性列表，一般作为入参用来标识希望查询的联系人属性。

当传入为null时，默认查询全部属性。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| attributes | [Attribute](#attribute)[] | 否 | 否 | 联系人属性列表。 |

****对象创建示例：****

使用JSON格式创建数据。

```
let contactAttributes: contact.ContactAttributes = {
    attributes: [
        contact.Attribute.ATTR_EMAIL,
        contact.Attribute.ATTR_NAME,
        contact.Attribute.ATTR_PHONE
    ]
};
```

## Attribute

枚举，联系人属性列表。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 值 | 说明 |
| --- | --- | --- |
| ATTR\_CONTACT\_EVENT | 0 | 联系人的生日、周年纪念等重要日期。 |
| ATTR\_EMAIL | 1 | 联系人的邮箱地址。 |
| ATTR\_GROUP\_MEMBERSHIP | 2 | 联系人的群组。 |
| ATTR\_IM | 3 | 联系人的即时消息地址。 |
| ATTR\_NAME | 4 | 联系人的姓名。 |
| ATTR\_NICKNAME | 5 | 联系人的昵称。 |
| ATTR\_NOTE | 6 | 联系人的备注。 |
| ATTR\_ORGANIZATION | 7 | 联系人的组织信息。 |
| ATTR\_PHONE | 8 | 联系人的电话号码。 |
| ATTR\_PORTRAIT | 9 | 联系人的头像。 |
| ATTR\_POSTAL\_ADDRESS | 10 | 联系人的邮政地址。 |
| ATTR\_RELATION | 11 | 联系人的关系。 |
| ATTR\_SIP\_ADDRESS | 12 | 联系人的会话发起协议(SIP)地址。 |
| ATTR\_WEBSITE | 13 | 联系人的网站。 |

****对象创建示例：****

使用JSON格式创建数据。

```
let attributes = [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE];
```

## Email

联系人的邮箱。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

### 常量

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 值 | 说明 |
| --- | --- | --- | --- |
| CUSTOM\_LABEL | number | 0 | 自定义邮箱类型。 |
| EMAIL\_HOME | number | 1 | 家庭邮箱类型。 |
| EMAIL\_WORK | number | 2 | 工作邮箱类型。 |
| EMAIL\_OTHER | number | 3 | 其它邮箱类型。 |
| INVALID\_LABEL\_ID | number | -1 | 无效邮箱类型。 |

### 属性

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| email | string | 否 | 否 | 邮箱地址。 |
| labelName | string | 否 | 是 | 邮箱的类型名称。 |
| displayName | string | 否 | 是 | 邮箱的显示名称。 |
| labelId | number | 否 | 是 | 邮箱的类型。 |

****对象创建示例：****

使用JSON格式创建数据。

```
let email: contact.Email = {
    email: "xxx@email.com",
    displayName: "displayName"
}
```

或使用new一个Email对象的方式创建数据。

```
let email = new contact.Email();
email.email = "xxx@email.com";
```

## Holder

创建联系人的应用信息类。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| bundleName | string | 是 | 否 | Bundle名称，值为com.ohos.contacts。 |
| displayName | string | 是 | 是 | 应用名称。 |
| holderId | number | 否 | 是 | 应用Id。 |

****对象创建示例：****

使用JSON格式创建数据。

```
let holder: contact.Holder = {
  bundleName: "com.ohos.contacts",
  displayName: "displayName",
  holderId: 1
};
```

## Event

联系人事件类。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

### 常量

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 值 | 说明 |
| --- | --- | --- | --- |
| CUSTOM\_LABEL | number | 0 | 自定义事件类型。 |
| EVENT\_ANNIVERSARY | number | 1 | 周年纪念事件类型。 |
| EVENT\_OTHER | number | 2 | 其它事件类型。 |
| EVENT\_BIRTHDAY | number | 3 | 生日事件类型。 |
| INVALID\_LABEL\_ID | number | -1 | 无效事件类型。 |

### 属性

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| eventDate | string | 否 | 否 | 事件的日期。 |
| labelName | string | 否 | 是 | 事件类型名称。 |
| labelId | number | 否 | 是 | 事件类型。 |

****对象创建示例：****

使用JSON格式创建数据。

```
let event: contact.Event = {
    eventDate: "2000-01-01"
};
```

或使用new一个Event对象的方式创建数据。

```
let event = new contact.Event();
event.eventDate = "2000-01-01";
```

## Group

联系人的群组类。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| groupId | number | 否 | 是 | 联系人群组的Id。 |
| title | string | 否 | 否 | 联系人群组的名称。 |

****对象创建示例：****

使用JSON格式创建数据。

```
let group: contact.Group = {
    groupId: 1,
    title: "title"
};
```

## ImAddress

联系人的即时消息地址。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

### 常量

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 值 | 说明 |
| --- | --- | --- | --- |
| CUSTOM\_LABEL | number | -1 | 自定义即时消息类型。 |
| IM\_AIM | number | 0 | AIM即时消息类型。 |
| IM\_MSN | number | 1 | MSN即时消息类型。 |
| IM\_YAHOO | number | 2 | YAHOO即时消息类型。 |
| IM\_SKYPE | number | 3 | SKYPE即时消息类型。 |
| IM\_QQ | number | 4 | QQ即时消息类型。 |
| IM\_ICQ | number | 6 | ICQ即时消息类型。 |
| IM\_JABBER | number | 7 | JABBER即时消息类型。 |
| INVALID\_LABEL\_ID | number | -2 | 无效的即时消息类型。 |

### 属性

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| imAddress | string | 否 | 否 | 即时消息地址。 |
| labelName | string | 否 | 是 | 即时消息类型名称。 |
| labelId | number | 否 | 是 | 即时消息类型。 |

****对象创建示例：****

使用JSON格式创建数据。

```
let imAddress: contact.ImAddress = {
    imAddress: "imAddress",
    labelName: "labelName"
};
```

或使用new一个ImAddress对象的方式创建数据。

```
let imAddress = new contact.ImAddress();
imAddress.imAddress = "imAddress";
```

## Name

联系人的名字类。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| familyName | string | 否 | 是 | 联系人的家庭姓名。****元服务API****：从API version 11 开始，该接口支持在元服务中使用。 |
| familyNamePhonetic | string | 否 | 是 | 联系人的家庭姓名拼音。****元服务API****：从API version 11 开始，该接口支持在元服务中使用。 |
| fullName | string | 否 | 否 | 联系人的全名。****元服务API****：从API version 11 开始，该接口支持在元服务中使用。 |
| givenName | string | 否 | 是 | 联系人的名称(firstName)。****元服务API****：从API version 11 开始，该接口支持在元服务中使用。 |
| givenNamePhonetic | string | 否 | 是 | 联系人的名称拼音。****元服务API****：从API version 11 开始，该接口支持在元服务中使用。 |
| middleName | string | 否 | 是 | 联系人的中间名。****元服务API****：从API version 11 开始，该接口支持在元服务中使用。 |
| middleNamePhonetic | string | 否 | 是 | 联系人的中间名拼音。****元服务API****：从API version 11 开始，该接口支持在元服务中使用。 |
| namePrefix | string | 否 | 是 | 联系人的姓名前缀。****元服务API****：从API version 11 开始，该接口支持在元服务中使用。 |
| nameSuffix | string | 否 | 是 | 联系人的姓名后缀。****元服务API****：从API version 11 开始，该接口支持在元服务中使用。 |
| hasName22+ | boolean | 否 | 是 | 联系人信息中是否包含姓名。true表示包含，false表示不包含。****元服务API****：从API version 22 开始，该接口支持在元服务中使用。 |

****对象创建示例：****

使用JSON格式创建数据。

```
let name: contact.Name = {
    familyName: "familyName",
    fullName: "fullName"
};
```

## NickName

联系人的昵称类。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| nickName | string | 否 | 否 | 联系人的昵称。 |

****对象创建示例：****

使用JSON格式创建数据。

```
let nickName: contact.NickName = {
    nickName: "nickName"
};
```

## Note

联系人的备注类。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| noteContent | string | 否 | 否 | 联系人的备注内容。 |

****对象创建示例：****

使用JSON格式创建数据。

```
let note: contact.Note = {
    noteContent: "noteContent"
};
```

## Organization

联系人的组织类。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| name | string | 否 | 否 | 单位名称。 |
| title | string | 否 | 是 | 职位名称。 |

****对象创建示例：****

使用JSON格式创建数据。

```
let organization: contact.Organization = {
    name: "name",
    title: "title"
};
```

## PhoneNumber

联系人电话号码类。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

### 常量

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 值 | 说明 |
| --- | --- | --- | --- |
| CUSTOM\_LABEL | number | 0 | 自定义电话类型。 |
| NUM\_HOME | number | 1 | 家庭电话类型。 |
| NUM\_MOBILE | number | 2 | 移动电话类型。 |
| NUM\_WORK | number | 3 | 工作电话类型。 |
| NUM\_FAX\_WORK | number | 4 | 工作传真电话类型。 |
| NUM\_FAX\_HOME | number | 5 | 家庭传真电话类型。 |
| NUM\_PAGER | number | 6 | 寻呼机电话类型。 |
| NUM\_OTHER | number | 7 | 其它电话类型。 |
| NUM\_CALLBACK | number | 8 | 回呼电话类型。 |
| NUM\_CAR | number | 9 | 车机电话类型。 |
| NUM\_COMPANY\_MAIN | number | 10 | 公司电话类型。 |
| NUM\_ISDN | number | 11 | 综合业务数字网(ISDN)电话类型。 |
| NUM\_MAIN | number | 12 | 主电话类型。 |
| NUM\_OTHER\_FAX | number | 13 | 其它传真类型。 |
| NUM\_RADIO | number | 14 | 无线电话类型。 |
| NUM\_TELEX | number | 15 | 电传电话类型。 |
| NUM\_TTY\_TDD | number | 16 | 电传打字机(TTY)或测试驱动开发(TDD)电话类型。 |
| NUM\_WORK\_MOBILE | number | 17 | 工作移动电话类型。 |
| NUM\_WORK\_PAGER | number | 18 | 工作寻呼机电话类型。 |
| NUM\_ASSISTANT | number | 19 | 助理电话类型。 |
| NUM\_MMS | number | 20 | 彩信电话类型。 |
| INVALID\_LABEL\_ID | number | -1 | 无效电话类型。 |

### 属性

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| labelName | string | 否 | 是 | 电话号码类型名称。 |
| phoneNumber | string | 否 | 否 | 电话号码。 |
| labelId | number | 否 | 是 | 电话号码类型。 |

****对象创建示例：****

使用JSON格式创建数据。

```
let phoneNumber: contact.PhoneNumber = {
    phoneNumber: "138xxxxxxxx",
    labelId: contact.PhoneNumber.NUM_HOME
};
```

或使用new一个PhoneNumber对象的方式创建数据。

```
let phoneNumber = new contact.PhoneNumber();
phoneNumber.phoneNumber = "138xxxxxxxx";
```

## Portrait

联系人的头像类。

![](../../../images/7506fed0/note_3.0-zh-cn.png) 

从API version 22开始，支持通过uri和[PixelMap](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap)格式设置联系人头像资源(暂不支持通过[addContactViaUI](#contactaddcontactviaui15)、[saveToExistingContactViaUI](#contactsavetoexistingcontactviaui15)接口设置)。

uri为可访问的联系人头像文件地址，[PixelMap](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap)为通过联系人头像资源生成的[PixelMap](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap)对象。

从API version 22开始，支持通过uri格式读取联系人头像资源，该格式仅支持以[fileIo.open](/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#fileioopen)方式打开，无法直接在Image组件内显示，需读取后转换为[PixelMap](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap)格式显示。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| uri | string | 否 | 否 | uri格式联系人头像。****元服务API****：从API version 11 开始，该接口支持在元服务中使用。 |
| photo22+ | [image.PixelMap](/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap) | 否 | 是 | PixelMap格式的联系人头像。****元服务API****：从API version 22 开始，该接口支持在元服务中使用。 |

****对象创建示例：****

使用JSON格式创建数据。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

async function SetPortraitUri(uri: string) {
  let portrait: contact.Portrait = {
    uri: uri
  };
}

async function SetPortraitPixelMap(photo: image.PixelMap) {
  let portrait: contact.Portrait = {
    uri: "",
    photo: photo
  };
}
```

## PostalAddress

联系人的邮政地址类。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

### 常量

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 值 | 说明 |
| --- | --- | --- | --- |
| CUSTOM\_LABEL | number | 0 | 自定义邮政地址类型。 |
| ADDR\_HOME | number | 1 | 家庭地址类型。 |
| ADDR\_WORK | number | 2 | 工作地址类型。 |
| ADDR\_OTHER | number | 3 | 其它地址类型。 |
| INVALID\_LABEL\_ID | number | -1 | 无效地址类型。 |

### 属性

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| city | string | 否 | 是 | 联系人所在的城市。 |
| country | string | 否 | 是 | 联系人所在的国家。 |
| labelName | string | 否 | 是 | 邮政地址类型名称。 |
| neighborhood | string | 否 | 是 | 联系人的邻居。 |
| pobox | string | 否 | 是 | 联系人的邮箱。 |
| postalAddress | string | 否 | 否 | 联系人的邮政地址。 |
| postcode | string | 否 | 是 | 联系人所在区域的邮政编码。 |
| region | string | 否 | 是 | 联系人所在的区域。 |
| street | string | 否 | 是 | 联系人所在的街道。 |
| labelId | number | 否 | 是 | 邮政地址类型。 |

****对象创建示例：****

使用JSON格式创建数据。

```
let postalAddress: contact.PostalAddress = {
    city: "city",
    postalAddress: "postalAddress"
};
```

或使用new一个PostalAddress对象的方式创建数据。

```
let postalAddress = new contact.PostalAddress();
postalAddress.city = "city";
postalAddress.postalAddress = "postalAddress";
```

## Relation

联系人的关系类。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

### 常量

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 值 | 说明 |
| --- | --- | --- | --- |
| CUSTOM\_LABEL | number | 0 | 自定义关系类型。 |
| RELATION\_ASSISTANT | number | 1 | 助手关系类型。 |
| RELATION\_BROTHER | number | 2 | 兄弟关系类型。 |
| RELATION\_CHILD | number | 3 | 子女关系类型。 |
| RELATION\_DOMESTIC\_PARTNER | number | 4 | 同居同伴关系类型。 |
| RELATION\_FATHER | number | 5 | 父亲关系类型。 |
| RELATION\_FRIEND | number | 6 | 朋友关系类型。 |
| RELATION\_MANAGER | number | 7 | 管理者关系类型。 |
| RELATION\_MOTHER | number | 8 | 母亲关系类型。 |
| RELATION\_PARENT | number | 9 | 父母关系类型。 |
| RELATION\_PARTNER | number | 10 | 合作伙伴关系类型。 |
| RELATION\_REFERRED\_BY | number | 11 | 推荐人关系类型。 |
| RELATION\_RELATIVE | number | 12 | 亲属关系类型。 |
| RELATION\_SISTER | number | 13 | 姐妹关系类型。 |
| RELATION\_SPOUSE | number | 14 | 配偶关系类型。 |
| INVALID\_LABEL\_ID | number | -1 | 无效的关系类型。 |

### 属性

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| labelName | string | 否 | 是 | 关系类型名称。 |
| relationName | string | 否 | 否 | 关系名称。 |
| labelId | number | 否 | 是 | 关系类型。 |

****对象创建示例：****

使用JSON格式创建数据。

```
let relation: contact.Relation = {
    relationName: "relationName",
    labelId: contact.Relation.RELATION_ASSISTANT
};
```

或使用new一个Relation对象的方式创建数据。

```
let relation = new contact.Relation();
relation.relationName = "relationName";
relation.labelId = contact.Relation.RELATION_ASSISTANT;
```

## SipAddress

联系人的会话发起协议(SIP)地址类。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

### 常量

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 值 | 说明 |
| --- | --- | --- | --- |
| CUSTOM\_LABEL | number | 0 | 自定义会话发起协议(SIP)地址类型。 |
| SIP\_HOME | number | 1 | 家庭会话发起协议(SIP)地址类型。 |
| SIP\_WORK | number | 2 | 工作会话发起协议(SIP)地址类型。 |
| SIP\_OTHER | number | 3 | 其它会话发起协议(SIP)地址类型。 |
| INVALID\_LABEL\_ID | number | -1 | 无效会话发起协议(SIP)地址类型。 |

### 属性

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| labelName | string | 否 | 是 | 会话发起协议(SIP)地址类型名称。 |
| sipAddress | string | 否 | 否 | 会话发起协议(SIP)地址。 |
| labelId | number | 否 | 是 | 会话发起协议(SIP)地址类型。 |

****对象创建示例：****

使用JSON格式创建数据。

```
let sipAddress: contact.SipAddress = {
    sipAddress: "sipAddress"
};
```

或使用new一个SipAddress对象的方式创建数据。

```
let sipAddress = new contact.SipAddress();
sipAddress.sipAddress = "sipAddress";
```

## Website

联系人的网站信息类。

****元服务API****：从API version 11 开始，该接口支持在元服务中使用。

****系统能力****：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| website | string | 否 | 否 | 联系人的网站信息。 |

****对象创建示例：****

使用JSON格式创建数据。

```
let website: contact.Website = {
    website: "website"
};
```
