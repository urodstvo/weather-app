const getDefaultTime = () => {
    const date = new Date();
    const time = date.getHours();
    return Math.floor(time / 3);
};

export default getDefaultTime;
