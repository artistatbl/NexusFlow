'use server'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'



export const onIntegrateDomain = async (domain: string, icon: string, description: string, subdomain: string) => {
  const user = await currentUser()
  if (!user) return { status: 400, message: "User not found." }

  try {
    const subscription = await db.user.findUnique({
      where: { clerkId: user.id },
      select: {
        _count: { select: { domains: true } },
        subscription: { select: { plan: true } },
      },
    })

    if (!subscription || !subscription.subscription) {
      return { status: 400, message: "Subscription plan details are missing." }
    }

    const domainExists = await db.user.findFirst({
      where: {
        clerkId: user.id,
        domains: { some: { name: domain, subdomain } },
      },
    })

    if (domainExists) {
      return { status: 400, message: 'Subdomain already exists' }
    }

    const plan = subscription.subscription.plan
    const domainCount = subscription._count.domains

    if (
      (plan === 'STANDARD' && domainCount < 3) ||
      (plan === 'PRO' && domainCount < 5) ||
      (plan === 'ULTIMATE' && domainCount < 10)
    ) {
      const newDomain = await db.user.update({
        where: { clerkId: user.id },
        data: {
          domains: {
            create: {
              name: domain,
              icon: icon,
              description: description,
              subdomain: subdomain,
            },
          },
        },
      })
      if (newDomain) {
        return { status: 200, message: 'Domain successfully added' }
        //console.log(newDomain)
      }
    } else {
      return { status: 400, message: "You've reached the maximum number of domains, upgrade your plan" }
    }
  } catch (error) {
    console.error("Error adding domain:", error)
    return { status: 500, message: "Internal server error" }
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
            subdomain: true,
            description: true,
            userId: true,
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


export const onGetSubdomainDetails = async (domainId: string) => {
  const user = await currentUser();
  if (!user) return;

  try {
    const domainDetails = await db.user.findUnique({
      where: {
        clerkId: user.id,
        domains: {
          some: {
            id: domainId,
      
          },
        },
      },
      select: {
        domains: {
          where: {
            id: domainId,
          },
          select: {
            id: true,
            name: true,
            icon: true,
            subdomain: true,
            description: true,
            userId: true,
          },
        },
      },
    });

    if (domainDetails && domainDetails.domains.length > 0) {
      return domainDetails.domains[0];
    }
  } catch (error) {
    console.error("Error fetching subdomain details:", error);
    return null;
  }
}

export const onGetCurrentDomain = async (domainName: string) => {
  const user = await currentUser();
  if (!user) return null;

  try {
    const domainDetails = await db.user.findUnique({
      where: {
        clerkId: user.id,
        domains: {
          some: {
            name: domainName,
          },
        },
      },
      select: {
        domains: {
          where: {
            name: domainName,
          },
          select: {
            id: true,
            name: true,
            icon: true,
            subdomain: true,
            description: true,
            userId: true,
          },
        },
      },
    });

    if (domainDetails && domainDetails.domains.length > 0) {
      return domainDetails.domains[0];
    }
  } catch (error) {
    console.error("Error fetching subdomain details:", error);
    return null;
  }
}