import axios from "axios";

export async function galleryCardsApi(name) {
    try {

        const KEY = '29840242-456192cfb7aa7dbb81a60ed73';
        const BASE_URL = 'https://pixabay.com/api/';
        let page = 1;
        const per_page = 40;

        const response = await axios.get(`${BASE_URL}?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`);
        return response.data;

    } catch (error) {
        console.error(error);
    }
}

// export function galleryCardsApi(item) {
//     const KEY = '29840242-456192cfb7aa7dbb81a60ed73';
//     const BASE_URL = 'https://pixabay.com/api/';
//     let page = 1;
//     const per_page = 40;

//     return fetch(`${BASE_URL}?key=${KEY}&q=${item}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${
//         per_page}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error()
//             }
//             return response.json()
//         });
// }
 