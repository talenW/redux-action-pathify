/**
 * actionTypeGenerator generates an object of action type to achieve the action type
 *  uniqueness. The value of each property is the path of that key.
 * 
 * @param actionMap actionMap, with key is the action name, and the value is null
 * @param separator optional path separator
 * @param path optional path path
 * @returns action type object
 * 
 * @example
 * 
  const actionMap = {
      a: null,
      b: null,
      c: { d: null, e: null, f: { g: null } },
    };

  const type = actionTypeGenerator(actionMap)

  // console.log(type):
  {
    a: "a",
    b: "b",
    c: { d: "c/d", e: "c/e", f: { g: "c/f/g" } },
  }
 */
export const actionTypeGenerator = (actionMap, separator = "/", path = "") => {
  let formatObj = {};
  for (const property in actionMap) {
    const propertyPath = `${path ? `${path}${separator}` : ""}${property}`;
    const formatedProperty =
      actionMap[property] === PATH
        ? { [property]: propertyPath }
        : {
            [property]: actionTypeGenerator(
              actionMap[property],
              separator,
              propertyPath
            ),
          };
    formatObj = { ...formatObj, ...formatedProperty };
  }
  return formatObj;
};

export const PATH = "DEFAULT_PATH";
