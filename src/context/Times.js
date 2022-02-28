const Times = () => {
    const timeLogin = new Date()
    const timeHour = timeLogin.getSeconds()
    console.log(timeHour);
    return timeHour
}

export default Times