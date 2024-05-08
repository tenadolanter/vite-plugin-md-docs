function test(value, tst) {
  return typeof tst === "string" ? value === tst : tst.test(value);
}

export default function filter(include, exclude) {
  const includeArr = Array.isArray(include)
    ? include
    : include === null
    ? []
    : [include];

  const excludeArr = Array.isArray(exclude)
    ? exclude
    : !exclude || exclude === null
    ? []
    : [exclude];

  return (val) =>
    includeArr.some((t) => test(val, t)) &&
    !excludeArr.some((t) => test(val, t));
}
