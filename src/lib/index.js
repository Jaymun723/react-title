/**
 * @param {props} Property | I don't know what i'm doing
 */

export default (props) => {
  if (props.children && typeof props.children !== 'string') {
    throw new Error('Must provide a string as children...')
  } else if (props.children) {
    document.querySelector('title').innerHTML = props.children
    return null
  } else if (props.value && typeof props.value !== 'string') {
    throw new Error('Must provide a string as value...')
  } else if (props.value) {
    document.querySelector('title').innerHTML = props.value
    return null
  } else {
    return null

  }
}
