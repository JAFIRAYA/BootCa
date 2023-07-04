import Actor from './actor';

const App = () => {

const listCars = [
    {
      Actor : 1,
      firstname: "dodge d200",
      lastname: "1970-01-01",
      image: "USA"
    },
    {
      Actor : 2,
      firstname: "hi 1200d",
      lastname: "1970-01-01",
      image: "USA"
    },
    {
      id : 3,
      firstname: "datsun pl510",
      lastname: "1971-01-01",
      image: "Japan"
    },
    
  ]
  return(
    listCars.map(item =>( <Actor actor={item}/> ) )
  )

 
}

export default App;


