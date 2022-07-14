// 1
// runtime complexity: 0(n^2)

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k <arr.length; k++) {
            if (i !== k && arr[i] - arr[k] === 0) {
                return true
            }
        }
    }
    return false
}

console.log(sumZero([0,1,2,3,4,5]))
console.log(sumZero([0,1,2,3,4,2]))


//2
// Runtime Complexity: 0(n)
 
function uniqueChars(str) {

    const usedChars = {}
    for(let i = 0; i< str.length; i++) {
        if (usedChars[str [i]]) {
            return false
        } else {
            usedChars[str[i]] = "filler"
        }
    }
    return true
}

console.log(uniqueChars('Monday'))
console.log(uniqueChars('Moonday'))

//3
//Runtime Complexity: 0(n)

function isPangram(str) {
    str = str.toLowerCase()

    const letterCounts = {
        a:0,
        b:0,
        c:0,
        d:0,
        e:0,
        f:0,
        g:0,
        h:0,
        i:0,
        j:0,
        k:0,
        l:0,
        m:0,
        n:0,
        o:0,
        p:0,
        q:0,
        r:0,
        s:0,
        t:0,
        u:0,
        v:0,
        w:0,
        x:0,
        y:0,
        z:0,
    }
    for (let i = 0; i < str.length; i++) {
        if(letterCounts[str[i]] !== undefined) {
            letterCounts[str[i]]++
        }
    }

    for (letter in letterCounts) {
        if (letterCounts[letter] === 0) {
            return false
        }
    }

    return true
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))
console.log(isPangram('I like cats, but not mice'))

//4
//Runtime Complexity: 0(n)

function find_longest_word(arr) {
     let longestWordLength = 0
    for (let i = 0; i <arr.length; i++) {
        if (arr[i].length > longestWordLength) {
            longestWordLength = arr[i].length
        }
    }
    return longestWordLength
}

console.log(find_longest_word(["hi", "hello"]))