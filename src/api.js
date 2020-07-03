import axios from 'axios';

export default axios.create({
  baseURL: `http://newsapi.org/v2/`,
  headers:{
    Authorization:'8c46fce3d4dc449fa846e12edb97d4da'
  }
});