'use server'

export default async function submit(formData: FormData) {
    const drinks = formData.get('drinks')
    const sleep = formData.get('sleep')
    const meditate = formData.get('meditate')
    const journal = formData.get('journal')

    console.log({drinks, sleep, meditate, journal})
}