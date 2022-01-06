var CFCASIPInput = function(a) {
  function constructor(b) {
    var c;
    if (void 0 == b || null || b)
      throw Error("invalid parameter");
    if ("string" == typeof b)
      c = b;
    else {
      if ("object" != typeof b)
        throw Error("invalid parameter");
      c = b.id
    }
  }
  constructor(a);
}
