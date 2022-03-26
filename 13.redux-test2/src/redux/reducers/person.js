export default function personReducer(preState = [], action) {
  const { type, data } = action
  switch (type) {
    case "PERSON_ADD":
      return [data, ...preState]
    default:
      return preState
  }
}
