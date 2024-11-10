

interface LengData {
    rutext: string
    index: string
    info_data: string
}

interface LengResult {
    [key: string]: string
}

interface NewLengPack {
    [key: string]: LengResult
}

const textArray: LengData[] = [
    {rutext: 'Привет', index: 'hello', info_data: 'приветствие'},
    {rutext: 'Назад', index: 'back', info_data: 'назад'}
]

const lengs = ['ru', 'en']

const reference = {
    hello: {
        info_data: 'приветствие',
        ru: 'Привет',
        en: 'Hello'
    },
    back: {
        info_data: 'назад',
        ru: 'Назад',
        en: 'back'
    }
}

let result = []

const getLenguagesFromOI = async (updateAll: boolean, data: LengData[], lenguages: string[]) => {
    if(updateAll){
        const newLengPack: NewLengPack = {}
        for(const i of data){
            const newRes: LengResult = {}
            newRes.info_data = i.info_data
            newRes.ru = i.rutext
            for(const l of lenguages.filter(item => item !== 'ru')){
                newRes[l] = 'dfdfdf' 
            }
            newLengPack[i.index] = newRes
        }
        console.log(newLengPack)
    }
}

getLenguagesFromOI(true, textArray, lengs)