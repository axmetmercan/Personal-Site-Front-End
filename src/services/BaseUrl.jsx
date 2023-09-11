// http.js
const getBaseUrl = () => {
    let url;
    switch(process.env.NODE_ENV) {
      case 'production':
        url = 'https://localhost:5173';
        break;
      case 'development':
      default:
        url = 'http://ahmetmercan.com.tr';
    }
  
    return url;
  }
  
  export default axios.create({
    baseURL: getBaseUrl(),
  });