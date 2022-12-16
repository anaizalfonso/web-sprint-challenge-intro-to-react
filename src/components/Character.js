// Write your Character component here
import React  from "react";

export default function character ({props}){

const [character, setDetails] = useState(null)
useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setNamePeople(res.data);
    })
     
    .catch(err => {
      console.error(err)
    })
  }, []);

return (
    <div className='container'>
    </div>
)
}
    