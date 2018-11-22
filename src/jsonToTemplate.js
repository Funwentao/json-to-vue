export default function (json) {
  let template = '<div>'
  let componentName = ''
  let { keys, entries } = Object
  json.forEach(element => {
    componentName = keys(element)[0]
    template += `<${componentName}`
    entries(element[componentName]).forEach(([key, value]) => {
      console.log(key, value)
      if (key !== 'text') {
        if (key === 'style') {
          template += ` ${key}="`
          entries(element[componentName][key]).forEach(([skey, svalue]) => {
            template += `${skey}=${svalue};`
          })
          template += '"'
        } else {
          template += ` ${key}="${value}"`
        }
      }
    })
    template += `>${element[componentName].text || ''}</${componentName}>`
  })
  template += '</div>'
  return template
}
