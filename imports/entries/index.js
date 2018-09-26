import PM from "platemale";
const config = {
  name: "entries",
  schema:
  [
    {
      name:'name',
      type: String,
      label:'Name',
      default:'',
      required:true,
      requiredMessage: 'specify name.'
    },
    {
      name:'lastname',
      type: String,
      label:'Last Name',
      default:'',
      required:true,
      requiredMessage: 'specify name.'
    },
    {
      name:'number',
      type: String,
      label:'Cell Number',
      default:'',
      required:true,
      requiredMessage: 'specify name.'
    }
  ]
}
export default PM.initCollections(PM.defaults(config));
