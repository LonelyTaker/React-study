export default function countReducer(preState = 0, action) {
  const { type, data } = action
  switch (type) {
    case "ADD":
      return preState + data
    case "SUB":
      return preState - data
    default:
      return preState
  }
}
