'use client'
import {useState} from "react";
import {TextInput} from "@/components/TextInput";


type Props = {
    onSubmit: (data: FormData) => void
}

export const EntryForm = ({onSubmit}: Props) => {
    const [drinks, setDrinks] = useState('')
    const [sleep, setSleep] = useState('')
    return (
        <form action={onSubmit} className='w-full' >
            <div className='flex flex-col gap-8'>
            <TextInput id={"drinks"}  value={drinks} onValueChange={setDrinks} label='Drinks' width={'small'} />
            <TextInput id={"sleep"}  value={sleep} onValueChange={setSleep} label='Sleep' width={'small'} />
            <input id={"journal"} type={"text"} name={"journal"} />
            <input id={"meditate"} type={"text"} name={"meditate"} />
            <button type={"submit"}>Submit</button>
            </div>
        </form>
    )
}