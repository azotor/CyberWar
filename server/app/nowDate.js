module.exports = () => {
    const now = new Date();
    return `${ now.getFullYear() }-${ now.getMonth() + 1 < 10 ? 0 : `` }${ now.getMonth() + 1 }-${ now.getDate() + 1 < 10 ? 0 : `` }${ now.getDate() } ${ now.getHours() + 1 < 10 ? 0 : `` }${ now.getHours() }:${ now.getMinutes() + 1 < 10 ? 0 : `` }${ now.getMinutes() }:${ now.getSeconds() + 1 < 10 ? 0 : `` }${ now.getSeconds() }`;
}