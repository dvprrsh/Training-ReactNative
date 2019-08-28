import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Q2gY2ILClmrV7gDGmirNjMFtgsPk0YdXc0FFk5phXHrfbkoW9aq7TmDIQx0hu0haBH8uJUt1hcBqwbJYig7T5CoXjarfWpVYIznMqJWM0cpXv1MFw3ADMzkaSDxlXXYx'
  }
});
