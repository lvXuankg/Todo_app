export const modifyName = (name) => {
   return  name.length > 15 ? name.substring(0, 15) + "..." : name;
}