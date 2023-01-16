import { useEffect,useState } from 'react';
import './ViewClasses.css';

export function Classes() {

  const [data, setData] = useState(null);
  const [className,setClassName]= useState('BCS-6A')
  const [noOfStudents,setNoOfStudetns]= useState('42')
  const [teacherName,setTeacherName]= useState('Mr Qasim Malik')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // // Async function to get the data from fetch API
  // useEffect(()=> {
  //   fetch(`http://127.0.0.1:3000/head/classes`)
  // .then((response) => response.json()).then((actualData) => {
  //   setData(actualData);
  //   console.log('Data '+ data);
    
  //   setError(null);
  // })
  // .catch((err) => {
  //   setError(err.message);
  //   setData(null);
  // })
  // .finally(() => {
  //   setLoading(false);
  // });


  // },[])
  
  const Item = (props) =>{
    return(
      <div className='mainCont'>
        <div className='item'>
          <div style={{flex:2}} className='teacherNameContainer'>
            <p>Taught By</p>
            <p>{props.teacherName}</p>
          </div>
          <div style={{flex:3}}>
            <p >{props.className}</p>
            <a href='#'>Click to see more info</a>
            
          </div>
          <div style={{flex:2}}>
            <p>No of Students </p>
            <p>{props.noOfStudents}</p>
          </div>
        </div>
        <hr style={{width:'90%'}}></hr>
      </div> 
    )
  }

  return (
    <div className="App">
        <div className='header'>
          <h2>Here is the list of Classes in your Department</h2> 
        </div >
        <Item teacherName={teacherName} className={className} noOfStudents={noOfStudents}/>
        <Item teacherName={teacherName} className={className} noOfStudents={noOfStudents}/>
        <Item teacherName={"Mr Taimur Shehzad"} className={className} noOfStudents={32}/>
        <Item teacherName={'Mr Amir Khan'} className={'BCS-6B'} noOfStudents={23}/>
    
    
    </div>
  );
}
