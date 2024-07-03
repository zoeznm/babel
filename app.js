function a(a,b) {
  let result = args[a]+ args[b];
  const oneMore = () => {
    return result + 10;
  }
  return oneMore();
}