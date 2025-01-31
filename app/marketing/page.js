"use client"
import { useLanguage } from '../context/language'
import { Lang } from '../lang'

export default function Page() {
    const {currentLang}=useLanguage()
  return (
    <div>
        {Lang[currentLang].marketing}
    </div>
  )
}
