'use client'
import { Loader } from '@/components/global/loader'
import { AuthProvider } from '@/content/use-auth-content'
import { useSignUpForm } from '@/hooks/sign-up/use-sign-up'
import React from 'react'
import { FormProvider } from 'react-hook-form'

type Props = {
  children: React.ReactNode
}

const SignUpFormProvider = ({ children }: Props) => {
  const { methods, onHandleSubmit, loading } = useSignUpForm()

  return (
    <AuthProvider>
      <FormProvider {...methods}>
        <form
          onSubmit={onHandleSubmit}
          className="h-full"
        >
          <div className="flex flex-col justify-between gap-3 h-full">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthProvider>
  )
}

export default SignUpFormProvider
