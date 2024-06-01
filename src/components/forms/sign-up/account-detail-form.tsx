import React, { useState } from 'react'
import { USER_REGISTRATION_FORM } from '@/constants/form'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import FormGenerator from '../form-generator'

type Props = {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

function AccountDetailsForm({ errors, register }: Props) {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Account details</h2>
      <p className="text-iridium md:text-sm">Enter your email and password</p>
      {USER_REGISTRATION_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          errors={errors}
          register={register}
          name={field.name}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
        />
      ))}
    </>
  )
}

export default AccountDetailsForm
