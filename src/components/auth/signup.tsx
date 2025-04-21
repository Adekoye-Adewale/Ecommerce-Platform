'use client'
import React, { useActionState } from 'react'
import Form from 'next/form' 
import { Loader2 } from 'lucide-react'

const initialState = {
        message: '',
}

type SignUpProps = {
        action:  (prevState: any, formData: FormData, ) => Promise<{message: string} | undefined>
}

export default function SignUp({ action} : SignUpProps) {

        const [state, formAction, isPending] = useActionState(action, initialState)
        return (
                <Form 
                        action={formAction}
                        className='max-w-md mx-auto my-16 bg-white rounded-lg shadow-md'
                >
                        <h1 className='text-2xl font-bold text-center mb-2'>
                                Join the EP Stores Family
                        </h1>
                        <p className='text-center test-sm text-rose-600 font-semibold mb-2'>
                                🔥LIMITED TIME OFFER🔥
                        </p>
                        <p className='text-center test-sm text-gray-600 font-semibold mb-6'>
                                Sign up now and get 90%off your first order
                        </p>

                        <div className='space-y-6'>
                                {/*EMAIL*/}
                                <div className='space-y-2'>
                                        <label htmlFor="email" className='block text-sm font-medium text-gray-700'>
                                                Email
                                        </label>
                                        <input 
                                                type="email" 
                                                id='email'
                                                name='email'
                                                autoComplete='email'
                                                required
                                                className='w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300'
                                                placeholder='Enter your email'
                                        />
                                </div>
                                {/*PASSWORD*/}
                                <div className='space-y-2'>
                                        <label htmlFor="email" className='block text-sm font-medium text-gray-700'>
                                                Password
                                        </label>
                                        <input 
                                                type="password" 
                                                id='password'
                                                name='password'
                                                autoComplete='new-password'
                                                required
                                                className='w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300'
                                                placeholder='Enter your password'
                                        />
                                </div>
                                {/*INFO COPY*/}
                                <div className='text-center'>
                                        <p className='text-xs text-gray-500 mb-2'>
                                                🔥Only 234 welcome bonus package remaining!
                                        </p>
                                        <p className='text-xs text-gray-500 mb-4'>
                                                🕑Offer expires in: 21:37
                                        </p>
                                </div>
                                {/*SUBMIT BUTTON*/}
                                <button
                                        type='submit'
                                        disabled={isPending}
                                        title='Submit form'
                                        className={`w-full bg-rose-600 text-white py-3 rounded-md hover:bg-rose-700 transition-colors font-medium flex justify-center items-center gap-2`}
                                >
                                        {isPending ? (
                                                <React.Fragment>
                                                        <Loader2/>
                                                </React.Fragment>
                                        ) : (
                                                'CREATE ACCOUNT'
                                        )}
                                </button>
                        </div>
                </Form>
        )
}
