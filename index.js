const buildHistogram = (magazine) => {
    let result = {}
    magazine.forEach(letter => {
        result[letter] ? result[letter] += 1 : result[letter] = 1
    });
    return result
}

const canBuildNote = (magazine, note) => {
    let total = buildHistogram(magazine)
    let word = buildHistogram(note.split(''))
    let result = true
    Object.keys(word).forEach(key => {
        if(!total[key] || word[key] > total[key])
            result = false
    })
    return result
}