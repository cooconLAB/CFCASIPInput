<br/>

# CFCASIPInput API Reference v1.01

> ### Stack

<a><img src="https://img.shields.io/badge/JavaScript-gray?style=flat-square&logo=JavaScript&logoColor=F7DF1E"/></a>

<br/>

> CFCASIPInput 의 경우 중국은행 계열 해외 지사에서도 많이 사용하는 암호화 스크립트 파일이므로,
> 새로운 기관 또는 계열사 로그인 개발을 진행할 때 기관에 따른 유연한 로그인 개발을 위해
> API 명세를 해당 피드를 이용해 관리합니다.

<br/>

## 목차

1. [constructor](#1-constructor)
2. [setServerRandomCipherType](#2-setserverrandomciphertype)
3. [setServerRandom](#3-setserverrandom)
4. [setMinLength](#4-setminlength)
5. [setMaxLength](#5-setmaxlength)
6. [setOutputType](#6-setoutputtype)
7. [setCipherType](#7-setciphertype)
8. [setMatchRegex](#8-setmatchregex)


<br/>

## 1. constructor

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

## 2. setServerRandomCipherType

> ###### 서버 랜덤 키 설정을 위한 암호화 알고리즘을 지정합니다.
> > ###### ※ 기관마다 상이하므로 사이트 설정 주의
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

## 3. setServerRandom

> ##### 서버 랜덤 키 설정

```javascript
  ...
  RandomKey_S = 'jQSEjVmGaBwJXTrg/7IMOw==';
  d.setServerRandom(RandomKey_S);
  ...
```

<br/>

## 4. setMinLength

> ##### 암호화할 데이터의 최소 길이를 지정합니다.

```javascript
  ...
  d.setMinLength(1);
  ...
```

<br/>

## 5. setMaxLength

> ##### 암호화할 데이터의 최대 길이를 지정합니다.

```javascript
  ...
  d.setMaxLength(20);
  ...
```

<br/>

## 6. setOutputType

> ##### 출력 타입을 지정합니다.
> > ###### ※ 기관마다 상이하므로 사이트 

KEY|VALUE
---|---
OUTPUT_TYPE_ORIGINAL|1
OUTPUT_TYPE_HASH|2

```javascript
  ...
  d.setOutputType(OUTPUT_TYPE_HASH);
  ...
```

<br/>

## 7. setCipherType

> ##### 출력 암호화 알고리즘을 지정합니다.
> > ###### ※ 기관마다 상이하므로 사이트 설정 주의 

```javascript
  ...
  d.setCipherType(CIPHER_TYPE_RSA);
  ...
```


<br/>

## 8. setMatchRegex

> ##### 출력 데이터 문자열 정리를 위한 정규식 형태를 지정합니다.
> > ###### ※ 기관마다 상이하므로 사이트 설정 주의

```javascript
  ...
  d.setMatchRegex('(^[!-~]{1,20}$)');
  ...
```
