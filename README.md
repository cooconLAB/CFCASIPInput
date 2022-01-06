## 목차

1. [constructor](#constructor)
2. [setServerRandomCipherType](#setserverrandomciphertype)
3. [setServerRandom](#setserverrandom)
4. [setMinLength](#setminlength)


## constructor

<br/>

>###### 문자열 타입의 파라미터를 포함하는 CFCASIPInput 생성
```javascript  
  var objectId = "psw_pwd_10417_plugin_obj";
  var d = new CFCASIPInput(objectId);
```
 
>###### 오브젝트 타입의 파라미터를 포함하는 CFCASIPInput 생성
```javascript
  var object = {
    "id": "psw_pwd_10417_plugin_obj",
    ...
   };
  var d = new CFCASIPInput(object);
```
<br/>

## setServerRandomCipherType

> ###### 서버 랜덤 키 설정을 위한 암호화 알고리즘을 지정합니다.
KEY|VALUE
---|---
CIPHER_TYPE_SM2|0
CIPHER_TYPE_RSA|1

```javascript
  ...
  d.setServerRandomCipherType(CIPHER_TYPE_RSA);
  ...
```

<br/>

## setServerRandom

> ##### 서버 랜덤 키 설정

```javascript
  ...
  RandomKey_S = 'jQSEjVmGaBwJXTrg/7IMOw==';
  d.setServerRandom(RandomKey_S);
  ...
```

<br/>

## setMinLength

> ##### 암호화할 데이터의 최소 길이를 지정합니다.

```javascript
  ...
  d.setMinLength(1);
  ...
```

<br/>






