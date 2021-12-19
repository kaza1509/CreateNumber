let checkprime = (n) => {
    if(n < 2) return false
    for (let i = 2; i < n; i++) {
        if(n % i == 0) return false
    }
    return true
}

let generate = (e) => {
    let input = document.querySelector('input')
    let value = input.value

    let mess = document.getElementById('message')
    mess.style.color = '#EB695B'
    let pattern = /^[1-9]{1}[0-9]*$/gi
    if(value == '') {
        mess.innerHTML = 'Enter number value on the input field to generate numbers'
    }
    else if(pattern.test(value)){
        mess.innerHTML = ''
        let createNum = document.querySelector('#generate')
        Object.assign(createNum.style, {
            display: 'flex',
            flexWrap: 'wrap'
        })
        
        for (let i = 0; i < value; i++) {
            let element = document.createElement('div')
            element.textContent = i
            Object.assign(element.style, {
                width: 'calc(100%/9 - 4px)',
                height: '50px',
                border: '2px solid #fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                color: '#fff'
            })
            if(i == 2) {
                element.style.backgroundColor = '#EB695B'
            }
            else if(i%2 == 0) {
                element.style.backgroundColor = '#5BBC7A'
            }
            else {
                if(checkprime(i)) {
                    element.style.backgroundColor = '#EB695B'
                }
                else {
                    element.style.backgroundColor = '#F7DC5C'
                }
            }

            createNum.appendChild(element)
        }
    }
    else {
        mess.innerHTML = 'Input value must be a number'
    }
}

let genrateNumber = () => {
    let button = document.querySelector('button')
    button.addEventListener('click', () => {
        let createNum = document.querySelector('#generate')
        createNum.innerHTML = ''

        generate()
    })
}

genrateNumber()