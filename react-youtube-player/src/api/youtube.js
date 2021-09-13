import axios from 'axios';
const API_KEY = 'AIzaSyBs1XB7W0Sc_JTybRjR_ZevwErOSAXH5Qs';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		key: API_KEY,
		type: 'video',
		part: 'snippet',
		// maxResults: 10,
	}
});
