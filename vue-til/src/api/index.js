import axios from 'axios';

// 1. HTTP Request & Response 관련 기본 설정
const instance = axios.create({
	baseURL: 'http://localhost:3000',
});

// 2. API 함수들 정리
function postSignup(signupData) {
	// return axios.post(`${config.baseUrl}/signup`, signupData);
	return instance.post('/signup', signupData);
}

export { postSignup };
