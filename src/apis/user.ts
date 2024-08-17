export async function fetchUserData(passport: string, dob: string) {
    const response = await fetch(`https://api.example.com/users?passport=${passport}&dob=${dob}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}