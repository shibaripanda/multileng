import 'dotenv/config'
import { openAiRequest } from './modules/openAI'
import { pack } from './pack'

interface LengData {
    rutext: string
    index: string
    info_data: string
}
interface LengDataStart {
    title: string
    index: string
    info: string
}
interface LengResult {
    [key: string]: string
}
interface NewLengPack {
    [key: string]: LengResult
}

const textArray: LengData[] = [
    {rutext: 'Привет', index: 'hello', info_data: 'приветствие'},
    {rutext: 'Пока', index: 'Bye', info_data: 'пока'},
    {rutext: 'Заказы', index: 'order', info_data: 'заказы'},
    {rutext: 'Удалить', index: 'delete', info_data: 'удалить'},
]

const lengs: LengDataStart[] = [
    {title: 'Русский', index: 'ru', info: 'русский'},
    {title: 'English', index: 'en', info: 'английский'},
    {title: 'Español', index: 'es', info: 'испанский'},
    {title: 'Français', index: 'fr', info: 'французский'},
    {title: 'Português', index: 'pt', info: 'португальский'},
    {title: 'Deutsch', index: 'de', info: 'немецкий'},
    {title: '中文', index: 'zh', info: 'китайский'},
    {title: 'Italiano', index: 'it', info: 'итальянский'},
    {title: '日本語', index: 'ja', info: 'японский'},
    {title: '한국어', index: 'ko', info: 'корейский'},
    {title: 'العربية', index: 'ar', info: 'арабский'},
    {title: 'हिन्दी', index: 'hi', info: 'хинди'},
    {title: 'עברית', index: 'he', info: 'иврит'},
    {title: 'Türkçe', index: 'tr', info: 'турецкий'},
    {title: 'Tiếng Việt', index: 'vi', info: 'вьетнамский'},
    {title: 'Nederlands', index: 'nl', info: 'голландский'},
    {title: 'Polski', index: 'pl', info: 'польский'},
    {title: 'Bahasa Indonesia', index: 'id', info: 'индонезийский'},
    {title: 'Svenska', index: 'sv', info: 'шведский'},
    {title: 'Čeština', index: 'cs', info: 'чешский'},
    {title: 'Українська', index: 'uk', info: 'украинский'},
    {title: 'Magyar', index: 'hu', info: 'венгерский'},
    {title: 'ไทย', index: 'th', info: 'тайский'},
    {title: 'Ελληνικά', index: 'el', info: 'греческий'},
    {title: 'Dansk', index: 'da', info: 'датский'},
    {title: 'Suomi', index: 'fi', info: 'финский'},
    {title: 'Română', index: 'ro', info: 'румынский'},
    {title: 'Slovenčina', index: 'sk', info: 'словацкий'},
    {title: 'Беларуская', index: 'be', info: 'белорусский'}
]


const getLenguagesFromAI = async (updateAll: boolean, indata: LengData[], lenguages: LengDataStart[], existLengPack: NewLengPack) => {
    const newLengPack: NewLengPack = {}
    for(const i of indata){
        if(typeof existLengPack[i.index] === 'undefined' || updateAll){
            console.log('new')
            const newRes: LengResult = {info_data: i.info_data, ru: i.rutext}
            for(const l of lenguages.filter(item => item.index !== 'ru')){
                newRes[l.index] = await openAiRequest(`Переведи на ${l.info} язык: "${i.rutext}", без кавычек и с большой буквы, в ответе только перевод`)
            }
            newLengPack[i.index] = newRes
        }
        else{
            console.log('exist')
            newLengPack[i.index] = existLengPack[i.index]
        }
    }
    console.log(newLengPack)
    return newLengPack
}

getLenguagesFromAI(false, textArray, lengs, pack)