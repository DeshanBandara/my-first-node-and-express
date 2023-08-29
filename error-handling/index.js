const fs = require('fs')

const content = 'this is the content wich will write to text file!'

try {
    fs.writeFileSync('text.txt', content)
    //file written successfully
} catch (err) {
    console.error(err)
}