import { MasterWallet } from '@/models/MasterWallet';

export const createMasterWallets = () => new Promise((resolve) => {
  Promise.all([MasterWallet.createMasterWallets()]);
  resolve();
});

export default { createMasterWallets };
