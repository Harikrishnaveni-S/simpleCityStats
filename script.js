const Stats = document.querySelector('button')
const resdiv = document.createElement('div')
resdiv.id = 'result'
document.getElementById('container').appendChild(resdiv)

Stats.addEventListener('click', getCityStats)

function getCityStats() {
    const cityDrpDwn = document.getElementById('city')
    const selCity = cityDrpDwn.options[cityDrpDwn.selectedIndex].value
    console.log(selCity)

    let population = 0; literacyRate = 0; language = 0;

    switch (selCity) {
        case 'Trichy':
            population = 10000
            literacyRate = 85.5
            language = 'Tamil'
            break

        case 'Tenkasi':
            population = 7000
            literacyRate = 70.5
            language = 'Tamil'
            break


        case 'Bengaluru':
            population = 70000
            literacyRate = 80.5
            language = 'Kanada'
            break

        case 'Mumbai':
            population = 80000
            literacyRate = 75.5
            language = 'Marathi'
            break

    }

    let text = `In ${selCity}, the population is ${population}, the literacy rate is ${literacyRate}%, and the primary language spoken is ${language}.`;
    console.log(text)

    document.getElementById('result').innerHTML = text
}