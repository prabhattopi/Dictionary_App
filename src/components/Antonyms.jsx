

const Antonyms = ({mean}) => {
    return (
      <div className="column-2 md:columns-3">
       {
         mean?.map(val=>val.meanings.map(means=>means.antonyms.map(def=>(
           
            <div key={def}>
            {def ? <li>{def}</li> : ""}
          </div>
               
            
             
             
             ))))
      }
     </div>
    )
  }
  
  export default Antonyms