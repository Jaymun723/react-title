export default (props) => {
  console.log(props)
  document.querySelector('title').innerHTML = props.children
  return null
}
