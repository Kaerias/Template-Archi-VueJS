import { FeatureState } from '@/features/types';
import { AuthentificationState } from '@/modules/authentification/store';

export interface RootState {
    pageName: string;
    isOnline: boolean;
    authentification?: AuthentificationState;
    features?: FeatureState;
    notification?: Notification;
}

export interface FullRootState extends RootState {
    authentification: AuthentificationState;
    features: FeatureState;
    notification: Notification;
}

export interface Notification {
    message: string;
    severite: "error" | "success" | "warning";
}
