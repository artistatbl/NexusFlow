import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { strict } from 'assert'
import { ErrorMessage } from '@hookform/error-message'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'

type Props = {
  type: 'text' | 'email' | 'password'
  inputType: 'select' | 'input' | 'textarea'
  options?: { value: string; label: string; id: string }[]
  label?: string
  placeholder: string
  register: UseFormRegister<any>
  name: string
  errors: FieldErrors<FieldValues>
  lines?: number
  form?: string
  defaultValue?: string
  showPassword?: boolean;
  toggleShowPassword?: () => void
}

const FormGenerator = ({
  errors,
  inputType,
  name,
  placeholder,
  defaultValue,
  register,
  type,
  form,
  label,
  lines,
  options,
  showPassword,
  toggleShowPassword,
}: Props) => {
  switch (inputType) {
    case 'input':
      if (type === 'password') {
        return (
          <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
            {label && <span>{label}</span>}
            <div style={{ position: 'relative' }}>
              <Input
                id={`input-${label}`}
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                form={form}
                defaultValue={defaultValue}
                {...register(name)}
              />
              <span
                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                onClick={toggleShowPassword}
              >
                {showPassword ? '👁️' : '👁️'}
              </span>
            </div>
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message }) => <p className="text-red-400 mt-2">{message}</p>}
            />
          </Label>
        );
      }
      default:
        return (
          <Label
            className="flex flex-col gap-2"
            htmlFor={`input-${label}`}
          >
            {label && label}
            <Input
              id={`input-${label}`}
              type={type}
              placeholder={placeholder}
              form={form}
              defaultValue={defaultValue}
              {...register(name)}
            />
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message }) => (
                <p className="text-red-400 mt-2">
                  {message === 'Required' ? '' : message}
                </p>
              )}
            />
          </Label>
        )
    case 'select':
      return (
        <Label htmlFor={`select-${label}`}>
          {label && label}
          <select
            form={form}
            id={`select-${label}`}
            {...register(name)}
          >
            {options?.length &&
              options.map((option) => (
                <option
                  value={option.value}
                  key={option.id}
                >
                  {option.label}
                </option>
              ))}
          </select>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === 'Required' ? '' : message}
              </p>
            )}
          />
        </Label>
      )
    case 'textarea':
      return (
        <Label
          className="flex flex-col gap-2"
          htmlFor={`input-${label}`}
        >
          {label && label}
          <Textarea
            form={form}
            id={`input-${label}`}
            placeholder={placeholder}
            {...register(name)}
            rows={lines}
            defaultValue={defaultValue}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === 'Required' ? '' : message}
              </p>
            )}
          />
        </Label>
      )
      defualt: return <></>
  }
}

export default FormGenerator
