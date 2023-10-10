'use client'

import {signUp} from "../page";

export function SignUpForm() {

    const handleSignUp = async () => {
        await signUp({
            email: 'brsteele2123@gmail.com',
            name: 'Brian',
            password: 'Habits@123!'
        })
    }
    return (
        <button onClick={handleSignUp}>Sign Up</button>
    )
}

