import axios from 'axios';

const get_data = data => ({
  type: 'GET_DATA',
  data: data
});

export const data_api = () => {
  return dispatch => {
    axios
      .get('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp')
      .then(resp => {
        dispatch(get_data(resp.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
