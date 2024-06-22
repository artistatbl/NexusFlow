import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// Define the GET method for fetching domain data
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get('domain');

  if (!domain) {
    return NextResponse.json({ status: 400, message: 'Domain query parameter is required.' }, { status: 400 });
  }

  try {
    const domainData = await db.user.findFirst({
      where: {
        domains: {
          some: {
            subdomain: domain,
          },
        },
      },
      select: {
        domains: {
          where: {
            subdomain: domain,
          },
          select: {
            id: true,
            name: true,
            icon: true,
            subdomain: true,
            //custom_domain: true,
            description: true,
            //userId: true,
          },
        },
      },
    });

    if (!domainData) {
      return NextResponse.json({ status: 404, message: 'Domain not found.' }, { status: 404 });
    }

    return NextResponse.json(domainData.domains, { status: 200 });
  } catch (error) {
    console.error('Error fetching domain data:', error);
    return NextResponse.json({ status: 500, message: 'Internal server error' }, { status: 500 });
  }
}
