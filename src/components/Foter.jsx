const Foter=({Items})=>{
  const numPacked =Items.filter((item)=>item.packed).length
    return(
    <div className="footer">
    
      <h1>total item:{Items.length} ...completed item:{numPacked}</h1>
    </div>
    )
}
export default Foter;