import axios from 'axios'

export const FETCH_STARWARS_DATA = 'FETCH_STARWARS_DATA'

const data = () => {
    return (dispatch) => {
        axios
        .get('https://swapi.dev/api/people/')
        .then(res => {
            dispatch({type: FETCH_STARWARS_DATA, payload: res.data})
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
}
export default data