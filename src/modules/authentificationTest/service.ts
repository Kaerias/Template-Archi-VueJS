import fetch from "@/services/FetchV2Service";

export const loginPost = (numeroEssai: string) => fetch.post(`auth/login/`, {numeroEssai}).then((data: any) => data);
