
  function InputTag({name,labelName,value,onChange,pattern}) {
    return (  <>
    <label htmlFor="">{labelName}</label>
    <input type="text" name={name} value={value} onChange={onChange} pattern={pattern}/>
    </>);
  }
  
  export default InputTag;