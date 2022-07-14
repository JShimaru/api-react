import axios from 'axios';

export async function randomAdvice() {
    const response = await axios.get('https://api.adviceslip.com/advice')
    console.log('This is the quote: '+ response)
    return response
}

export async function findAdvice(input) {
    let keyword = input
    const search = await axios.get(	'https://api.adviceslip.com/advice/search/'+keyword)
    console.log('This is the quotes: '+ search)
    return search
}