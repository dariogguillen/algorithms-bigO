https://techdevguide.withgoogle.com/resources/former-interview-question-compression-and-decompression/#!
const decompressString = (str= '') => {
    let openBrackets = 0;
    let repetition = 0;
    let strToRepeat = '';
    let hasNestedBrackets = false;
    let partialFinalStr = '';
    str.split('').forEach(value => { // O(n)
        if(parseInt(value)) {
            if(openBrackets === 0) {
                repetition = parseInt(value);
            } else if(openBrackets >= 1) {
                strToRepeat += value;
            }
        } else if(value === '[') {
            openBrackets++;
            if(openBrackets > 1) {
                hasNestedBrackets = true;
                strToRepeat += value;
            }
        } else if (value === ']') {
            openBrackets--;
            if(openBrackets >= 1) {
                strToRepeat += value;
            } else {
                if(hasNestedBrackets) {
                    strToRepeat = decompressString(strToRepeat) // O(n)
                } 
                    partialFinalStr += strToRepeat.repeat(repetition)
                    repetition = 0;
                    strToRepeat = '';
                
            }
        } else {
            strToRepeat += value;
        }
    })
    return partialFinalStr + strToRepeat
}
console.log('3[abc]4[ab]c')
console.log(decompressString('3[abc]4[ab]c'))
console.log(decompressString('3[abc]4[ab]c') === 'abcabcabcababababc')
console.log('2[3[a]b]')
console.log(decompressString('2[3[a]b]'))
console.log(decompressString('2[3[a]b]') === 'aaabaaab')