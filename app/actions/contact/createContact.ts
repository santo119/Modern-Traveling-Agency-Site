import {z} from 'zod'
import {auth} from '@clerk/nextjs/server'

const formSchema = z.object({
    firstname: z.string().min(1),
    lastname: z.string().min(1),
    email: z.string().email(),
    subject: z.string().email(),
    message: z.string().min(1)

})
export const createContact = async (formData: FormData) => {
    'use server'

    const {userId} = await auth()
    if(!userId) {
        throw new Error('Unautharized')
    }

    const validatedFields = formSchema.safeParse({
        firstname: formData.get("firstname") as string,
        lastname: formData.get("lastname") as string,
        email: formData.get("email") as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
      })
      if (!validatedFields.success) {
        
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
      }

}