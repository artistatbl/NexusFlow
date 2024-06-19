import { z } from 'zod'

export const MAX_UPLOAD_SIZE = 1024 * 1024 * 2 // 2MB
export const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg']

export type DomainSettingsProps = {
  domain?: string
  description?: string
  subdomain?: string
  image?: any
  custom_domain?: string
  welcomeMessage?: string
}


export const AddDomainSchema = z.object({
  domain: z
    .string()
    .min(4, { message: 'A domain name must have at least 4 characters' }),
    //.({ message: 'Required' }), // Ensure the field is required
  description: z.string().optional(),
  subdomain: z
    .string()
    .min(4, { message: 'A subdomain must have at least 4 characters' })
    .refine(
      (value) => /^((?!-)[A-Za-z0-9-]{1,63}(?<!-))$/i.test(value ?? ''),
      'This is not a valid subdomain'
    ),
  image: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_UPLOAD_SIZE, {
      message: 'Your file size must be less than 2MB',
    })
    .refine((files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type), {
      message: 'Only JPG, JPEG & PNG are accepted file formats',
    }),
  custom_domain: z
    .string()
    .optional()
    .refine(
      (value) => /^((?!-)[A-Za-z0-9-]{1,255}(?<!-))$/i.test(value ?? ''),
      'This is not a valid custom domain'
    ),
});

export const DomainSettingsSchema = z
  .object({
    domain: z
      .string()
      .min(4, { message: 'A domain name must have at least 4 characters' })
      .optional()
      .or(z.literal('').transform(() => undefined)),
    description: z
      .string()
      .optional()
      .or(z.literal('').transform(() => undefined)),
    subdomain: z
      .string()
      .min(4, { message: 'A subdomain must have at least 4 characters' })
      .refine(
        (value) =>
          /^((?!-)[A-Za-z0-9-]{1,63}(?<!-))$/i.test(value ?? ''),
        'This is not a valid subdomain'
      )
      .optional()
      .or(z.literal('').transform(() => undefined)),
    image: z
      .any()
      .optional(),
    custom_domain: z
      .string()
      .optional()
      .refine(
        (value) =>
          /^((?!-)[A-Za-z0-9-]{1,255}(?<!-))$/i.test(value ?? ''),
        'This is not a valid custom domain'
      )
      .optional()
      .or(z.literal('').transform(() => undefined)),
    welcomeMessage: z
      .string()
      .min(6, 'The message must be at least 6 characters')
      .optional()
      .or(z.literal('').transform(() => undefined)),
  })
  .refine(
    (schema) => {
      if (schema.image?.length) {
        if (
          ACCEPTED_FILE_TYPES.includes(schema.image?.[0].type!) &&
          schema.image?.[0].size <= MAX_UPLOAD_SIZE
        ) {
          return true
        }
      }
      if (!schema.image?.length) {
        return true
      }
    },
    {
      message:
        'The file must be less than 2MB, and only PNG, JPEG & JPG files are accepted',
      path: ['icon'],
    }
  )


  //testing this is nothing here, just trying to see if the schema is working
  //testing this is nothing here, just trying to see if the schema is working
  //testing this is nothing here, just trying to see if the schema is working
  //testing this is nothing here, just trying to see if the schema is working
  //testing this is nothing here, just trying to see if the schema is working
  //testing this is nothing here, just trying to see if the schema is working