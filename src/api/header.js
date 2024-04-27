export const header = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user){
        return {
            Authorization: 'Bearer ' + user.token,
            ContentType: 'application/json'
        }
    }
}