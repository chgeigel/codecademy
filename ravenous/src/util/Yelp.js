//const clientId = 'sOM_NKhX8ZmbMtWK6DtGOg';
const apiKey = 'ICQVdqHo47tM_nIyjvaqIRDfdEKhfe5QtSHj_ZM4DJ8Z12wDP2hY6cbxaoUiE5mMEwgWCiA2Ico9UucO8TXU3ma-9YgMKd5opZZbpr0eQ12FQ8jp0V5VOTwcKXDeW3Yx';

export const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
      headers: {
        Authorization: `Bearer ${apiKey}`
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
};
