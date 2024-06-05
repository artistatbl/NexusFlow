'use server'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'


interface DomainData {
  name: string
  description?: string
  subdomain: string
  icon?: string
  custom_domain?: string
}

export const onIntegrateDomain = async (domainData: DomainData) => {
  const user = await currentUser()
  if (!user) return { status: 400, message: "User not found." }

  try {
    const subscription = await db.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        _count: {
          select: {
            domains: true,
          },
        },
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    })

    console.log("Fetched subscription data:", subscription);

    if (!subscription || !subscription.subscription) {
      console.log("Subscription or plan details are missing.");
      return { status: 400, message: "Subscription plan details are missing." };
    }

    console.log(`User Plan: ${subscription.subscription.plan}`);
    console.log(`Current Domain Count: ${subscription._count.domains}`);

    const domainExists = await db.user.findFirst({
      where: {
        clerkId: user.id,
        domains: {
          some: {
            subdomain: domainData.subdomain,
          },
        },
      },
    })

    if (domainExists) {
      console.log("Domain already exists.");
      return { status: 400, message: 'Subdomain already exists' };
    }

    const plan = subscription.subscription.plan;
    const domainCount = subscription._count.domains;
    console.log(`Checking conditions for plan: ${plan} with domain count: ${domainCount}`);

    if (
      (plan === 'STANDARD' && domainCount < 3) ||
      (plan === 'PRO' && domainCount < 5) ||
      (plan === 'ULTIMATE' && domainCount < 10)
    ) {
      const newDomain = await db.user.update({
        where: {
          clerkId: user.id,
        },
        data: {
          domains: {
            create: {
              name: domainData.name,
              description: domainData.description || '',
              subdomain: domainData.subdomain,
              icon: domainData.icon || '',
              custom_domain: domainData.custom_domain,
            },
          },
        },
      })

      console.log("New domain added:", newDomain);
      return { status: 200, message: 'Domain successfully added' }
    } else {
      console.log("Domain limit reached for plan:", plan);
      return {
        status: 400,
        message: "You've reached the maximum number of domains, upgrade your plan",
      }
    }
  } catch (error) {
    console.error("Error adding domain:", error);
    return { status: 500, message: "Internal server error" };
  }
}




export const onGetSubscriptionPlan = async () => {
  try {
    const user = await currentUser()
    if (!user) return
    const plan = await db.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    })
    if (plan) {
      return plan.subscription?.plan
    }
  } catch (error) {
    console.log(error)
  }
}

export const onGetAllAccountDomains = async () => {
  const user = await currentUser()
  if (!user) return
  try {
    const domains = await db.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        id: true,
        domains: {
          select: {
            name: true,
            icon: true,
            id: true,
		},
        },
      },
    })
    return { ...domains }
  } catch (error) {
    console.log(error)
  }
}


export const onGetCurrentDomainInfo = async (domain: string) => {
  const user = await currentUser()
  if (!user) return
  try {
    const userDomain = await db.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        subscription: {
          select: {
            plan: true,
          },
        },
        domains: {
          where: {
            name: {
              contains: domain,
            },
          },
          select: {
            id: true,
            name: true,
            icon: true,
            subdomain: true,
            custom_domain: true,
            description: true,
            userId: true,
		},
           
        },
      },
    })
    if (userDomain) {
      return userDomain
    }
  } catch (error) {
    console.log(error)
  }
}

export const onGetPaymentConnected = async () => {
  try {
    const user = await currentUser()
    if (user) {
      const connected = await db.user.findUnique({
        where: {
          clerkId: user.id,
        },
        select: {
          stripeId: true,
        },
      })
      if (connected) {
        return connected.stripeId
      }
    }
  } catch (error) {
    console.log(error)
  }
}

