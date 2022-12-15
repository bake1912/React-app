import CSS from 'csstype';
type InputProps = {
  name: string
}
const h1Styles: CSS.Properties = {
  display: 'block',
  fontFamily: 'fantasy',
  color:'black',
  border:'0.5px',
  fontSize: '15px',
  marginTop: '0px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',

};
export function Input(props: InputProps) {

  return(
    <>
    <h2>{props.name}</h2>
    <input style={h1Styles} />

    </>
  )

  

  
    
      
      

    
  
}