# 객체생성

CFCASIPInput 객체의 생성자 파라미터에는 문자열 또는 오브젝트의 타입이 들어올 수 있습니다.
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

>###### Source CFCASIPInput.js line 1
