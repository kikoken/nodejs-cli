import inquirer from 'inquirer'
import clear from 'clear'
import chalk from 'chalk'
import fliget from 'fliget'

//scripts
import composite from './algorithms/composite'
import longString from './algorithms/longestString'
import stringRepetition from './algorithms/stringRepetition'
import lastnames from './algorithms/onlyLastNames'
import unique from './algorithms/uniqueNumbers'

const stringsList = ['Composite', 'Longest String', 'String Repetition', 'Only Last Name', 'Unique Numbers']

const main = () => {
    clear()
    chalk.yellow(
        fliget.textSync('ALGORITHMS', { horizontalLayout: 'full'})
    )
    inquirer
        .prompt([
            {
            type: 'rawlist',
            name: 'theme',
            message: 'Select for run script:',
            choices: stringsList,
            }
        ])
        .then((answers) => {
            const { theme } = answers
            switch(theme) {
                case 'Composite':
                    Composite()
                case 'Longest String':
                    Longest()
                case 'String Repetition':
                    Repetition()
                case 'Only Last Name':
                    onlyLastNames()
                case 'Unique Numbers':
                    const arr1 = [1, 2, 5]
                    const arr2 =  [2, 1, 6]
                    console.log(`Result [${arr1.toString()}] [${arr2.toString()}] `, unique(arr1, arr2).toString())
                default:
                    console.log('Not option')
                    break
            }
        });
}

const Composite = () => {
    inquirer
        .prompt([
            {
                type: 'number',
                name: 'a',
                message: 'Enter the first number:'
            },
            {
                type: 'number',
                name: 'b',
                message: 'Enter the second number:'
            },
            {
                type: 'number',
                name: 'c',
                message: 'Enter the last number:'
            }
        ])
        .then((answers) => {
            const {a,b,c} = answers
            console.log('Result: ', composite(a)(b)(c));
        });     
}

const Longest = () => {
    const list = ['best', 'company', 'ever']

    console.log(`The longest string in ${list.toString()}: `,longString(list))
}

const Repetition = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'word',
                message: 'Enter the word:'
            },
            {
                type: 'number',
                name: 'nro',
                message: 'Enter the repetion number:'
            }
        ])
        .then(answers => {
            const {word, nro} = answers
            console.log('Result: ',stringRepetition(word, nro))
        })
}

const onlyLastNames = () => consolelog(lastnames())


main()