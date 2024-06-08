import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('Received request body:', body);
    
    const { id, email_addresses, first_name, image_url } = body?.data || {};
    
    if (!id || !email_addresses || email_addresses.length === 0) {
      throw new Error('Invalid data received');
    }

    const email = email_addresses[0]?.email_address;
    console.log('Parsed email:', email);
    
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
    console.log('Upserted user:', user);

    // Check if the user already has a subscription, if not, create one
    const existingSubscription = await db.billings.findUnique({
      where: { userId: user.id },
    });
    console.log('Existing subscription:', existingSubscription);

    if (!existingSubscription) {
      const newSubscription = await db.billings.create({
        data: {
          userId: user.id,
          plan: 'STANDARD', // Default plan for new users
        },
      });
      console.log('Created new subscription:', newSubscription);
    }

    return new NextResponse('User and subscription updated in database successfully', {
      status: 200,
    });
  } catch (error) {
    console.error('Error updating database:', Error);
    return new NextResponse('Error updating user in database', { status: 500 });
  }
}
