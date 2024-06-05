'use client'

import React, { useEffect, useState } from 'react';
import { onGetSubscriptionPlan } from '@/actions/settings';
import { Button } from '../ui/button';
import Modal from '../mondal'; // Assuming you have a Modal component similar to the one used in BillingSettings
import SubscriptionForm from '../forms/setting/subscription-form';

const UpgradeMenu = () => {
  const [payment, setPayment] = useState<null | 'STANDARD' | 'PRO' | 'ULTIMATE'>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchPlan = async () => {
      const plan = await onGetSubscriptionPlan();
      setPayment(plan ?? null);
    };

    fetchPlan();
  }, []);

  const upgradeOptions: Record<'STANDARD' | 'PRO' | 'ULTIMATE', Array<'STANDARD' | 'PRO' | 'ULTIMATE'>> = {
    'STANDARD': ['PRO', 'ULTIMATE'],
    'PRO': ['ULTIMATE'],
    'ULTIMATE': []
  };

  const handleUpgradeClick = (plan: 'STANDARD' | 'PRO' | 'ULTIMATE') => {
    setPayment(plan);
    setShowModal(true); // This will directly open the modal when an upgrade button is clicked
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {payment && (
        <div className="flex flex-col items-center justify-center bg-neutral-300 dark:bg-neutral-900 p-4 rounded-md border dark:border-white border-black/50">
          <p className="text-sm text-center dark:text-neutral-400 ">Your current plan: {payment}</p>
          <div className="flex flex-col items-center gap-2 mt-4">
            {upgradeOptions[payment].map(plan => (
              <Button
                className="bg-neutral-700 text-white w-full py-2"
                key={plan}
                onClick={() => handleUpgradeClick(plan)}
              >
                Upgrade to {plan}
              </Button>
            ))}
          </div>
          {showModal && (
            <Modal
              title="Upgrade Your Plan"
              onClose={() => setShowModal(false)}
		    trigger={<Button className='bg-neutral-700  w-full py-2'>Choose Plan</Button>}
		
			
              description="Select a new plan to upgrade your subscription."
            >
              <SubscriptionForm plan={payment!} />
            </Modal>
          )}
        </div>
      )}
    </div>
  );
};

export default UpgradeMenu;
