import './App.css';
import Avatar from './Avatar.js';


function App() {
  return (
    <div className="wrapper">
      <h1>Choose your Avatar</h1>
      <Avatar image='https://cdn.pixabay.com/photo/2020/06/13/08/45/kawaii-animal-patches-5293508_960_720.png' fName='Rosey' lName='PIG'/>
      <Avatar image='https://cdn.pixabay.com/photo/2020/06/13/08/45/kawaii-animal-patches-5293509_960_720.png' fName='Lily' lName='SHEEP'/>
    </div>

  );
}

export default App;
