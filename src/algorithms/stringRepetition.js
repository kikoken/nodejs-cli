const rokker = (string, rep) => {
    const list = new Array(rep).fill(string)
    return list.toString().replace(/,/g, '')
}

export default rokker