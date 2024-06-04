import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { id, email_addresses, first_name, image_url } = body?.data

    const email = email_addresses[0]?.email_address
    console.log('✅', body)

    // Upsert user information
    const user = await db.user.upsert({
      where: { clerkId: id },
      update: {
        email,
        name: first_name,
        profileImage: image_url,
      },
      create: {
        clerkId: id,
        email,
        name: first_name || '',
        profileImage: image_url || '',
      },
    });

    // Check if the user already has a subscription, if not, create one
    const existingSubscription = await db.billings.findUnique({
      where: { userId: user.id },
    });

    if (!existingSubscription) {
      await db.billings.create({
        data: {
          userId: user.id,
          plan: 'STANDARD', // Default plan for new users
        },
      });
    }

    return new NextResponse('User and subscription updated in database successfully', {
      status: 200,
    });
  } catch (error) {
    console.error('Error updating database:', error);
    return new NextResponse('Error updating user in database', { status: 500 });
  }
}