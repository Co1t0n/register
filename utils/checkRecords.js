const { checkIfValidIP, checkIfValidFQDN, checkInvalidDomain } =  require('./utils.js');

function checkRecords(data) {
    const recordType = Object.keys(data.target)[0];

    // Check if the domain is invalid
    if (checkInvalidDomain(data.target[recordType].name) === true) return false;

    // Check A record
    if (recordType.toLowerCase() === 'a') {
        return checkIfValidIP(data.target[recordType].value);
    }

    // Check CNAME record
    if (recordType.toLowerCase() === 'cname') {
        return checkIfValidFQDN(data.target[recordType].value);
    }

    return false;
}

module.exports = checkRecords;
