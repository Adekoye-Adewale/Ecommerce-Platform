import { getCurrentSession, registerUser, loginUser } from '@/actions/auth'
import React from 'react'
import { redirect } from 'next/navigation';
import SignUp from '@/components/auth/signup';
import zod from 'zod'

const SignUpSchema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(5).max(32),
})

export default async function SignUpPage() {

        const { user } = await getCurrentSession();

        if (user) {
                redirect('/');
        }

        const action = async (prevState: any, formData: FormData) => {
                "use server"
                const parsed = SignUpSchema.safeParse(Object.fromEntries(formData));
                if (!parsed.success) {
                        return {
                                message: 'Invalid form data',
                        }
                }

                const { email, password } = parsed.data;
                const { user, error } = await registerUser( email, password);
                if (error) {
                        return { message: error };
                } else if (user) {
                        await loginUser(email, password);
                        return redirect('/')
                }
        }

        return <SignUp action={action}/>
}
