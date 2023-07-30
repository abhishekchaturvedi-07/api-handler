import axios from 'axios';

const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'
// const options = {
  
// };


export const getPlacesData = async(sw, ne) => {
    try {
        const {data: {data}} = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_latitude: ne.lat,
                tr_longitude: ne.lng,
              },
              headers: {
                'X-RapidAPI-Key': 'a62481e5d3msh25a54b3411c0b1fp14a468jsnfbd5353c1901',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com' 
              }
        });
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
}

