function correctURLName(name) {
    const correctedNameList = name.split('%20');
    let correctedName = '';
    for (const word in correctedNameList) {
        correctedName += ' ' + word;
    }
    return correctedName;
};