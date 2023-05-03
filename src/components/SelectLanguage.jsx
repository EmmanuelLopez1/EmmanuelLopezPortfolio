import React, {useState} from 'react';

// COMPONENTS
import { Home } from '../pages/Home'
import { EnglishHome } from '../pages/EnglishHome'
import { HideElement } from './HideElement'

export const SelectLanguage = () => {
    const [language, setLanguage] = useState(false)
    const handleChange = (e) => {
        console.log(e.target.value);
        setLanguage(e.target.value)
    }

    return (
        <div>
            <HideElement styles="w-full h-screen bg-primary top-0 left-0 flex items-center justify-center">
                <div className=" items-center">
                    <h4 className="text-3xl text-center text-white">Select your language</h4>
                    <select name="lenguaje" onChange={handleChange}
                            className="p-2 outline-0 rounded m-auto block mt-5">
                        <option value="en">English</option>
                        <option value="en">English</option>
                        <option value="es">Español</option>
                    </select>
                </div>
            </HideElement>

            {language === 'es'
                ?
                <Home/>
                : language === 'en' &&
                <EnglishHome/>
            }

        </div>
    )
}