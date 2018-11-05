const CORS_URL='https://cors-anywhere.herokuapp.com/';
const SPOTIFY_API_URL = 'https://api.spotify.com';
var loggedIn = false;
var oauthToken = '';

export const Spotify = {

  search(term) {
    return fetch(`${CORS_URL}${SPOTIFY_API_URL}search?q=${term}&type=album,artist,track`,{
      headers: {
        Authorization: `Bearer ${oauthToken}`
      }
    }).then(response => {
      if ( response.ok ) {
        return response.json();
      }
      throw new Error('Request failed');
    }).then(jsonResponse => {
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          console.log(JSON.stringify(business));
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1 +((business.location.address2 !=='' && business.location.address2!==null)?', '+ business.location.address2:'') +((business.location.address3!=='' && business.location.address3!==null)?', '+business.location.address3:''),
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        });
      }
    });
  }
}
