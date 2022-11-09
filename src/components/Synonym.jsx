

const Synonym = ({mean}) => {
    return (
      <div className="column-2 md:columns-3">
      {
         mean?.map(val=>val.meanings.map(means=>means.synonyms.map(def=>(
           
            <div key={def}>
            {def ? <li>{def}</li> : ""}
          </div>
               
            
             
             
             ))))
      }
     </div>
    )
  }
  
  export default Synonym