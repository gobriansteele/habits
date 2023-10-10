import {Auth, Amplify} from 'aws-amplify';
import awsconfig from '../../aws-exports';
import {SignUpForm} from './components/SignUpForm'

Amplify.configure(awsconfig);

type SignUpParameters = {
    password: string;
    email: string;
    name: string;
};

export async function signUp({ name, password, email,  }: SignUpParameters) {
    try {
        const { user } = await Auth.signUp({
            username: email,
            password,
            attributes: {
                name
            },

        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

export default async function SignUp() {

    return <SignUpForm/>
}