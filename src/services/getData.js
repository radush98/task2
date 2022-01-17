const regex = /\d{2}([\/.-])\d{2}\1\d{4}/g;
function parseData(content) {
    return content.match(regex) ? content.match(regex) : '-';
}

export default parseData;