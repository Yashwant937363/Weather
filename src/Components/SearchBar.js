import { useDispatch } from "react-redux";
import { fetchData,setCity } from '../store/slice/weather';
import { fetchTime } from '../store/slice/time';
import './SearchBar.css';

export default function SearchBar() {
    const dispatch = useDispatch();

    const updateWeather = (event) => {
        event.preventDefault();
        const temp = event.target.elements.city.value;
        if (temp !== '') {
            const newCity = temp.charAt(0).toUpperCase() + temp.slice(1);
            dispatch(setCity(newCity));
            dispatch(fetchData(newCity));
            dispatch(fetchTime(newCity));
        }
    };
    return (
        <form className='searchbar' onSubmit={updateWeather}>
            <input type='search' placeholder='Enter City Name' className='searchfield' name='city' />
            <button type='submit' className='searchbtn'><i className="bi bi-search"></i></button>
        </form>
    );
}