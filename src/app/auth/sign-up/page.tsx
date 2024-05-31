import SignUpForm from '@/components/forms/sign-up/login-provider'
import React from 'react'



type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignUpForm>
          <div className="flex flex-col gap-3">
            {/* <RegistrationFormStep /> */}
            {/* <ButtonHandler /> */}
          </div>
          {/* <HighLightBar /> */}
        </SignUpForm>
      </div>
    </div>
  )
}

export default SignUp