import { RemoveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/RemoveUserLocal';

export const ProfileInfoViewModel = () => {
  const clearSession = async () => {
    await RemoveUserLocalUseCase();
  }

  return {
    clearSession
  };
};
