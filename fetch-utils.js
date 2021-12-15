const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwODY5NSwiZXhwIjoxOTU1MDg0Njk1fQ._JsLr3VMD8auyxCxM9Ua1nAGqcplV6eKZNzk8mg9nbg';


const SUPABASE_URL = 'https://hsstlxeevquipwyiestv.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getFood() {
    const response = await client 
        .from('Food')
        .select();
    // console.log(response.body);
    return response.body;
    
}

export async function getFighter() {
    const response = await client
        .from('Fighters')
        .select('*');

    return response.body;
}
export async function getSport() {
    const response = await client
        .from('Sports')
        .select('*');
    // console.log(response.body);
    return response.body;
}
export async function getAnime() {
    const response = await client
        .from('Movies')
        .select('*');
    // console.log(response.body);
    return response.body;
}